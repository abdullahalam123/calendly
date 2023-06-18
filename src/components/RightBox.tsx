import Calendar from "./Calendar";
// import ShowSome from "./ShowSome";

const RightBox = () => {
  return (
    <div className="ml-1 lg:w-full w-3/4 p-4 lg:p-5 overflow-hidden lg:border lg:border-top">
      <div>
        <h1
          className="font-bold text-xl mt-3
        lg:w-full
        lg:text-lg lg:ml-[10.313rem] sm:ml-0  sm:text-center text-header-color "
        >
          <span className="sm:hidden">Select a Date & Time</span>
          <span className="hidden sm:inline">Select a Day</span>
        </h1>
      </div>
      <div className=" h-full overflow-hidden ">
        <Calendar />
      </div>
    </div>
  );
};

export default RightBox;
