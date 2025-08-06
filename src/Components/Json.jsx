import pr from '../assets/prphoto.png'
import ck from '../assets/projectpic/rgphoto.png'
import gta from '../assets/projectpic/gtaphoto.png'

const rec = [
  {
    id: 1,
    title: "Cloud Kitchen Website",
    description:
      "A responsive website for a cloud kitchen allowing users to browse menus, place orders, and manage their cart with a clean and modern UI.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    image: ck,
    link: "https://cloudkitchen.tejas.dev",
  },
  {
    id: 2,
    title: "Online Sketch Gallery",
    description:
      "An online platform to showcase hand-drawn sketches with category filters and detailed views for each artwork.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: gta,
    link: "https://sketch.tejas.dev",
  },
  {
    id: 3,
    title: "GTA Replica Website",
    description:
      "A replica of GTA’s website with animations using GSAP and structured in React, focusing on performance and user interaction.",
    technologies: ["React", "GSAP", "Tailwind CSS"],
    image: pr,
    link: "https://gtareplica.tejas.dev",
  },
];

export default rec;
