import { FaArrowRight } from "react-icons/fa";

const TechStack = ({ category }) => {
  return (
    <div className="flex items-center text-black font-thin px-6 py-2 bg-white border-2 border-primary relative justify-between rounded-sm transition duration-300 w-full max-w-[200px]">
      <span className="font-semibold truncate justify-center ">{category}</span>
      <FaArrowRight size={20} />
    </div>
  );
};

export default TechStack;
