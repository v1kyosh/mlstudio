"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Velaris from "@/components/ui/velaris";

export const LOADING_DURATION_MS = 1000;
export const LOADING_FADE_OUT_MS = 300;
const DURATION_MS = LOADING_DURATION_MS;
const FADE_OUT_MS = LOADING_FADE_OUT_MS;

const fillBox: CSSProperties = {
  transformBox: "fill-box",
  transformOrigin: "50% 50%",
};

function letterStyle(index: number): CSSProperties {
  const keyframe = index % 2 === 0 ? "ls-letter-a" : "ls-letter-b";
  const delay = index * 0.02;
  return {
    ...fillBox,
    animation: `${keyframe} 0.2s ease-out ${delay}s both`,
  };
}

const LETTER_PATHS = [
  "M113.39,0v113.17h-26.11v-56.75l-23.33,38.78v.17h-14.52v-.17l-23.48-39.11.15,57.09H0V0h19.46l37.23,60.41L93.92,0h19.46Z",
  "M219.72,0c9.42,0,18.3,2.34,26.64,7.02,4.56,2.66,8.33,6.49,11.31,11.49,2.98,5,4.76,10.85,5.36,17.56h-25.3c-1.49-9.15-6.95-13.73-16.37-13.73-4.46,0-7.99.96-10.57,2.87-2.58,1.92-3.87,4.58-3.87,7.98,0,2.77.92,4.92,2.75,6.46,1.83,1.54,4.79,2.79,8.85,3.75l14.14,3.51c10.42,2.55,18.11,6.2,23.07,10.94,4.96,4.74,7.44,11.41,7.44,20.03,0,10.85-3.82,19.47-11.46,25.86-7.64,6.28-17.81,9.42-30.51,9.42s-22.82-3.19-31.25-9.58c-8.63-6.6-13.45-16.17-14.44-28.73h25.15c.79,4.79,3.05,8.54,6.77,11.25,3.72,2.71,8.56,4.07,14.51,4.07,4.66,0,8.21-.85,10.64-2.55,2.43-1.7,3.65-4.04,3.65-7.02,0-4.47-3.57-7.56-10.71-9.26l-16.67-3.99c-10.02-2.45-17.41-6.23-22.17-11.33-4.76-5.11-7.14-11.97-7.14-20.59,0-10.75,3.67-19.32,11.01-25.7,7.34-6.49,17.06-9.74,29.17-9.74Z",
  "M331.04,88.68l2.68,20.84c-7.54,2.43-14.83,3.65-21.88,3.65-8.83,0-15.88-2.99-21.13-8.98-5.26-5.98-7.89-13.99-7.89-24.03v-21.91h-14.14v-21.14h14.14V12.02h24.11v25.1h24.56v21.14h-24.56v21.14c0,7.4,3.77,11.1,11.31,11.1,2.38,0,6.65-.61,12.8-1.83Z",
  "M419.58,37.12v73.78h-24.11v-4.87c-6.15,4.77-12.75,7.15-19.79,7.15-9.23,0-16.67-3.04-22.32-9.13-5.65-6.08-8.48-14.35-8.48-24.79v-42.14h24.11v38.33c0,5.07,1.17,8.92,3.5,11.56,2.33,2.64,5.58,3.95,9.75,3.95,4.56,0,8.98-2.43,13.24-7.3v-46.55h24.11Z",
  "M512.45,0v111.29h-24.11v-3.92c-5.76,3.87-12.35,5.8-19.79,5.8-9.92,0-18.36-3.81-25.3-11.44-7.05-7.73-10.57-17.19-10.57-28.37s3.52-20.43,10.57-28.06c6.94-7.63,15.38-11.44,25.3-11.44,7.44,0,14.04,1.93,19.79,5.8V0h24.11ZM473.46,92.33c5.85,0,10.81-2.35,14.88-7.05v-23.67c-4.07-4.7-9.03-7.05-14.88-7.05-4.86,0-8.93,1.83-12.2,5.49-3.27,3.66-4.91,8.1-4.91,13.32s1.64,9.82,4.91,13.48c3.27,3.66,7.34,5.49,12.2,5.49Z",
  "M576.29,27.84c-3.97,0-7.32-1.32-10.05-3.95-2.73-2.64-4.09-5.93-4.09-9.89s1.36-7.28,4.09-9.96c2.73-2.69,6.07-4.03,10.05-4.03s7.19,1.35,9.97,4.03c2.78,2.69,4.17,6.01,4.17,9.96s-1.39,7.25-4.17,9.89c-2.78,2.64-6.1,3.95-9.97,3.95ZM588.49,39.4v73.78h-24.11V39.4h24.11Z",
  "M641.32,35.44c11.41,0,20.73,3.65,27.98,10.95,7.34,7.2,11.01,16.38,11.01,27.53s-3.67,20.64-11.01,28.14c-7.24,7.4-16.57,11.1-27.98,11.1s-20.94-3.7-28.28-11.1c-7.34-7.5-11.01-16.89-11.01-28.14s3.67-20.33,11.01-27.53c7.44-7.3,16.87-10.95,28.28-10.95ZM629.57,86.86c3.07,3.35,6.99,5.02,11.76,5.02s8.65-1.67,11.68-5.02c3.03-3.35,4.54-7.61,4.54-12.78s-1.51-9.1-4.54-12.4c-3.03-3.29-6.92-4.94-11.68-4.94s-8.68,1.65-11.76,4.94c-3.08,3.3-4.61,7.43-4.61,12.4s1.54,9.43,4.61,12.78Z",
];

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Scroll stays locked by IntroChooser for the whole gated period (this
    // screen included) - not handled here, to avoid the two components
    // fighting over document.body's lock state.
    const fadeTimer = setTimeout(
      () => setFadingOut(true),
      DURATION_MS - FADE_OUT_MS,
    );
    const hideTimer = setTimeout(() => setVisible(false), DURATION_MS);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] transition-opacity duration-[350ms] ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Velaris height="100%">
        <div className="flex h-full w-full items-center justify-center">
          <svg
            viewBox="0 0 680.31 113.17"
            fill="currentColor"
            className="h-5 w-auto text-white sm:h-6"
          >
            {LETTER_PATHS.map((d, i) => (
              <path
                key={d.slice(0, 12)}
                d={d}
                className="ls-anim"
                style={letterStyle(i)}
              />
            ))}
            <rect
              x="123.54"
              y="90.51"
              width="44.98"
              height="22.67"
              className="ls-anim text-white"
              style={{
                transformBox: "fill-box",
                transformOrigin: "0% 50%",
                animation: "ls-slash 0.15s ease-out 0.16s both",
              }}
            />
            <path
              d="M538.04,113.17c-3.67,0-6.82-1.29-9.45-3.88-2.63-2.59-3.94-5.75-3.94-9.51s1.31-6.77,3.94-9.36c2.63-2.59,5.78-3.88,9.45-3.88s6.99,1.29,9.67,3.88,4.02,5.7,4.02,9.36-1.34,6.92-4.02,9.51-5.9,3.88-9.67,3.88Z"
              className="ls-anim text-white"
              style={{
                ...fillBox,
                animation:
                  "ls-dot-appear 0.08s ease-out 0.25s both, ls-dot-blink 0.18s ease-in-out 0.33s infinite",
              }}
            />
          </svg>
        </div>
      </Velaris>
    </div>
  );
}
