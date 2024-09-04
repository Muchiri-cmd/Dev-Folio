import {
  mainlogo,
  ecom_img,
  weather_app,
  finance_app,
  todo_app,
  crm,
  kiit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  { title: "Software Development", icon: "fas fa-code" },
  { title: "Web Development", icon: "fas fa-laptop-code" },
  { title: "Mobile Development", icon: "fas fa-mobile-alt" },
  { title: "CopyWriting", icon: "fas fa-pen-nib" }
];

const technologies = [
  { name: "HTML 5", icon: "devicon-html5-plain"},
  { name: "CSS 3", icon: "devicon-css3-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Django", icon: "devicon-django-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "React JS", icon: "devicon-react-original" },
  { name: "Node JS", icon: "devicon-nodejs-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "SQL", icon: "devicon-mysql-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain" },
  { name: "Linux", icon: "devicon-linux-plain" }
];

const experiences = [
  {
    title: "FullStack Developer",
    company: "Davis Develops (freelance)",
    icon: mainlogo,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Developing and maintaining custom software projects, focusing on scalable and efficient solutions for various clients.",
      "Collaborating closely with clients,developers and designers to deliver high-quality software solutions.",
      "Managing full project lifecycles from initial concept to final delivery, ensuring that projects are completed on time and within budget.",
      "Providing ongoing maintenance and support for existing projects, including troubleshooting and bug fixes.",
    ],
  },
  {
    title: "Backend (Django) Developer",
    company: "KIIT College",
    icon: kiit,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Assisting in the development and maintenance of a project management system using Django, focusing on backend functionalities.",
      "Collaborating with a team of developers and a project manager to contribute to the creation of a project management application.",
      "Implementing and testing backend features and integration with the frontend."
    ],
  },
];


const projects = [
  {
    name: "Ecommerce Platform",
    description:
      "Web-based platform that allows users to browse,search,filter products, add them to a cart, and complete the checkout process.",
    technologies :[
      { name: "django"},
      { name: "bootstrap"},
      { name: "javascript"},
      { name: "postgresql"},
    ],
    image: ecom_img,
    code_repo: "https://github.com/Muchiri-cmd/Ecom-Store",
  },
  {
    name: "Customer Relationship Management System",
    description:
      "Web-based platform that allows users to add and manage customer(leads) information, track interactions, and generate reports.",
    technologies :[
      { name: "django"},
      { name: "javascript"},
      { name: "postgresql"},
    ],
    image: crm,
    code_repo: "https://github.com/Muchiri-cmd/SolarCRM",
  },
  {
    name: "Finance App",
    description:
      "Web-based platform that allows users to manage finances, including tracking expenses, setting budgets and generating reports.",
    technologies :[
      { name: "django"},
      { name: "bootstrap"},
      { name: "javascript"},
      { name: "postgresql"},
    ],
    image: finance_app,
    code_repo: "https://github.com/Muchiri-cmd/Finance-App",
  },
  {
    name: "Weather App",
    description:
      "Web-based platform that allows users to check the weather forecast for a specific location.",
    technologies :[
      { name: "Html"},
      { name: "CSS"},
      { name: "javascript"},
      { name: "API"},
    ],
    image: weather_app,
    code_repo: "https://github.com/Muchiri-cmd/Weather-App/",
  },
  {
    name: "Todo List",
    description:
      "Web-based platform that allows users to create, edit, and delete tasks in a todo list.",
    technologies :[
      { name: "Html"},
      { name: "CSS"},
      { name: "javascript"},
    ],
    image: todo_app,
    code_repo: "https://github.com/Muchiri-cmd/Todo-List",
  },
  
];

export { services, technologies, experiences, projects };