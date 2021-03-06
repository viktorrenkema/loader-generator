import * as React from "react";
import { motion } from "framer-motion";
import CodeBlock from "./codeblock";
import TerminalCommand from "./terminal-command";
import TransitionForm from "./transition-form";
import StyleForm from "./style-form";
import { generateCodeSnippet } from "../lib/generateCodeSnippet";

export default function ConfigureSection(props) {
  const {
    code,
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
    render,
    startRender,
    duration,
    setDuration,
    setDelay,
    setEase,
    ease,
    delay,
    repeatType,
    setRepeatType,
    colorPickerOpen,
    setColorPickerOpen,
  } = props;

  return (
    <motion.div className="three-sections">
      <h1 className="headerblank">
        <span className="headerone">1.</span> Customize style & transition
      </h1>
      <motion.div className="wrap-configure-form">
        <StyleForm
          quantity={quantity}
          radius={radius}
          margin={margin}
          width={width}
          height={height}
          color={color}
          opacity={opacity}
          scaleMin={scaleMin}
          scaleMax={scaleMax}
          rotation={rotation}
          experimental={experimental}
          setQuantity={setQuantity}
          setRadius={setRadius}
          setMargin={setMargin}
          setWidth={setWidth}
          setHeight={setHeight}
          setColor={setColor}
          setOpacity={setOpacity}
          setScaleMin={setScaleMin}
          setScaleMax={setScaleMax}
          setRotation={setRotation}
          setExperimental={setExperimental}
          render={render}
          startRender={startRender}
          colorPickerOpen={colorPickerOpen}
          setColorPickerOpen={setColorPickerOpen}
        ></StyleForm>
        <TransitionForm
          duration={duration}
          setDuration={setDuration}
          setDelay={setDelay}
          ease={ease}
          setEase={setEase}
          delay={delay}
          render={render}
          startRender={startRender}
          repeatType={repeatType}
          setRepeatType={setRepeatType}
        ></TransitionForm>
      </motion.div>
      <h1 className="headerblank">
        <span className="headertwo">2.</span> Install dependency
      </h1>
      <motion.div className="wrap-installation">
        <p className="installation-text">
          Your Loader runs on{" "}
          <a href="https://www.framer.com/motion/" target="_blank">
            Framer Motion
          </a>
          , an open-source production-ready animation library for React. Install
          the{" "}
          <a href="https://www.npmjs.com/package/framer-motion" target="_blank">
            npm package
          </a>{" "}
          into your React app and bring your Loader into your project.
          <br></br>
          <br></br>
          All it takes is a React environment with Framer Motion 2.5.0 and up,
          or{" "}
          <a
            target="_blank"
            href="https://codesandbox.io/s/loadersio-template-0y2r5?file=/src/App.js"
          >
            fork this Codesandbox
          </a>{" "}
          and try it out right away.
        </p>
        <br></br>
        <TerminalCommand
          installer={"Yarn"}
          command={"yarn add framer-motion"}
        ></TerminalCommand>
        <TerminalCommand
          installer={"NPM"}
          command={"npm i framer-motion"}
        ></TerminalCommand>
      </motion.div>

      <h1 className="headerblank">
        <span className="headerthree">3.</span> Copy/paste your code
      </h1>
      <motion.div className="snippet">
        <CodeBlock
          showLineNumbers={true}
          text={
            code
              ? generateCodeSnippet({
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
                  repeatType,
                  setRepeatType,
                })
              : "Code generation is not yet supported."
          }
        ></CodeBlock>
      </motion.div>
    </motion.div>
  );
}
