const Button = ({ btnText, btnIcon = null,handleOnClick }) => {
  return (
    <button className="relative inline-block text-lg group" onClick={handleOnClick}>
      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-fadeMainTheme transition-colors duration-300 ease-out border-2 border-fadeMainTheme rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
        <span className="absolute left-0 w-48 h-48  transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-fadeMainTheme group-hover:-rotate-180 ease"></span>
        <span className="relative flex gap-2 items-center justify-center  w-full">
          {btnText}
          {btnIcon}
        </span>
      </span>
      <span
        className="absolute bottom-0 right-0  w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fadeMainTheme rounded-lg group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </button>
  );
};

export default Button;
