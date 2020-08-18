import * as React from "react"
import { motion } from "framer-motion"

const variants = {
    show: {
        opacity: 1,
        display: "block",
        y: "2px",
    },
    hide: {
        opacity: 1,
        display: "none",
        y: "0px",
    },
}

export default function NumberInput(props) {
    const { label, onChange } = props
    const inputId = React.useMemo(() => {
        return `input-${props.label.toLowerCase()}`
    }, [label])
    const inputRef = React.useRef()
    const [isFocused, setIsFocused] = React.useState(false)
    const onFocus = React.useCallback(() => setIsFocused(true), [])
    const onBlur = React.useCallback(() => setIsFocused(false), [])
    const handleChange = React.useCallback((e) => onChange(e.target.value), [
        onChange,
    ])
    const onKeyPress = React.useCallback(
        (e) => {
            if (e.key === "Enter" && inputRef.current) {
                inputRef.current.blur()
            }
        },
        [inputRef]
    )

    return (
        <div className="wrap-labelinput">
            <label for={inputId}>
                {props.label}
                <motion.p
                    className="sublabel"
                    variants={variants}
                    animate={isFocused ? "show" : "hide"}
                    initial={"hide"}
                    transition={{ duration: "0.3" }}
                >
                    {props.tooltip}
                </motion.p>
            </label>
            <input
                ref={inputRef}
                type="number"
                id={inputId}
                name={inputId}
                placeholder="0"
                value={props.value}
                onKeyPress={onKeyPress}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={handleChange}
            />
        </div>
    )
}
