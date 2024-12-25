import { IoIosArrowForward } from "react-icons/io";
import Button from "./Buttons/Button";

const TextSection = ({ textContent }) => {
  const { title, paragraphs, services } = textContent;

  return (
    <div className="w-full md:w-1/2 text-white space-y-6 px-6 md:px-12">
      <h2 className="text-3xl font-semibold mb-4 text-white">{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-lg leading-relaxed text-white">
          {paragraph}
        </p>
      ))}
      <div className="text-white">
        <h3 className="font-semibold text-xl mb-2 text-third">Our services include:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-center space-x-2">
              <IoIosArrowForward className="text-third" />
              <span>{service}</span>
            </li>
          ))}
        </ul>

      </div>
      <Button text={"More detail"}/>

    </div>
  );
};

export default TextSection;
