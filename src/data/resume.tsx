import { Icons } from "../../icons";
import { HomeIcon, icons } from "lucide-react";

export const DATA = {
  name: "Dhwani Budhiraja",
  initials: "DB",
  url: "https://dhwanibudhiraja.com",
  location: "New Delhi, India",
  locationLink: "https://maps.app.goo.gl/gjC8e8hepcGbdsU38",
  description:
    "Final-year Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at \n VIT Bhopal.",
  summary:
    "I am Dhwani Budhiraja, a final-year Computer Science Engineering student at [VIT Bhopal](https://vitbhopal.ac.in/), specializing in  Artificial Intelligence and Machine Learning. With a strong grasp of core CSE subjects and intermediate to advanced skills in data structures and algorithms, I am a quick learner with a deep passion for system design. My [academic journey](/#education) has fostered a keen interest in the latest technologies, particularly in Artificial Neural Networks. I have extensively studied various AI/ML subjects, ranging from Deep Learning to Fuzzy Logic to Natural Language Processing, and I am committed to expanding my knowledge daily in the ever-evolving tech landscape.",
  avatarUrl: "/dhwanibudhirajaPic.jpg",
  skills: [
    "System Design",
    "GIT",
    "Artificial Neural Network",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Reinforcement Learning",
    "SQL",
    "C++",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "dhwanibudhiraja2004@gmail.com",
    tel: "+91 9400981593",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dhwanibudhiraja04",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhwanibudhiraja/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=dhwanibudhiraja2004@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  education: [
    {
      school: "VIT Bhopal, India",
      href: "https://vitbhopal.ac.in/",
      degree: "B.Tech Computer Science with specialization in Artificial Intelligence and Machine Learning",
      logoUrl: "/vitbLogo.jpg",
      start: "2021",
      end: "2025",
    },
    {
      school: "Kendriya Vidyalaya No.3, Gandhinagar, Gujarat, India",
      href: "https://kvsangathan.nic.in/",
      degree: "Class XII - PCM CS",
      logoUrl: "/schoolLogo.jpeg",
      start: "2011",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "VITicketeer",
      href: "https://viticketeer.vercel.app/",
      dates: "May 2024 - July 2024",
      active: true,
      description:
        "VITicketeer is an event management platform tailored for your university, featuring a user-friendly interface, secure ticketing via Stripe, and efficient user authentication with Clerk. It simplifies event creation, management, and participation, keeping the campus community connected.",
      technologies: [
        "Next.js",
        "React",
        "Typescript",
        "TailwindCSS",
        "Mongoose",
        "Stripe",
        "Clerk",
        "Vercel",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://viticketeer.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahilshenoy/VITicketeer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],

  UpcomingProjects: [
    {
      title: "PadhoVIT",
      href: "",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed a comprehensive Learning Management System (LMS) using Next.js, Node.js, and MongoDB, focusing on a seamless user experience and efficient backend processes. Integrated technologies like Redis for caching and AWS S3 for media storage, leading to significant improvements in performance and user engagement.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "AWS S3",
        "RTK Query",
        "Socket.io",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],

  certificate: [
    {
      title: "Amazon Cloud Practitioner",
      dates: "Jan 11th, 2024",
      description:
        "Completed AWS Cloud Practitioner certification with a good grasp of cloud basics. Proficient in deploying secure cloud solutions, monitoring performance, and implementing disaster recovery plans. I can manage and support cloud environments, ensuring they run smoothly and securely.",
      image: "/amazonCloudPrac.jpeg",
      links: [
        {
          title: "Source",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://cp.certmetrics.com/amazon/en/public/verify/credential/ce2da91410bc474ba220ab91ef2696fd",
        },
      ],
    },
  ],
} as const;
