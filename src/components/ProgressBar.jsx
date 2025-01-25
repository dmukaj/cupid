import { CircleCheck } from "lucide-react";

export const ProgressBar = () => {
  return (
    <div className="mt-10 mb-60 mx-10">
      <h2 className="sr-only">Steps</h2>

      <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
        <ol className="grid grid-cols-3 text-sm font-medium text-gray-500">
          <li className="relative flex justify-start text-blue-600">
            <span className="absolute -bottom-[1.75rem] start-0 rounded-full bg-blue-600 text-white">
              <CircleCheck />
            </span>
            <a href="/details" className="hidden sm:block">
              Details
            </a>
          </li>

          <li className="relative flex justify-center text-blue-600">
            <span className="absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full bg-blue-600 text-white">
              <CircleCheck />
            </span>
            <a href="/message" className="hidden sm:block">
              Message
            </a>
          </li>

          <li className="relative flex justify-end">
            <span className="absolute -bottom-[1.75rem] end-0 rounded-full bg-gray-600 text-white">
              <CircleCheck />
            </span>
            <a href="/suprise" className="hidden sm:block">
              Surprise
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};
