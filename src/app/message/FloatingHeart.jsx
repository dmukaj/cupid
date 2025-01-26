"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const generateRandomPosition = () => ({
  top: Math.random() * 90 + "%",
  left: Math.random() * 90 + "%",
});

export default function FloatingHearts() {
  const [positions, setPositions] = useState(
    Array.from({ length: 12 }, () => generateRandomPosition())
  );

  useEffect(() => {
    const moveHearts = () => {
      setPositions(Array.from({ length: 12 }, () => generateRandomPosition()));
    };

    const interval = setInterval(moveHearts, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          animate={{ top: pos.top, left: pos.left }}
          transition={{ duration: 2 + Math.random(), ease: "easeInOut" }}
          className="absolute"
          style={{ position: "absolute" }}
        >
          <Heart
            className="w-10 h-10 "
            color="#f76b8a"
            fill="#f76b8a"
            opacity={0.7}
          />
        </motion.div>
      ))}
    </div>
  );
}
