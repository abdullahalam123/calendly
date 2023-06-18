interface Props {
    time: string
}

const Button = ({time} : Props) => {
  return (
    <button className="mt-2 w-[95%] bg-white text-date-selected font-bold py-3 px-16 border-2 border-blue-300 hover:border-date-selected  rounded">
      {time}
    </button>
  );
};

export default Button;
