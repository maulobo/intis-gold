"use client";
import React from "react";
import "./profits.css";
import TradingViewWidget from "./gold-chart";

const Profits = () => {
  return (
    <div className="profits-coontainer-outer">
      <div className="profits-container">
        <div className="profits-title">
          <h2 className="profits-h2">your profits will be in real gold</h2>
        </div>
        <div className="profits-chart-container">
          <div className="profits-chart" id="chart">
            <TradingViewWidget />
          </div>
        </div>
        <div className="profits-text">
          pInti’s Gold connects players in a fun and interactive way, to
          small-scale artisanal gold miners from the Andes region of Latin
          America. All gold is artisanally sourced and crafted by ancestral
          hands, with generations of Incan heritage behind it. Inti is the God
          of the Sun in Incan belief, and the most powerful deity to represent
          the mighty gold reserves of the Inca empire. Play to win Inti’s
          treasure, and may the odds be in your favor!
        </div>
      </div>
    </div>
  );
};

export default Profits;
