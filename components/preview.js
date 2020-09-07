import * as React from "react";
import { motion } from "framer-motion";
import Dot from "./dot";

export default function Preview(props) {
  const {
    label,
    onChange,
    checked,
    quantity,
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
    experimental,
    i,
    render,
  } = props;

  let renderdots = [];
  let snippetelements = "";
  for (let i = 0; i < quantity; i = i + 1) {
    renderdots.push(
      <Dot
        key={i}
        customdelay={delay * i}
        radius={radius}
        margin={margin}
        duration={duration}
        width={width}
        height={height}
        color={color}
        opacity={opacity}
        scaleMin={scaleMin}
        scaleMax={scaleMax}
        ease={ease}
        rotation={rotation}
        experimental={experimental}
      ></Dot>
    ),
      (snippetelements += `      <motion.div\r\n                          variants={variants}\r\n                          animate={\"show\"}\r\n                          initial={\"hide\"}\r\n                          transition={transition}\r\n                          style={dot}>\r\n                  <\/motion.div>\r\n            `);
  }

  return (
    <motion.div className="preview">
      {
        <div className="wrap-dotsrenderer">
          <div style={{ display: "flex" }}>
            {renderdots.length == 0 ? (
              <p className="placeholder-text">
                Define your loader and it’ll show here
              </p>
            ) : render == false ? (
              <p className="placeholder-text">
                Hit <code>enter</code> (or click anywhere) to generate{" "}
              </p>
            ) : (
              render && renderdots
            )}
          </div>
        </div>
      }
    </motion.div>
  );
}
