"use client";

import * as React from "react";
import { motion as m, MotionProps } from "framer-motion";
import { contentVariants } from "@/components/motion/utils/variants";

type MotionWrapperProps = MotionProps & {
  children: React.ReactElement;
};

const MotionWrapper = React.forwardRef<HTMLElement, MotionWrapperProps>(
  ({ children, ...motionProps }, ref) => {
    React.Children.only(children);

    const keyId = React.useId();

    if (React.isValidElement(children)) {
      const MotionComponent = React.useMemo(() => {
        return m(children.type);
      }, [children]);

      return (
        <MotionComponent
          {...children.props}
          {...motionProps}
          ref={ref}
          key={keyId}
          variants={contentVariants}
        >
          {children.props.children}
        </MotionComponent>
      );
    }

    throw new Error(
      "MotionWrapper only accepts a single React element as a child",
    );
  },
);

MotionWrapper.displayName = "MotionWrapper";

export { MotionWrapper };
