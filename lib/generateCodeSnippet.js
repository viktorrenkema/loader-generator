export function generateCodeSnippet(options) {
  function generateDots(quantity) {
    let dots = [];
    for (let i = 0; i < quantity; i++) {
      dots.push(`<motion.div
                    style={style}
                    variants={variants}
                    initial={"start"}
                    animate={"end"}
                    transition={{    
                      yoyo: Infinity,
                      ease: "${ease}",
                      duration: ${duration}, 
                      delay: ${Math.floor(delay * i * 10) / 10}
                    }}
                />`);
    }

    return dots;
  }

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
  } = options;
  return `import React from "react";
import { motion } from "framer-motion";

const style = {
    width: ${width},
    height: ${height},
    opacity: ${opacity},
    margin: ${margin},
    borderRadius: ${radius},
    display: "inline-block",
    background: "${color}",
}
  
const variants = {
    start: {
        scale: ${scaleMin},
        rotate: 0,
    },
    end: {
        scale: ${scaleMax},
        rotate: ${rotation},
    },
}

export default function Loader(props) {
    return (
        <div>${generateDots(quantity).reduce(
          (acc, dot) => (acc += `\n          ${dot}`),
          ""
        )}    
        </div>
    )
}`;
}
