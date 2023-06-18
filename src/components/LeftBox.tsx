import { IoArrowBack } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { HiOutlineVideoCamera } from "react-icons/hi";

const LeftBox = () => {
  return (
    <div className=" w-2/5 p-6 lg:w-full">
      {/* back arrow icon */}
      <div className="inline-flex items-center justify-center rounded-full p-2 border border-gray-300 hover:bg-blue-200 hover:text-blue-500 cursor-pointer">
        <IoArrowBack
          className="text-date-selected rounded-full lg:text-sm sm:text-xs"
          size={30}
        />
      </div>

      {/* header */}
      <div className="lg:-mt-10 mt-4">
        <h4
          className="text-light-header-color font-bold lg:text-center"
          style={{ color: "#737373" }}
        >
          Abdullah Alam
        </h4>
        <h1 className="text-header-color text-[28px] font-semibold lg:text-center sm:text-[26px]">
          Client Meeting
        </h1>

        {/* 20 mins */}
        <div className="lg:flex lg:gap-10 sm:flex-col sm:gap-0 sm:px-4">
          <div className="lg:ml-12 mt-6 flex items-center sm:ml-0">
            <IoMdTime className="text-light-header-color mr-2" size={28} />
            <span className="font-bold text-light-header-color">20 min</span>
          </div>

          {/* web conference details */}
          <div className="flex items-center">
            <HiOutlineVideoCamera
              className="text-light-header-color mr-2 lg:mt-5 flex-shrink-0 sm:-mt-2"
              size={28}
            />
            <span className="font-bold mt-5 text-light-header-color pr-2 sm:mt-4">
              Web conferencing details provided upon confirmation.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBox;
