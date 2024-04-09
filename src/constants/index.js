import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  Bootstrap,
  estate,
  java,
  express,
  git,
  github,
  html,
  motion,
  mui,
  typescript,
  Ethereum,
  javascript,
  linkedin,
  kubernetes,
  mongodb,
  nextjs,
  nodejs,
  Solidity,
  pricewise,
  react,
  redux,
  jira,
  sass,
  linux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  Blockchain,
 
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
      },
    {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: Bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: Blockchain,
    name: "Blockchain",
    type: "Fronted",
  },
  {
    imageUrl: Solidity,
    name: "Solidity",
    type: "Smart-Contract",
  },
  {
    imageUrl: Ethereum,
    name: "Ethereum",
    type: "Frontend",
  },
 
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
 
 
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
 
  {
    imageUrl: java,
    name: "java",
    type: "Frontend",
  },
  {
    imageUrl: jira,
    name: "Jira",
    type: "Bug Tracking Tool",
  },
  {
    imageUrl: kubernetes,
    name: "kubernetes,",
    type: "Bug Tracking tool",
  },
  {
    imageUrl: linux,
    name: "Linux",
    type: "Operating system",
  },



];
// export const skill = [
 
//     {
//         imageUrl: java,
//         name: "java",
//         type: "Frontend",
//     }
// ];

export const experiences = [
  {
    title: "React Developer",
    Desigantion: "Internship",
    company_name: "Prodigy Infotech",
    icon: starbucks,
    iconBg: "#accbe1",
    date: " January  2024 - February 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack  Developer",
    company_name: "Bharat Intern",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "February 2024 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js,  Node.js , Express.js and MongoDb and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // },
  {
      title: "Full Stack Web Developer",
      company_name: "Slash Mark IT Startup",
      icon: shopify,
      iconBg: "#b7e4c7",
      date: "March 2024 - June 2024",
      points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
      ],
  },
  // {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/Contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/aman7732",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/aman-mishra-80a09b274/?originalSubdomain=in",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
