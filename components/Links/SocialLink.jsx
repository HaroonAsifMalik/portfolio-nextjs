import Link from "next/link";
const SocialLink = ({ href, icon }) => (
    <Link href={href} className="text-gray-700 hover:text-purple-700" target="_blank" rel="noopener noreferrer">
      {icon}
    </Link>
  );

export default SocialLink;