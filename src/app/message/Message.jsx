"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    localStorage.setItem("message", message);
    e.preventDefault();
    console.log(message);
  };
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg w-[90%] max-w-lg mx-auto">
      <div className="flex flex-col items-center w-full gap-4">
        <textarea
          placeholder="Type me a message here..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500m cursor-pointer"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Link
          href="https://www.amazon.com/"
          className="text-blue-500 underline"
        >
          Buy me a gift!
        </Link>
        <button
          className="bg-gradient-to-r from-pink-500 to-blue-300 text-white px-4 py-2 rounded-md "
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Message;
