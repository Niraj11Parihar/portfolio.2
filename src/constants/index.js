import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import epochLag1 from "../assets/projects/EpochLag/1.jpg";
import epochLag2 from "../assets/projects/EpochLag/2.jpg";
import epochLag3 from "../assets/projects/EpochLag/3.jpg";
import epochLag4 from "../assets/projects/EpochLag/4.jpg";
import epochLag5 from "../assets/projects/EpochLag/5.jpg";

export const HERO_CONTENT = `I am a passionate and driven Full Stack & React Native developer with a strong focus on crafting scalable and responsive web & mobile applications. With hands-on experience in both front-end and back-end technologies such as React.js, Node.js, Express.js, MySQL, and MongoDB, I strive to build user-centric solutions that deliver excellent performance and user experiences. My goal is to leverage my skills to create innovative web applications that meet business needs and exceed user expectations.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack & React Native developer with a passion for creating efficient and user-friendly web & mobile applications. With experience in technologies such as React & React Native, Node.js, MySQL, and MongoDB, I thrive in dynamic environments and enjoy solving complex problems. My journey in web development began with a deep curiosity for how things work, which has evolved into a career where I continuously strive to learn and adapt to new challenges. As a quick learner, I am always ready to pick up new skills and technologies to enhance my abilities. Outside of coding, I enjoy exploring new technologies and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "October 19, 2025 - April 25, 2026",
    role: "React Native Developer",
    company: "Epoch Lag – Premium Social Storytelling App",
    description: `Built high-performance iOS/Android app from Figma designs featuring block-based story editor, gesture-driven UX, and optimized media rendering with multi-stack navigation (Tabs/Drawer/Modals) without back glitches. Achieved 60fps smooth animations & transitions while ensuring consistent cross-platform UX across Android and iOS. Implemented complex state management with Redux, background sync, and fixed critical issues like reload flashes, jumps, and gesture conflicts. Delivered production-ready app supporting long-form stories with text, image, video, and audio content with a scalable architecture for collaborative threads and private albums.`,
    skills: ["React Native", "Mobile App Development", "Redux", "Expo.io", "TypeScript"],
  },
  {
    year: "January 2025 - March 2025",
    role: "Full Stack Developer",
    company: "Solvify Tech",
    description: `Worked as a Full Stack Developer at Solvify Tech, where I was involved in developing and maintaining web applications using a modern tech stack including React, Bootstrap, Node.js, MySQL, and TypeScript. I contributed to both frontend and backend development—building responsive, user-friendly interfaces and implementing robust server-side logic. Gained hands-on experience across multiple client projects, collaborating closely with cross-functional teams to deliver efficient, scalable, and maintainable solutions.`,
  },
  {
    year: "April 2024 - June 2024",
    role: "Full Stack Developer",
    company: "Freelance",
    description: `Created a website for Aadinnath Trust, showcasing its services, donation options, and available facilities in Surat. Developed the website using HTML, CSS, Bootstrap, and JavaScript, focusing on user-friendly design and functionality. Delivered the project within the agreed timeline, ensuring client satisfaction.`,
  },
];

export const PROJECTS = [
  {
    title: "Epoch Lag – Premium Social Storytelling App",
    image: epochLag1,
    gallery: [epochLag1, epochLag2, epochLag3, epochLag4, epochLag5],
    description:
      "Built high-performance iOS/Android app from Figma designs featuring block-based story editor, gesture-driven UX, and optimized media rendering with multi-stack navigation. Achieved 60fps smooth animations & transitions with consistent cross-platform UX. Implemented complex state management with Redux and background sync. Delivered production-ready app supporting long-form stories with text, image, video, and audio content.",
    technologies: ["React Native", "Mobile Development", "Redux", "Expo.io", "TypeScript"],
    link: "#",
  },
  {
    title: "Parth Clinic",
    image: project3,
    description:
      "Developed the Parth Clinic website during my time at Solvify Tech. Worked extensively on the user interface and frontend of the admin panel, ensuring a responsive and intuitive design. Additionally, developed APIs for the admin panel to enable efficient data management and seamless communication between frontend and backend systems.",
    technologies: ["React", "Bootstrap", "Node.js", "MySQL", "TypeScript"],
    link: "https://parthclinic.com/",
  },
  {
    title: "Adinath trust",
    image: project1,
    description:
      "Developed a website for Aadinnath Trust, showcasing services, donation options, and available facilities in Surat. The site features a user-friendly interface and responsive design.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://adinath-landing-page.vercel.app/",
  },
  {
    title: "Echo Tales",
    image: project2,
    description:
      "Developed a website for Aadinnath Trust, showcasing services, donation options, and available facilities in Surat. The site features a user-friendly interface and responsive design.",
    technologies: ["React", "CSS", "Tailwind"],
    link: "https://echo-tales.vercel.app/",
  },
];



export const CONTACT = {
  address: null,
  phoneNo: "+91, 7984181051",
  email: "nirajp201icloud.com@gmail.com",
};