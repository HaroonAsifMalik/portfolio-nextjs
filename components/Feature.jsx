import TextSection from "./TextSection";
import ImageSection from "./ImageSection";
import Button from "./Buttons/Button";

const Feature = ({ textFirst = true, textContent, imageSrc }) => {
  return (
    <section>

    <div className="flex flex-col md:flex-row items-center justify-between py-16 bg-primary">
      {textFirst ? (
        <>
          <TextSection textContent={textContent} />
          <ImageSection imageSrc={imageSrc} />
        </>
      ) : (
        <>
          <ImageSection imageSrc={imageSrc} />
          <TextSection textContent={textContent} />
        </>
      )}
    </div>
      </section>
  );
};

export default Feature;
