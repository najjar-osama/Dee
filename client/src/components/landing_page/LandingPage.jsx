import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundWrapper from "./BackgroundWrapper";

const LandingPage = () => (
  <div className="landing-page-wrapper">
    <BackgroundWrapper>
      <div className="main-wrapper">
        <Header />
        <Footer />
      </div>
    </BackgroundWrapper>
  </div>
);

export default LandingPage;
