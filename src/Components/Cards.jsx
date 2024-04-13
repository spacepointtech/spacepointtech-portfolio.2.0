import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Modal from "./Modal";

const Cards = ({ title, imgSrc, index, clientDemoLink, projectKey }) => {
  const [showModal, setShowModal] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleShowProject = () => {
    if (clientDemoLink) {
      window.open(clientDemoLink, "_blank", "noopener noreferrer");
    } else {
      setShowModal(true);
      document.body.classList.add("overflow-hidden");
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
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

  return (
    <>
      <motion.div
        ref={ref}
        className="flex justify-center items-center flex-col border border-gray-300 dark:border-gray-500 rounded-3xl p-20 m-10 gap-5 hover:shadow-md"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        whileHover={hoverVariants}
        onClick={handleShowProject}
      >
        <picture className="flex justify-center items-center">
          <motion.img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          />
        </picture>
        <h2 className="font-black leading-none text-fadeMainTheme text-xl mt-3 font-bebas-neue">
          {title}
        </h2>
      </motion.div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} projectKey={projectKey} />
      )}
    </>
  );
};

export default Cards;
