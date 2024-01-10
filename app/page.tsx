import React from "react";
import SplashPage from "./splashPage";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div>
      {/* <div className="absolute top-0 left-0 h-screen w-screen bg-center bg-cover bg-no-repeat bg-[url('../public/elements_2.png')] opacity-60"></div> */}
      <Navbar />
      <SplashPage />
    </div>
  );
}
