import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

//export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const HERO_CONTENT = `นักพัฒนา Web Application เพื่อส่งเสริมธุรกิจ เช่น เว็บไซต์บริษัท-ร้านค้า เว็บไซต์โปรโมทสินค้า ระบบร้านค้า E-commerce`;
//export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
export const ABOUT_TEXT = `ผมเป็นนักพัฒนา Front-End ที่หลงใหลในการสร้างแอปพลิเคชันเว็บ ด้วยการฝึกฝนทักษะและเทคโนโลยี Front-End เช่น React และ Next.js รวมถึงเทคโนโลยี back-end เช่น Node.js, MySQL และ MongoDB เพื่อมุ่งไปสู่เป้าหมายคือการเป็น Full Stack developer`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Front-End developer",
    company: "freelance.",
    description: ` รับพัฒนาเว็ปเพื่อส่งเสริมธุรกิจ ด้วยทักษะและเทคโนโลยี`,
    technologies: [ "MongoDB","Express","React.js","Node.js", "Next.js"],
  },
  {
    year: "2010 - 2013",
    role: "Technician",
    company: "Fujikura Electronics ( Thailand ) Ltd.",
    description: `ช่างซ่อมบํารุงเครื่องจักร`,
    technologies: ["Electronics"],
  }
];
export const EDUCATION = [
  {
    title: "คอร์สออนไลน์ ",
    year: "2024",
    university: "GrestStack",
    major: "full Stack E-commerce Website",
  },
  {
    title: "ปริญญาตรีวิศวกรรมศาสตร์บัณฑิต สาขาวิศวกรรมคอมพิวเตอร์",
    year: "2013 - 2016",
    university: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา",
    major: "วิศวกรรมคอมพิวเตอร์",
  },
  {
    title: "ประกาศนียบัตรวิชาชีพชั้นสูง(ปวศ)",
    year: "2008 - 2010",
    university: "วิทยาลัยเทคนิคลำพูน",
    major: "อิเล็กทรอนิกส์",
  },

  
];


export const PROJECTS = [
  {
    title: "Frontend E-commerce project",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React","Tailwimd.css", "Node.js", "MongoDB"],
    live: "https://frontend-sandy-six.vercel.app/",
    github: "https://github.com/MADGER99/frontend",
  },
  {
    title: "landing page Coffee",
    image: project2,
    description:
      "landing page Website Coffee",
    technologies: ["Next.js", "Tailwimd.css", "Node.js", "FramerMotion"],
    live: "https://madger-coffee.vercel.app/",
    github: "https://github.com/MADGER99/madger_coffee",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Next.js", "Tailwimd.css", "Node.js", "FramerMotion"],
    live: "",
    github: "",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    live: "",
    github: "",
  },
];

export const CONTACT = {
  address: " ",
  phoneNo: "(+66) 94-369-7891",
  email: "s.jantapanfx@gmail.com",
};
