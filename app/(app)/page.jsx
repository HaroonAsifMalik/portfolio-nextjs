import HeroSection from '@components/Hero'
import Technologies from '@components/Technologies'
import Feature from '@components/Feature';
import Portfolio from '@components/Portfolio';

const portfolioCards = [
  {
    logo: "/assets/images/logo1.png",
    title: "Web Development",
    text: "Building responsive and functional websites tailored to your needs."
  },
  {
    logo: "/assets/images/logo2.png",
    title: "Mobile Apps",
    text: "Creating intuitive and engaging mobile applications for all platforms."
  },
  {
    logo: "/assets/images/logo3.png",
    title: "Cloud Solutions",
    text: "Leveraging the power of the cloud to enhance your business operations."
  },
  {
    logo: "/assets/images/logo4.png",
    title: "UI/UX Design",
    text: "Designing user-friendly interfaces with a focus on excellent user experience."
  },
];


const featuresData = [
  {
    textFirst: true,
    textContent: {
      title: "Salesforce CRM",
      paragraphs: [
        "At MicroPyramid, we recognize the pivotal role of Customer Relationship Management (CRM) in successfully managing interactions with your current and prospective clients. Our Salesforce services provide bespoke solutions to cater to the unique challenges your growing business may face.",
        "Salesforce CRM, a premier cloud-based solution, tracks every customer interaction across various touchpoints, including your website, emails, phone calls, and social media platforms. This robust platform is designed to cater to your unique industry needs and boost operational efficiency."
      ],
      services: [
        "Salesforce Sales Cloud Customization",
        "Salesforce Service Cloud Customization",
        "AppExchange Applications Development",
        "Site.com Application Development",
        "Salesforce Pharmaceutical CRM",
        "Salesforce Insurance CRM",
        "Salesforce Hospitality CRM",
      ]
    },
    imageSrc: "/assets/images/1.webp"
  },
  {
    textFirst: false,
    textContent: {
      title: "Web & Mobile Application Development Services",
      paragraphs: [
        "Innovative Web Application Development At Micropyramid, we are a team of seasoned custom software developers, specializing in creating dynamic and real-time web applications, robust APIs, efficient content management systems, and comprehensive e-commerce solutions",
        "Extensive Technical Expertise Our skill set encompasses a wide range of tools and technologies, including Python, Django, Flask, ReactJS, Angular, Node.js, Express.js, Wagtail, Elastic Search, Ansible, Docker, Amazon Web Services (AWS), PostgreSQL, MySQL, and MongoDB. We leverage these technologies to deliver high-quality and scalable custom solutions."
      ],
      services: [
        "SaaS and Cloud Computing: Delivering efficient, cloud-based solutions",
        "CRM & ERP Systems: Creating tools to streamline business processes",
        "E-Commerce Solutions: Building seamless online transaction platforms",
        "Banking and Finance Solutions: Providing robust, secure financial systems",
      ]
    },
    imageSrc: "/assets/images/2.webp"
  },
  {
    textFirst: true,
    textContent: {
      title: "Web Design and User Experience Solutions",
      paragraphs: [
        "Intuitive Web Design & Engaging User Experiences Our proficient design team specializes in crafting visually stunning and user-friendly digital interfaces. We adhere to user-centered design principles to ensure the creation of simple, delightful, and immersive user experiences.",
        "Our objective: To deliver intuitive design solutions that effectively bridge the gap between businesses and their customers.",
        "Beyond Aesthetics - Driving Business Success At Micropyramid, we understand that web design is more than just creating appealing visuals. Our designs are crafted with strategic intent to offer practical business solutions. We help your brand stand apart from the competition and create lasting impressions."
      ],
      services: [
        "Product Design: Balancing business objectives with user needs.",
        "UX Design: Building seamless, engaging user experiences.",
        "UI Design: Crafting visually appealing, modern interfaces.",
        "Brand Identity: Shaping and communicating unique brand identities.",
        "Prototyping: Bringing design concepts to life with high-fidelity prototypes.",
      ]
    },
    imageSrc: "/assets/images/3.webp"
  },
  {
    textFirst: false,
    textContent: {
      title: "Unparalleled Cloud and DevOps Expertise",
      paragraphs: [
        "High-Performance Cloud Solutions",
        "Our certified team designs secure, scalable, and high-performing web and mobile applications, maximizing user satisfaction and ROI.",
        "Wide-Ranging Cloud Services",
        "We provide top-tier cloud services across AWS, Google Cloud, and Azure platforms, expertly aligning them with your application's needs. Scalability and Load Balancing",
        "Our specialists use Kubernetes, Jenkins, and effective CI/CD pipelines to seamle",
      ],
      services: [
        "Infrastructure Planning and Management",
        "Security and High Availability",
        "load balancing and auto scaling",
        "DevOps",

      ]
    },
    imageSrc: "/assets/images/3.webp"
  },
  {
    textFirst: true,
    textContent: {
      title: "Mobile App Development",
      paragraphs: [
        "Versatile Mobile App Development",
        "Micropyramid crafts tailored Android and iOS apps, leveraging cutting-edge technologies like Flutter and React Native. Our robust, scalable solutions deliver across platforms, catering to businesses of all sizes.",
        "Powerful Apps with Flutter & React Native",
        "We utilize advanced practices and tools like Dart and JavaScript to streamline development, ensuring high-performance, intuitive, and user-friendly applications that elevate your business.",
      ],
      services: [
        "React Native",
        "Android App Development",
        "iOS App Development",
        "Hybrid Apps (Ionic & PhoneGap)",
        "Flutter",
      ]
    },
    imageSrc: "/assets/images/3.webp"
  }
];


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
