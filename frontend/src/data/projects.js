import p1_img1 from "../assets/projects/project1/img1.png";
import p1_img2 from "../assets/projects/project1/img2.png";
import p1_img3 from "../assets/projects/project1/img3.png";

import p2_img1 from "../assets/projects/project2/img1.png";
import p2_img2 from "../assets/projects/project2/img2.png";
import p2_img3 from "../assets/projects/project2/img3.png";

import p3_cover from "../assets/project3.jpg";

export const projectsData = [
  {
    id: 1,
    category: "Full-Stack & AI System",
    title: "MEKARI – Intelligent Web-Based Counseling Platform",
    description:
      "B.Sc. Final Year Project: Developed a full-stack (MERN + Python AI) web and mobile platform featuring an AI chatbot, real-time counseling, anonymous sessions, community forums, and appointment scheduling.",
    highlights: ["MERN Stack", "Python AI Chatbot", "Socket.io", "Final Year Project"],
    images: [p3_cover],
  },
  {
    id: 2,
    category: "Networking Solution",
    title: "Network Extension & Redundant Switching for DBE",
    description:
      "Designed and implemented a fiber-optic network extension with redundant switching using EtherChannel and STP for the Development Bank of Ethiopia (DBE) to eliminate single points of failure and minimize downtime.",
    highlights: ["EtherChannel & STP", "Redundant Switching", "VLAN Segmentation", "Network Support"],
    images: [p1_img1, p1_img2, p1_img3],
  },
  {
    id: 3,
    category: "Web Database System",
    title: "Heritage Book Management System",
    description:
      "Built a web-based heritage book management platform featuring secure approval workflows, user-admin communication channels, and administrative feedback management.",
    highlights: ["MERN Stack", "Approval Workflows", "Secure Digital Preservation"],
    images: [p2_img1, p2_img2, p2_img3],
  },
];
