// Experience images
import capgemini from "../assets/images/logos/capgemini-logo.png";

// Education images
import teclab from "../assets/images/logos/teclab-logo.png";
import soyhenry from "../assets/images/logos/soyHenry-logo.jpeg";
import instsc from "../assets/images/logos/santa-catalina-logo.png";

// Certifications images
import cert1 from "../assets/certificates/Certificado Full Stack Web Developer.png";
import cert2 from "../assets/certificates/Certificado Full Stack UTN.png";
import cert3 from "../assets/certificates/Certificado Front End.png";
import cert4 from "../assets/certificates/Certificado Fundamentos Agilidad.png";
import cert5 from "../assets/certificates/Git y GitHub.png";
import cert6 from "../assets/certificates/Oracle Next Education.png";
import cert7 from "../assets/certificates/Certificado SQL.png";
import cert8 from "../assets/certificates/Web Design for Web Developers.png";
import cert9 from "../assets/certificates/Solving Problems with Software.png";
import cert10 from "../assets/certificates/Meta - Version Control.png"
import cert11 from "../assets/certificates/Meta - JavaScript.png"
import cert12 from "../assets/certificates/Udemy - Clean Code.png"
import cert13 from "../assets/certificates/Udemy - TypeScript.png"
import cert14 from "../assets/certificates/AWS - Introduction AWS.png"
import cert15 from "../assets/certificates/Austral - Bootstrap.png"

// Portfolio images
import img1 from '../assets/images/portfolio1.png';
import img2 from '../assets/images/portfolio2.png';
import img3 from '../assets/images/portfolio3.png';
import img4 from '../assets/images/portfolio4.png';
import img5 from '../assets/images/portfolio5.png';
import img6 from '../assets/images/portfolio6.png';
import img7 from '../assets/images/portfolio7.png';
import img8 from '../assets/images/portfolio8.png';
import img9 from '../assets/images/portfolio9.png';

// Icons Skills
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiJqueryLogo } from 'react-icons/di';
import { DiDojo } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { SiSpring } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiSequelize } from 'react-icons/si';

import { SiGit } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { DiGithubBadge } from 'react-icons/di';
import { DiEclipse } from 'react-icons/di';
import { AiFillFileWord } from 'react-icons/ai';
import { AiFillFileExcel } from 'react-icons/ai';
import { SiVisualstudiocode } from 'react-icons/si';
import { SiIntellijidea } from 'react-icons/si';
import { SiJirasoftware } from 'react-icons/si';

import { BsLightbulbFill } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { BiTimeFive } from 'react-icons/bi';
import { FaUserTie } from 'react-icons/fa';
import { BiBrain } from 'react-icons/bi';
import { MdComputer } from 'react-icons/md';

export const experienceData = [
  {
    id: 1,
    name: "Capgemini",
    image: capgemini,
    page: "https://www.capgemini.com/ar-es/",
  },
];

export const educationData = [
  {
    id: 1,
    name: "Teclab",
    image: teclab,
    page: "https://teclab.edu.ar",
    date: "2023 - 2026",
  },
  {
    id: 2,
    name: "SoyHenry",
    image: soyhenry,
    page: "https://www.soyhenry.com",
    date: "2021 - 2022",
  },
  {
    id: 3,
    name: "Instituto Santa Catalina",
    image: instsc,
    page: "https://www.casasantacatalina.com.ar",
    date: "2016 - 2020",
  },
];

