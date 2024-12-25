import HeroSection from '@components/Hero'
import Technologies from '@components/Technologies'
import Feature from '@components/Feature';
import Portfolio from '@components/Portfolio';
import featuresData from '@data/featuresData';
import portfolioCards from '@data/portfolioCards';


const Main = () => {

  return (
    <section>
      <HeroSection />
      <Technologies />
      {featuresData.map((feature, index) => (
        <Feature
          key={index}
          textFirst={feature.textFirst}
          textContent={feature.textContent}
          imageSrc={feature.imageSrc}
        />
      ))}

      <Portfolio cards={portfolioCards} />
    </section>

  )
};
export default Main;
