import { useRef } from "react";
import "./life-at-arwachin.css";

import life1 from "./assets/life1.jpg";
import life2 from "./assets/life2.jpg";
import life3 from "./assets/life3.jpg";
import life4 from "./assets/life4.jpg";
import life5 from "./assets/life5.jpg";
import life6 from "./assets/life6.jpg";

const cards = [
  {
    img: life1,
    text: "Students exploring new ideas during Science Week — hands-on learning in action.",
  },
  {
    img: life2,
    text: "Cultural fest brings together creativity, unity, and joy among students.",
  },
  {
    img: life3,
    text: "Morning yoga sessions that focus on health, discipline, and mindfulness.",
  },
  {
    img: life4,
    text: "Sports Day — where teamwork and spirit meet fun and competition.",
  },
  {
    img: life5,
    text: "Art exhibition — celebrating student creativity and imagination.",
  },
  {
    img: life6,
    text: "Art exhibition — celebrating student creativity and imagination.",
  },
];

export default function LifeAtArwachin() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = current.offsetWidth * 0.8;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="life">
      <div className="section-divider"></div>
      <div className="life__header">
        <h2 className="life__title bottom-border">Life at Arwachin</h2>
        <p className="life__subtitle">
          A glimpse into the vibrant student life that makes learning exciting.
        </p>
      </div>

      <div className="life__controls">
        <button onClick={() => scroll("left")} className="life__arrow left">
          ‹
        </button>
        <button onClick={() => scroll("right")} className="life__arrow right">
          ›
        </button>
      </div>

      <div className="life__track" ref={scrollRef}>
        {cards.map((card, index) => (
          <div className="life__card" key={index}>
            <img src={card.img} alt="Life at Arwachin" className="life__img" />
            <p className="life__text">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
