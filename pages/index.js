import Head from "next/head";
import { motion, AnimateSharedLayout } from "framer-motion";
import Preview from "../components/preview";
import ConfigureSection from "../components/configure-section";

export default function Home(props) {
  const [tab, setCurrentTab] = React.useState(1);

  const [render, startRender] = React.useState(true);
  const [quantity, setQuantity] = React.useState(5);
  const [radius, setRadius] = React.useState(0);
  const [margin, setMargin] = React.useState(5);
  const [width, setWidth] = React.useState(10);
  const [opacity, setOpacity] = React.useState(1);
  const [height, setHeight] = React.useState(10);
  const [rotation, setRotation] = React.useState(360);
  const [scaleMin, setScaleMin] = React.useState(0);
  const [scaleMax, setScaleMax] = React.useState(1);
  const [color, setColor] = React.useState("#F35C98");
  const [duration, setDuration] = React.useState(1);
  const [delay, setDelay] = React.useState(0.1);
  const [ease, setEase] = React.useState("linear");
  const [experimental, setExperimental] = React.useState(false);

  return (
    <div className="container">
      <div className="container-left">
        <Head>
          <title>Loader generator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="title">Loader generator</h1>
        <p className="description">
          Customize your loader, install Motion in your React app, and
          copy-paste the generated code.
        </p>
        <ul>
          <AnimateSharedLayout transition={{ duration: 0.5 }}>
            <motion.li onClick={() => setCurrentTab(1)}>
              Dots
              {tab === 1 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #F35C98 0%, #FCA967 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <motion.li onClick={() => setCurrentTab(2)}>
              Circular{" "}
              {tab === 2 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(270deg, #F87F84 0%, #FCA967 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <motion.li onClick={() => setCurrentTab(3)}>
              Experimental
              {tab === 3 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #F78282 0%, #F45B99 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
          </AnimateSharedLayout>
        </ul>
        {/*                                               */}
        {/* display components if certain state is active */}
        {/*                                               */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          {tab == 1 && (
            <ConfigureSection
              color={color}
              setColor={setColor}
              quantity={quantity}
              radius={radius}
              margin={margin}
              width={width}
              height={height}
              opacity={opacity}
              scaleMin={scaleMin}
              scaleMax={scaleMax}
              rotation={rotation}
              experimental={experimental}
              setQuantity={setQuantity}
              setRadius={setRadius}
              setMargin={setMargin}
              setWidth={setWidth}
              setHeight={setHeight}
              setOpacity={setOpacity}
              setScaleMin={setScaleMin}
              setScaleMax={setScaleMax}
              setRotation={setRotation}
              setExperimental={setExperimental}
              render={render}
              startRender={startRender}
              duration={duration}
              setDuration={setDuration}
              setDelay={setDelay}
              ease={ease}
              setEase={setEase}
              delay={delay}
              render={render}
              startRender={startRender}
            ></ConfigureSection>
          )}
        </div>
      </div>
      <div className="container-right">
        <Preview
          render={render}
          quantity={quantity}
          delay={delay}
          radius={radius}
          margin={margin}
          duration={duration}
          width={width}
          height={height}
          color={color}
          opacity={opacity}
          scaleMin={scaleMin}
          scaleMax={scaleMax}
          ease={ease}
          rotation={rotation}
          experimental={experimental}
        ></Preview>
      </div>
    </div>
  );
}
