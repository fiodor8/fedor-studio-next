'use client'

import { useRef, useEffect, useState, useCallback } from "react";
import { useAnimationControls, AnimationControls } from "framer-motion"

type AnimationItem = {
  id: string;
  animation: Parameters<AnimationControls['start']>[0];
};

export function useAnimationQueue() {

  const controls = useAnimationControls();
  const [queue, setQueue] = useState<AnimationItem[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentAnimationId, setCurrentAnimationId] = useState<string | null>(null);
  const queueRef = useRef<AnimationItem[]>([]);

  const addToQueue = useCallback((id: string, animation: Parameters<AnimationControls['start']>[0]) => {
    const newItem = { id, animation };
    //console.log("Adding to queue:", newItem);

    if (id === currentAnimationId) {
      // Clear the entire queue if the new item's id matches the current animation's id
      queueRef.current = [newItem];
    } else {
      // Otherwise, add the new item to the end of the queue
      queueRef.current = [...queueRef.current, newItem];
    }

    setQueue([...queueRef.current]);
  }, [currentAnimationId]);

  const runQueue = useCallback(async () => {
    if (isAnimating || queueRef.current.length === 0) return;

    setIsAnimating(true);
    //console.log("Starting to run queue");

    while (queueRef.current.length > 0) {
      const item = queueRef.current[0];
      setCurrentAnimationId(item.id);
      //console.log("Running animation:", item);
      await controls.start(item.animation);
      queueRef.current = queueRef.current.slice(1);
      setQueue([...queueRef.current]);
    }

    //console.log("Queue finished");
    setIsAnimating(false);
    setCurrentAnimationId(null);
  }, [controls, isAnimating]);

  useEffect(() => {
    if (queue.length > 0 && !isAnimating) {
      //console.log("Effect triggered, running queue");
      runQueue();
    }
  }, [queue, isAnimating, runQueue]);

  return { controls, addToQueue, currentAnimationId };
}