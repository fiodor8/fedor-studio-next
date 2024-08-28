"use client";

import * as React from "react";
import { useState, useEffect } from "react";

import { m, motion } from "framer-motion";

const BoxGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, forwardRef) => {
  const [hover, setHover] = useState<number | null>(null);
  const [path, setPath] = useState<number[]>([]);

  const findPath = (start: number, end: number): number[] => {
    const queue: number[][] = [[start]];
    const visited = new Set<number>([start]);
    const cols = 8;
    const rows = 3;

    while (queue.length > 0) {
      const currentPath = queue.shift()!;
      const current = currentPath[currentPath.length - 1];

      if (current === end) {
        return currentPath;
      }

      const neighbors = [
        current - 1,
        current + 1,
        current - cols,
        current + cols,
      ].filter((n) => n >= 0 && n < cols * rows);

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...currentPath, neighbor]);
        }
      }
    }

    return [];
  };

  useEffect(() => {
    if (hover !== null && path[path.length - 1] !== hover) {
      const newPath = findPath(path[path.length - 1] || 0, hover);
      setPath(newPath);
    }
  }, [hover, path]);

  return (
    <div ref={forwardRef} className="grid grid-cols-8 gap-2" {...props}>
      {[...Array(24)].map((_, index) => (
        <div
          key={index}
          className="relative aspect-square border border-white p-4"
          onMouseEnter={() => setHover(index)}
        >
          {index + 1}
          {path.includes(index) && (
            <motion.div
              className="absolute inset-0 bg-white"
              initial={false}
              animate={{
                opacity: path[path.length - 1] === index ? 1 : 0.3,
              }}
              transition={{
                duration: 0.1,
                delay: 0.25 * path.indexOf(index),
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
});
BoxGrid.displayName = "BoxGrid";

export { BoxGrid };
