import { MdKeyboardArrowDown } from "react-icons/md";

import Link from "next/link";
const DropdownMenu = ({ buttonText, items, width = 'w-48' }) => (
    <div className="relative group">
      <button className="text-white flex items-center">
        {buttonText}
        <MdKeyboardArrowDown className="ml-2" />
      </button>
      <div className={`absolute hidden group-hover:block bg-primary_dark shadow-md mt-2 rounded-md ${width}`}>
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2 text-white hover:bg-primary whitespace-nowrap"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );

export default DropdownMenu