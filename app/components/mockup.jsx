import React from "react";
import Image from "next/image";
import "./mockup.css";
import mock from "public/Images/mock.jpeg";

const Mockup = () => {
  return (
    <div className="mockup-container" id="mockup">
      <Image src={mock} height={500} alt="mockup" />
    </div>
  );
};

export default Mockup;
