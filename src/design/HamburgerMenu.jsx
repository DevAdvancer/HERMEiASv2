
export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-5 h-full bg-gradient-to-r from-[#494848] to-[#000000] motion-preset-fade-sm"></div>
      <div className="absolute top-0 right-0 w-5 h-full bg-gradient-to-l from-[#494848] to-[#000000] motion-preset-fade-sm"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-30 w-3 h-3 bg-gradient-to-b from-[#c4c2c1] to-[#000000] rounded-full motion-preset-float motion-duration-2000"></div>
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#494145] to-[#000000] rounded-full motion-preset-float motion-duration-3000"></div>
      <div className="absolute top-[26.8rem] left-12 w-3 h-3 bg-gradient-to-b from-[#7f868f] to-[#000000] rounded-full motion-preset-float motion-duration-2500"></div>
      <div className="absolute top-[40.4rem] right-39 w-3 h-3 bg-gradient-to-b from-[#44413f] to-[#000000] rounded-full motion-preset-float motion-duration-4000"></div>
      <div className="absolute top-[54rem] left-30 w-3 h-3 bg-gradient-to-b from-[#494145] to-[#000000] rounded-full motion-preset-float motion-duration-1500"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
      </div>
      <SideLines />
      <BackgroundCircles />
    </div>
  );
};
