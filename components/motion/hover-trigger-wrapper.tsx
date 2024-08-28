"use client";

import * as React from "react";
import { m, motion, MotionProps } from "framer-motion";
import { useImperativeHandle, useRef, MouseEvent } from "react";

import { useAnimationQueue } from "./utils/use-animation-queue";

type HoverTriggerWrapperProps = MotionProps & {
  children: React.ReactElement;
};

const HoverTriggerWraper = React.forwardRef<
  HTMLElement,
  HoverTriggerWrapperProps
>(({ children, ...props }, forwardedRef) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const { controls, addToQueue } = useAnimationQueue();
  const keyId = React.useId();

  useImperativeHandle(forwardedRef, () => {
    if (internalRef.current) {
      return internalRef.current;
    }
    throw new Error("internalRef.current is null");
  });

  return (
    <m.div
      ref={internalRef}
      key={keyId}
      animate={controls}
      onMouseEnter={() => {
        addToQueue("focus", "focus");
      }}
      onMouseLeave={() => {
        addToQueue("blur", "blur");
      }}
      {...props}
      className=""
    >
      {children}
    </m.div>
  );
});
HoverTriggerWraper.displayName = "HoverTriggerWraper";

export { HoverTriggerWraper };
