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
    repeatType,
    setRepeatType,
  } = props;

  return (
    <motion.div className={"configure-section transition"}>
      <div className="wrap-configure-input">
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
          <label htmlFor="ease">Easing</label>
          <select
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
            <option value="anticipate">anticipate</option>
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
          </select>
        </div>
        <div className="wrap-labelinput">
          <label htmlFor="repeat">Repeat type</label>
          <select
            id="repeat"
            name="repeat"
            onChange={(e) => setRepeatType(e.target.value)}
            onFocus={() => {
              startRender(false);
            }}
            onBlur={() => {
              startRender(true);
            }}
            onKeyPress={(event) => {
              event.key === "Enter"
                ? document.getElementById("repeat").blur()
                : undefined;
            }}
          >
            <option value="reverse">reverse</option>
            <option value="loop">loop</option>
            <option value="mirror">mirror</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
}
