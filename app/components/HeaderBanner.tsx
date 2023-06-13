import Highlight from "./Highlight";

const HeaderBanner = () => {
  return (
    <div className="grow flex mt-10 mb-8 items-center ml-10">
      <div className="gap-5 flex flex-col basis-3/5">
        <h1 className="text-7xl">
          Hello 👋 my name <br /> is <Highlight>Daniel Jimenez</Highlight>
        </h1>
        <div className="text-2xl w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
