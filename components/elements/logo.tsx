'use client'

import * as React from 'react'
import { delay, m, motion } from 'framer-motion'

import { useTheme } from 'next-themes'

interface LogoAnimationProps {
    className?: string
}

const Logo: React.FC<LogoAnimationProps> = ({ className }) => {

    const { theme } = useTheme()

    const petalRotations = [0, 45, 90, 135, 180, 225, 270, 315];

    const logoAppearing = {
        hiddenToTop: {
            opacity: 0,
            transform: "rotate(-45deg)",
            transition: {
              opacity: { duration: 0, delay:0.75 },
              transform: {
                type: "spring",
                damping: 13,
                stiffness: 50,
                mass: 1,
              }
            }
          },
        hiddenToBottom: {
            opacity: 0,
            transform: "rotate(-45deg)",
            transition: {
              opacity: { duration: 0, delay:0.75 },
              transform: {
                type: "spring",
                damping: 13,
                stiffness: 50,
                mass: 1,
              }
            }
          },
        visibleFromBottom: (rotation: number) => ({
            opacity: 1,
            transform: `rotate(${rotation}deg)`,
            transition: {
              opacity: { duration: 0 },
              transform: {
                type: "spring",
                damping: 13,
                stiffness: 50,
                mass: 1,
              }
            }
          }),
        visibleFromTop: (rotation: number) => ({
            opacity: 1,
            transform: `rotate(${rotation}deg)`,
            transition: {
              opacity: { duration: 0 },
              transform: {
                type: "spring",
                damping: 13,
                stiffness: 50,
                mass: 1,
              }
            }
          })
    };

    const logoContainer = {
        hiddenToTop: {
            opacity: 0,
            transition: {
                duration: 0.5,
            }
        },
        hiddenToBottom: {
            opacity: 0,
            transition: {
                duration: 0.5,
            }
        },
        visibleFromBottom: {
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        },
        visibleFromTop: {
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        }
    };

    return (
        <m.svg
            viewBox="0 0 100 100"
            className={className}
            variants={logoContainer}
        >
            {petalRotations.map((rotation, index) => (
                <m.path
                    key={index}
                    d="M33 21.2755C33 34.0306 50 50 50 50C50 50 67 31.5306 67 20.7653C67 10 55.3125 -1.87993e-09 50 0C44.6875 1.87993e-09 33 10 33 21.2755Z"
                    fill={theme === 'light' ? 'white' : 'black'}
                    style={{ originX: '50%', originY: '50%', }}
                    variants={logoAppearing}
                    custom={rotation} 
                />
            ))}
            {petalRotations.map((rotation, index) => (
                <m.path
                    key={index}
                    d="M33 21.2755C33 34.0306 50 50 50 50C50 50 67 31.5306 67 20.7653C67 10 55.3125 -1.87993e-09 50 0C44.6875 1.87993e-09 33 10 33 21.2755Z"
                    fill="white"
                    style={{ originX: '50%', originY: '50%', mixBlendMode: "exclusion" }}
                    variants={logoAppearing}
                    custom={rotation}
                />
            ))}
        </m.svg>
    )
}

export { Logo }