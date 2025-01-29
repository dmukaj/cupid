"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useMessage } from "@/context/MessageContext";

const Message = () => {
  const { message, setMessage } = useMessage("");
  const [clicked, setClicked] = useState(false);

  const handleSubmit = (e) => {
    setClicked(true);
    e.preventDefault();
    console.log(message);
  };
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg w-[60vw] max-w-lg mx-auto">
      {!clicked ? (
        <div className="flex flex-col items-center w-full gap-4">
          <textarea
            placeholder="Type me a message here..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500m cursor-pointer text-md lg:text-lg xl:text-xl"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Link
            href="https://www.amazon.com/"
            className="text-lg lg:text-xl xl:text-2xl text-blue-500 underline"
          >
            Buy me a gift!
          </Link>
          <button
            className="bg-gradient-to-r from-pink-500 to-blue-300 text-white px-4 py-2 rounded-md text-lg lg:text-xl xl:text-2xl "
            type="submit"
            onClick={handleSubmit}
          >
            Send
          </button>{" "}
        </div>
      ) : (
        <div className="text-center ">
          <p className="text-md lg:text-lg xl:text-xl text-pink-400">
            💕 Message Sent! 💕
          </p>
          <Link
            href="/main/surprise"
            className="underline text-blue-500 hover:text-blue-400"
          >
            Check out my surprise for you!
          </Link>
        </div>
      )}
    </div>
  );
};

export default Message;
