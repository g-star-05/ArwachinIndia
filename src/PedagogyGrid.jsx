import "./pedagogy-grid.css";

// Replace these with your real images in /src/assets/
import img1 from "./assets/ped1.jpg";
import img2 from "./assets/ped2.jpg";
import img3 from "./assets/ped3.jpg";
import img4 from "./assets/ped4.jpg";
import img5 from "./assets/ped5.jpg";

const ITEMS = [
  {
    img: img1,
    p1: "Concept-based teaching",
    p2: "Strong fundamentals & clarity",
    overlayTitle: "Foundational Mastery",
    list: ["NCF-aligned planning", "Practice + feedback loops", "Continuous assessment"]
  },
  {
    img: img2,
    p1: "Activity & experiments",
    p2: "Hands-on discovery",
    overlayTitle: "Experiential Learning",
    list: ["Lab & maker tasks", "Field projects", "Reflective journals"]
  },
  {
    img: img3,
    p1: "Language & expression",
    p2: "Debates, MUN, theatre",
    overlayTitle: "Communication Skills",
    list: ["Reading programs", "Public speaking", "Creative writing"]
  },
  {
    img: img4,
    p1: "STEAM integration",
    p2: "Tech with creativity",
    overlayTitle: "Future Readiness",
    list: ["Coding & robotics", "Design thinking", "Digital citizenship"]
  },
  {
    img: img5,
    p1: "Values & wellness",
    p2: "Sports & arts balance",
    overlayTitle: "Whole-Child Growth",
    list: ["Life skills & SEL", "Sports & arts", "Community service"]
  },
];

export default function PedagogyGrid() {
  return (
    <section className="pedg" id="pedagogy">
      <div className="pedg__header">
        <h2 className="pedg__title">Our Pedagogy (Academic Structure)</h2>
        <p className="pedg__sub">A balanced framework blending strong academics, skills, and values.</p>
      </div>

      <div className="pedg__grid">
        {ITEMS.map((it, i) => (
          <article className="card" key={i} tabIndex={0} aria-label={it.overlayTitle}>
            <div className="card__media">
              <img src={it.img} alt={it.overlayTitle} className="card__img" loading="lazy" />
            </div>

            <div className="card__body">
              <p className="card__p">{it.p1}</p>
              <p className="card__p">{it.p2}</p>
            </div>

            {/* Hover/Focus panel */}
            <div className="card__overlay" aria-hidden="true">
              <h3 className="card__overlayTitle">{it.overlayTitle}</h3>
              <ul className="card__list">
                {it.list.map((li, k) => <li key={k}>{li}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
