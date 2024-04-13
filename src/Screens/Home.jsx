import { motion, useInView } from "framer-motion";
import Button from "../Components/Button";
import LottieAnimationCard from "../Components/LottieAnimationCard";
import { HeroAnimation } from "../Assets/AssetsList";
import { HiOutlineDownload } from "react-icons/hi";
import { useRef } from "react";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const downLoadCV = () => {
    const cvLink = process.env.REACT_APP_RESUME_LINK;
    window.open(cvLink, "_blank");
  };
  return (
    <main className="relative my-10 overflow-hidden pt-24 " id="home">
      <motion.div
        ref={ref}
        className="relative z-20 flex items-center overflow-hidden "
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="container relative flex px-6  mx-auto justify-between flex-col md:flex-col lg:flex-row ">
          <motion.div
            className="relative z-20 flex flex-col sm:w-2/3  lg:w-2/5 justify-center  items-start md:gap-3 mx-auto"
            variants={textVariants}
          >
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue md:text-9xl dark:text-white">
              <span className="text-fadeMainTheme"> Coding </span>
              Dreams,   sculpting reality.
            </h1>
            <p className="text-gray-700 dark:text-white text-4xl md:px-3 mt-2">
            Shape the future; innovate in digital.
            </p>
            <motion.div variants={buttonVariants} className="flex mt-8 md:px-3">
              <Button
                btnText="Read out my Resume"
                btnIcon={<HiOutlineDownload className="text-2xl" />}
                handleOnClick={downLoadCV}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex lg:justify-end justify-center items-center my-2  md:mt-0 pb-4"
            variants={textVariants}
          >
            <LottieAnimationCard AnimationSrc={HeroAnimation} />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;
