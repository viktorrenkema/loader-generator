import * as React from "react";
import { motion } from "framer-motion";
import NumberInput from "./numberinput";

export default function TransitionForm(props) {
  const {
    duration,
    setDuration,
    setDelay,
    setEase,
    delay,
    startRender,
  } = props;

  return (
    <motion.div style={{ display: "flex", flexDirection: "column" }}>
      <NumberInput
        label="Duration"
        onChange={setDuration}
        value={duration}
        onKeyPress={startRender}
        onFocus={startRender}
        onBlur={startRender}
      ></NumberInput>
      <NumberInput
        label="Delay"
        onChange={setDelay}
        value={delay}
        tooltip={"Staggered delay per dot"}
        onKeyPress={startRender}
        onFocus={startRender}
        onBlur={startRender}
      ></NumberInput>
      <div className="wrap-labelinput">
        <label for="ease">Easing</label>
        <select
          style={{ paddingLeft: "10px" }}
          id="ease"
          name="ease"
          onChange={(e) => setEase(e.target.value)}
          onFocus={() => {
            startRender(false);
          }}
          onBlur={() => {
            startRender(true);
          }}
          onKeyPress={(event) => {
            event.key === "Enter"
              ? document.getElementById("ease").blur()
              : undefined;
          }}
        >
          <option value="linear">linear</option>
          <option value="easeIn">easeIn</option>
          <option value="easeOut">easeOut</option>
          <option value="easeInOut">easeInOut</option>
          <option value="circIn">circIn</option>
          <option value="circOut">circOut</option>
          <option value="circInOut">circInOut</option>
          <option value="backIn">backIn</option>
          <option value="backOut">backOut</option>
          <option value="backInOut">backInOut</option>
          <option value="anticipate">anticipate</option>
        </select>
      </div>
    </motion.div>
  );
}
