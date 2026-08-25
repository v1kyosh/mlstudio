"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import * as THREE from "three";
import styles from "./lumina-interactive-list.module.css";

export interface LuminaSlide {
  name: string;
  tag: string;
  blurb: string;
  image: string;
}

interface SliderSettings {
  transitionDuration: number;
  autoSlideSpeed: number;
  currentEffect: string;
  globalIntensity: number;
  speedMultiplier: number;
  distortionStrength: number;
  colorEnhancement: number;
  glassRefractionStrength: number;
  glassChromaticAberration: number;
  glassBubbleClarity: number;
  glassEdgeGlow: number;
  glassLiquidFlow: number;
  frostIntensity: number;
  frostCrystalSize: number;
  frostIceCoverage: number;
  frostTemperature: number;
  frostTexture: number;
  rippleFrequency: number;
  rippleAmplitude: number;
  rippleWaveSpeed: number;
  rippleRippleCount: number;
  rippleDecay: number;
  plasmaIntensity: number;
  plasmaSpeed: number;
  plasmaEnergyIntensity: number;
  plasmaContrastBoost: number;
  plasmaTurbulence: number;
  timeshiftDistortion: number;
  timeshiftBlur: number;
  timeshiftFlow: number;
  timeshiftChromatic: number;
  timeshiftTurbulence: number;
}

const SETTINGS: SliderSettings = {
  transitionDuration: 2.5,
  autoSlideSpeed: 5000,
  currentEffect: "glass",
  globalIntensity: 1.0,
  speedMultiplier: 1.0,
  distortionStrength: 1.0,
  colorEnhancement: 1.0,
  glassRefractionStrength: 1.0,
  glassChromaticAberration: 1.0,
  glassBubbleClarity: 1.0,
  glassEdgeGlow: 1.0,
  glassLiquidFlow: 1.0,
  frostIntensity: 1.5,
  frostCrystalSize: 1.0,
  frostIceCoverage: 1.0,
  frostTemperature: 1.0,
  frostTexture: 1.0,
  rippleFrequency: 25.0,
  rippleAmplitude: 0.08,
  rippleWaveSpeed: 1.0,
  rippleRippleCount: 1.0,
  rippleDecay: 1.0,
  plasmaIntensity: 1.2,
  plasmaSpeed: 0.8,
  plasmaEnergyIntensity: 0.4,
  plasmaContrastBoost: 0.3,
  plasmaTurbulence: 1.0,
  timeshiftDistortion: 1.6,
  timeshiftBlur: 1.5,
  timeshiftFlow: 1.4,
  timeshiftChromatic: 1.5,
  timeshiftTurbulence: 1.4,
};

const PROGRESS_UPDATE_INTERVAL = 50;

const vertexShader = `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const fragmentShader = `
  uniform sampler2D uTexture1, uTexture2;
  uniform float uProgress;
  uniform vec2 uResolution, uTexture1Size, uTexture2Size;
  uniform int uEffectType;
  uniform float uGlobalIntensity, uSpeedMultiplier, uDistortionStrength, uColorEnhancement;
  uniform float uGlassRefractionStrength, uGlassChromaticAberration, uGlassBubbleClarity, uGlassEdgeGlow, uGlassLiquidFlow;
  varying vec2 vUv;

  vec2 getCoverUV(vec2 uv, vec2 textureSize) {
      vec2 s = uResolution / textureSize;
      float scale = max(s.x, s.y);
      vec2 scaledSize = textureSize * scale;
      vec2 offset = (uResolution - scaledSize) * 0.5;
      return (uv * uResolution - offset) / scaledSize;
  }

  vec4 glassEffect(vec2 uv, float progress) {
      float time = progress * 5.0 * uSpeedMultiplier;
      vec2 uv1 = getCoverUV(uv, uTexture1Size); vec2 uv2 = getCoverUV(uv, uTexture2Size);
      float maxR = length(uResolution) * 0.85; float br = progress * maxR;
      vec2 p = uv * uResolution; vec2 c = uResolution * 0.5;
      float d = length(p - c); float nd = d / max(br, 0.001);
      float param = smoothstep(br + 3.0, br - 3.0, d);
      vec4 img;
      if (param > 0.0) {
           float ro = 0.08 * uGlassRefractionStrength * uDistortionStrength * uGlobalIntensity * pow(smoothstep(0.3 * uGlassBubbleClarity, 1.0, nd), 1.5);
           vec2 dir = (d > 0.0) ? (p - c) / d : vec2(0.0);
           vec2 distUV = uv2 - dir * ro;
           distUV += vec2(sin(time + nd * 10.0), cos(time * 0.8 + nd * 8.0)) * 0.015 * uGlassLiquidFlow * uSpeedMultiplier * nd * param;
           float ca = 0.02 * uGlassChromaticAberration * uGlobalIntensity * pow(smoothstep(0.3, 1.0, nd), 1.2);
           img = vec4(texture2D(uTexture2, distUV + dir * ca * 1.2).r, texture2D(uTexture2, distUV + dir * ca * 0.2).g, texture2D(uTexture2, distUV - dir * ca * 0.8).b, 1.0);
           if (uGlassEdgeGlow > 0.0) {
              float rim = smoothstep(0.95, 1.0, nd) * (1.0 - smoothstep(1.0, 1.01, nd));
              img.rgb += rim * 0.08 * uGlassEdgeGlow * uGlobalIntensity;
           }
      } else { img = texture2D(uTexture2, uv2); }
      vec4 oldImg = texture2D(uTexture1, uv1);
      if (progress > 0.95) img = mix(img, texture2D(uTexture2, uv2), (progress - 0.95) / 0.05);
      return mix(oldImg, img, param);
  }

  void main() {
      gl_FragColor = glassEffect(vUv, uProgress);
  }
