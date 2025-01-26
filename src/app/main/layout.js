import { ProgressBar } from "@/components/ProgressBar";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="w-full absolute top-10 left-0">
        <ProgressBar />
      </div>
      <div>{children}</div>
    </div>
  );
}
