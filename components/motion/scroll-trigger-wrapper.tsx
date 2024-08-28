"use client";

import * as React from "react";
import { useRef, useEffect, useImperativeHandle } from "react";
import { m, motion, MotionProps, useInView } from "framer-motion";

/* custom hooks */
import { useScrollDirection } from "@/components/motion/utils/use-scroll-direction";
import { useAnimationQueue } from "@/components/motion/utils/use-animation-queue";

type ScrollTriggerWrapperProps = MotionProps & {
  children: React.ReactNode;
  margin?:
    | "-200px 0px -200px 0px"
    | "-100px 0px -100px 0px"
    | "0px 0px 0px 0px";
  staggerChildren?: boolean;
};

const ScrollTriggerWrapper = React.forwardRef<
  HTMLDivElement,
  ScrollTriggerWrapperProps
>(
  (
    { staggerChildren = true, margin = "0px 0px 0px 0px", children, ...props },
    forwardedRef,
  ) => {
    const keyId = React.useId();
    const internalRef = useRef<HTMLDivElement>(null);
    const prevInViewRef = useRef(false);
    const scrollDirection = useScrollDirection();
    const { controls, addToQueue } = useAnimationQueue();

    useImperativeHandle(forwardedRef, () => {
      if (internalRef.current) {
        return internalRef.current;
      }
      throw new Error("internalRef.current is null");
    });

    const isInView = useInView(internalRef, {
      once: false,
      margin: margin,
    });

    useEffect(() => {
      const prevInView = prevInViewRef.current;
      //console.log("inView changed:", isInView, "Previous inView:", prevInView);
      if (isInView !== prevInView) {
        if (isInView) {
          //console.log("Component came into view");
          if (scrollDirection === "down") {
            addToQueue("visibleFromBottom", "visibleFromBottom");
            //console.log("Triggering visibleFromBottom animation");
          } else {
            addToQueue("visibleFromTop", "visibleFromTop");
            console.log("Triggering visibleFromTop animation");
          }
        } else {
          //console.log("Component went out of view");
          if (scrollDirection === "down") {
            addToQueue("hiddenToTop", "hiddenToTop");
            //console.log("Triggering hiddenToTop animation");
          } else {
            addToQueue("hiddenToBottom", "hiddenToBottom");
            //console.log("Triggering hiddenToBottom animation");
          }
        }
      }
      /* Update the ref with the current isInView state for the next render */
      prevInViewRef.current = isInView;
    }, [isInView, controls, addToQueue, scrollDirection]);

    return (
      <m.div
        key={keyId}
        ref={internalRef}
        animate={controls}
        custom={staggerChildren}
        initial="hiddenToBottom"
        exit="hiddenToTop"
        {...props}
      >
        {children}
      </m.div>
    );
  },
);

ScrollTriggerWrapper.displayName = "ScrollTriggerWrapper";

export { ScrollTriggerWrapper };
