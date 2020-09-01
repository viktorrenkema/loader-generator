import * as React from "react";
import { motion } from "framer-motion";

export default function Checkbox(props) {
  const { label, onChange, checked } = props;

  const handleChange = () => onChange(!checked);

  // useCallback doesn't work well with !checked
  //   const handleChange = React.useCallback((e) => onChange(!checked), [onChange]);
  return (
    <div className="wrap-labelinput" style={{ width: "100%" }}>
      <label for={label}>Circular?</label>
      <input
        onChange={handleChange}
        style={{ paddingLeft: "10px" }}
        type="checkbox"
        name="circular_checkbox"
      ></input>{" "}
    </div>
  );
}
