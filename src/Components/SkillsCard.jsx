import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const SkillsCard = ({ imgSrc, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      rotateY: 10,
      boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="flex justify-center items-center flex-col border border-gray-300 dark:border-gray-500 dark:bg-gray-200 rounded-3xl w-60 lg:m-10 hover:shadow-md h-60 "
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      whileHover={hoverVariants}
    >
      <picture className="flex justify-center items-center p-10">
        <motion.img
          src={imgSrc}
          alt="skills"
          className="w-10/12 h-10/12 "
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        />
      </picture>
    </motion.div>
  );
};

export default SkillsCard;
