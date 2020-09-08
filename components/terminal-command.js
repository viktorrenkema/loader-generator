import * as React from "react";
import { motion } from "framer-motion";

export default function TerminalCommand(props) {
  return (
    <div className="wrap-npm-command">
      <p className="yarnnpm">{props.installer}</p>
      <div className="">
        <span className="dependency-command">
          <span className="dollar-sign">$</span>
          {props.command}
        </span>
      </div>
    </div>
  );
}
