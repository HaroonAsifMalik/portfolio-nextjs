import Link from "next/link";
const SocialLink = ({ href, icon }) => (
    <Link href={href} className="text-secondary  transform hover:scale-125 duration-300 " target="_blank" rel="noopener noreferrer">
      {icon}
    </Link>
  );

export default SocialLink;