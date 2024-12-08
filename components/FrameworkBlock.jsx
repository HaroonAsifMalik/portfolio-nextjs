import { FaReact, FaAngular, FaJsSquare, FaBootstrap } from 'react-icons/fa';

const FrameworkBlock = ({ name, icon, color, textColor, borderColor }) => {
  const icons = {
    React: <FaReact className="mr-2" size={24} />,
    Angular: <FaAngular className="mr-2" size={24} />,
    'Next.js': <FaJsSquare className="mr-2" size={24} />,
    Bootstrap: <FaBootstrap className="mr-2" size={24} />,
  };

  return (
    <div
      className={`flex bg-primary items-center px-6 py-2 font-bold ${textColor} text-center border-2 ${borderColor} rounded-sm hover:bg-primary_dark hover:rotate-3 transition duration-300`}>
      {icons[name]}
      <span>{name}</span>
    </div>
  );
};

export default FrameworkBlock;
