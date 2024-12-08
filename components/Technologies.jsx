import TechStack from './TechStack';
import FrameworkBlock from './FrameworkBlock';

const Technologies = () => {
  return (
    <div className="min-h-screen bg-secondary text-white flex flex-col items-center py-16">
      
      {/* Header */}
      <h2 className="text-5xl font-bold text-primary mb-4">Technologies</h2>


      <p className="text-xl mb-8 text-center max-w-3xl px-4 text-black">
        I create applications using the following technologies:
      </p>

      {/* Technologies Section */}
      <div className="w-full max-w-[75%] flex justify-start space-x-4">
        
        {/* Tech Stack Block */}
        <TechStack />

        {/* Framework Blocks */}
        <div className="flex space-x-1">
          <FrameworkBlock
            name="React"
            icon="FaReact"
            color="primary"
            textColor="text-white"
            borderColor="border-primary"
          />
          <FrameworkBlock
            name="Angular"
            icon="FaAngular"
            color="primary"
            textColor="primary"
            borderColor="border-primary"
          />
          <FrameworkBlock
            name="Next.js"
            icon="FaJsSquare"
            color="primary"
            textColor="primary"
            borderColor="border-primary"
          />
          <FrameworkBlock
            name="Bootstrap"
            icon="FaBootstrap"
            color="primary"
            textColor="primary"
            borderColor="border-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
