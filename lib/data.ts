import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "Before College After JEE Mains (Entrance Exam)",
    location: "REVA UNIVERSITY",
    description: "Learned Python and developed a game using Python. Also, learned GIT and pushed the project on GITHUB.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "1st Semester",
    location: "REVA UNIVERSITY",
    description: "Learned C++ and excelled in competitive programming, achieving a 2-star rating on CodeChef. CGPA: 8.43.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "2nd Semester",
    location: "REVA UNIVERSITY",
    description: "Explored JAVA, solved over 20 medium-level problems on recursion and arrays using JAVA on Pepcoding. CGPA: 8.7.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "3rd Semester",
    location: "REVA UNIVERSITY",
    description: "Mastered LinkedList, Hashing, Binary Trees, Binary Search Trees, Stack, and Queues in C++ on Pepcoding. Solved over 70 questions on YouTube. CGPA: 8.89.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "4th Semester",
    location: "REVA UNIVERSITY",
    description: "Explored Binary Search, Graphs and Dynamic Programming, solved over 100 medium-level problems on GFG and 20+ mediums on Pepcoding. Learned JavaScript, developed a mini project using HTML, CSS, and JS. Explored React.js, built 3 minor projects. Learned basics of Node.js and MongoDB. CGPA: 7.8.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "5th Semester",
    location: "REVA UNIVERSITY",
    description: "Developed a fully functional E-Commerce project. CGPA: 8.5.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "6th Semester",
    location: "REVA UNIVERSITY",
    description: "Currently learning Next.js and developing several projects using Next.js.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;



export const projectsData = [
  {
    title: "Tensen-E-Mart",
    description:
      "This is a fully functional E-Commerce project",
    tags: ["React", "MongoDB", "Bootstrap", "Node.js", "Express", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "GITHUB-LITE",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Tensen-E-Corp",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Todo",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Redux",
  "Express",
  "Git",
  "MongoDB",
  "Framer Motion",
  "C++",
  "Prisma",
  "SQL",
] as const;
