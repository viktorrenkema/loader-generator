import * as React from "react";

export default function SetViewport() {
  const [window, setWindow] = React.useState(0);

  React.useEffect(() => {
    const clientWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );

    setWindow(
      2
      //   clientWidth > 1023
      //     ? "large"
      //     : clientWidth > 768 && clientWidth < 1024
      //     ? "medium"
      //     : "small"
    );
    console.log("window is " + clientWidth + "state is " + window);
  }, []);

  return <div></div>;
}
