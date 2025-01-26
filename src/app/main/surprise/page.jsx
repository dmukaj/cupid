"use client";
import FloatingHearts from "@/components/FloatingHeart";
import Envelope from "./Envelope";
import { useState, useEffect } from "react";
import { useProgress } from "@/context/ProgressContext";

const page = () => {
  const [message, setMessage] = useState(localStorage.getItem("message"));
  const { completeStep } = useProgress();

  useEffect(() => {
    completeStep("surprise");
  }, []);

  return (
    <>
      <Envelope />
      <FloatingHearts
        animation={
          <div key={1} className="text-lg text-white font-semibold">
            {message}
          </div>
        }
      />
    </>
  );
};

export default page;
