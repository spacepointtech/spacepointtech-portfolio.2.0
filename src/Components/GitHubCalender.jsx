import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import Title from "./Title";
import { useRef } from "react";

const GitHubCalender = () => {
  const TitleText = (
    <h1 className="text-gray-800 font-bebas-neue text-4xl dark:text-white pb-6">
      Pixels of <strong className="text-fadeMainTheme">Progress</strong>
    </h1>
  );
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const githubVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="flex justify-center items-center flex-col text-fadeMainTheme px-5">
      <Title text={TitleText} id={1} />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={githubVariants}>
          <GitHubCalendar
            username="Saurabh-8585"
            blockSize={15}
            fontSize={10}
            blockMargin={5}
            theme={{
              light: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
              dark:["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GitHubCalender;
