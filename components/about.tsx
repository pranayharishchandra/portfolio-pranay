"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I am pursuing Bachelors in Technology (B. Tech) in Computer Science Engineering at REVA University. I am passionate about creating user-centric frontend experiences and mastering full-stack development. My development toolkit includes <span className="font-bold">
          MongoDB, Express, React, Node.js, Redux Tookit and JavaScript. </span>I am also experienced with TypeScript and Prisma.
      </p>

      <p className="mb-3">

        I have a strong grasp of <span className="font-bold"> Data Structures and   Algorithms (DSA)</span> and enjoy solving challenging problems in this area. <span className="font-bold"> I use C++ for Data Structures and Algorithms.</span> I have solved over <span className="font-bold">200+ medium and hard questions</span> accross various coding plateforms such as Pepcoding, Leetcode, GeeksForGeeks.
      </p>
      <p className="mb-3">
        Moreover, I have created instructional YouTube videos where I have solved 60+ DSA questions, and I have recently embarked on creating Project Tour videos on the platform.

      </p>

      <p className="mb-3">
        Outside of coding, I enjoy running, working out, watching current affairs videos, listening to music, and spending quality time with my parents and friends.
      </p>


    </motion.section>
  );
}
