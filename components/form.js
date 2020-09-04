import * as React from "react"
import { motion } from "framer-motion"
import CodeBlock from "../components/codeblock"

import { SketchPicker, BlockPicker } from "react-color"
import NumberInput from "./NumberInput"
import ColorPicker from "./ColorPicker"
import Preview from "./Preview"
import { generateCodeSnippet } from "../lib/generateCodeSnippet"

export default function Form(props) {
    const [quantity, setQuantity] = React.useState(5)
    const [radius, setRadius] = React.useState(0)
    const [margin, setMargin] = React.useState(5)
    const [width, setWidth] = React.useState(10)
    const [opacity, setOpacity] = React.useState(1)
    const [height, setHeight] = React.useState(10)
    const [color, setColor] = React.useState("#fecf44")
    const [rotation, setRotation] = React.useState(180)
    const [scaleMin, setScaleMin] = React.useState(0)
    const [scaleMax, setScaleMax] = React.useState(1)
    const [duration, setDuration] = React.useState(1)
    const [delay, setDelay] = React.useState(0.1)
    const [ease, setEase] = React.useState("linear")

    return (
        <motion.div style={{ display: "flex", flexDirection: "column" }}>
            <h1>
                <span
                    style={{
                        color: "#FECF44",
                        display: "inline-block",
                        fontSize: "40px",
                    }}
                >
                    1.
                </span>{" "}
                Build your Loader
            </h1>
            <motion.div
                className="editor"
                style={{ display: "flex", flexDirection: "row" }}
            >
                <div className="wrap-dotsrenderer">
                    <div>
                        {quantity === 0 ? (
                            <p className="placeholder-text">
                                Define your loader and it’ll show here
                            </p>
                        ) : (
                            <Preview
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
                            />
                        )}
                    </div>
                </div>
                <form autocomplete="off">
                    <div className="form-style">
                        <h2>Styling</h2>
                        <NumberInput
                            label={"Quantity"}
                            value={quantity}
                            onChange={setQuantity}
                        />
                        <NumberInput
                            label={"Radius"}
                            value={radius}
                            onChange={setRadius}
                        />
                        <NumberInput
                            label={"Width"}
                            value={width}
                            onChange={setWidth}
                        />
                        <NumberInput
                            label={"Height"}
                            value={height}
                            onChange={setHeight}
                        />
                        <NumberInput
                            label={"Opacity"}
                            value={opacity}
                            onChange={setOpacity}
                        />
                        <NumberInput
                            label={"Scale Start"}
                            value={scaleMin}
                            onChange={setScaleMin}
                        />
                        <NumberInput
                            label={"Scale End"}
                            value={scaleMax}
                            onChange={setScaleMax}
                        />
                    </div>
                    <div
                        className="form-style"
                        style={{
                            marginLeft: "2rem",
                            marginTop: "72px",
                            marginRight: "4rem",
                        }}
                    >
                        <NumberInput
                            label={"Margin"}
                            value={margin}
                            onChange={setMargin}
                        />
                        <NumberInput
                            label={"Rotation"}
                            value={rotation}
                            onChange={setRotation}
                        />
                        <ColorPicker value={color} onChange={setColor} />
                    </div>

                    <div className="form-animation">
                        <h2>Animation</h2>
                        <NumberInput
                            label={"Duration"}
                            value={duration}
                            onChange={setDuration}
                        />
                        <NumberInput
                            label={"Delay"}
                            value={delay}
                            onChange={setDelay}
                        />
                        <div className="wrap-labelinput">
                            <label for="ease">Easing</label>
                            <select
                                style={{ paddingLeft: "10px" }}
                                id="ease"
                                name="ease"
                                onChange={(e) => setEase(e.target.value)}
                                onKeyPress={(event) => {
                                    event.key === "Enter"
                                        ? document.getElementById("ease").blur()
                                        : undefined
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
            <h1
                style={{
                    marginTop: "4rem",
                }}
            >
                <span
                    style={{
                        color: "#FA9477",
                        display: "inline-block",
                        fontSize: "40px",
                    }}
                >
                    2.
                </span>{" "}
                Install Framer Motion
            </h1>
            <motion.div
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem",
                    border: "2px solid #312e3a",
                    background: "#1d1a23",
                }}
            >
                <p>
                    Your Loader runs on{" "}
                    <a href="https://www.framer.com/motion/" target="_blank">
                        Framer Motion
                    </a>
                    , an open-source production-ready animation library for
                    React.
                </p>
                <p>
                    To bring your Loader’s code into your React app, all you
                    need to do is install the framer-motion{" "}
                    <a
                        href="https://www.npmjs.com/package/framer-motion"
                        target="_blank"
                    >
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

            <h1>
                <span
                    style={{
                        color: "#F45B99",
                        display: "inline-block",
                        fontSize: "40px",
                    }}
                >
                    3.
                </span>{" "}
                Copy your code
            </h1>
            <motion.div className="snippet">
                <CodeBlock
                    showLineNumbers={true}
                    text={generateCodeSnippet({
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
                    })}
                ></CodeBlock>
            </motion.div>
        </motion.div>
    )
}
