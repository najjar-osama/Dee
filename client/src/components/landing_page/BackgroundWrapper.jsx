import React from "react";
import bg01 from "./images/bg01.jpg";
import bg02 from "./images/bg02.jpg";
import bg03 from "./images/bg03.jpg";
import bg04 from "./images/bg04.jpg";
import bg05 from "./images/bg05.jpg";
import bg06 from "./images/bg06.jpg";

const BackgroundWrapper = () => {
  const bgRefs = [];
  const images = [bg01, bg02, bg03, bg04, bg05, bg06];
  let activeBgIndex = 0;
  let nextBgIndex = activeBgIndex + 1;
  // for each image create background
  const bgs = images.map((image, index) => {
    const ref = React.createRef();
    bgRefs.push(ref);
    return (
      <div
        className={`bg bg-anim ${activeBgIndex === index ? "visible" : ""} ${
          nextBgIndex === index ? "next" : ""
        }`}
        key={index}
        style={{ backgroundImage: `url(${image})` }}
        ref={ref}
      />
    );
  });

  setInterval(() => {
    const newActiveBgIndex =
      activeBgIndex + 1 === images.length - 1 ? 0 : activeBgIndex + 1;
    const nextNewActiveBgIndex =
      newActiveBgIndex + 1 === images.length - 1 ? 0 : newActiveBgIndex + 1;
    bgRefs.forEach((bgRef, index) => {
      index === activeBgIndex
        ? bgRef.current.classList.remove("visible")
        : false;
      index === nextBgIndex ? bgRef.current.classList.remove("next") : false;

      index === newActiveBgIndex
        ? bgRef.current.classList.add("visible")
        : false;
      index === nextNewActiveBgIndex
        ? bgRef.current.classList.add("next")
        : false;
    });
    activeBgIndex = newActiveBgIndex;
    nextBgIndex = nextNewActiveBgIndex;
  }, 6000);

  return <div className="bg-wrapper">{bgs}</div>;
};

export default BackgroundWrapper;
