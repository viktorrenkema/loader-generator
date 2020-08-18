import * as React from "react"
import { motion } from "framer-motion"

export default function ColorPicker(props) {
    const { value, onChange } = props
    const [isOpen, setIsOpen] = React.useState(false)
    const onChangeColor = React.useCallback((color) => onChange(color.hex), [
        onChange,
    ])
    return (
        <div className="wrap-labelinput">
            <label for="color">Color</label>
            <div className="color-trigger" onClick={() => setIsOpen(!isOpen)}>
                <p className="hex-text" style={{ color: value || "#747474" }}>
                    {value || "Choose"}
                </p>
                {isOpen && (
                    <motion.div style={{ marginTop: "20px" }}>
                        <SketchPicker onChangeComplete={onChangeColor} />
                    </motion.div>
                )}
            </div>
        </div>
    )
}
