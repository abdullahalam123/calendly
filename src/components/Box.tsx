import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import Separator from "./Separator";
import Ribbon from "./Ribbon";

const Box = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen lg:h-full">
      <div
        className="border border-gray-200 shadow-md w-[70%] h-5/6 lg:w-[80%] lg:h-[95%] rounded-xl flex lg:flex-col relative bg-white
        sm:h-full sm:w-full sm:overflow-x-hidden
        
        "
      >
        <Ribbon />
        <LeftBox />
        <Separator />
        <RightBox />
      </div>
    </div>
  );
};

export default Box;