export const certificationData = [
  {
    name: "Certificado Full Stack Web Developer SoyHenry",
    url: "https://certificates.soyhenry.com/cert?id=e2153b0c-3749-4faa-9931-d006c9ea5fcc",
    img: cert1,
  },
  {
    name: "Certificado Full Stack UTN e-learning",
    url: "https://drive.google.com/file/d/1C9_B9pq1KgWJgjUOJN8qRVH-GjVEWMxf/view",
    img: cert2,
  },
  {
    name: "Certificado Front End Oracle Next Education",
    url: "https://app.aluracursos.com/degree/certificate/c8082d46-8c5c-4281-a659-e2b88d317113",
    img: cert3,
  },
  {
    name: "Certificado Fundamentos de Agilidad Oracle Next Education",
    url: "https://app.aluracursos.com/certificate/b2c272ac-6f42-4829-baf4-8b566ebf3b6c",
    img: cert4,
  },
  {
    name: "Certificado Git y GitHub Oracle Next Education",
    url: "https://app.aluracursos.com/certificate/699f7e52-9406-4799-8460-740a47721c4e",
    img: cert5,
  },
  {
    name: "Certificado Oracle Next Education",
    url: "https://app.aluracursos.com/program/certificate/d3fd56f6-f95f-4c26-98fa-4b547da83833",
    img: cert6,
  },
  {
    name: "Certificado SQL",
    url: "https://www.coursera.org/account/accomplishments/verify/Z9GXK9LH7N4M",
    img: cert7,
  },
  {
    name: "Certificado Web Design for Web Developers",
    url: "https://www.udemy.com/certificate/UC-410ff1d5-e936-4f2c-9459-8a32e7f2017c/",
    img: cert8,
  },
  {
    name: "Certificado Solving Problems with Software",
    url: "https://www.coursera.org/account/accomplishments/verify/HJEFJNYBPXYW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    img: cert9,
  },
  {
    name: "Certificado Version Control",
    url: "https://www.coursera.org/account/accomplishments/certificate/MD8T3Z5U62CX",
    img: cert10,
  },
  {
    name: "Certificado JavaScript",
    url: "https://coursera.org/share/e4516c1bd1c21599ddd8b1d41bd6ed42",
    img: cert11,
  },
  {
    name: "Certificado Clean Code",
    url: "https://www.udemy.com/certificate/UC-a94a1b11-1c9e-4822-9d8f-551cb04019b9",
    img: cert12,
  },
  {
    name: "Certificado TypeScript",
    url: "https://www.udemy.com/certificate/UC-0b02e644-b6aa-4fd6-98c3-ea46dabe1a43",
    img: cert13,
  },
  {
    name: "Certificado Introduccion AWS",
    url: "https://coursera.org/share/96c0833bd97182a204ca8b020218ca95",
    img: cert14,
  },
  {
    name: "Certificado Bootstrap",
    url: "https://coursera.org/share/1fb46d889ed7d991e4c83ef47ddae9ab",
    img: cert15,
  },
];

export const portfolioData = [
  {
    id: 1,
    image: img9,
    github: 'https://github.com/Brian-sanchez/biblioteca-java',
    demo: 'https://biblioteca-java-deploy.vercel.app'
  },
  {
    id: 2,
    image: img7,
    github: 'https://github.com/haroldnc/PF-e-commerce',
    demo: 'https://wixxer-haroldnc.vercel.app'
  },
  {
    id: 3,
    image: img8,
    github: 'https://github.com/Brian-sanchez/gcba-test',
    demo: 'https://gcba-test.vercel.app'
  },
  {
    id: 4,
    image: img5,
    github: 'https://github.com/Brian-sanchez/pi-pokemon',
    demo: 'https://pi-pokemon-frontend.vercel.app'
  },
  {
    id: 5,
    image: img6,
    github: 'https://github.com/Brian-sanchez/full-stack-test',
    demo: 'https://precious-valkyrie-e1df5b.netlify.app'
  },
  {
    id: 6,
    image: img1,
    github: 'https://github.com/Brian-sanchez/Pi-Dogs-Brian-Sanchez',
    demo: 'https://pi-dogs-frontend.vercel.app'
  },
  {
    id: 7,
    image: img4,
    github: 'https://github.com/Brian-sanchez/pi-countries',
    demo: 'https://pi-countries-frontend-87hdhew68-brian-sanchez.vercel.app'
  },
  {
    id: 8,
    image: img3,
    github: 'https://github.com/Brian-sanchez/seleccion-argentina',
    demo: 'https://brian-sanchez.github.io/seleccion-argentina/'
  },
  {
    id: 9,
    image: img2,
    github: 'https://github.com/Brian-sanchez/Portfolio',
    demo: 'https://brian-sanchez.github.io/Portfolio/'
  }
];

