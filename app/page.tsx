"use client";

import { Logo } from "@/components/elements/logo";
import { MotionWrapper } from "@/components/motion/motion-wrapper";

import { m, motion } from "framer-motion";
import { ScrollTriggerWrapper } from "@/components/motion/scroll-trigger-wrapper";
import {
  cardVariants,
  contentVariants,
} from "@/components/motion/utils/variants";
import { HoverTriggerWraper } from "@/components/motion/hover-trigger-wrapper";

import { ProviderConsumer } from "@/components/motion/animation-trigger";
import { CoffeCalc } from "@/components/coffee-calc";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-md flex-col px-4 py-16">
      <ScrollTriggerWrapper>
        <motion.div variants={contentVariants}>
          <HoverTriggerWraper>
            <MotionWrapper>
              <p className="my-4 rounded-2xl border border-white px-4 py-2">
                Motion
              </p>
            </MotionWrapper>
          </HoverTriggerWraper>
          <HoverTriggerWraper>
            <MotionWrapper>
              <p className="my-4 rounded-2xl border border-white px-4 py-2">
                Motion
              </p>
            </MotionWrapper>
          </HoverTriggerWraper>
          <HoverTriggerWraper>
            <MotionWrapper>
              <p className="my-4 rounded-2xl border border-white px-4 py-2">
                Motion
              </p>
            </MotionWrapper>
          </HoverTriggerWraper>
        </motion.div>
      </ScrollTriggerWrapper>
      <section className="min-h-screen" />
    </main>
  );
}

/*
        <ProviderConsumer>
          <ProviderConsumer>
            <m.div
              variants={contentVariants}
              className="mt-8 max-w-min rounded-lg border px-2 py-1"
            >
              Hello
            </m.div>
          </ProviderConsumer>
        </ProviderConsumer>
*/

/*


*/
