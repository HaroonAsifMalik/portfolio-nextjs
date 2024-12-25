import Image from "next/image";

const ImageSection = ({ imageSrc }) => {
  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end px-6">
      <div className="w-full max-w-lg">
        <Image
          src={imageSrc}
          alt="Dynamic Feature Image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ImageSection;
