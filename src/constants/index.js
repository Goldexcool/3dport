export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Chatting App",
    desc: "This chat application transforms the way people connect, offering features like easy friend adding, blocking, and an enhanced chatting experience. Designed to make communication smoother and more enjoyable, it redefines how users interact with each other.",
    subdesc:
      "Developed as an innovative chat application using Next.js 14, Tailwind CSS, TypeScript and Firebase, this platform is built for seamless performance and scalability, ensuring a smooth and engaging user experience.",
    href: "https://chattingappliation.vercel.app/",
    texture: "/assets/chatapp.mp4",
    logo: "/assets/chat.png",
    logoStyle: {
      backgroundColor: "#498fd7",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/JavaScript.jpg",
      },
      {
        id: 4,
        name: "Firebase",
        path: "/assets/touchicon-180-removebg-preview.png",
      },
    ],
  },
  {
    title: "Uniclique - The Student E-Commerce Platform",
    desc: "Uniclique is a comprehensive e-commerce platform designed for seamless buying and selling. Whether you're a seller looking to showcase your products or a buyer searching for the best deals, MarketHub offers a streamlined experience for all.",
    subdesc:
      "With Uniclique, sellers can easily post their goods, manage inventory, and reach a global audience. Buyers can sign up, browse diverse product categories, and make secure purchases, all powered by Next.js and the latest in e-commerce technology.",
    href: "https://uniclique.com.ng",
    texture: "/assets/uniclique.mp4",
    logo: "/assets/Frame 3logo.png",
    logoStyle: {
      backgroundColor: "#2f2f35",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.jpg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "DevLink - Centralized Work Link Management",
    desc: "DevLink is an innovative Software-as-a-Service application that enables users to seamlessly manage and organize all their important work links, from GitHub to Frontend Mentor, Twitter, and beyond. The platform allows users to consolidate their professional profiles and share them effortlessly.",
    subdesc:
      "Built with Next.js 14, Firebase, and Typescript, LinkOrganize offers an intuitive interface and robust tools for curating and sharing links. Whether for personal use or professional networking, this platform is ideal for showcasing all your important links in one place.",
    href: "https://taskfive.vercel.app/",
    texture: "/assets/devLink (3).mp4",
    logo: "/assets/projject2logo.svg",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Uniclique",
    pos: "Lead Web Developer",
    duration: "2023 - Present",
    title:
      "Uniclique is a comprehensive e-commerce platform designed for seamless buying and selling. Whether you're a seller looking to showcase your products or a buyer searching for the best deals, MarketHub offers a streamlined experience for all.",
    icon: "/assets/Frame 3logo.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "SSEDUTECHUB",
    pos: "Web Developer",
    duration: "2022 - 2023",
    title:
    "SSEDUTECHUB is a dedicated physical hub where young minds are trained in various tech skills. It serves as a hands-on learning environment, offering personalized mentorship and practical training.", 
    icon: "/assets/sse.png",
    animation: "clapping",
  },
];
