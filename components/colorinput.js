import * as React from "react";
import { motion } from "framer-motion";
import { SketchPicker, BlockPicker } from "react-color";

export default function ColorInput(props) {
  const [colorFocus, setColorFocus] = React.useState(false);
  // const [colorPickerOpen, setColorPickerOpen] = React.useState(false);

  const {
    color,
    setColor,
    onChange,
    colorPickerOpen,
    setColorPickerOpen,
  } = props;
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

  const handleClick = () => (
    setColorPickerOpen(!colorPickerOpen), console.log("Opened")
  );
  const handleKeepOpen = (e) => (
    setColorPickerOpen(true), e.stopPropagation(), console.log("Keeping open")
  );

  const handleClose = () => (
    setColorPickerOpen(!colorPickerOpen), console.log("Closed")
  );

  const handleChange = (color) => {
    setColor(color.hex), setColorPickerOpen(true);
  };
  // const handleChange = React.useCallback((e) => onChange(e.target.value), [
  //   onChange,
  // ]);

  return (
    <div className="wrap-labelinput">
      <label htmlFor="color">Color</label>
      <div className="color-trigger" onClick={handleClick}>
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
          <motion.div
            style={{ marginTop: "20px" }}
            // className="colorpickeroverlay"
            onClick={handleClick}
          >
            <SketchPicker
              className={"sketchpicker"}
              color={color}
              onClick={handleKeepOpen}
              onChange={handleChange}
              // onChangeComplete={(color) => {
              //   setColor(color.hex);
              // }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
