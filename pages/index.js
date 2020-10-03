import Head from "next/head";
import { motion, AnimateSharedLayout } from "framer-motion";
import Preview from "../components/preview";
import BetaLabel from "../components/beta-label";
import ConfigureSection from "../components/configure-section";
import SetViewport from "../data/calculateWindow";

export default function Home(props) {
  const [tab, setCurrentTab] = React.useState(1);
  const [colorPickerOpen, setColorPickerOpen] = React.useState(false);
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
  const [color, setColor] = React.useState("#c81c60");

  const [duration, setDuration] = React.useState(1);
  const [delay, setDelay] = React.useState(0.2);
  const [ease, setEase] = React.useState("anticipate");
  const [repeatType, setRepeatType] = React.useState("reverse");

  // const handleClick = () => (
  //   setColorPickerOpen(!colorPickerOpen),
  //   console.log("Clicked from entire site")
  // );

  SetViewport();
  return (
    <div className="container">
      <div className="container-left">
        <Head>
          <title>Loader generator</title>
          <meta
            name="description"
            content="Create your own animated Loaders and generate production-ready code to use in your React apps."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@vrenkema" />
          <meta
            name="twitter:title"
            content="A Loader component generator for React."
          />
          <meta
            name="twitter:description"
            content="Create your own animated Loaders and generate production-ready code to use in your React apps."
          />
          <meta
            name="twitter:image"
            content="https://i.ibb.co/FW2nKdd/card.png"
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/FW2nKdd/card.png"
          />
          <meta property="og:url" content="http://loaders.io" />
          {
            <link
              rel="icon"
              type="image/png"
              href="https://i.ibb.co/0q08g6Z/Fav.png"
            />
          }
        </Head>

        <h1 className="title">Loader generator</h1>

        <p className="madeby">
          Built by{" "}
          <a
            href="https://www.renkema.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Viktor Renkema
          </a>
          , powered by Framer Motion and Vercel.
        </p>
        <p className="description">
          Customize your loader, install Motion in your React app, and
          copy-paste the generated code.
        </p>
        <ul>
          <AnimateSharedLayout
            transition={{ duration: 0.5, ease: "anticipate" }}
          >
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
                      "linear-gradient(90deg, #c81c60 0%, #b93a6c 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            {/* <motion.li
              onClick={() => (setCurrentTab(2), setExperimental(false))}
            >
              Circular <span className="soon-span">soon</span>
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
            </motion.li> */}
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
                      "linear-gradient(90deg, #b93a6c 0%,  #b95f82 100%)",
                    // background:
                    //   "linear-gradient(90deg, #FAA768 0%, #FCCA49 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <BetaLabel></BetaLabel>
          </AnimateSharedLayout>
        </ul>
        {/*                                               */}
        {/* display components if certain state is active */}
        {/*                                               */}
        <div className="wrapper-content">
          {tab == 1 && (
            <ConfigureSection
              code={true}
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
              repeatType={repeatType}
              setRepeatType={setRepeatType}
              colorPickerOpen={colorPickerOpen}
              setColorPickerOpen={setColorPickerOpen}
            ></ConfigureSection>
          )}

          {tab == 3 && (
            <div style={{ width: "100%" }}>
              <div className="toast">
                <div className="toast-svg">
                  <ExclamationMark></ExclamationMark>
                </div>
                <div className="toast-text">
                  <p className="toast-h1">Heads up!</p>
                  <p className="toast-h2">
                    Experimental is only meant as a playground to explore funky
                    animations. No code is generated.
                  </p>
                </div>
              </div>
              <ConfigureSection
                code={false}
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
                repeatType={repeatType}
                setRepeatType={setRepeatType}
                colorPickerOpen={colorPickerOpen}
                setColorPickerOpen={setColorPickerOpen}
              ></ConfigureSection>
            </div>
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
          repeatType={repeatType}
          setRepeatType={setRepeatType}
        ></Preview>
      </div>
    </div>
  );
}

function ExclamationMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30">
      <path
        d="M 11 17 L 13 17 L 13 11 L 11 11 Z M 12 20 C 11.448 20 11 19.552 11 19 C 11 18.448 11.448 18 12 18 C 12.552 18 13 18.448 13 19 C 13 19.552 12.552 20 12 20 Z M 18 6 L 6 6 C 4.343 6 3 7.343 3 9 L 3 21 C 3 22.657 4.343 24 6 24 L 18 24 C 19.657 24 21 22.657 21 21 L 21 9 C 21 7.343 19.657 6 18 6 Z"
        fill="rgb(0,0,0)"
      ></path>
      <path d="M 11 11 L 13 11 L 13 17 L 11 17 Z" fill="#c81c60"></path>
    </svg>
  );
}
