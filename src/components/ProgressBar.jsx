"use client";

import { CircleCheck } from "lucide-react";
import { useProgress } from "@/context/ProgressContext";
import Link from "next/link";

export const ProgressBar = () => {
  const { progress } = useProgress();

  return (
    <div className="mx-10">
      <h2 className="sr-only">Steps</h2>

      <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
        <ol className="grid grid-cols-3 text-sm font-medium text-gray-500">
          <li
            className={`relative flex justify-start  ${
              progress.details ? "text-blue-600" : "text-white"
            }`}
          >
            <span
              className={`absolute -bottom-[1.75rem] start-0 rounded-full  ${
                progress.details
                  ? "text-white bg-blue-600 "
                  : "bg-gray-600 text-white"
              }`}
            >
              <CircleCheck />
            </span>
            <Link href="/main/details" className="hidden sm:block">
              Details
            </Link>
          </li>

          <li
            className={`relative flex justify-center  ${
              progress.message ? "text-blue-600" : "text-white"
            }`}
          >
            <span
              className={`absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full  ${
                progress.message
                  ? "bg-blue-600 text-white"
                  : "bg-gray-600 text-white"
              }`}
            >
              <CircleCheck />
            </span>
            <Link href="/main/message" className="hidden sm:block">
              Message
            </Link>
          </li>

          <li
            className={`relative flex justify-end ${
              progress.surprise ? "text-blue-600" : "text-white"
            }`}
          >
            <span
              className={`absolute -bottom-[1.75rem] end-0 rounded-full  ${
                progress.surprise
                  ? "text-white bg-blue-600"
                  : "bg-gray-600 text-white"
              }`}
            >
              <CircleCheck />
            </span>
            <Link href="/main/surprise" className="hidden sm:block">
              Surprise
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};
