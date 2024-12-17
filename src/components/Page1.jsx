import gsap from "gsap";
import React from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

const Page1 = () => {
  return (
    <div id="page1">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}>
        <div className="Logo">
          <img src="./transparent-logo.png" alt="" />
        </div>
      </Tilt>
    </div>
  );
};

export default Page1;
