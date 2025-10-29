import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Namrata Daphale",
  initials: "ND",
  url: "https://github.com/Namrata0607",
  location: "Kolhapur, MH",
  locationLink: "https://www.google.com/maps/place/kolhapur",
  description:
    "B.Tech student passionate about full-stack web development, skilled in the MERN stack, and eager to build impactful, user-friendly applications.",
  summary:
    "I&apos;m a B.Tech student passionate about full-stack web development, especially the MERN stack. I’ve worked on multiple collaborative projects, building scalable, user-friendly applications and solving real-world problems. I enjoy teamwork, exploring new technologies, and creating impactful platforms. Beyond academics, I have pursued my passion for Kathak dance, completing Visharad-1, which has taught me discipline, dedication, and creativity that I bring into my work.",
  avatarUrl: "/me.png",
  skills: [
    "Java",
    "JavaScript",
    "Python",
    "PHP",
    "C",
    "C++",
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Bootstrap",
    "Flutter",
    "Git",
    "GitHub",
    "Postman",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "namratadaphale07@gmail.com",
    tel: "+91 8421064677",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Namrata0607",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/namrata-daphale-847a13208",
        icon: Icons.linkedin,

        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/NamrataDaphale/",
        icon: Icons.LeetCode,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "#",
      //   icon: Icons.youtube,
      //   navbar: false,
      // },
      email: {
        name: "Send Email",
        url: "mailto:namratadaphale07@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "IIT Bombay EdTech Society",
      href: "https://iitbombay.edu.in",
      badges: [],
      location: "Remote",
      title: "Full Stack Web Development Intern",
      logoUrl: "/iitb.png",
      start: "June 2025",
      end: "Present",
      description:
        "During this internship, we conducted surveys to identify student learning gaps, analyzed feedback to select the most voted topic, and studied overall needs to design a solution accordingly. Building a real-time EdTech platform with live polls, quizzes, and anonymous Q&A to enhance interactive learning.",
    },
    {
      company: "INet Solutions",
      badges: [],
      href: "#",
      location: "Kolhapur, MH",
      title: "Software Trainee Intern",
      logoUrl: "/i-net-solutions.jpg",
      start: "January 2023",
      end: "February 2023",
      description:
        "During this internship, we Learned Flutter workflow, state management and designed responsive UI components for better accessibility. Developed a Flutter and Dart mobile app for online Kathak classes, enabling teachers to manage students across multiple exams on a single platform.",
    },
  ],
  education: [
    {
      school: "D.Y.Patil College of Engineering & Technology, Kolhapur",
      href: "https://coek.dypgroup.edu.in/",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "/dyp.png",
      start: "August 2023",
      end: "Present",
    },
    {
      school: "Government Polytechnic, Kolhapur",
      href: "https://www.gpkolhapur.ac.in/",
      degree: "Diploma in Information Technology",
      logoUrl: "/gpk.jpg",
      start: "August 2020",
      end: "June 2023",
    },
  ],
  projects: [
    {
      title: "Classtro",
      projectType: "Web Application",
      href: "https://www.classtro.live/",
      dates: "2024",
      active: true,
      description:
        "Building a real-time EdTech platform focused on teachers and students, featuring live polls, quizzes, anonymous Q&A, and progress tracking to enhance interactive learning. Implemented live rooms and session creation for interactive classes using session-based management to enable real-time collaboration.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JavaScript",
        "Socket.io",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.classtro.live/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/project-1/project1.png",
      images: [
        "/projects/project-1/image1.png",
        "/projects/project-1/image2.png",
        "/projects/project-1/image3.png",
        "/projects/project-1/image4.png",
        "/projects/project-1/image5.png",
      ],
      video: "",
    },
    {
      title: "Trustify",
      projectType: "Web Application",
      href: "https://trustify-mocha.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Developed a full-stack rating platform with secure authentication and role-based access using Prisma ORM and PostgreSQL, enabling users to rate stores, store owners to view ratings, and admins to manage users, stores, and analytics.",
      technologies: [
        "PostgreSQL",
        "Prisma ORM",
        "Express.js",
        "React.js",
        "Node.js",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://trustify-mocha.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/project-2/project2.png",
      images: [
        "/projects/project-2/image1.png",
        "/projects/project-2/image2.png",
        "/projects/project-2/image3.png",
        "/projects/project-2/image4.png",
        "/projects/project-2/image5.png",
      ],
      video: "",
    },
    {
      title: "GATEPrep",
      projectType: "Web Application",
      href: "https://github.com/Namrata0607/GATE-Mock-Test",
      dates: "2024",
      active: true,
      description:
        "Developed GATEPrep, a full-stack web platform for GATE aspirants, featuring subject-wise quizzes, progress tracking, and personalized dashboards. Integrated MongoDB-based user data management, and dynamic frontend with React.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JavaScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Namrata0607/GATE-Mock-Test",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/project-3/project3.jpg",
      images: [
        "/projects/project-3/image1.jpg",
        "/projects/project-3/image2.jpg",
        "/projects/project-3/image3.jpg",
        "/projects/project-3/image4.jpg",
        "/projects/project-3/image5.jpg",
      ],
      video: "",
    },
    {
      title: "DSARapid",
      projectType: "Mobile Application",
      href: "https://github.com/Namrata0607/DSARapid",
      dates: "2024",
      active: true,
      description:
        "Developed DSARapid, a comprehensive virtual lab for DSA learning with interactive topic-wise visualizers, notes, tests, and a final test featuring leaderboard integration.",
      technologies: [
        "Flutter",
        "Firebase",
        "Dart",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Namrata0607/DSARapid",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/project-4/project4.png",
      images: [
        "/projects/project-4/image1.png",
        "/projects/project-4/image2.png",
        "/projects/project-4/image3.png",
        "/projects/project-4/image4.png",
        "/projects/project-4/image5.png",
      ],
      video: "",
    },
  ],
  hackathons: [
    {
      title: "0–100 Full Stack Web Development (100xDevs)",
      dates: "2024",
      location: "Online",
      description:
        "Completed Full Stack Web Development Course – covering basics of HTML, CSS, JavaScript to advanced topics like PostgreSQL, MERN stack, Tailwind CSS, and more.",
      links: [],
    },
    {
      title: "Academic Excellence",
      dates: "2023",
      location: "Kolhapur, MH",
      description:
        "Achieved CGPA of 8.3/10 in B.Tech Computer Science & Engineering and secured 91.06% in Diploma in Information Technology, demonstrating consistent academic performance.",
      links: [],
    },
    {
      title: "Kathak Visharad-1 Completed",
      dates: "2023",
      location: "Kolhapur, MH",
      description:
        "Completed Kathak Visharad-1 from Akhil Bharatiya Gandharva Mahavidyalaya Mandal, Mumbai (via Deval Sangeet Vidyalay, Kolhapur). This achievement demonstrates dedication to traditional Indian classical dance and cultural arts alongside technical pursuits.",
      links: [],
    },
  ],
} as const;
