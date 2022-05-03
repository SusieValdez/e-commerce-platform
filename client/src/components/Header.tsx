const Header = () => {
  return (
    <div className="flex flex-col justify-between items-center h-96 w-auto mx-auto bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="h-fit w-fit bg-slate-300 self-start py-2 px-5 mx-11">
        <h1 className="text-6xl font-semibold whitespace-normal md:text-8xl">
          Store Name
        </h1>
        <h4 className="text-2xl font-extralight whitespace-normal break-words md:text-4xl">
          Lorem Ipsum
        </h4>
      </div>
    </div>
  );
};

export default Header;
