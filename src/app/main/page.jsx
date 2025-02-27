import Link from "next/link";
import React from "react";
import { Heart } from "lucide-react";
import FloatingHearts from "../../components/FloatingHeart";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FloatingHearts
        animation={
          <Heart
            className="w-10 h-10 "
            color="#f76b8a"
            fill="#f76b8a"
            opacity={0.6}
          />
        }
      />
      <div className="flex flex-col items-center justify-center text-base lg:text-xl xl:text-3xl bg-gradient-to-tr from-pink-500 to-blue-800 text-transparent bg-clip-text">
        <h1 className="text-lg lg:text-2xl xl:text-4xl"> Hey You!</h1>
        <p>My heart is only three steps away</p>
        <>First I need you to answer a few questions.</>
      </div>
      <Link
        href="/main/details"
        className="text-base lg:text-xl xl:text-3xl underline text-blue-500 hover:text-blue-400"
      >
        Let&apos;s Go!
      </Link>
    </div>
  );
};

export default page;
