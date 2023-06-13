"use client";

import Spline from "@splinetool/react-spline";
import Highlight from "./Highlight";
import Image from "next/image";
import linkIcon from "@public/link.svg";

const Bio = () => {
  const onLoad = (spline: any) => {
    spline.setZoom(0.7);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="h-[500px] w-full">
        <Spline
          onLoad={onLoad}
          scene="https://prod.spline.design/WeFub3-PRP9szIyd/scene.splinecode"
        />
      </div>
      <div className="bio-description w-4/5 text-5xl leading-[60px]">
        DJ crafts immersive, interactive web experiences using advanced
        technologies. We create captivating digital spaces that engage users and
        align with your strategic objectives.
      </div>
      <div className="flex gap-2 view-resume mt-7">
        <Highlight className="text-5xl">View My Resume</Highlight>
        <Image src={linkIcon} alt="" />
      </div>
    </div>
  );
};

export default Bio;
