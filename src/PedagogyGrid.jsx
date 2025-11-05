import { useState } from "react";
import "./pedagogy-grid.css"; // We'll create this next
import NeevImg from "./assets/neev.jpg";
import PragatiImg from "./assets/pragati.jpg";
import UdaanImg from "./assets/udaan.jpg";
import UtkarshImg from "./assets/utkarsh.jpg";
import NirnayImg from "./assets/nirnay.jpg";
import RootIcon from "./assets/root.png";
import SacralIcon from "./assets/sacral.png";
import SolarIcon from "./assets/solar.png";
import HeartIcon from "./assets/heart.png";
import ThroatIcon from "./assets/throat.png";

const pedagogyData = [
  {
    id: 1,
    title: "Neev",
    subtitle: "Pre-Primary",
    image:NeevImg,
    icon:RootIcon,
    description:
      "Grounding children in safety, values and curiosity, laying a stable base like the root chakra for lifelong learning.",
  },
  {
    id: 2,
    title: "Aadhar",
    subtitle: "Grade1-Grade5",
    image:PragatiImg,
    icon:SacralIcon,
    description:
      "Encouraging creativity and imagination while strengthening the foundational academic and emotional skills of students.",
  },
  {
    id: 3,
    title: "Aarambh",
    subtitle: "Grade6-Grade8",
    image:UdaanImg,
    icon:SolarIcon,
    description:
      "Fostering confidence, curiosity, and collaboration through project-based learning and explorative experiences.",
  },
  {
    id: 4,
    title: "Sopan",
    subtitle: "Grade9-Grade10",
    image:UtkarshImg,
    icon:HeartIcon,
    description:
      "Helping students discover their potential, build discipline, and prepare for academic excellence and leadership.",
  },
  {
    id: 5,
    title: "Shikhar",
    subtitle: "Grade11-Grade12",
    image:NirnayImg,
    icon:ThroatIcon,
    description:
      "Empowering young minds to make informed decisions with focus, clarity, and a deep sense of responsibility.",
  },
];

export default function PedagogyGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = pedagogyData[activeIndex];

  return (
    <div className="pedagogy-section">
      {/* Top icons */}
      <div className="pedagogy-icons">
        {pedagogyData.map((item, index) => (
          <img
            key={item.id}
            src={item.icon}
            alt={item.title}
            className={`icon ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Active card */}
      <div className="pedagogy-card">
        <img src={activeItem.image} alt={activeItem.title} className="card-img" />
        <div className="card-content">
          <h2>{activeItem.title}</h2>
          <h4>{activeItem.subtitle}</h4>
          <p>{activeItem.description}</p>
        </div>
      </div>
    </div>
  );
}
