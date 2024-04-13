import { MainLogo } from "../Assets/AssetsList";
import NavItems from "../Utils/NavItems";
import { Link as ScrollLink } from "react-scroll";
import scrollToTopUtil from "../Utils/ScrollToTop";

import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const SocialIcons = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex items-center space-x-7 my-5"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={iconVariants}
    >
      <motion.a
        href="www.linkedin.com/in/spacedev-yash/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-4xl text-blue-600" />
      </motion.a>
      <motion.a
        href="https://github.com/spacepointtech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-4xl text-gray-800 dark:text-white" />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/yash__.01?igsh=MXhleHFzemRpOHN2bg=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-4xl text-pink-500" />
      </motion.a>
     
    </motion.div>
  );
};
const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-2 flex flex-col items-center justify-center">
        <div className="flex justify-center items-center flex-col">
          {MainLogo}
          <ul className="flex flex-wrap items-center mb-2 gap-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {NavItems.map((items, index) => (
              <li key={index}>
                <ScrollLink
                  activeClass="active"
                  to={items.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={300}
                  className="font-medium tracking-wide text-gray-700 dark:text-lightText transition-colors duration-200 hover:text-fadeMainTheme cursor-pointer hover:underline"
                >
                  {items}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        <SocialIcons />
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />
        <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center items-center mb-2">
          © {new Date().getFullYear()}{" "}
          <ScrollLink
            to="/"
            onClick={() => scrollToTopUtil()}
            className="ml-1 hover:underline"
          >
            Spacepoint Tech (Yash Wamane)
          </ScrollLink>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
