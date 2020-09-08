import * as React from "react";
import { motion } from "framer-motion";
import { CopyBlock, codepen, arta, a11yDark, hybrid } from "react-code-blocks";

export default function CodeBlock(props) {
  return (
    <CopyBlock
      text={props.text}
      language={"jsx"}
      theme={hybrid}
      wrapLines={true}
      showLineNumbers={props.showLineNumbers}
      codeBlock
    />
  );
}
