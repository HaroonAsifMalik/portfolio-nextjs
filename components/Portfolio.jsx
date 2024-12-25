import Image from "next/image";

const Portfolio = ({ cards }) => {
  return (
    <div className="py-12 px-6 bg-dark_bg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-secondary shadow-lg rounded-lg p-12 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16">
              <Image
                src={card.logo}
                alt={`${card.title} logo`}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-600">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
