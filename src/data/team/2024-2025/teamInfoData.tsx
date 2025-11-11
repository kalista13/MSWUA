import Crysta from "../../../assets/images/team/2024-2025/exec/Crysta.png";
import Ashley from "../../../assets/images/team/2024-2025/mechanical/Ashley.png";
import QJ from "../../../assets/images/team/2024-2025/mechanical/QJ.png";
import Hope from "../../../assets/images/team/2024-2025/electrical/Hope.png";
import Kalista from "../../../assets/images/team/2024-2025/software/Kalista.png";
import Ayesha from "../../../assets/images/team/2024-2025/software/Ayesha.jpeg";
import Angela from "../../../assets/images/team/2024-2025/software/Angela.png";
import Resha from "../../../assets/images/team/2024-2025/software/Resha.png";
import Harshita from "../../../assets/images/team/2024-2025/software/Harshita.png";
import Rosebud from "../../../assets/images/team/2024-2025/science/Rosebud.png";
import Surabhi from "../../../assets/images/team/2024-2025/science/Surabhi.png";
import Emma from "../../../assets/images/team/2024-2025/science/Emma.png";
import Jessica from "../../../assets/images/team/2024-2025/science/Jessica.png";
//import Anjola from "../../../assets/images/team/2024-2025/science/Anjola.png";
import Nina from "../../../assets/images/team/2024-2025/science/Nina.png";
import NoPic from "../../../assets/images/background/explore-backgorund.png";

export interface TeamMember {
  name: string;
  role: string;
  group: string;
  image: string;
  website?: string;
  linkedin?: string;
  details?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Crysta Madrio",
    role: "President",
    group: "Execs",
    image: Crysta,
    website: "",
    linkedin: "https://www.linkedin.com/in/crysta-madrio-334099258/",
    details: "",
  },
  {
    name: "Ashley Dugarte",
    role: "Mechanical",
    group: "Execs",
    image: Ashley,
    website: "",
    linkedin: "https://www.linkedin.com/in/ashley-dugarte-izarra-78b1a62b8/",
    details: "",
  },
  {
    name: "Fatema Essaji",
    role: "Mechanical",
    group: "Execs",
    image: QJ,
    website: "",
    linkedin: "https://www.linkedin.com/in/fatema-essaji-201634308/",
    details: "",
  },
  {
    name: "Edana Clyne",
    role: "Mechanical",
    group: "Mechanical",
    image: NoPic,
    website: "",
    linkedin: "https://www.linkedin.com/in/edana-clyne-a11aa4328/",
    details: "",
  },
  {
    name: "Hope Marigsa",
    role: "Electrical",
    group: "Execs",
    image: Hope,
    website: "",
    linkedin: "https://www.linkedin.com/in/hope-marigsa-517069336/",
    details: "",
  },
  {
    name: "Ayesha Aamer",
    role: "Firmware",
    group: "Execs",
    image: Ayesha,
    website: "",
    linkedin: "https://www.linkedin.com/in/ayesha-aamer-a596b1259/",
    details: "",
  },
  {
    name: "Kalista Singh",
    role: "Software",
    group: "Execs",
    image: Kalista,
    website: "",
    linkedin: "https://www.linkedin.com/in/kalista-singh/",
    details: "",
  },
  {
    name: "Angela Dakay",
    role: "Software",
    group: "Software",
    image: Angela,
    website: "https://angela-dev.vercel.app/",
    linkedin: "https://www.linkedin.com/in/angela-dakay-b6365a244/",
    details: "",
  },
  {
    name: "Yemi Shoyele",
    role: "Software",
    group: "Software",
    image: NoPic,
    website: "",
    linkedin: "https://www.linkedin.com/in/yemi-shoyele/",
    details: "",
  },
  {
    name: "Resha Jackson",
    role: "Software",
    group: "Execs",
    image: Resha,
    website: "",
    linkedin: "",
    details: "",
  },
  {
    name: "Harshita Agalcha",
    role: "Software",
    group: "Software",
    image: Harshita,
    website: "",
    linkedin: "https://www.linkedin.com/in/harshita-agalcha/",
    details: "",
  },
  {
    name: "Rosebud John",
    role: "Science",
    group: "Science",
    image: Rosebud,
    website: "",
    linkedin: "https://www.linkedin.com/in/rosebud-j-46101a275/",
    details: "",
  },
  {
    name: "Surabhi Sonanwane",
    role: "Science",
    group: "Science",
    image: Surabhi,
    website: "",
    linkedin: "https://www.linkedin.com/in/surabhisonawane/",
    details: "",
  },
  {
    name: "Emma Kozak",
    role: "Science",
    group: "Science",
    image: Emma,
    website: "",
    linkedin: "https://www.linkedin.com/in/emma-kozak/",
    details: "",
  },
  {
    name: "Jessica Lai",
    role: "Science",
    group: "Execs",
    image: Jessica,
    website: "",
    linkedin: "",
    details: "",
  },
  {
    name: "Nina Velasco",
    role: "Science",
    group: "Science",
    image: Nina,
    website: "",
    linkedin: "https://www.linkedin.com/in/nina-velasco-719429270/",
    details: "",
  },
];