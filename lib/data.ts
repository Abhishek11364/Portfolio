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
  // Removed Certifications link
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// Removed certificationsData
export const projectsData = [
  {
    title: "QueryPDF",
    description:
      "A SAAS product with an AI powered chatbot which allows user to interact with PDFs by asking questions and letting intelligent bot provide relevant insightful answers",
    tags: ["Next.js", "TypeScript", "Trpc", "Prisma", "Pinecone", "Tailwind"],
    imageUrl: QueryPDF,
    link: "https://query-pdf.vercel.app/",
  },
  {
    title: "Bhookh Lagi Hai?",
    description:
      "Developed a high-performance and responsive food ordering app, leveraging Swiggy’s live API to deliver real-time data to users",
    tags: [
      "React",
      "React-Router",
      "Redux-Toolkit",
      "Javascript",
      "Tailwind",
      "DaisyUI",
      "Jest",
    ],
    imageUrl: BhookhLagiHai,
    link: "https://bhookh-lagi-hai.vercel.app/",
  },
  {
    title: "Slima",
    description:
      "Developed a scalable and performant video streaming app powered by Live Youtube Api",
    tags: ["React", "React", "React-router", "Redux-toolkit", "Tailwindcss"],
    imageUrl: Slima,
    link: "https://github.com/Devanshjain2110/Slima",
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "Java",
  "Trpc",
  "zod",
  "Framer Motion",
  "Tailwind",
  "shadcn",
  "daisyui",
  "jest",
  "JavaScript",
  "KindeAuth",
  "Resend",
  "Firebase",
  "Git",
  "Redux Toolkit",
  "HTML",
  "CSS",
] as const;
