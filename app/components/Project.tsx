import Image from "next/image";
import linkIcon from "@public/link-white.svg";

const Project = () => {
  return (
    <div className="project p-8  min-w-[500px] rounded-2xl">
      <p className="uppercase font-bold text-[#12A2FF] text-sm">
        Featured Project
      </p>
      <h3 className="mt-2 text-3xl font-bold">Web3 Defense</h3>
      <div className="mt-3 image-container relative w-full h-[250px] rounded-2xl overflow-hidden ">
        <Image
          className="object-cover z-10 hover:opacity-0 transition ease-in-out"
          src="/web3defense.png"
          fill
          alt=""
        />
        <Image
          className="object-cover z-0"
          src="/defense_preview.gif"
          fill
          alt=""
        />
      </div>
      <p className="mt-5 leading-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius
        vel pharetra vel turpis nunc eget lorem.{" "}
      </p>
      {/* technologies and link icon */}
      <div className="mt-3 flex items-center justify-between">
        <div className="technologies-container flex text-[#915DFF] gap-4 font-bold">
          <div className="tech">NextJS</div>
          <div className="tech">Styled Components</div>
          <div className="tech">Ethers</div>
          <div className="tech">Alchemy API</div>
        </div>
        <div className="link-container">
          <Image width={20} className="project-link" src={linkIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Project;
