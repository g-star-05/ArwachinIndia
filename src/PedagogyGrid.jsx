import { useState } from "react";
import "./pedagogy-grid.css"; // We'll create this next

const pedagogyData = [
  {
    id: 1,
    title: "Neev",
    subtitle: "Pre-Primary",
    image: "./assets/neev.jpg",
    icon: "./assets/root.png",
    description:
      "Grounding children in safety, values and curiosity, laying a stable base like the root chakra for lifelong learning.",
  },
  {
    id: 2,
    title: "Pragati",
    subtitle: "Primary",
    image: "./assets/pragati.jpg",
    icon: "./assets/sacral.png",
    description:
      "Encouraging creativity and imagination while strengthening the foundational academic and emotional skills of students.",
  },
  {
    id: 3,
    title: "Udaan",
    subtitle: "Middle School",
    image: "./assets/udaan.jpg",
    icon: "./assets/solar.png",
    description:
      "Fostering confidence, curiosity, and collaboration through project-based learning and explorative experiences.",
  },
  {
    id: 4,
    title: "Utkarsh",
    subtitle: "Secondary",
    image: "./assets/utkarsh.jpg",
    icon: "./assets/heart.png",
    description:
      "Helping students discover their potential, build discipline, and prepare for academic excellence and leadership.",
  },
  {
    id: 5,
    title: "Nirnay",
    subtitle: "Senior Secondary",
    image: "./assets/nirnay.jpg",
    icon: "./assets/throat.png",
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
