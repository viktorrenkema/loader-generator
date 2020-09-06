import * as React from "react";
import { motion } from "framer-motion";

export default function Dot(props) {
  const dot = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    opacity: props.opacity,
    margin: `${props.margin}px`,
    borderRadius: `${props.radius}px`,
    background: props.color ? `${props.color}` : "#fecf44",
    display: "inline-block",
    transform: "translateZ(42px)",
    perspective: "20px",
  };

  const variants = {
    show: {
      scale: parseFloat(props.scaleMax),
      // background: "#fecf44",
      rotate: 0,
    },
    hide: {
      scale: parseFloat(props.scaleMin),
      // background: "#fca967",
      rotate: parseInt(props.rotation),
    },
  };

  const rotatevariants = {
    start: {
      rotate: 0,
      // perspective: 0
    },
    end: {
      rotate: 360,
      // perspective:600,
    },
  };

  const transition = {
    yoyo: Infinity,
    // flip: Infinity,
    // loop: Infinity, // useful for circular
    ease: props.ease,
    duration: props.duration ? props.duration : 1,
    delay: props.customdelay,
  };

  return (
    <div>
      {props.experimental ? (
        <motion.div
          className="experimental"
          style={{ width: props.experimental ? "50px" : "0px" }}
          animate={"end"}
          initial={"start"}
          variants={rotatevariants}
          transition={transition}
        >
          {" "}
          <motion.div
            variants={variants}
            animate={"show"}
            initial={"hide"}
            transition={transition}
            style={dot}
          ></motion.div>{" "}
        </motion.div>
      ) : (
        <motion.div
          className="simple"
          variants={variants}
          animate={"show"}
          initial={"hide"}
          transition={transition}
          style={dot}
        ></motion.div>
      )}
    </div>
  );
}
