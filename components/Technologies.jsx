import TechStack from './TechStack';
import FrameworkBlock from './FrameworkBlock';

const technologies = {
  Frontend: ["React", "Angular", "Next", "Bootstrap"],
  Backend: ["Python", "Djnaog", "Flask", "Node.js", "Express"],
  Cloud: ["Devops", "AWS", "Azure", "Doker", "Kubernetes", "Google Clouds"],
  Mobile: ["Flutter"],
  CRM: ["Saleforce"],
};

const FrameworkIcons = {
  React: "FaReact",
  Angular: "FaAngular",
  Next: "FaJsSquare",
  Bootstrap: "FaBootstrap",
  Python: "FaPython",
  Djnaog: "FaPython",
  Flask: "FaFlask",
  "Node.js": "FaNodeJs",
  Express: "FaJsSquare",
  Devops: "FaTools",
  AWS: "FaAws",
  Azure: "FaCloud",
  Doker: "FaDocker",
  Kubernetes: "FaCloudscale",
  "Google Clouds": "FaGoogle",
  Flutter: "FaMobileAlt",
  Saleforce: "FaSalesforce",
};


const Technologies = () => {
  return (
    <div className="bg-secondary text-white flex flex-col items-center py-16">
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
                icon={FrameworkIcons[tech]}
                textColor="text-white"
                borderColor="border-primary"
              />
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Technologies;
