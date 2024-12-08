import { FaArrowRight } from 'react-icons/fa';

const TechStack = () => {
  return (
    <div className="flex items-center text-black font-thin	 px-6 py-2 bg-white border-2 border-primary relative flex-shrink-0 justify-between rounded-sm transition duration-300">
      <span className="font-semibold mr-2">Frontend</span>
      <FaArrowRight size={20} />
    </div>
  );
};

export default TechStack;
