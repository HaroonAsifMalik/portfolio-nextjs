import { FaInstagram, FaGithub, FaGoogle } from "react-icons/fa";
import { CiLinkedin, CiLocationOn } from "react-icons/ci";
import { TbBrandLeetcode } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import SocialLink from "./Links/SocialLink";

const Footer = () => {
  const aboutMeItems = [
    { href: "/", text: "Blog" },
    { href: "/", text: "Contact me" },
    { href: "/", text: "Portfolio" },
    { href: "/", text: "Tech Stack" },
    { href: "/", text: "FAQs" },
  ];

  const techStackItems = [
    { href: "/", text: "Python Development" },
    { href: "/", text: "Django Development" },
    { href: "/", text: "React Development" },
    { href: "/", text: "Next Development" },
    { href: "/", text: "Angular Development" },
    { href: "/", text: "Flutter Development" },
    { href: "/", text: "REST API Development" },
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
    { href: "/", text: "Mobile/Web Integrations" },
  ];

  return (
    <footer className="bg-zinc-50 dark:bg-neutral-700 text-surface/75 dark:text-white/75">
      <div className="container mx-auto py-4 px-6">
        {/* Social Links Section */}
        <div className="flex justify-center mb-4 space-x-4">
          <SocialLink href="https://github.com/HaroonAsifMalik" icon={<FaGithub size={30} className="text-white " />} />
          <SocialLink href="https://instagram.com" icon={<FaInstagram size={30} className="text-white " />} />
          <SocialLink href="https://linkedin.com" icon={<CiLinkedin size={30} className="text-white " />} />
          <SocialLink href="https://google.com" icon={<FaGoogle size={30} className="text-white " />} />
          <SocialLink href="https://leetcode.com" icon={<TbBrandLeetcode size={30} className="text-white " />} />
        </div>
        <hr className="border-t-2 border-white dark:border-neutral-500 my-4" />

        {/* Footer Content Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          <div>
            <h6 className="font-semibold uppercase mb-4 text-neutral-800 dark:text-white">Company Name</h6>
            <p className="text-neutral-600 dark:text-white/75">
              Organize your footer content effectively. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div>
            <h6 className="font-semibold uppercase mb-4 text-neutral-800 dark:text-white">Web & mobile development</h6>
            <ul className="space-y-2">
              {techStackItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-purple-700 text-neutral-600 dark:text-white/75">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold uppercase mb-4 text-neutral-800 dark:text-white">Project Types</h6>
            <ul className="space-y-2">
              {projectTypesItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-purple-700 text-neutral-600 dark:text-white/75">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-semibold uppercase mb-4 text-neutral-800 dark:text-white">Contact</h6>
            <ul className="space-y-2 text-neutral-600 dark:text-white/75">
              <li className="flex items-center">
                <CiLocationOn size={20} className="mr-2" />
                New York, NY 10012, US
              </li>
              <li className="flex items-center">
                <IoIosMail size={20} className="mr-2" />
                info@example.com
              </li>
              <li className="flex items-center">
                <IoCallOutline size={20} className="mr-2" />
                +01 234 567 88
              </li>
              {aboutMeItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-purple-700 text-neutral-600 dark:text-white/75">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-neutral-200 dark:bg-neutral-700 py-4 text-center">
        <span className="text-neutral-600 dark:text-white/75">© 2023 Copyright:</span>
        <a href="https://tailwind-elements.com/" className="font-semibold text-neutral-800 dark:text-white ml-1">
        </a>
      </div>
    </footer>
  );
};

export default Footer;
