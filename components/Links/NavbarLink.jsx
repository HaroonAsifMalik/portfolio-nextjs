import Link from "next/link";
const NavbarLink = ({ href, children }) => (
    <Link href={href} className="text-white ">
      {children}
    </Link>
  );

  export default NavbarLink