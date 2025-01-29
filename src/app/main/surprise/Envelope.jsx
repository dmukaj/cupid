"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../../lotties/hearts.json";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [handleYes, setHandleYes] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);

  // Ensuring the "No" button starts exactly next to "Yes"
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    setPositions({
      x: Math.random() * 300 - 150, // Moves randomly in a range
      y: Math.random() * 100 - 50, // Moves randomly up/down slightly
    });
  };

  const toggleEnvelope = () => {
    setPlayAnimation(!isOpen);
    setIsOpen(!isOpen);
  };

  const handleButtonYes = () => {
    setHandleYes(true);
    setPlayAnimation(true);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!handleYes ? (
        <div
          id="envelope-message"
          className="p-10 bg-white rounded-xl bg-opacity-60 w-[60vw] max-w-lg text-center"
        >
          <h2 className="text-xl font-bold mb-4">Will you be my valentine?</h2>

          {/* Button Container for proper alignment */}
          <div className="flex justify-center space-x-6 mt-4 relative">
            <button
              className="bg-gradient-to-tr from-pink-500 to-blue-300 text-white px-6 py-2 rounded-md"
              onClick={handleButtonYes}
            >
              Yes 😍
            </button>
            <motion.button
              animate={{ x: positions.x, y: positions.y }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-tr from-pink-500 to-blue-300 text-white px-6 py-2 rounded-md "
              onMouseEnter={moveButton} // Moves when hovered
            >
              No 😢
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="p-10 mt-60">
          <div className="envelope-container" onClick={toggleEnvelope}>
            <div id="envelope" className={isOpen ? "open" : "close"}>
              <div id="top-flap"></div>
              <div id="left-flap"></div>
              <div id="right-flap"></div>
              <div id="bottom-flap"></div>
              <div id="letter" className={isOpen ? "visible" : ""}>
                <p id="text">I Love You ❤️</p>
              </div>
              {isOpen && (
                <div id="lottie">
                  <Lottie animationData={animationData} loop={true} />
                </div>
              )}
              <div id="body"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Envelope;
