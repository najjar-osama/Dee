import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header";
import Footer from "../Footer";
import LandingPage from "../LandingPage";
import BackgroundWrapper from "../BackgroundWrapper";
import { shallow } from "enzyme";

describe("Test Landing Page Components", () => {
  it("Renders Header properly & without  crashing", () => {
    const headerComp = shallow(<Header />);
    const title = <h1 className="header-title">Dee!</h1>;
    const subtitle = (
      <h2 className="header-subtitle">Your new way of communication.</h2>
    );
    expect(headerComp.contains(title)).toEqual(true);
    expect(headerComp.contains(subtitle)).toEqual(true);
  });
});
