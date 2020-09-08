import Head from "next/head";
import { motion, AnimateSharedLayout } from "framer-motion";
import Preview from "../components/preview";
import BetaLabel from "../components/beta-label";
import ConfigureSection from "../components/configure-section";

export default function Home(props) {
  const [tab, setCurrentTab] = React.useState(1);

  const [render, startRender] = React.useState(true);
  const [experimental, setExperimental] = React.useState(false);

  const [quantity, setQuantity] = React.useState(5);
  const [margin, setMargin] = React.useState(8);

  const [width, setWidth] = React.useState(20);
  const [height, setHeight] = React.useState(20);
  const [opacity, setOpacity] = React.useState(1);
  const [radius, setRadius] = React.useState(0);

  const [scaleMin, setScaleMin] = React.useState(0.2);
  const [scaleMax, setScaleMax] = React.useState(1);
  const [rotation, setRotation] = React.useState(360);
  const [color, setColor] = React.useState("#F35C98");

  const [duration, setDuration] = React.useState(1);
  const [delay, setDelay] = React.useState(0.2);
  const [ease, setEase] = React.useState("anticipate");

  return (
    <div className="container">
      <div className="container-left">
        <Head>
          <title>Loader generator</title>
        </Head>

        <h1 className="title">
          Loader generator<BetaLabel></BetaLabel>
        </h1>

        <p className="description">
          Customize your loader, install Motion in your React app, and
          copy-paste the generated code.
        </p>
        <ul>
          <AnimateSharedLayout transition={{ duration: 0.5 }}>
            <motion.li
              onClick={() => (setCurrentTab(1), setExperimental(false))}
            >
              Dots
              {tab === 1 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #F35C98 0%, #F78182 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <motion.li
              onClick={() => (setCurrentTab(2), setExperimental(false))}
            >
              Circular{" "}
              {tab === 2 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #F78182 0%, #FAA768 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <motion.li
              onClick={() => (setCurrentTab(3), setExperimental(true))}
            >
              Experimental
              {tab === 3 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #FAA768 0%, #FCCA49 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
          </AnimateSharedLayout>
        </ul>
        {/*                                               */}
        {/* display components if certain state is active */}
        {/*                                               */}
        <div className="wrapper-content">
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
          {tab == 2 && (
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
          )}{" "}
          {tab == 3 && (
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
