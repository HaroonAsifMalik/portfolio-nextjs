import TechStack from "./TechStack";
import FrameworkBlock from "./FrameworkBlock";
import frameworkIcons from "@data/frameworkIcons";
import technologies from "@data/technologies";

const Technologies = () => {
  return (
    <section className="bg-secondary text-white flex flex-col items-center py-12">
      
        <h2 className="text-5xl font-bold text-primary mb-4">Technologies</h2>
        <p className="text-xl mb-8 text-center max-w-3xl px-4 text-black">
          I create applications using the following technologies:
        </p>
        {Object.entries(technologies).map(([category, techList]) => (
          <div className="w-full max-w-[75%] flex justify-start space-x-4 my-2">
            <TechStack category={category} />
            <div className="flex flex-wrap space-x-2">
              {techList.map((tech) => (
                <FrameworkBlock
                  key={tech}
                  name={tech}
                  icon={frameworkIcons[tech]}
                  textColor="text-white"
                  borderColor="border-primary"
                />
              ))}
            </div>
          </div>
        ))}
    </section>
  );
};

export default Technologies;
