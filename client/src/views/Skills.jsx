import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={
        darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20" id="skills">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Skills
        </h2>
        <div className="">
          <h4 className="mt-16 text-3xl font-semibold text-blue-500">
            Technologies and Tools
          </h4>
          <p
            className={
              darkMode
                ? "mt-4 text-xl text-justify text-gray-500"
                : "mt-4 text-xl text-justify text-white"
            }
          >
            Using a combination of cutting-edge technologies and reliable
            open-source software, I build user-focused, performant apps and
            websites for smartphones, tablets, and desktops.
          </p>
          <div className="flex flex-wrap mt-8 justify-between">
            {techStack.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
