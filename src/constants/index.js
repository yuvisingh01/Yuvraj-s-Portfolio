import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  Firebase,
  SQL,
  C,
  Cpp,
  typescript,
  html,
  css,
  reactjs,
  redux,
  flutter,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  expense_tracker,
  peerChat,
  blogging_app,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C++",
    icon: Cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Yuvraj proved me wrong.",
    name: "Varsha Singh",
    designation: "Assistant Professor",
    company: "ITS Engineering College",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Dr Arun Kumar",
    designation: "Professor",
    company: "AKTU",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Yuvraj optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ashish Kumar",
    designation: "HOD-CSE",
    company: "ITS Engineering College",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Blgging App",
    description:
      "Built a robust blogging platform with React, Firebase, and React Router. Offers user authentication, real-time database storage. Demonstrating my skills in web development, authentication, and data management",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fiebase",
        color: "green-text-gradient",
      },
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
    ],
    image: blogging_app,
    source_code_link: "https://yuvisingh01.github.io/Blogging-App/",
  },
  {
    name: "PeerChat",
    description:
      "Created an advanced video calling app using HTML, CSS, and JavaScript. Utilized WebRTC and integrated Agora SDK for seamless real-time video calls. Demonstrates expertise in front-end development, real-time communication, and API integration.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
      {
        name: "WebRTC",
        color: "yellow-text-gradient",
      },
      {
        name: "AgoraSDK",
        color: "orange-text-gradient",
      },
    ],
    image: peerChat,
    source_code_link: "https://yuvisingh01.github.io/peerChat/lobby.html",
  },
  {
    name: "Trip Guide",
    description:
      "Developed a user-friendly React web app for efficient expense management, empowering users to track, categorize, and analyze their financial transactions seamlessly. Implemented interactive features and responsive design to enhance usability and overall user experience.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: expense_tracker,
    source_code_link: "https://yuvisingh01.github.io/Expense-Tracker/",
  },
];

export { services, technologies, experiences, testimonials, projects };
