const HeaderBg = () => {
  return (
    <div className="-z-10 header-background bg-bannerColor absolute top-0 left-0 right-0 bottom-0">
      <svg xmlns="http://www.w3.org/2000/svg">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0,0.112 C0,0.061,0,0.035,0.009,0.019 C0.009,0.017,0.01,0.016,0.011,0.015 C0.02,0,0.035,0,0.064,0 H0.076 C0.084,0,0.089,0,0.093,0.002 C0.1,0.005,0.106,0.014,0.11,0.025 C0.112,0.031,0.113,0.039,0.115,0.054 C0.118,0.075,0.12,0.086,0.123,0.095 C0.128,0.111,0.137,0.122,0.147,0.128 C0.153,0.13,0.159,0.13,0.172,0.13 H0.934 C0.965,0.13,0.981,0.13,0.99,0.147 C1,0.164,1,0.191,1,0.245 V0.747 C1,0.801,1,0.828,0.99,0.845 C0.981,0.862,0.965,0.862,0.934,0.862 H0.516 C0.504,0.862,0.498,0.862,0.493,0.867 C0.488,0.872,0.485,0.881,0.48,0.899 L0.459,0.963 C0.454,0.981,0.451,0.99,0.446,0.995 C0.441,1,0.435,1,0.423,1 H0.411 C0.397,1,0.389,1,0.384,0.993 C0.378,0.986,0.376,0.974,0.372,0.949 L0.366,0.913 C0.361,0.888,0.359,0.876,0.354,0.869 C0.348,0.862,0.341,0.862,0.326,0.862 H0.141 C0.125,0.862,0.117,0.862,0.111,0.87 C0.105,0.878,0.104,0.892,0.1,0.919 L0.097,0.948 C0.094,0.97,0.093,0.982,0.089,0.989 C0.088,0.991,0.086,0.993,0.085,0.994 C0.08,1,0.073,1,0.06,1 C0.035,1,0.022,1,0.013,0.988 C0.011,0.985,0.009,0.981,0.007,0.977 C0,0.962,0,0.939,0,0.895 V0.112"></path>
        </clipPath>
      </svg>
      <div className="absolute top-[100px] right-[100px] bg-[#1D6750] w-5/12 h-[200px] rounded"></div>
      <div className="absolute bottom-[100px] left-[50px] bg-[#1371A7] w-[200px] h-[200px] rounded"></div>
      <div className="absolute bottom-[100px] right-[50px] bg-[#915DFF] w-[200px] h-[200px] rounded"></div>
    </div>
  );
};

export default HeaderBg;