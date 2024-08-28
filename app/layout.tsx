import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import LazyMotionWrapper from "@/components/motion/lazy-motion-wrapper";

const gambarino = localFont({
  display: "swap",
  variable: "--font-gambarino",
  src: [
    {
      path: "../fonts/Gambarino-Regular.woff2",
      style: "normal",
    },
    {
      path: "../fonts/Gambarino-Regular.woff",
      style: "normal",
    },
    {
      path: "../fonts/Gambarino-Regular.ttf",
      style: "normal",
    },
  ],
});

const switzer = localFont({
  display: "swap",
  variable: "--font-switzer",
  src: [
    {
      path: "../fonts/Switzer-Variable.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Switzer-Variable.woff",
      style: "normal",
    },
    {
      path: "../fonts/Switzer-Variable.woff2",
      style: "normal",
    },
    {
      path: "../fonts/Switzer-VariableItalic.ttf",
      style: "italic",
    },
    {
      path: "../fonts/Switzer-VariableItalic.woff",
      style: "italic",
    },
    {
      path: "../fonts/Switzer-VariableItalic.woff2",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Fedor Stuido | Design & Development",
  description: "Web Design & Development",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${gambarino.variable} ${switzer.variable} scroll-smooth`}
    >
      <body>
        <LazyMotionWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </LazyMotionWrapper>
      </body>
    </html>
  );
}
