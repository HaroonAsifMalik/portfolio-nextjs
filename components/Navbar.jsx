import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import DropdownMenu from "./DropdownMenu/DropdownMenu"
import NavbarLink from "./Links/NavbarLink"
import SocialLink from './Links/SocialLink'

const Navbar = () => {
  const servicesMenuItems = [
    { href: "/service1", text: "Service 1" },
    { href: "/service2", text: "Service 2" },
    { href: "/service3", text: "Service 3" },
    { href: "/service4", text: "Service 4" }
  ];

  const techStackItems = [
    { href: "/", text: "Python Development" },
    { href: "/", text: "Django Development" },
    { href: "/", text: "React Development" },
    { href: "/", text: "Next Development" },
    { href: "/", text: "Angular Development" },
    { href: "/", text: "Flutter Development" },
    { href: "/", text: "REST API Development" }
  ];

  const projectTypesItems = [
    { href: "/", text: "E-commerce" },
    { href: "/", text: "AI and Chatbots" },
    { href: "/", text: "Cybersecurity Solutions" },
    { href: "/", text: "Web Applications" },
    { href: "/", text: "API Development" },
    { href: "/", text: "Front-end Design" },
    { href: "/", text: "Full-stack Projects" },
    { href: "/", text: "Open Source Contributions" },
    { href: "/", text: "Mobile/Web Integrations" }
  ];

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                width={40}
                height={40}
                alt="Logo"
              />
            </Link>

            <div className="hidden md:flex space-x-8">
              {/* Dropdowns */}
              <DropdownMenu
                buttonText="Web & Mobile Apps"
                items={techStackItems}
                width="w-64"
              />
              <DropdownMenu
                buttonText="Projects Types"
                items={projectTypesItems}
                width="w-64"
              />
              <NavbarLink href="/">Tech Stack</NavbarLink>
              <NavbarLink href="/">Case Studies</NavbarLink>
              <NavbarLink href="/">Resource</NavbarLink>
              <DropdownMenu
                buttonText="Services"
                items={servicesMenuItems}
                width="w-screen"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <SocialLink href="https://github.com" icon={<FaGithub size={20} />} />
            <SocialLink href="https://linkedin.com" icon={<FaLinkedin size={20} />} />

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="flex items-center space-x-2 border border-purple-700 text-purple-700 px-6 py-2 rounded hover:bg-purple-700 hover:text-white transition duration-300"
            >
              <span>Book 15 min call</span>
              <IoCallOutline />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;