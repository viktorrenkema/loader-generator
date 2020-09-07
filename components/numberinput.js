import * as React from "react";
import { motion } from "framer-motion";

export default function NumberInput(props) {
  const { label, onChange, value, tooltip, onFocus, onBlur } = props;

  const [focus, setFocus] = React.useState(false);

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

  const handleChange = React.useCallback((e) => onChange(e.target.value), [
    onChange,
  ]);

  const handleFocus = React.useCallback(() => onFocus(false), [onFocus]);
  const handleBlur = React.useCallback(() => onBlur(true), [onBlur]);
  const handleKey = (event) => {
    event.key === "Enter"
      ? document.getElementById(props.label).blur()
      : undefined;
  };

  return (
    <div className="wrap-labelinput">
      <label htmlFor={label}>
        {label}
        <motion.p
          className="sublabel"
          variants={variants}
          animate={focus ? "show" : "hide"}
          initial={"hide"}
          transition={{ duration: "0.3" }}
        >
          {tooltip}
        </motion.p>
      </label>
      <input
        type="number"
        id={label}
        name="quantity"
        placeholder="0"
        value={value}
        onFocus={onFocus ? handleFocus : null}
        onBlur={onBlur ? handleBlur : null}
        onKeyPress={onBlur ? handleKey : null}
        onChange={handleChange}
      />
    </div>
  );
}
