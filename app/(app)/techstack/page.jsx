
const page = () => {
    const techStack = [
        { name: "Python", description: "Harness the simplicity and power of Python’s latest version for clean and efficient programming." },
        { name: "Django", description: "Revolutionizing web development with Django’s advanced and scalable features." },
        { name: "Flask", description: "Accelerating web development with Flask's lightweight and modular framework." },
        { name: "React.js", description: "Creating dynamic and responsive UIs with the flexible React.js library." },
        { name: "Kubernetes and Docker", description: "Seamless container orchestration and application management using Kubernetes and Docker." },
        { name: "TensorFlow and PyTorch", description: "Driving AI and machine learning innovation with TensorFlow and PyTorch." },
        { name: "Apache Kafka", description: "Effortlessly managing real-time data streams with Apache Kafka." },
        { name: "AWS Lambda and Google Cloud Functions", description: "Achieving infinite scalability with serverless computing using AWS Lambda and Google Cloud Functions." },
        { name: "PostgreSQL", description: "Ensuring robust relational database management with the power and flexibility of PostgreSQL." },
        { name: "Elasticsearch", description: "Delivering high-speed search capabilities with Elasticsearch." },
        { name: "Rust", description: "Combining performance, safety, and concurrency with the powerful Rust programming language." },
        { name: "TypeScript", description: "Enhancing JavaScript development with static typing via TypeScript." },
        { name: "AWS Amplify", description: "Building full-stack applications efficiently with the AWS Amplify platform." },
        { name: "Apache Spark", description: "Processing large datasets at blazing speeds with Apache Spark." },
        { name: "Node.js and Express.js", description: "Transforming server-side development with the efficiency of Node.js and Express.js." },
        { name: "Angular", description: "Building rich, modern user interfaces with the Angular framework." },
        { name: "Flutter", description: "Creating visually stunning, cross-platform mobile apps with Flutter." },
        { name: "Jenkins and GitLab CI/CD", description: "Automating and optimizing software delivery pipelines with Jenkins and GitLab CI/CD." },
        { name: "Redis", description: "Enhancing application performance through in-memory data storage and caching with Redis." },
        { name: "MongoDB", description: "Handling diverse and unstructured data effortlessly using MongoDB’s flexible schema." },
        { name: "Azure DevOps", description: "Accelerating software development with Microsoft's powerful Azure DevOps tools." },
        { name: "Ansible", description: "Streamlining deployment and configuration management with Ansible’s automation capabilities." },
        { name: "Firebase", description: "Developing high-quality apps more efficiently with the Firebase platform from Google." },
        { name: "OpenCV", description: "Empowering computer vision projects using the versatile OpenCV library." },
        { name: "Selenium", description: "Simplifying browser automation and testing with Selenium." },
        { name: "Rust and Go", description: "Harnessing system-level programming power with Rust’s performance and Go’s simplicity." },
        { name: "Jupyter Notebook", description: "Optimizing data science workflows with Jupyter Notebooks for easy experimentation." },
        { name: "Prometheus and Grafana", description: "Monitoring systems and visualizing metrics with the powerful duo of Prometheus and Grafana." },
        { name: "Webpack", description: "Optimizing JavaScript performance through efficient bundling with Webpack." },
        { name: "Sass", description: "Enhancing CSS with dynamic and reusable styles using Sass." },
        { name: "Cucumber", description: "Driving behavior-driven development with Cucumber's user-friendly testing approach." },
        { name: "Amazon Redshift", description: "Managing cloud-scale data warehouses seamlessly with Amazon Redshift." },
        { name: "Microsoft Azure Functions", description: "Leveraging event-driven serverless computing with Microsoft Azure Functions." },
        { name: "Keras", description: "Simplifying neural network design and deep learning with Keras." },
    ]

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-background py-4">
            <h1 className="text-third text-4xl font-bold my-6">Building the Future: Our Comprehensive Tech Stack</h1>
            {techStack.map((tech, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center  bg-background shadow-lg p-4 rounded-lg mb-4 transition-transform transform hover:scale-105 hover:bg-third duration-500">
                    <h2 className="text-2xl font-bold text-gray-800">{tech.name}</h2>
                    <p className="text-lg text-gray-600 ml-6">{tech.description}</p>
                </div>
            ))}
        </div>
    )
}

export default page