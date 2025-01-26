"use client";

import Link from "next/link";
import { useState } from "react";

const questions = [
  { type: "", question: "Read each question carefully before answering." },
  {
    type: "select",
    question: "Please select your intentions",
    options: [
      "I want to build a future with you",
      "I want to be your forever",
      "I want to make you the happiest person in the world",
      "I want to create endless memories with you",
      "I want to grow old with you",
      "To love, protect, and stand by your side forever",
      "All the above and much more...",
    ],
  },
  {
    type: "select",
    question: "How much do you make per year?",
    options: [
      "💸 Enough to take you on cute dates, but not enough to buy a private island… yet!",
      "😂 Enough to keep Netflix and Spotify running—relationship essentials!",
      "🤑 Let’s just say, I can afford extra guac… most days.",
      "💳 Depends… are we counting Monopoly money?",
      "💰 Let’s just say, I swipe my card with hope and prayers.",
    ],
  },
  { type: "text", question: "Would you still love me if I was a worm?" },
  {
    type: "text",
    question: "How many bowls of ramen are you willing to share with me?",
  },
  { type: "text", question: "Who gets the bigger side of the bed—me or you?" },
  { type: "text", question: "Just a few more questions…" },
  {
    type: "text",
    question:
      "On a scale from 1 to ‘I’d fight a bear for you,’ how much do you love me?",
  },
  {
    type: "text",
    question: "Are we getting a dog or a cat? (Wrong answer = breakup)",
  },

  { type: "text", question: "Will you let me ‘borrow’ your hoodie… forever?" },
  {
    type: "text",
    question:
      "You are almost there. Only one hundred and twenty more questions…",
  },
  {
    type: "text",
    question: "Just kidding Xoxo. 🥰 😘 😍",
  },
];

export default function LoveForm() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg w-[90%] max-w-lg mx-auto">
      {currentIndex < questions.length ? (
        <>
          <h2 className="text-xl font-bold text-blue-400 text-center mb-4">
            {questions[currentIndex].question}
          </h2>
          {questions[currentIndex].type === "text" ? (
            <input
              type="text"
              value={answers[currentIndex]}
              onChange={handleInputChange}
              placeholder="Type your answer..."
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          ) : questions[currentIndex].type === "select" ? (
            <select
              value={answers[currentIndex]}
              onChange={handleInputChange}
              className="mt-1.5 w-full rounded-lg shadow-pink-200 shadow-lg text-gray-800 sm:text-sm p-4"
            >
              <option value="">Select an option...</option>
              {questions[currentIndex].options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : null}
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={handleBack}
              disabled={currentIndex === 0}
              className="bg-gradient-to-r from-pink-500 to-blue-300 text-white px-4 py-2 rounded-md disabled:opacity-70"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={false}
              className="bg-gradient-to-l from-pink-500 to-blue-300 text-white px-4 py-2 rounded-md disabled:opacity-50"
            >
              {currentIndex === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2>💖 Well done! 💖</h2>
          <h2 className="text-xl font-bold">
            Click on the link below to continue:
          </h2>
          <Link
            href="/main/message"
            className="text-blue-500 underline mt-4 inline-block"
          >
            Go to Messages
          </Link>
        </div>
      )}
    </div>
  );
}
