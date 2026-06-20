import p1_img1 from "../assets/projects/project1/img1.png";
import p1_img2 from "../assets/projects/project1/img2.png";
import p1_img3 from "../assets/projects/project1/img3.png";
import p1_video from "../assets/projects/project1/(ኢትዮጵያ) Ethiopan Ortodox Tewhido mezmur ሊቀ መዘምራን ቴዎድሮስ ዮሴፍ.mp4";

import p2_img1 from "../assets/projects/project2/img1.png";
import p2_img2 from "../assets/projects/project2/img2.png";
import p2_img3 from "../assets/projects/project2/img3.png";

export const projectsData = [
  {
    id: 1,
    category: "Networking Project",
    title: "Network Extension and Redundant Switch Implementation",
    description:
      "Designed and extended a campus network to a nearby building using VLANs, inter-VLAN routing, EtherChannel, and STP to improve reliability, segmentation, and performance.",
    highlights: ["VLAN Design", "Inter-VLAN Routing", "STP and EtherChannel"],
    video: p1_video,
    images: [p1_img1, p1_img2, p1_img3],
  },
  {
    id: 2,
    category: "Web and Mobile System",
    title: "Secure Mobile and Web-Based Access System for Heritage Books",
    description:
      "Developed a secure digital access platform to help preserve and manage heritage books through mobile and web interfaces with a focus on accessibility and long-term protection.",
    highlights: ["Digital Preservation", "Secure Access", "Cross-Platform Experience"],
    images: [p2_img1, p2_img2, p2_img3],
  },
];
