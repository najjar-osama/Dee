import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Header from "../Header";
import Footer from "../Footer";
import BackgroundWrapper from "../BackgroundWrapper";
import LandingPage from "../LandingPage";

describe("Test Landing Page:", () => {
  it("Renders Header properly & without  crashing", () => {
    const wrapper = shallow(<Header />);
    const title = <h1 className="header-title">Dee!</h1>;
    const subtitle = (
      <h2 className="header-subtitle">Your new way of communication.</h2>
    );
    expect(wrapper.contains(title)).toBeTruthy();
    expect(wrapper.contains(subtitle)).toBeTruthy();
  });

  it("Renders Footer properly & without  crashing", () => {
    const wrapper = shallow(<Footer />);
    const footerText = (
      <span>{`© Dee! ${new Date(Date.now()).getFullYear()}.`}</span>
    );

    expect(wrapper.contains(footerText)).toBeTruthy();
  });

  it("Renders Background Slides properly & without  crashing", () => {
    const wrapper = shallow(<BackgroundWrapper />);
    expect(wrapper.find(".bg-wrapper")).toHaveLength(1);
    expect(wrapper.find(".bg")).toHaveLength(6);
  });

  test("Landing page should be rendered properly", () => {
    const compsTree = renderer.create(<LandingPage />).toJSON();
    expect(compsTree).toMatchSnapshot();
  });
});