`;

function splitText(text: string) {
  return text
    .split("")
    .map(
      (char) =>
        `<span style="display: inline-block; opacity: 0;">${
          char === " " ? "&nbsp;" : char
        }</span>`,
    )
    .join("");
}

export function LuminaInteractiveList({ items }: { items: LuminaSlide[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length < 2) return;

    const q = <T extends Element>(sel: string) =>
      container.querySelector<T>(sel);
    const qa = <T extends Element>(sel: string) =>
      Array.from(container.querySelectorAll<T>(sel));

    let disposed = false;
    let currentSlideIndex = 0;
    let isTransitioning = false;
    let shaderMaterial: THREE.ShaderMaterial;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.OrthographicCamera;
    const slideTextures: THREE.Texture[] = [];
    let texturesLoaded = false;
    let sliderEnabled = false;
    let autoSlideTimer: ReturnType<typeof setTimeout> | null = null;
    let progressAnimation: ReturnType<typeof setInterval> | null = null;
    let rafId = 0;

    const stopAutoSlideTimer = () => {
      if (progressAnimation) clearInterval(progressAnimation);
      if (autoSlideTimer) clearTimeout(autoSlideTimer);
      progressAnimation = null;
      autoSlideTimer = null;
    };
    const safeStartTimer = (delay = 0) => {
      stopAutoSlideTimer();
      if (sliderEnabled && texturesLoaded) {
        if (delay > 0) autoSlideTimer = setTimeout(startAutoSlideTimer, delay);
        else startAutoSlideTimer();
      }
    };

    const updateNavigationState = (idx: number) =>
      qa(`.${styles.slideNavItem}`).forEach((el, i) => {
        el.classList.toggle(styles.active, i === idx);
        if (i === idx) el.setAttribute("aria-current", "true");
        else el.removeAttribute("aria-current");
      });
    const updateSlideProgress = (idx: number, prog: number) => {
      const el = qa<HTMLElement>(`.${styles.slideNavItem}`)[idx]?.querySelector<HTMLElement>(
        `.${styles.slideProgressFill}`,
      );
      if (el) {
        el.style.width = `${prog}%`;
        el.style.opacity = "1";
      }
    };
    const fadeSlideProgress = (idx: number) => {
      const el = qa<HTMLElement>(`.${styles.slideNavItem}`)[idx]?.querySelector<HTMLElement>(
        `.${styles.slideProgressFill}`,
      );
      if (el) {
        el.style.opacity = "0";
        setTimeout(() => {
          el.style.width = "0%";
        }, 300);
      }
    };
    const quickResetProgress = (idx: number) => {
      const el = qa<HTMLElement>(`.${styles.slideNavItem}`)[idx]?.querySelector<HTMLElement>(
        `.${styles.slideProgressFill}`,
      );
      if (el) {
        el.style.transition = "width 0.2s ease-out";
        el.style.width = "0%";
        setTimeout(() => {
          el.style.transition = "width 0.1s ease, opacity 0.3s ease";
        }, 200);
      }
    };
    const updateCounter = (idx: number) => {
      const sn = q("#luminaSlideNumber");
      if (sn) sn.textContent = String(idx + 1).padStart(2, "0");
      const st = q("#luminaSlideTotal");
      if (st) st.textContent = String(items.length).padStart(2, "0");
    };

    const updateContent = (idx: number) => {
      const titleEl = q<HTMLElement>("#luminaTitle");
      const descEl = q<HTMLElement>("#luminaDesc");
      if (!titleEl || !descEl) return;

      gsap.to(titleEl.children, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "power2.in",
      });
      gsap.to(descEl, { y: -10, opacity: 0, duration: 0.4, ease: "power2.in" });

      setTimeout(() => {
        if (disposed) return;
        titleEl.innerHTML = splitText(items[idx].name);
        descEl.textContent = items[idx].blurb;

        gsap.set(titleEl.children, { opacity: 0 });
        gsap.set(descEl, { y: 20, opacity: 0 });

        const children = titleEl.children;
        switch (idx % 6) {
          case 1:
            gsap.set(children, { y: -20 });
            gsap.to(children, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.03,
              ease: "back.out(1.7)",
            });
            break;
          case 2:
            gsap.set(children, { filter: "blur(10px)", scale: 1.5, y: 0 });
            gsap.to(children, {
              filter: "blur(0px)",
              scale: 1,
              opacity: 1,
              duration: 1,
              stagger: { amount: 0.5, from: "random" },
              ease: "power2.out",
            });
            break;
          case 3:
            gsap.set(children, { scale: 0, y: 0 });
            gsap.to(children, {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              stagger: 0.05,
              ease: "back.out(1.5)",
            });
            break;
          case 4:
            gsap.set(children, { rotationX: 90, y: 0, transformOrigin: "50% 50%" });
            gsap.to(children, {
              rotationX: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.04,
              ease: "power2.out",
            });
            break;
          case 5:
            gsap.set(children, { x: 30, y: 0 });
            gsap.to(children, {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.03,
              ease: "power3.out",
            });
            break;
          default:
            gsap.set(children, { y: 20 });
            gsap.to(children, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.03,
              ease: "power3.out",
            });
        }
        gsap.to(descEl, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        });
      }, 500);
    };

    const navigateToSlide = (targetIndex: number) => {
      if (isTransitioning || targetIndex === currentSlideIndex) return;
      stopAutoSlideTimer();
      quickResetProgress(currentSlideIndex);

      const currentTexture = slideTextures[currentSlideIndex];
      const targetTexture = slideTextures[targetIndex];
      if (!currentTexture || !targetTexture) return;

      isTransitioning = true;
      const u = shaderMaterial.uniforms;
      u.uTexture1.value = currentTexture;
      u.uTexture2.value = targetTexture;
      u.uTexture1Size.value = currentTexture.userData.size;
      u.uTexture2Size.value = targetTexture.userData.size;

      updateContent(targetIndex);
      currentSlideIndex = targetIndex;
      updateCounter(currentSlideIndex);
      updateNavigationState(currentSlideIndex);

      gsap.fromTo(
        u.uProgress,
        { value: 0 },
        {
          value: 1,
          duration: SETTINGS.transitionDuration,
          ease: "power2.inOut",
          onComplete: () => {
            if (disposed) return;
            u.uProgress.value = 0;
            u.uTexture1.value = targetTexture;
            u.uTexture1Size.value = targetTexture.userData.size;
            isTransitioning = false;
            safeStartTimer(100);
          },
        },
      );
    };

    const handleSlideChange = () => {
      if (isTransitioning || !texturesLoaded || !sliderEnabled) return;
      navigateToSlide((currentSlideIndex + 1) % items.length);
    };

    function startAutoSlideTimer() {
      if (!texturesLoaded || !sliderEnabled) return;
      stopAutoSlideTimer();
      let progress = 0;
      const increment = (100 / SETTINGS.autoSlideSpeed) * PROGRESS_UPDATE_INTERVAL;
      progressAnimation = setInterval(() => {
        if (!sliderEnabled) {
          stopAutoSlideTimer();
          return;
        }
        progress += increment;
        updateSlideProgress(currentSlideIndex, progress);
        if (progress >= 100) {
          if (progressAnimation) clearInterval(progressAnimation);
          progressAnimation = null;
          fadeSlideProgress(currentSlideIndex);
          if (!isTransitioning) handleSlideChange();
        }
      }, PROGRESS_UPDATE_INTERVAL);
    }

    const createSlidesNavigation = () => {
      const nav = q<HTMLElement>("#luminaSlidesNav");
      if (!nav) return;
      nav.innerHTML = "";
      items.forEach((item, i) => {
        const el = document.createElement("button");
        el.type = "button";
        el.className = `${styles.slideNavItem}${i === 0 ? " " + styles.active : ""}`;
        el.setAttribute("aria-label", `Show project: ${item.name}`);
        if (i === 0) el.setAttribute("aria-current", "true");
        el.innerHTML = `<span class="${styles.slideProgressLine}"><span class="${styles.slideProgressFill}"></span></span><span class="${styles.slideNavTitle}">${item.name}</span>`;
        const go = () => {
          if (!isTransitioning && i !== currentSlideIndex) {
            stopAutoSlideTimer();
            quickResetProgress(currentSlideIndex);
            navigateToSlide(i);
          }
        };
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          go();
        });
        nav.appendChild(el);
      });
    };

    const loadImageTexture = (src: string) =>
      new Promise<THREE.Texture>((resolve, reject) => {
        const loader = new THREE.TextureLoader();
        loader.load(
          src,
          (t) => {
            t.minFilter = t.magFilter = THREE.LinearFilter;
            t.userData = {
              size: new THREE.Vector2(t.image.width, t.image.height),
            };
            resolve(t);
          },
          undefined,
          reject,
        );
      });

    const handleResize = () => {
      if (!renderer) return;
      renderer.setSize(container.clientWidth, container.clientHeight);
      shaderMaterial.uniforms.uResolution.value.set(
        container.clientWidth,
        container.clientHeight,
      );
    };
    const handleVisibility = () =>
      document.hidden ? stopAutoSlideTimer() : !isTransitioning && safeStartTimer();

    const initRenderer = async () => {
      const canvas = q<HTMLCanvasElement>(`.${styles.webglCanvas}`);
      if (!canvas) return;
      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTexture1: { value: null },
          uTexture2: { value: null },
          uProgress: { value: 0 },
          uResolution: {
            value: new THREE.Vector2(container.clientWidth, container.clientHeight),
          },
          uTexture1Size: { value: new THREE.Vector2(1, 1) },
          uTexture2Size: { value: new THREE.Vector2(1, 1) },
          uEffectType: { value: 0 },
          uGlobalIntensity: { value: SETTINGS.globalIntensity },
          uSpeedMultiplier: { value: SETTINGS.speedMultiplier },
          uDistortionStrength: { value: SETTINGS.distortionStrength },
          uColorEnhancement: { value: SETTINGS.colorEnhancement },
          uGlassRefractionStrength: { value: SETTINGS.glassRefractionStrength },
          uGlassChromaticAberration: { value: SETTINGS.glassChromaticAberration },
          uGlassBubbleClarity: { value: SETTINGS.glassBubbleClarity },
          uGlassEdgeGlow: { value: SETTINGS.glassEdgeGlow },
          uGlassLiquidFlow: { value: SETTINGS.glassLiquidFlow },
        },
        vertexShader,
        fragmentShader,
      });
      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), shaderMaterial));

      for (const item of items) {
        try {
          slideTextures.push(await loadImageTexture(item.image));
        } catch {
          console.warn("Lumina: failed to load texture for", item.name);
        }
      }
      if (disposed) return;

      if (slideTextures.length >= 2) {
        const u = shaderMaterial.uniforms;
        u.uTexture1.value = slideTextures[0];
        u.uTexture2.value = slideTextures[1];
        u.uTexture1Size.value = slideTextures[0].userData.size;
        u.uTexture2Size.value = slideTextures[1].userData.size;
        texturesLoaded = true;
        sliderEnabled = true;
        container.classList.add(styles.loaded);
        safeStartTimer(500);
      }

      const render = () => {
        rafId = requestAnimationFrame(render);
        renderer.render(scene, camera);
      };
      render();
    };

    createSlidesNavigation();
    updateCounter(0);

    const titleEl = q<HTMLElement>("#luminaTitle");
    const descEl = q<HTMLElement>("#luminaDesc");
    if (titleEl && descEl) {
      titleEl.innerHTML = splitText(items[0].name);
      descEl.textContent = items[0].blurb;
      gsap.fromTo(
        titleEl.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.03, ease: "power3.out", delay: 0.3 },
      );
      gsap.fromTo(
        descEl,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 },
      );
    }

    initRenderer();

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("resize", handleResize);

    return () => {
      disposed = true;
      stopAutoSlideTimer();
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", handleResize);
      gsap.globalTimeline.clear();
      slideTextures.forEach((t) => t.dispose());
      renderer?.dispose();
    };
  }, [items]);

  return (
    <div className={styles.sliderWrapper} ref={containerRef}>
      {items[0] ? (
        <Image
          src={items[0].image}
          alt=""
          fill
          priority
          className={styles.posterImage}
        />
      ) : null}
      <canvas className={styles.webglCanvas} />
      <div className={styles.scrim} />
      <span id="luminaSlideNumber" className={styles.slideNumber}>
        01
      </span>
      <span className={styles.slideNumberDivider}>/</span>
      <span id="luminaSlideTotal" className={styles.slideTotal}>
        06
      </span>

      <div className={styles.slideContent}>
        <h2 id="luminaTitle" className={styles.slideTitle} />
        <p id="luminaDesc" className={styles.slideDescription} />
      </div>

      <nav
        id="luminaSlidesNav"
        aria-label="Select project"
        className={styles.slidesNavigation}
      />
    </div>
  );
}
