const Button = ({ text, onClick, color = 'bg-secondary', hoverColor = 'hover:bg-[#fdd54a]', textColor = 'text-primary', className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 rounded-lg font-semibold ${color} ${textColor} ${hoverColor} transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
