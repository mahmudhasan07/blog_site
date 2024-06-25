// "use client"
import Image from "next/image";
import Banner from "./components/banner/Banner";
import Lifestyle from "./components/lifestyle/Lifestyle";
import Support from "./components/Contact/Support";
import useFetch1 from "./Hooks/useFetch1";
// import useFetch1 from "./Hooks/useFetch1";

export const metadata = {
  title: "ExploreSphere",
  description: "Explore world with lot of memories",
};


export default function Home() {
  // const [data, refetch] = useFetch1()
  // console.log(data);
  
  return (
    <>
      <div>
      </div>
      <Banner></Banner>
      <Lifestyle></Lifestyle>
      <Support></Support>
    </>
  );
}
