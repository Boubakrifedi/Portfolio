// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Boubakri Fadi",
  logo_name: "Boubakri ()",
  nickname: "Fadou",
  full_name: "Boubakri Fadi",
  subTitle:
    "Fullstack Developer with an Embedded system background.",
  quote: "Always learning 🔥",
  resumeLink:
 "https://drive.google.com/file/d/1VjhaxO6Cs1ZBLEjo-MqO1K4BBA0jAu13/view?usp=sharing" ,
  mail: "mailto:fadiiboubakrii@gmail.com",
};

const socialMediaLinks = {
  /* Social Media Link */
  github: "https://github.com/Boubakrifedi",
  linkedin: "https://www.linkedin.com/in/boubakri-fadi-11b8a01b7/",
  gmail: "fadiiboubakrii@gmail.com",
  instagram: "https://www.instagram.com/fadiboubakri/?hl=fr",
};

const skills = {
  data: [
    {
      title: "Frontend Developer",
      fileName: "FrontendImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your website",
        "⚡ Building responsive website front end using ReactJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "dark",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        
      ],
    },
    {
      title: "Backend Developer",
      fileName: "BackendImg",
      skills: [
        "⚡ Build high-quality applications built with Node, Express, and MongoDB.",
        "⚡ Apply best practices to build fast, scalable, and secure apps.",
        "⚡ Build the back-end of a web application."
      ],
      softwareSkills: [
       
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        
       
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos-firebase",
          style: {
            color: "#ffa000",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "dark",
          },
        },
      ],
    },
    {
      title: "Technical support Technician",
      fileName: "EmbeddedSysImg",
      skills: [
        "⚡ Install, maintain or repair equipment in accordance with commitments made with customers.",
        "⚡ Diagnose any malfunctions and define the appropriate solutions.",
        "⚡ Provide strong support and expertise to customers.",
        "⚡ Identifying potential additional sales (spare parts, maintenance contracts, etc.) in agreement with the sales teams.",
      ],
      Customer: [
        {
          CustomerName: "NUTEK",
          logo_path: "Nutek.jpg",
        },
        {
          CustomerName: "Cyberoptics",
          logo_path: "Cyber.png",
        }
      ],
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "GoMyCode , Tunisia",
      subtitle: "Back-end Development ",
      logo_path: "gomycode.png",
      alt_name: "GoMyCode",
      duration: "Sep 2022 - Dec 2022",
      descriptions: [
        "⚡ Build high-quality applications built with Node, Express, and MongoDB.",
        "⚡ Apply best practices to build fast, scalable, and secure apps.",
        "⚡ Build the back-end of a web application."
      ],
      website_link: "https://gomycode.com/TN-FR/home",
    },
    {
      title: "3W Academy , Morocco",
      subtitle: "Front-end Development ",
      logo_path: "3WA.png",
      alt_name: "3WA",
      duration: "Nov 2021 - Fev 2022",
      descriptions: [
        "⚡ Develop highly interactive Front end / User Interfaces for your website",
        "⚡ Building responsive website front end using ReactJS",
      ],
      website_link: "https://3wa.ma/",
    },
    // {
    //   title: "Higher Institute of Computer Science and Mathematics of Monastir, Tunisia",
    //   subtitle: "Master in MicroElectronics and Instrumentation",
    //   logo_path: "isimm.png",
    //   alt_name: "ISIMM",
    //   duration: "2021 - Present",
    //   descriptions: [
    //     "⚡ I'm currently pursuing my master degree in µElectronics and instrumentation."
    //   ],
    //   website_link: "http://www.isimm.rnu.tn/public/",
    // },
    {
      title: "Higher Institute of Computer Science and Mathematics of Monastir, Tunisia",
      subtitle: "Bachelor in Electronics and Telecommunications",
      logo_path: "isimm.png",
      alt_name: "ISIMM",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ The mastery of information and communication technologies is the key component of this training.",
        "⚡ The training provides basic knowledge in the fields of Telecommunications and New Technologies for Embedded Systems",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "http://www.isimm.rnu.tn/public/",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship ",
  description: [
    "I've completed Internships and i'm now Working as full-time job and freelance.",
    "Always learning 🔥 ",],
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Frontend developer",
          company: "AiGot SRL",
          company_url: "https://aigot.com/",
          logo_path: "AiGot.jpg",
          duration: "Sep 2022 - present",
          location: "Remote Work",
          description: [
            "⚡ Development of Software as a Service (SaaS)",
            "⚡ Develop highly interactive Front end / User Interfaces for websites"],
          color: "#4285F4",
        },
        {
          title: "Frontend developer",
          company: "freelance",
          logo_path: "freelance.jpg",
          duration: "2021 - present",
          location: "Remote Work",
          description: [
            "⚡ Develop highly interactive Front end / User Interfaces for your website",
            "⚡ Building responsive website front end using ReactJS"],
          color: "#4285F4",
        },
        {
          title: "Technical support Technician",
          company: "GEMADDIS",
          company_url: "https://www.gemaddis.com/",
          logo_path: "gemaddis.png",
          duration: "Nov 2019 - Oct 2022",
          location: "Working between Tunisia && Morocco",
          description: [
            "⚡ Install, maintain or repair equipment in accordance with commitments made with customers.",
            "⚡ Diagnose any malfunctions and define the appropriate solutions.",
            `⚡ Provide strong support and expertise to customers specially " Valeo Vision Morocco " .`,
            "⚡ Identifying potential additional sales (spare parts, maintenance contracts, etc.) in agreement with the sales teams."
          ],
          color: "#0071C5",
        },
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "End of studies project",
          company: "MT Electronics",
          logo_path: "MT.png",
          duration: "Feb 2019 - Jun 2019",
          location: "Remote Work",
          description: [
            `⚡ Study and realization of prototype for home automation system " SMART HOUSE " `],
          color: "#4285F4",
        },
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Todo App",
      url: "https://myyytoodooapp.netlify.app/",
      description: "This is a Todo App. it will allow you to add your Todo list and to manage them by adding or deleting any item also save them into a firebase and it's hosted by netlify",
      languages: [
        {
          name: "REACT",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Netlify",
          iconifyClass: "vscode-icons:file-type-netlify",
        },
      ],
    },
    {
      id: "1",
      name: "Chat Box",
      url: "https://github.com/Boubakrifedi/Chat-Box",
      description:
        "A React Chat Box .",
      languages: [

        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "2",
      name: "Chat Box with TypeScript",
      url: "https://github.com/Boubakrifedi/Chat-Box-Typescript",
      description:
        "A React chat box with TypeScript",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "firebase",
          iconifyClass: "logos-firebase",
        },


      ],
    },
    {
      id: "3",
      name: "My Portfolio",
      url: "https://github.com/Boubakrifedi/Portfolio",
      description:
        "A Software development Portfolio .",
      languages: [

        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "4",
      name: "AiGot",
      url: "https://github.com/Boubakrifedi/AiGot",
      description:
        "Presentation App for AiGot Company.",
      languages: [

        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
{
    id: "5",
    name: "SpaceX",
    url: "https://github.com/Boubakrifedi/SpaceX",
    description:
      "Clone app for SpaceX  ",
    languages: [
      {
        name: "TypeScript",
        iconifyClass: "logos-typescript",
      },

      {
        name: "React",
        iconifyClass: "logos-react",
      },
      {
        name: "HTML5",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
      {
        name: "JavaScript",
        iconifyClass: "logos-javascript",
      },
      
    ],
  },
  {
    id: "6",
    name: "EDLIGO ",
    url: "https://github.com/Boubakrifedi/EDLIGO",
    description: "This is a Dashboard page for EDLIGO company ",
    languages: [
      {
        name: "REACT",
        iconifyClass: "logos-react",
      },
      {
        name: "HTML5",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
      {
        name: "JavaScript",
        iconifyClass: "logos-javascript",
      },
      {
        name: "Material UI ",
        iconifyClass: "logos:material-ui",
      },
    ],
  },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
