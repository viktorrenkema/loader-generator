export function generateCodeSnippet(options) {
    const {
        delay,
        radius,
        margin,
        duration,
        width,
        height,
        color,
        opacity,
        scaleMin,
        scaleMax,
        ease,
        rotation,
        quantity,
    } = options
    return `
import * as React from "react";
import { motion } from "framer-motion";

// Discover the full API: https://www.framer.com/api/motion

const dotStyle = {
    width: ${width},
    height: ${height},
    opacity: ${opacity},
    margin: ${margin},
    borderRadius: ${radius},
    display: "inline-block",
    background: ${color},
}
  
const variants = {
    show: {
        scale: 1,
        rotate: 0,
    },
    hide: {
        scale: 0,
        rotate: 180,
    },
}

const transition = {
    yoyo: Infinity,
    ease: linear,
    duration: 1
}

export function Loader(props) {
    return (
        <motion.div>${generateDots(quantity).reduce(
            (acc, dot) => (acc += `\n          ${dot}`),
            ""
        )}    
        </motion.div>
    )
}`
}

function generateDots(quantity) {
    let dots = []
    for (let i = 0; i < quantity; i++) {
        dots.push(`<motion.div
              variants={variants}
              animate={"show"}
              initial={"hide"}
              transition={transition}
              style={dotStyle}
          />`)
    }
    return dots
}
