const Ribbon = () => {
  return (
    <div className="ribbon absolute -top-2 -right-2 h-32 w-32 overflow-hidden before:absolute before:top-0 before:left-0 before:-z-[1] before:border-4 before:border-gray-500 after:absolute after:right-0 after:bottom-0 after:-z-[1] after:border-4 after:border-gray-500">
      <div className="absolute -right-12 top-[18px] w-48 rotate-45 bg-ribbon-static py-2.5 text-center text-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-ribbon-hover hover:cursor-pointer ">
        <div className="text-[8px] font-bold">POWERED BY</div>
        <div className="text-[14px] font-bold">Calendly</div>
      </div>
    </div>
  );
};

export default Ribbon;
