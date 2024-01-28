import React from "react";

import QueryPDF from "@/public/QueryPDF.png";
import BhookhLagiHai from "@/public/Bhookh_Lagi_Hai.png";
import Slima from "@/public/Slima.png";
import { Cloud, Laptop2 } from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Tasty Treat",
    description:
      "Developed a high-performance and responsive pizza ordering app, Payment gateway as Razopay",
    tags: ["React", "React-Router", "Redux-Toolkit", "Javascript", "EmailJs"],
    imageUrl: BhookhLagiHai,
    link: "https://pizza-delivery-app-594l.vercel.app",
  },
  {
    title: "CoinChaser",
    description:
      "Developed a Crypocurrency price tracker app using CoinGecko API",
    tags: ["React.js", "React-Router", "Chart.js", "Material ui","Firebase"],
    imageUrl: QueryPDF,
    link: "https://coin-chaser-32y4.vercel.app/",
  },

  {
    title: "ResumeForge",
    description:
      "Developed a Resume builder app using React and React-Router",
    tags: ["React", , "React-router"],
    imageUrl: Slima,
    link: "https://resume-builder-n6n8.vercel.app",
  },
  {
    title: "Projects Manager",
    description:
      "Developed a Project Manager app using React and React-Router",
    tags: ["React", , "React-router"],
    imageUrl: Slima,
    link: "https://project-manager-dusky.vercel.app/",
  },
] as const;

export const skillsData = [
  "React",

  "Tailwind",
  "Java",
  "JavaScript",
  
  
  "Firebase",
  "Git",
  "Redux Toolkit",
  "HTML",
  "CSS",
] as const;
