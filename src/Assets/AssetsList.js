// Projects
import ecommlogo from "../Assets/Project-Images/Ecommerce campaign-amico.svg";
import drivingSchoolLogo from "../Assets/Project-Images/driving school-bro.svg";
import portfolioLogo from "../Assets/Project-Images/Personal site-amico.svg";
import snapiaLogo from "../Assets/Project-Images/Building hashtag-amico.svg";
import weatherAppLogo from "../Assets/Project-Images/Weather-amico.svg";
import imdbLogo from "../Assets/Project-Images/Home cinema-amico.svg";
import loader from "../Assets/loader.svg"

// Animations
import aboutAnimation from "./Animations/AboutAnimation.json";
import contactAnimation from "./Animations/ContactAnimation.json";
import heroAnimation from "./Animations/HeroAnimation.json";
import projectAnimation from "./Animations/ProjectAnimation.json";
import skillsAnimation from "./Animations/SkillsAnimation.json";
import { Link } from "react-scroll";


// Skills

import JavaScript from '../Assets/Skills/JavaScript.svg'
import ReactJS from '../Assets/Skills/ReactJS.svg'
import Github from '../Assets/Skills/Github.svg'
import Java from '../Assets/Skills/Java.svg'
import SQL from '../Assets/Skills/SQL.svg'


// Main  Logo

export const MainLogo =
  <Link
    to="/"
    onClick={() => window.scroll(0, 0)}
    className="nav-logo font-black leading-none text-gray-800 font-bebas-neue   dark:text-lightText flex items-center ml-4 cursor-pointer  no-underline text-4xl "
  >
    Space
    <span className="r font-bebas-neue text-mainTheme text-6xl font-bold ">Point</span>
     Tech
  </Link>

// All  Projects Images

export const ECmomLogo = ecommlogo;
export const DrivingSchoolLogo = drivingSchoolLogo;
export const PortfolioLogo = portfolioLogo;
export const SnapiaLogo = snapiaLogo;
export const WeatherAppLogo = weatherAppLogo;
export const IMDBLogo = imdbLogo;
export const Loader = loader;

// All Animations

export const AboutAnimation = aboutAnimation;
export const ContactAnimation = contactAnimation;
export const HeroAnimation = heroAnimation;
export const ProjectAnimation = projectAnimation;
export const SkillsAnimation = skillsAnimation;

// All Skills
export const JavaScriptLogo = JavaScript
export const ReactJSLogo = ReactJS
export const GithubLogo = Github
export const JavaLogo = Java
export const SQLLogo = SQL

