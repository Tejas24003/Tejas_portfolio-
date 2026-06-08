import pr from '../assets/prphoto.png'
import ck from '../assets/projectpic/rgphoto.png'
import gta from '../assets/projectpic/gtaphoto.png'


const rec = [
  {
    id: 1,
    title: "Cloud Kitchen Website",
    description: "Developed a cloud kitchen platform with real-time cart, live location via APIs, and GSAP animations, achieving 30% faster load times and 40% higher user engagement.",
   technologies: ["Html",",","CSS",",","Javascript",",","Gsap"],
    image: ck,
    link: "https://rasoeefrontend.vercel.app/",
   
  },
   {
    id: 2,
    title: "Grand Theft Auto VI (GTA-VI) Themed Animated Website",
    description:" Built a GTA VI–inspired animated site using React, GSAP, and ScrollTrigger, featuring cinematic visuals, smooth scroll animations, and an interactive experience reflecting Rockstar’s iconic style.",
    technologies: ["React ,","Tailwind ," ,"Gsap"],
    image: gta,
    link: "https://react01-sooty.vercel.app/",
    
  },
    {
    id: 3,
    title: "Parking Analysis & Management System",
    description:"A full-stack application that records vehicle entries, calculates parking fees, generates receipts, stores data in a database, and provides analytics dashboards for tracking revenue, vehicle types, and parking usage.",
    technologies: [" HTML ,", "CSS ,", "JavaScript ,", "PHP ,", "MySQL"],
    image: pr,
    link: "https://github.com/Tejas24003/parking_receipt-",
  },


];

export default rec;
