"use client";
import React, { useEffect } from "react";
import LoveForm from "./LoveForm";
import { useProgress } from "@/context/ProgressContext";

const page = () => {
  const { completeStep } = useProgress();

  useEffect(() => {
    completeStep("details");
  }, []);

  return <LoveForm />;
};

export default page;
