import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-blue-400 text-transparent bg-clip-text text-5xl font-bold">
      <h1 className="font-bold text-lg xl:text-4xl md:text-2xl">
        🩷 Welcome to Cupid! 🩷
      </h1>
      <p className="text-base lg:text-xl xl:text-3xl ">
        Thinking of the Perfect Date? Let&apos;s Make It Happen!
      </p>
      <Link
        className="text-base lg:text-xl xl:text-3xl underline text-blue-500 hover:text-blue-400"
        href="/main"
      >
        Get Started
      </Link>
    </div>
  );
}
