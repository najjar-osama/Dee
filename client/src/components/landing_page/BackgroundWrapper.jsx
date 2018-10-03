import React from "react";
import bg01 from "./images/bg01.jpg";
import bg02 from "./images/bg02.jpg";
import bg03 from "./images/bg03.jpg";
import bg04 from "./images/bg04.jpg";
import bg05 from "./images/bg05.jpg";
import bg06 from "./images/bg06.jpg";

class BackgroundWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: 0,
      images: [bg01, bg02, bg03, bg04, bg05, bg06],
      delay: 6000
    };
    this.createBackgroundSlides = this.createBackgroundSlides.bind(this);
    this.bgSwapInterval = null;
  }

  createBackgroundSlides() {
    const currentBgIndex = this.state.currentPos;
    const nextBnIndex =
      currentBgIndex + 1 === this.state.images.length ? 0 : currentBgIndex + 1;
    return this.state.images.map((bgSrc, index) => (
      <div
        className={`bg bg-anim ${currentBgIndex === index ? "visible" : ""} ${
          nextBnIndex === index ? "next" : ""
        }`}
        key={index}
        style={{ backgroundImage: `url(${bgSrc})` }}
      />
    ));
  }
  componentDidMount() {
    this.bgSwapInterval = setInterval(() => {
      const nextPos =
        this.state.currentPos === this.state.images.length - 1
          ? 0
          : this.state.currentPos + 1;

      this.setState(() => ({
        currentPos: nextPos
      }));
    }, this.state.delay);
  }

  componentWillUnmount() {
    clearInterval(this.bgSwapInterval);
  }
  render() {
    return <div className="bg-wrapper">{this.createBackgroundSlides()}</div>;
  }
}
export default BackgroundWrapper;
