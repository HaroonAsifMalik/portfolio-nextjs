import Link from "next/link";
// Navbar Link Component
const NavbarLink = ({ href, children }) => (
    <Link href={href} className="text-gray-700 hover:text-purple-700">
      {children}
    </Link>
  );

  export default NavbarLink