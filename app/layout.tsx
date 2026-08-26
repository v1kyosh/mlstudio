import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SITE_URL } from "@/lib/site";
import { LocaleProvider } from "@/lib/i18n/context";
import "./globals.css";

const ChatWidget = dynamic(() =>
  import("@/components/ui/chat-widget").then((m) => m.ChatWidget),
);
const ScrollToTop = dynamic(() =>
  import("@/components/ui/scroll-to-top").then((m) => m.ScrollToTop),
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_TITLE =
  "Marcos Leite - Full Stack Marketeer: Brand, Product & AI-Driven Growth";
const SITE_DESCRIPTION =
  "Brand strategy, product design, and the AI-driven growth systems that sell them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/marcos-leite.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/marcos-leite.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Guarantees the loading screen covers the page from the very
            first paint, even if the main stylesheet is still loading -
            an inline style tag is parsed before body content can render. */}
        <style>{`
          #loading-screen-root {
            position: fixed;
            inset: 0;
            z-index: 100;
            background: #000;
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col">
        <LocaleProvider>
          <CustomCursor />
          <SiteHeader />
          {children}
          <SiteFooter />
          <ChatWidget />
          <ScrollToTop />
        </LocaleProvider>
      </body>
    </html>
  );
}
