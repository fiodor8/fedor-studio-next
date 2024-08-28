"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { m, motion } from "framer-motion";

interface ParentContextType {
  currentAnimation?: string;
  type?: "onView" | "onHover" | "onFocus" | "onEvent";
}

const ParentContext = createContext<ParentContextType | undefined>(undefined);

interface ProviderConsumerProps {
  children: ReactNode;
}

const ProviderConsumer: React.FC<ProviderConsumerProps> = ({ children }) => {
  const parentContext = useContext(ParentContext);

  const [currentAnimation, setCurrentAnimation] = useState<string>("visible");

  useEffect(() => {
    if (parentContext?.currentAnimation) {
      if (parentContext?.currentAnimation !== currentAnimation) {
        setCurrentAnimation(parentContext.currentAnimation);
      }
    }
  }, [parentContext?.currentAnimation, currentAnimation]);

  return (
    <ParentContext.Provider value={{ currentAnimation }}>
      <m.div
        animate={currentAnimation}
        onMouseEnter={() => setCurrentAnimation("focus")}
        onMouseLeave={() => setCurrentAnimation("blur")}
        className="mt-8 rounded-lg border p-2"
      >
        <p>parent: {parentContext?.currentAnimation}</p>
        {children}
      </m.div>
    </ParentContext.Provider>
  );
};

export { ProviderConsumer };
