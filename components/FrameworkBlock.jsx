import * as Icons from "react-icons/fa";

const FrameworkBlock = ({ name, icon, textColor, borderColor }) => {
  const IconComponent = Icons[icon];

  return (
    <div
      className={`flex bg-primary items-center px-6 py-2 font-bold ${textColor} text-center border-2 ${borderColor} rounded-sm hover:bg-primary_dark hover:rotate-3 transition duration-300`}
    >
      {IconComponent && <IconComponent className="mr-2" />}
      <span>{name}</span>
    </div>
  );
};

export default FrameworkBlock;
