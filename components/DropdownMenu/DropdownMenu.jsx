import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";

import Link from "next/link";
const DropdownMenu = ({ buttonText, items, width = 'w-48' }) => (
    <div className="relative group">
      <button className="text-gray-700 hover:text-purple-700 flex items-center">
        {buttonText}
        <MdKeyboardArrowDown className="ml-2" />
      </button>
      <div className={`absolute hidden group-hover:block bg-white shadow-md mt-2 rounded ${width}`}>
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 whitespace-nowrap"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );

  export default DropdownMenu