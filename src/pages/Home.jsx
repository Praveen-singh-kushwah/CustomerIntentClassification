import React from "react";
import Navbar from "../components/Navbar/";
import HeroSection from "../components/HeroSection";
import Introduction from "../components/Introduction";
import Features from "../components/Features";
import UserGuide from "../components/UserGuide";

function Home() {
  return (
    <>
      <div className=" overflow-x-hidden ">
        <HeroSection />
      </div>
      <div>
        <Introduction/>
      </div>
      <div>
        <Features/>
      </div>
      <div className=" mt-6">
        <UserGuide/>
      </div>
    </>
  );
}

export default Home;
