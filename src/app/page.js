
import Image from "next/image";
import Banner from "./components/banner/Banner";
import Lifestyle from "./components/lifestyle/Lifestyle";

export default function Home() {
  return (
    <section>
      <Banner></Banner>
      <Lifestyle></Lifestyle>
    </section>
  );
}
