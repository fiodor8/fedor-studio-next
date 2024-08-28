import { Variant } from "framer-motion"

/**
 * Easing function. We can not use easeIn/easeOut from framer-motion because it breaks server components
 */
const easeIn = [0.42, 0, 1, 1];

/**
 * Easing function. We can not use easeIn/easeOut from framer-motion because it breaks server components
 */
const easeOut = [0, 0, 0.58, 1];

/**
 * All durations in variants are set as fractions of the default duration. This lets you change animation speeds globally.
 */
export const defaultDuration: number = 0.75


export type Variants = {
    hiddenToTop: Variant
    hiddenToBottom: Variant
    visibleFromTop: Variant
    visibleFromBottom: Variant
    focus?: Variant
    blur?: Variant
}

export const cardVariants: Variants = {
    hiddenToTop: (staggerChildren: boolean) => ({
        opacity: 0,
        scale: 0.9,
        y: -20,
        transition: {
            duration: defaultDuration,
            //delayChildren: defaultDuration * 0.15,
            staggerChildren: staggerChildren ? (defaultDuration * 0.2) : undefined,
            staggerDirection: 1,
            ease: easeIn,
        }
    }),
    hiddenToBottom: (staggerChildren: boolean) => ({
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: {
            duration: defaultDuration,
            //delayChildren: defaultDuration * 0.15,
            staggerChildren: staggerChildren ? (defaultDuration * 0.2) : undefined,
            staggerDirection: -1,
            ease: easeIn
        }
    }),
    visibleFromTop: (staggerChildren: boolean) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: defaultDuration,
            //delayChildren: defaultDuration * 0.15,
            staggerChildren: staggerChildren ? (defaultDuration * 0.2) : undefined,
            staggerDirection: -1,
            ease: easeOut
        }
    }),
    visibleFromBottom: (staggerChildren: boolean) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: defaultDuration,
            //delayChildren: defaultDuration * 0.15,
            staggerChildren: staggerChildren ? (defaultDuration * 0.2) : undefined,
            staggerDirection: 1,
            ease: easeOut
        }
    })
};


/**
 * Default animation
 */

export const contentVariants: Variants = {
    focus: {
        borderColor: ["rgb(255, 255, 255)", "rgb(40, 40, 40)", "rgb(0, 0, 0)", "rgb(180, 12, 12)"],
        transition: {
            duration: defaultDuration * 1.25,
            times: [0, 0.4, 0.55, 1],
        }
    },
    blur: {
        borderColor: ["rgb(180, 12, 12)", "rgb(40, 40, 40)", "rgb(0, 0, 0)", "rgb(255, 255, 255)"],
        transition: {
            duration: defaultDuration * 1.25,
            times: [0, 0.4, 0.55, 1],
        }
    },
    hiddenToTop: {
        opacity: 0,
        transition: {
            duration: defaultDuration,
            ease: easeIn
        }
    },
    hiddenToBottom: {
        opacity: 0,
        transition: {
            duration: defaultDuration,
            ease: easeIn
        }
    },
    visibleFromBottom: {
        opacity: 1,
        transition: {
            duration: defaultDuration,
            ease: easeOut
        }
    },
    visibleFromTop: {
        opacity: 1,
        transition: {
            duration: defaultDuration,
            ease: easeOut
        }
    }
};