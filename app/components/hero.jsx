"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import intisLogo from "/public/Images/Logo.png";
import androidLogo from "/public/Images/logo_android.png";
import appleLogo from "/public/Images/logo_apple.png";
import "./hero.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".hero-image", { scale: 1, duration: 1, ease: "power4.out" })
      .to(".hero-h1", {
        x: 1,
        duration: 1,
        ease: "power4.out",
      })
      .to("#hero-hr", { x: 1, duration: 1, ease: "power4.out" })
      .to("#hero-p", { x: 1, duration: 1, ease: "power4.out" }, "<")
      .to("#android", { opacity: 1 })
      .to("#apple", { opacity: 1 });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div id="home" className="hero-container">
      <div className="hero-container-2" id="download">
        <div className="hero-div-image">
          <div className="hero-div-image-2">
            <Image
              id="hero-image"
              src={intisLogo}
              alt="logo"
              className="hero-image"
            />
          </div>
        </div>
        <aside className="hero-aside">
          <h1 id="hero-h1" className="hero-h1">
            inti's gold
          </h1>
          <hr id="hero-hr" className="hero-hr" />
          <p id="hero-p">
            manage your resources win real physical gold. dropshipped to you
            door for free
          </p>
          <div className="hero-download-btn">
            <button id="android" className="logo">
              <Image src={androidLogo} alt="androidLogo" />
            </button>
            <button id="apple" className="logo">
              <Image src={appleLogo} alt="appleLogo" width={200} />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Hero;
