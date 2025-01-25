"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../lotties/hearts.json";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false); // Controls animation

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const toggleEnvelope = () => {
    if (!isOpen) {
      setPlayAnimation(true); // Start animation when opening
    } else {
      setPlayAnimation(false); // Reset animation when closing
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute right-100 bottom-28 p-10 ">
      <div className="envelope-container" onClick={toggleEnvelope}>
        <div id="envelope" className={[isOpen ? "open" : "close"]}>
          <div id="top-flap"></div>
          <div id="left-flap"></div>
          <div id="right-flap"></div>
          <div id="bottom-flap"></div>
          <div id="letter" className={`${isOpen ? "visible" : ""} `}></div>
          {isOpen && (
            <div id="lottie">
              <Lottie
                animationData={animationData}
                loop={true}
                height={300}
                width={500}
              />
            </div>
          )}
          <div id="body"></div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
