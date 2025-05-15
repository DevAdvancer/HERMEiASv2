const ButtonSvg = (white) => (
  <>
    {/* Left rounded corner */}
    <svg
      className="absolute top-0 left-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "#121212"}
        stroke={white ? "white" : "#121212"}
        strokeWidth="2"
        d="M8 0H21V44H8C3.58172 44 0 40.4183 0 36V8C0 3.58172 3.58172 0 8 0Z"
      />
    </svg>

    {/* Middle stretchable section */}
    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
    >
      <rect width="100%" height="44" fill={white ? "white" : "#121212"} />
    </svg>

    {/* Right rounded corner */}
    <svg
      className="absolute top-0 right-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "#121212"}
        stroke={white ? "white" : "#121212"}
        strokeWidth="2"
        d="M13 0H0V44H13C17.4183 44 21 40.4183 21 36V8C21 3.58172 17.4183 0 13 0Z"
      />
    </svg>
  </>
);

export default ButtonSvg;
