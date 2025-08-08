import pr from '../assets/prphoto.png'
import ck from '../assets/projectpic/rgphoto.png'
import gta from '../assets/projectpic/gtaphoto.png'

const rec = [
  {
    id: 1,
    title: "Cloud Kitchen Website",
    description: "Developed a cloud kitchen platform with real-time cart, live location via APIs, and GSAP animations, achieving 30% faster load times and 40% higher user engagement.",
   technologies: [" React,", "Tailwind CSS ,", "Firebase"],
    image: ck,
    link: "https://rasoeefrontend.vercel.app/",
  },
    {
    id: 3,
    title: "Parking Analysis & Management System",
    description:`Developed a full-stack parking management and analytics system using PHP, SQL, and Google Charts.
The application features a secure admin login with session handling to restrict sensitive operations. Admins can record vehicle details, including owner name, vehicle type, number plate, entry time, and planned parking duration. The system automatically calculates the total amount based on the time parked, generates a real-time printable receipt, and stores all transactions in the database.

 For analytics, Google Charts visualizes key insights such as vehicle type distribution, monthly revenue trends, and peak-hour occupancy patterns. This enables data-driven decision-making for optimizing parking space allocation, predicting busy periods, and improving revenue management. The platform is designed to be scalable, with features adaptable to user feedback and operational needs.`,
     technologies: [" HTML ,", "CSS ,", "JavaScript ,", "PHP ,", "MySQL"],
    image: pr,
    link: "https://github.com/Tejas24003/parking_receipt-",
  },
  {
    id: 2,
    title: "Grand Theft Auto VI (GTA-VI) Themed Animated Website",
    description:" Built a GTA VI–inspired animated site using React, GSAP, and ScrollTrigger, featuring cinematic visuals, smooth scroll animations, and an interactive experience reflecting Rockstar’s iconic style.",
    technologies: ["React ,","Tailwind ," ,"Gsap"],
    image: gta,
    link: "https://react01-sooty.vercel.app/",
  },

];

export default rec;
