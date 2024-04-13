import { FaBriefcase, FaGraduationCap, FaBuilding } from 'react-icons/fa';

const timelineItems = [

  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'>2022 JAN - 2022 MAY</span>,
    position: 'right',
    icon: <FaBriefcase />,
    title:     'Zummit Infolabs',
    subTitle: 'Jr. Web Developer (Intern)',
    description: 'React JS, Javascript, CSS, Node.js',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2021 - 2023 </span>,
    position: 'left',
    icon: <FaGraduationCap />,
    title: 'Savitribai Phule Pune University (P.K Technical Campus)',
    subTitle: "Bachelor's of Computer Engineering",
    description: 'Total CGPA : 8.30',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'>2019 MAY - 2019 JUN</span>,
    position: 'right',
    icon: <FaBriefcase />,
    title:     'Bitzdoor Software',
    subTitle: 'Implant Training',
    description: 'Java, Adv.Java, Database, Web Designing, JSP & Servlet',
  },
  {
    date: <span className='text-lightText md:text-darkBg dark:text-lightText'> 2017 - 2020 </span>,
    position: 'left',
    icon: <FaBuilding />,
    title: 'Pimpri Chinchwad Polytechnic',
    subTitle: 'Diploma in Information Technology',
    description: 'Percentage : 82.0%',
  },
];


export default timelineItems