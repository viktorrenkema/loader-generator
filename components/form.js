import * as React from "react";
import { motion } from "framer-motion";
import CodeBlock from "../components/codeblock";
import Checkbox from "./checkbox";
import Dot from "./dot";
import Preview from "./preview";
import NumberInput from "../components/numberinput";
import ColorInput from "../components/colorinput";

export default function Form(props) {
  const [render, startRender] = React.useState(true);

  const [quantity, setQuantity] = React.useState(5);
  const [radius, setRadius] = React.useState(0);
  const [margin, setMargin] = React.useState(5);
  const [width, setWidth] = React.useState(10);
  const [opacity, setOpacity] = React.useState(1);
  const [height, setHeight] = React.useState(10);
  const [rotation, setRotation] = React.useState(360);
  const [scaleMin, setScaleMin] = React.useState(0);
  const [scaleMax, setScaleMax] = React.useState(1);
  const [color, setColor] = React.useState("#fecf44");
  const [duration, setDuration] = React.useState(1);
  const [delay, setDelay] = React.useState(0.1);
  const [ease, setEase] = React.useState("linear");
  const [experimental, setExperimental] = React.useState(false);

  return (
    <motion.div style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="headerblank">
        <span className="headerone">1.</span> Build
      </h1>
      <motion.div
        className="editor"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Preview
          render={render}
          quantity={quantity}
          delay={delay}
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
        ></Preview>

        <form autoComplete="off">
          <div className="form-style">
            <h2>Styling</h2>
            <NumberInput
              label="Quantity"
              onChange={setQuantity}
              value={quantity}
              tooltip={"Number of dots"}
            ></NumberInput>
            <NumberInput
              label="Radius"
              onChange={setRadius}
              value={radius}
              tooltip={"Sets rounding of corners"}
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
          </div>
          <div className={`form-style cl-mid`}>
            <NumberInput
              label="Margin"
              onChange={setMargin}
              value={margin}
              tooltip={"Distance between dots"}
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
            <Checkbox
              label={"experimental"}
              onChange={setExperimental}
              checked={experimental}
            ></Checkbox>
          </div>

          <div className="form-animation">
            <h2>Animation</h2>
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
          </div>
        </form>
      </motion.div>
      <h1 className="headerblank">
        <span className="headertwo">2.</span> Install Framer Motion
      </h1>
      <motion.div className="wrap-installation">
        <p>
          Your Loader runs on{" "}
          <a href="https://www.framer.com/motion/" target="_blank">
            Framer Motion
          </a>
          , an open-source production-ready animation library for React.
        </p>
        <p>
          To bring your Loader’s code into your React app, all you need to do is
          install the framer-motion{" "}
          <a href="https://www.npmjs.com/package/framer-motion" target="_blank">
            npm package
          </a>{" "}
          from your command line:
        </p>
        <br></br>
        <p>Yarn</p>
        <div style={{ width: "250px" }}>
          <CodeBlock
            showLineNumbers={false}
            text={`yarn add framer-motion`}
          ></CodeBlock>
        </div>
        <p>NPM</p>
        <div style={{ width: "250px" }}>
          <CodeBlock
            showLineNumbers={false}
            text={`npm i framer-motion`}
          ></CodeBlock>
        </div>
      </motion.div>

      <h1 className="headerblank">
        <span className="headerthree">3.</span> Copy your code
      </h1>
      <motion.div className="snippet">
        <CodeBlock
          showLineNumbers={true}
          text={`import * as React from \"react\";\r\nimport { motion } from \"framer-motion\";\r\n\r\n\/\/ Discover the full API: https:\/\/www.framer.com\/api\/motion\r\n\r\nexport  function Component(props) {\r\n    const dot = {\r\n      width: ${width},\r\n      height: ${height},\r\n      opacity: ${opacity},\r\n      margin: ${margin},\r\n      borderRadius: ${radius},\r\n      display: \"inline-block\",\r\n      background: ${color},\r\n    }\r\n  \r\n  \r\n    const variants = {\r\n      show: {\r\n        scale: ${scaleMax},\r\n        rotate: 0,\r\n      },\r\n      hide: {\r\n        scale: ${scaleMin},\r\n        rotate: ${rotation},\r\n      },\r\n    }\r\n  \r\n    const transition = {\r\n      yoyo: Infinity,\r\n      ease: ${ease},\r\n      duration: ${duration},\r\n      delay: ${delay},\r\n    }\r\n\r\n    return (\r\n            <motion.div>\r\n              <\/motion.div>                     \r\n)\r\n      }`}
        ></CodeBlock>
      </motion.div>
    </motion.div>
  );
}

// <div>
// {renderdots.length == 0 ? (
//   <p className="placeholder-text">
//     Define your loader and it’ll show here
//   </p>
// ) : render == false ? (
//   <p className="placeholder-text">
//     Hit <code>enter</code> (or click outside) to generate{" "}
//   </p>
// ) : (
//   render && renderdots
// )}
// </div>
