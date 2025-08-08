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
    "MySQL",
    "MongoDB",
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
      // X: {
      //   name: "X",
      //   url: "https://twitter.com/namrata0607",
      //   icon: Icons.x,

      //   navbar: true,
      // },
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
        "Developing a real-time EdTech solution with real-time polls, quizzes, live Q&A, and anonymous doubt-asking to boost student participation. Adding gamified features like rewards, mini-games, puzzles, and visuals to make learning engaging and inclusive.",
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
        "Developed a Flutter and Dart mobile app for online Kathak classes, enabling teachers to add students for multiple exams. Integrated features for sharing exam-specific dance videos and syllabus, accessible to students.",
    },
  ],
  education: [
    {
      school: "D.Y.Patil College of Engineering & Technology, Kolhapur",
      href: "https://www.dypcet.edu.in",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "/dyp.png",
      start: "August 2023",
      end: "Present",
    },
    {
      school: "Government Polytechnic, Kolhapur",
      href: "#",
      degree: "Diploma in Information Technology",
      logoUrl: "/gpk.jpg",
      start: "August 2020",
      end: "June 2023",
    },
  ],
  projects: [
    {
      title: "GATEPREP",
      href: "#",
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
        // {
        //   type: "Website",
        //   href: "#",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Namrata0607/GATE-Mock-Test",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project1.jpg",
      video: "",
    },
    {
      title: "DSARapid",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed DSARapid, a comprehensive virtual lab designed to enhance DSA learning through interactive visualizations. Implemented topic-wise visualizers, notes, and tests, leading up to a final test with leaderboard integration.",
      technologies: [
        "Flutter",
        "Firebase",
        "Dart",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "#",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Namrata0607/DSARapid",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project2.png",
      video: "",
    },
    {
      title: "Book Store Management",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Built a Book Store Management app featuring user book browsing, purchasing & admin stock management. Utilized Advanced Java for the frontend, Java for backend processing, and MySQL for database management.",
      technologies: [
        "Java",
        "MySQL",
        "Advanced Java",
        "JDBC",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project3.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Kathak Visharad-1 Completed",
      dates: "2023",
      location: "Kolhapur, MH",
      description:
        "Completed Kathak Visharad-1 from Akhil Bharatiya Gandharva Mahavidyalaya Mandal, Mumbai (via Deval Sangeet Vidyalay, Kolhapur). This achievement demonstrates dedication to traditional Indian classical dance and cultural arts alongside technical pursuits.",
      // image:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      links: [],
    },
    {
      title: "Academic Excellence",
      dates: "2023",
      location: "Kolhapur, MH",
      description:
        "Achieved CGPA of 8.3/10 in B.Tech Computer Science & Engineering and secured 91.06% in Diploma in Information Technology, demonstrating consistent academic performance.",
      // image:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      links: [],
    },
    {
      title: "Full Stack Development Projects",
      dates: "2024",
      location: "Remote",
      description:
        "Successfully developed and deployed multiple full-stack applications using MERN stack, demonstrating proficiency in modern web development technologies and user-centric design principles.",
      // image:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  ],
} as const;
