"use client";

import React from "react";
import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Use to wrap a whole App in Lazy Motion Loader to reduce bundle size
 */
function LazyMotionWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

export default LazyMotionWrapper;
