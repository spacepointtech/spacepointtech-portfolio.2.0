import {  useState } from "react";
import { ProjectList } from "../Utils/ProjectDetails";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Components/Button";
import { AiOutlineGithub, AiOutlineCloseCircle } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

const Modal = ({ onClose, projectKey }) => {
  const [isOpen, setIsOpen] = useState(true);


  const [singleProject] = ProjectList.filter((data) => data.key === projectKey);
  const { codeLink, demoLink, info, name, skills, youtube_url } = singleProject;

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 p-5 "
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          <div className="bg-gray-900 bg-opacity-70 w-full h-full absolute"></div>
          <motion.div
            className="px-4 py-6 md:w-1/2 lg:w-1/3 xl:w-1/5 min-w-1/2 mx-auto relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-y-scroll max-h-[500px] border border-gray-60"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="modal-title text-2xl font-bold text-fadeMainTheme">
                {name}
              </h2>
            </div>
            <div className="modal-body flex flex-col items-center">
              <p className="modal-info text-xl text-center dark:text-lightText mt-4">
                {info}
              </p>
              <div className="modal-skills mt-4">
                <h3 className="text-xl font-semibold text-fadeMainTheme text-center">
                  Skills Used:
                </h3>
                <ul className="list-disc list-inside text-lg text-center dark:text-lightText">
                  {skills?.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            {youtube_url && (
              <div className="mt-4">
                <h3 className="text-xl font-bold text-fadeMainTheme">
                  Demo Video:
                </h3>
                <iframe
                  width="560"
                  height="315"
                  src={youtube_url}
                  title={name}
                  className="w-full rounded-lg"
                  allowFullScreen
                />
              </div>
            )}
            <div className="mt-4 flex justify-around items-center">
              <Button
                btnText="View Code"
                btnIcon={<AiOutlineGithub />}
                handleOnClick={() =>
                  window.open(codeLink, "_blank", "noopener noreferrer")
                }
              />
              <Button
                btnText="View Demo"
                btnIcon={<TbWorldWww />}
                handleOnClick={() =>
                  window.open(demoLink, "_blank", "noopener noreferrer")
                }
              />
            </div>
            <div className="modal-close absolute top-2 right-2">
              <motion.button
                onClick={closeModal}
                className="text-red-500 hover:bg-red-600 rounded-full hover:text-white text-4xl"
                whileTap={{ scale: 0.9 }}
              >
                <AiOutlineCloseCircle />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
