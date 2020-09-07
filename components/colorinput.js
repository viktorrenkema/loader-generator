import * as React from "react";
import { motion } from "framer-motion";
import { SketchPicker, BlockPicker } from "react-color";

export default function ColorInput(props) {
  const [colorFocus, setColorFocus] = React.useState(false);
  const [colorPickerOpen, setColorPickerOpen] = React.useState(false);

  const { color, setColor, onChange } = props;
  let uppercolor = color.toUpperCase();

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
  };
  // [1] Doesn't work, I can't call onChangeComplete outside of the component?
  // const handleColorChange = React.useCallback(() => onChangeComplete(color), [
  //   onChangeComplete,
  // ]);

  const handleChange = React.useCallback((e) => onChange(e.target.value), [
    onChange,
  ]);

  const [focus, setFocus] = React.useState(false);

  return (
    <div className="wrap-labelinput">
      <label for="color">Color</label>
      <div
        className="color-trigger"
        onClick={() => setColorPickerOpen(!colorPickerOpen)}
      >
        {color ? (
          <p className="hex-text" style={{ color: uppercolor }}>
            {color.toUpperCase()}
          </p>
        ) : (
          <p className="hex-text" style={{ color: "#747474" }}>
            Choose
          </p>
        )}
        {colorPickerOpen && (
          <motion.div style={{ marginTop: "20px" }}>
            <SketchPicker
              // [1] onChangeComplete={handleColorChange}
              onChangeComplete={(color) => {
                setColor(color.hex);
                // , startRender(true);
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
