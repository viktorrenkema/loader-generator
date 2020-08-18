import * as React from "react"
import { motion } from "framer-motion"

export default function Preview(props) {
    const renderdots = []

    for (let i = 0; i < props.quantity; i++) {
        renderdots.push(
            <Dot
                key={i}
                customdelay={props.delay * i}
                radius={props.radius}
                margin={props.margin}
                duration={props.duration}
                width={props.width}
                height={props.height}
                color={props.color}
                opacity={props.opacity}
                scaleMin={props.scaleMin}
                scaleMax={props.scaleMax}
                ease={props.ease}
                rotation={props.rotation}
            />
        )
    }

    return <>{renderdots}</>
}

export function Dot(props) {
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
    }

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
    }

    const transition = {
        yoyo: Infinity,
        // flip: Infinity,
        // loop: Infinity,
        ease: props.ease,
        duration: props.duration ? props.duration : 1,
        delay: props.customdelay,
    }

    return (
        <motion.div
            variants={variants}
            animate={"show"}
            initial={"hide"}
            transition={transition}
            style={dot}
        ></motion.div>
    )
}
