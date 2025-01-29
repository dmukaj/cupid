"use client";
import FloatingHearts from "@/components/FloatingHeart";
import Envelope from "./Envelope";
import { useState, useEffect, use } from "react";
import { useProgress } from "@/context/ProgressContext";
import { useMessage } from "@/context/MessageContext";

const page = () => {
  const { message } = useMessage("");
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
