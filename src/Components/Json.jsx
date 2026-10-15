import pr from "../assets/prphoto.png";
import ck from "../assets/projectpic/rgphoto.png";
import gta from "../assets/projectpic/gtaphoto.png";
import bank from "../assets/projectpic/bank.png";

const rec = [
  {
    id: 1,
    title: "Cloud Kitchen Website",
    category: "Web Development",
    description:
      "Developed a cloud kitchen platform with real-time cart, live location via APIs, and GSAP animations, achieving 30% faster load times and 40% higher user engagement.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: ck,
    link: "https://rasoeefrontend.vercel.app/",
  },
  {
    id: 2,
    title: "Grand Theft Auto VI (GTA-VI) Themed Animated Website",
    category: "Web Development",
    description:
      "Built a GTA VI-inspired animated site using React, GSAP, and ScrollTrigger, featuring cinematic visuals, smooth scroll animations, and an interactive experience reflecting Rockstar's iconic style.",
    technologies: ["React", "Tailwind CSS", "GSAP"],
    image: gta,
    link: "https://react01-sooty.vercel.app/",
  },
  {
    id: 3,
    title: "Parking Analysis & Management System",
    category: "Web Development",
    description:
      "A full-stack application that records vehicle entries, calculates parking fees, generates receipts, stores data in a database, and provides analytics dashboards for tracking revenue, vehicle types, and parking usage.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: pr,
    link: "https://github.com/Tejas24003/parking_receipt-",
  },

  {
  "id": 4,
  "title": "Back-End Ledger",
  "category": "Web Development",
  "description": "Developed a backend ledger API using Node.js, Express.js, and MongoDB to manage bank account records. Implemented RESTful endpoints for creating and managing accounts, storing user references, account status, currency, and timestamps. Tested API requests and responses using Postman.",
  "technologies": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "Postman"
  ],
  "image": bank,
  "link": "YOUR_GITHUB_REPOSITORY_LINK"
},
];

export default rec;