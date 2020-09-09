import * as React from "react";
import { motion } from "framer-motion";
import Checkbox from "./checkbox";
import NumberInput from "./numberinput";
import ColorInput from "./colorinput";

export default function StyleForm(props) {
  const {
    quantity,
    radius,
    margin,
    width,
    height,
    color,
    opacity,
    scaleMin,
    scaleMax,
    rotation,
    experimental,
    setQuantity,
    setRadius,
    setMargin,
    setWidth,
    setHeight,
    setColor,
    setOpacity,
    setScaleMin,
    setScaleMax,
    setRotation,
    setExperimental,
    startRender,
  } = props;

  return (
    <motion.div className="style-background">
      <motion.div className="configure-section">
        <NumberInput
          label="Quantity"
          onChange={setQuantity}
          value={quantity}
          tooltip={"Number of dots"}
        ></NumberInput>
        <NumberInput
          label="Distance"
          onChange={setMargin}
          value={margin}
          tooltip={"Distance between dots"}
          unit={"px"}
        ></NumberInput>
        <NumberInput
          label="Width"
          onChange={setWidth}
          value={width}
        ></NumberInput>
        <NumberInput
          label="Height"
          onChange={setHeight}
          value={height}
        ></NumberInput>

        <NumberInput
          label="Opacity"
          onChange={setOpacity}
          value={opacity}
          tooltip={"Sets transparancy"}
        ></NumberInput>
        <NumberInput
          label="Radius"
          onChange={setRadius}
          value={radius}
          tooltip={"Sets rounding of corners"}
        ></NumberInput>
        <NumberInput
          label="Scale start"
          onChange={setScaleMin}
          value={scaleMin}
          tooltip={"Scale value at start"}
          onKeyPress={startRender}
          onFocus={startRender}
          onBlur={startRender}
        ></NumberInput>
        <NumberInput
          label="Scale end"
          onChange={setScaleMax}
          value={scaleMax}
          tooltip={"Scale value at end"}
          onKeyPress={startRender}
          onFocus={startRender}
          onBlur={startRender}
        ></NumberInput>

        <NumberInput
          label="Rotation"
          onChange={setRotation}
          value={rotation}
          onFocus={startRender}
          onBlur={startRender}
          onKeyPress={startRender}
        ></NumberInput>
        <ColorInput color={color} setColor={setColor}></ColorInput>
        {/* <Checkbox
          label={"experimental"}
          onChange={setExperimental}
          checked={experimental}
        ></Checkbox> */}
      </motion.div>
    </motion.div>
  );
}
