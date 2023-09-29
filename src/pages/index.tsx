import { Inter } from "next/font/google";
import MainHome from "./mainHome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainHome />
    </>
  );
}
