import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Hello! I'm a passionate and motivated MERN Full Stack Developer with a Bachelor's degree in Computer Science. I recently completed an intensive training program at GUVI, an IIT-incubated company, where I honed my skills in modern web development technologies.

              <h1 style={{ color: 'blue' }}>Education</h1>
               I graduated with a Bachelor of Science in Computer Science, acquiring a solid foundation in programming, data structures, algorithms, and software engineering principles.

               <h1 style={{ color: 'blue' }}>Experience</h1>

                During my training at GUVI, I worked on various projects, honing my skills in frontend and backend development. I collaborated with a team to build responsive and user-friendly web applications, focusing on delivering high-quality code and meeting project deadlines.

                <h1 style={{ color: 'blue' }}>Personal Traits</h1>

               I am a dedicated and fast learner, with a strong attention to detail and a passion for problem-solving. I thrive in collaborative environments and enjoy tackling challenges to achieve common goals. I am excited about the opportunity to apply my skills and contribute to innovative projects in the field of web development.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
