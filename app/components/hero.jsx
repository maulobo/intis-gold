import Image from "next/image";
import React from "react";
import intisLogo from "/public/Images/Logo.png";
import androidLogo from "/public/Images/logo_android.png";
import appleLogo from "/public/Images/Logo_apple.png";
import "./hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero-container ">
      <div className="hero-container-2" id="download">
        <div className="hero-div-image">
          <div className="hero-div-image-2">
            <Image src={intisLogo} alt="logo" className="hero-image" />
          </div>
        </div>
        <aside className="hero-aside">
          <h1 className="hero-h1">inti's gold</h1>
          <hr />
          <p>
            manage your resources win real physical gold. dropshipped to you
            door for free
          </p>
          <div className="hero-download-btn">
            <button className="logo">
              <Image src={androidLogo} alt="androidLogo" />
            </button>
            <button className="logo">
              <Image src={appleLogo} alt="appleLogo" width={200} />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Hero;
