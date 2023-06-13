"use client";
import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderBanner from "./HeaderBanner";
import HeaderCTA from "./HeaderCTA";
import HeaderBg from "./HeaderBg";
import Spline from "@splinetool/react-spline";

const Header = () => {
  return (
    <header className="flex flex-col relative header">
      <div className="absolute w-[200px] h-[200px] top-[40%] left-[70%]">
        <Spline scene="https://prod.spline.design/SJeShLWByGri-u15/scene.splinecode" />
      </div>
      <div className="gitub absolute w-[200px] h-[200px] top-[18%] left-[54%]">
        <Spline scene="https://prod.spline.design/dAML1hO53i1YjrvH/scene.splinecode" />
      </div>
      <div className="absolute w-[200px] h-[200px] bottom-[60px] right-[10px]">
        <Spline scene="https://prod.spline.design/PO0vfhQDRusfwot3/scene.splinecode" />
      </div>
      <div className="absolute w-[150px] h-[150px] bottom-[10px] right-[300px]">
        <Spline scene="https://prod.spline.design/gr5g9WnPCMCNkL9h/scene.splinecode" />
      </div>
      <div className="camera-icon absolute w-[150px] h-[100px] top-[150px] right-[40px]">
        <Spline scene="https://prod.spline.design/vnEw5UfY-xarjEwi/scene.splinecode" />
      </div>
      <HeaderBg />
      <HeaderNav />
      {/* center */}
      <HeaderBanner />
      {/* cta */}
      <HeaderCTA />
    </header>
  );
};

export default Header;
