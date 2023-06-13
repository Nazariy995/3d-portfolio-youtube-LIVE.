import Image from "next/image";
import icon from "../../public/arrow-right.svg";

const HeaderCTA = () => {
  return (
    <div>
      <button
        type="button"
        className="ml-[160px] flex items-center gap-2 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree text-black py-4 px-8 rounded-2xl text-xl"
      >
        <span>Get In Touch</span>
        <Image src={icon} alt="" />
      </button>
    </div>
  );
};

export default HeaderCTA;
