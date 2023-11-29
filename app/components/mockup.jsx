import React from "react";
import Image from "next/image";
import "./mockup.css";
import mock from "public/Images/mock.jpg";
import Btn from "./btn";

const Mockup = () => {
  return (
    <div className="mockup-container" id="mockup">
      <Image src={mock} height={500} alt="mockup" />
      <Btn info="how to play" link="#" />
    </div>
  );
};

export default Mockup;
