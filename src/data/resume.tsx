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
    {
      title: "BucketByte",
      href: "https://bucketbyte.com",
      dates: "Sept 2024",
      active: true,
      description:
        "BucketByte is a platform designed to generate AI-powered blog content, simplifying the content creation process with secure cloud storage and efficient serverless integration. It reflects practical experience in working with Amazon Web Services to create a reliable and scalable solution.",
      technologies: [
        "Amazon Bedrock",
        "Amazon S3",
        "Amazon Lambda",
        "API Gateway",
        "Next.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://bucketbyte.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sahilshenoy/bucket-byte",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://imgur.com/a/bVixY0S",
    },
    {
      title: "NeuroNote",
      href: "https://neuro-note.com",
      dates: "Sept 2024",
      active: true,
      description:
        "A web application that enables users to upload documents and create notes, featuring integrated AI-powered search capabilities for efficient information retrieval. It leverages cutting-edge technologies to provide a seamless experience in managing and searching through personal and team documentation.",
      technologies: [
        "Open AI API",
        "Convex",
        "Vector Embedding",
        "Clerk",
        "Next.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://neuro-note.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dhwanibudhiraja/neuronote",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://imgur.com/a/bVixY0S",
    }
  ],

  UpcomingProjects: [
    {
      title: "PadhoVIT",
      href: "",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developing a comprehensive Learning Management System (LMS) using Next.js, Node.js, and MongoDB, focusing on a seamless user experience and efficient backend processes. Integrating technologies like Redis for caching and AWS S3 for media storage, leading to significant improvements in performance and user engagement.",
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
      video: "https://imgur.com/a/bVixY0S",
    },
    {
      title: "RAG",
      href: "",
      dates: "Sept 2023 - Present",
      active: true,
      description:
        "Developed a robust and free medical knowledge base using Retrieval Augmented Generation (RAG) with Pinecone, Next.js, LangChain, and Transformers.js. The project processes medical documents for seamless retrieval and embedding, offering efficient and cost-effective AI-powered solutions.",
      technologies: [
        "langchain",
        "pinecone",
        "next.js",
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
      video: "https://imgur.com/a/bVixY0S",
    }
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
