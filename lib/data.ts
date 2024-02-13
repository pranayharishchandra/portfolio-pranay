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
    title: "Before College After KCET (Entrance Exam)",
    location: "",
    description: "Learned <b>Python</b> and developed a game using Python. <br/>Also, learned <b>GIT</b> and pushed the project on GITHUB.",
    icon: React.createElement(LuGraduationCap),
    date: "October 2021 - December 2021",
  },
  {
    title: "1st Semester",
    location: "",
    description: "Learned <b>C++</b> and excelled in competitive programming,solved <b>over 50</b> problems and achieving a <b>2-star rating on CodeChef</b>. <i>CGPA: 8.43</i>",
    icon: React.createElement(LuGraduationCap),
    date: "January 2022 - April 2022",
  },
  {
    title: "2nd Semester",
    location: "",
    description: "Explored <b>JAVA</b>, solved <b>over 40</b> medium-level problems on <b>Array and Recursion</b> using JAVA on Pepcoding. <i>CGPA: 8.7</i>",
    icon: React.createElement(LuGraduationCap),
    date: "May 2022 - August 2022",
  },
  {
    title: "3rd Semester",
    location: "",
    description: "Mastered <b>LinkedList, Hashing, Binary Trees, Binary Search Trees, Stack, and Queues</b> in C++ on Pepcoding. <br/>Solved over 60 questions on YouTube. <i>CGPA: 8.89</i>",
    icon: React.createElement(LuGraduationCap),
    date: "September 2022 - January 2023",
  },
  {
    title: "4th Semester",
    location: "",
    description: "Explored <b>Binary Search, Graphs and Dynamic Programming</b>, solved <b>over 100</b> medium-level problems on GFG and 20+ mediums on Pepcoding. <i>CGPA: 7.8</i>",
    icon: React.createElement(LuGraduationCap),
    date: "February 2023 - August 2023",    
  },
  {
    title: "2 Months Summer Break",
    location: "",
    description: "Learned <b>JavaScript, Tailwind</b>, developed a mini project using HTML, CSS, and JS.<br/>Explored <b>React.js</b>, built 3 minor projects using React.js. <br/>Learned basics of <b>Redux, Node.js and MongoDB</b>.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2023 - September 2023",    
  },
  {
    title: "5th Semester",
    location: "",
    description: "Developed <b>Tensen-E-Mart</b> a fully functional <b>E-Commerce</b> project. <i>CGPA: 8.5</i>",
    icon: React.createElement(LuGraduationCap),
    date: "October 2023 - January 2024",
  },
  {
    title: "6th Semester",
    location: "",
    description: "Currently learning <b>Next.js</b> and developing several projects using Next.js.",
    icon: React.createElement(LuGraduationCap),
    date: "February 2024 - Current",
  },
] as const;



export const projectsData = [
  {
    title: "Tensen-E-Mart",
    description:
      "This is a fully functional E-Commerce project with Admin special admin features.",
    tags: ["React", "MongoDB", "Bootstrap", "Node.js", "Express", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "GITHUB-LITE",
    description:
      "The find the prople with their GitHub username and check their 10 latest repos.",
    tags: ["React"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Tensen-E-Corp",
    description:
      "This app enables the user store the snippet in the database and can edit and delete the snippet.",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Todo",
    description:
      "Todo app where you can add, delete, edit, filter your tasks. This app have crousel opening one at a time and have dark mode.",
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
