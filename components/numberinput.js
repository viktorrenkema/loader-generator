import * as React from "react";
import { motion } from "framer-motion";

export default function NumberInput(props) {
  const { label, onChange, value, tooltip } = props;

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

  const [focus, setFocus] = React.useState(false);

  return (
    <div className="wrap-labelinput" style={{ width: "100%" }}>
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
        id="quantity"
        name="quantity"
        placeholder="0"
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={handleChange}
      />
    </div>
  );
}
