const Header = () => {
  return (
    <div className="flex flex-col justify-between items-center h-96 w-auto mx-auto bg-gradient-to-r from-sky-500 to-indigo-500">
      <div></div>
      <div className="h-fit w-fit bg-slate-300 self-start py-2 px-5 mx-11">
        <h1 className="text-6xl font-semibold whitespace-normal md:text-8xl">
          Store Name
        </h1>
        <h4 className="text-2xl font-extralight whitespace-normal break-words md:text-4xl">
          Lorem Ipsum
        </h4>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg>
    </div>
  );
};

export default Header;
