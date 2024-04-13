import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Cards from "../Components/Cards";
import { ProjectList } from "../Utils/ProjectDetails";
import Title from "../Components/Title";

const Project = () => {
  const Labels = ["All"];
  const [activeLabel, setActiveLabel] = useState(Labels[0]);
  const [projects, setProjects] = useState(ProjectList);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const options = {
    // personal: ProjectList.filter((project) => !project.clientDemoLink),
    all: ProjectList,
    // client: ProjectList.filter((project) => project.clientDemoLink),
  };

  const handleFilterProjects = (label) => {
    const filtered = options[label.toLowerCase()];
    setProjects(filtered);
    setActiveLabel(label);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1 * 0.5,
      },
    },
  };


  return (
    <motion.div
      className="flex justify-center items-center flex-col p-2 mt-8 mx-auto"
      id="projects"
      initial="initial"
      animate="animate"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        ref={ref}
      >
        <Title text="Projects" />
        <div className="flex justify-center items-center gap-10 text-2xl mt-5">
          {Labels.map((item, index) => (
            <motion.h2
              key={index}
              onClick={() => handleFilterProjects(item)}
              className={
                item === activeLabel
                  ? "text-fadeMainTheme"
                  : "dark:text-lightText text-darkBg hover:text-fadeMainTheme"
              }
              style={{ cursor: "pointer" }}
            >
              {item}
            </motion.h2>
          ))}
        </div>
      </motion.div>
      <div
        className={`${
          projects.length > 2
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            : "flex justify-center items-center"
        }
        mx-auto gap-4 mt-10`}
      >
        {projects?.map((project, index) => (
          <Cards
            imgSrc={project.image}
            title={project.name}
            projectKey={project.key}
            key={project.key}
            index={index}
            demoLink={project.demoLink}
            clientDemoLink={project.clientDemoLink}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
