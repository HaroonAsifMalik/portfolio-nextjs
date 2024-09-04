import Link from "next/link";
const SocialLink = ({ href, icon }) => (
    <Link href={href} className="text-gray-700 hover:text-purple-700">
      {icon}
    </Link>
  );

export default SocialLink;