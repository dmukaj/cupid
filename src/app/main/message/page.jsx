"use client";
import { useEffect } from "react";
import Message from "./Message";
import { useProgress } from "@/context/ProgressContext";

const page = () => {
  const { completeStep } = useProgress();

  useEffect(() => {
    completeStep("message");
  }, []);

  return <Message />;
};

export default page;
