
import Image from "next/image";
import Banner from "./components/banner/Banner";
import Lifestyle from "./components/lifestyle/Lifestyle";

export const metadata = {
  title: "ExploreSphere",
  description: "Explore world with lot of memories",
};

export default function Home() {
  return (
    <>
      <div>
      </div>
      <Banner></Banner>
      <Lifestyle></Lifestyle>
    </>
  );
}
