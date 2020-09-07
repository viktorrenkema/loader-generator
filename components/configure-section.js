import * as React from "react";
import { motion } from "framer-motion";
import CodeBlock from "./codeblock";
import Preview from "./preview";
import TerminalCommand from "./terminal-command";
import TransitionForm from "./transition-form";
import StyleForm from "./style-form";

export default function ConfigureSection(props) {
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
    render,
    startRender,
    duration,
    setDuration,
    setDelay,
    setEase,
    ease,
    delay,
  } = props;

  return (
    <motion.div style={{ display: "flex", flexDirection: "column" }}>
      <h1 className="headerblank">
        <span className="headerone">1.</span> Configure
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
        ></TransitionForm>
      </motion.div>
      <h1 className="headerblank">
        <span className="headertwo">2.</span> Install
      </h1>
      <motion.div className="wrap-installation">
        <p className="installation-text">
          Your Loader runs on{" "}
          <a href="https://www.framer.com/motion/" target="_blank">
            Framer Motion
          </a>
          , an open-source production-ready animation library for React.
          <br></br>
          <br></br>Just install the{" "}
          <a href="https://www.npmjs.com/package/framer-motion" target="_blank">
            npm package
          </a>{" "}
          into your React app to bring your Loader’s code into your project:
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
        <span className="headerthree">3.</span> Copy/paste
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
