import { Canvas } from "@react-three/fiber";
import { Center, Text3D } from "@react-three/drei";
import font from "../lib/fonts/Gilroy_ExtraBold_Regular.json";

const HeaderNav = () => {
  return (
    <div className="pl-5 flex items-center">
      <div className="w-[100px] h-[60px] ">
        <Canvas camera={{ position: [-0.3, 0, 3] }} shadows>
          <ambientLight intensity={0.7} />
          <directionalLight
            position={[0.3, 0.8, 0.3]}
            intensity={1}
            castShadow
          />
          <Center>
            <Text3D font={font} scale={2} rotation={[0, -0.3, 0]} receiveShadow>
              ND
              <meshStandardMaterial color="#B2B2B2" />
            </Text3D>
          </Center>
        </Canvas>
      </div>
      {/* links */}
      <div className="flex text-lg gap-6">
        <a className="">About</a>
        <a className="">Skills</a>
        <a className="">Experiences</a>
        <a className="">Projects</a>
      </div>
      <div className="relative flex flex-1 justify-end">
        <button
          type="button"
          className="p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-xl"
        >
          <div className="px-3 py-1 bg-black rounded-xl">Contact</div>
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