export const skillsData = [
  {
    id: 1,
    name: "frontend",
    dataList: [
      {
        id: 1,
        name: "HTML",
        icon: <DiHtml5 className='skills__details-icon'/>,
        experience: "advanced"
      },
      {
        id: 2,
        name: "JavaScript",
        icon: <DiJavascript1 className='skills__details-icon'/>,
        experience: "advanced"
      },
      {
        id: 3,
        name: "React",
        icon: <DiReact className='skills__details-icon'/>,
        experience: "advanced"
      },
      {
        id: 4,
        name: "CSS",
        icon: <DiCss3 className='skills__details-icon'/>,
        experience: "advanced"
      },
      {
        id: 5,
        name: "Sass",
        icon: <DiSass className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 6,
        name: "JQuery",
        icon: <DiJqueryLogo className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 7,
        name: "Dojo Toolkit",
        icon: <DiDojo className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 8,
        name: "Redux",
        icon: <SiRedux className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 9,
        name: "Bootstrap",
        icon: <SiBootstrap className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 10,
        name: "Tailwind CSS",
        icon: <SiTailwindcss className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 11,
        name: "Typescript",
        icon: <SiTypescript className='skills__details-icon'/>,
        experience: "basic"
      }
    ]
  },
  {
    id: 2,
    name: "backend",
    dataList: [
      {
        id: 1,
        name: "Node js",
        icon: <DiNodejsSmall className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 2,
        name: "Express js",
        icon: <SiExpress className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 3,
        name: "SQL",
        icon: <FaDatabase className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 4,
        name: "PostgreSQL",
        icon: <SiPostgresql className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 5,
        name: "MySQL",
        icon: <GrMysql className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 6,
        name: "Java",
        icon: <FaJava className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 7,
        name: "Spring Boot",
        icon: <SiSpring className='skills__details-icon'/>,
        experience: "basic"
      },
      {
        id: 8,
        name: "Sequelize",
        icon: <SiSequelize className='skills__details-icon'/>,
        experience: "basic"
      }
    ]
  },
  {
    id: 3,
    name: "other",
    dataList: [
      {
        id: 1,
        name: "Photoshop",
        icon: <SiAdobephotoshop className='skills__details-icon'/>,
        experience: "advanced"
      },
      {
        id: 2,
        name: "Visual Studio Code",
        icon: <SiVisualstudiocode className='skills__details-icon'/>,
        experience: "advanced"
      },
      {
        id: 3,
        name: "Eclipse",
        icon: <DiEclipse className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 4,
        name: "Jira Software",
        icon: <SiJirasoftware className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 5,
        name: "Git",
        icon: <SiGit className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 6,
        name: "GitHub",
        icon: <DiGithubBadge className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 7,
        name: "Postman",
        icon: <SiPostman className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 8,
        name: "Word",
        icon: <AiFillFileWord className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 9,
        name: "Excel",
        icon: <AiFillFileExcel className='skills__details-icon'/>,
        experience: "intermediate"
      },
      {
        id: 8,
        name: "IntelliJ",
        icon: <SiIntellijidea className='skills__details-icon'/>,
        experience: "basic"
      }
    ]
  },
  {
    id: 4,
    name: "soft",
    dataList: [
      {
        id: 1,
        title: "creative",
        icon: <BsLightbulbFill className='skills__details-icon'/>,
      },
      {
        id: 2,
        title: "teamworker",
        icon: <RiTeamFill className='skills__details-icon'/>,
      },
      {
        id: 3,
        name: "organized",
        icon: <BiTimeFive className='skills__details-icon'/>,
      },
      {
        id: 4,
        name: "responsable",
        icon: <FaUserTie className='skills__details-icon'/>,
      },
      {
        id: 5,
        name: "fast-learning",
        icon: <BiBrain className='skills__details-icon'/>,
      },
      {
        id: 6,
        name: "autodidact",
        icon: <MdComputer className='skills__details-icon'/>,
      }
    ]
  }
]
