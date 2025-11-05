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
    p1: "Neev",
    p2: "Pre-primary",
    overlayTitle: "A warm and nurturing environment where learning begins with joy and wonder.",
    list: ["Play-based, activity oriented, and experiential learning", "Development of motor, language & social skills", "Lays the groundwork for cognitive and emotional development"]
  },
  {
    img: img2,
    p1: "Aadhar",
    p2: "Grade1-Grade5",
    overlayTitle: "The fundamental stage that strengthens academic roots and moral values.",
    list: ["Focus on literacy, Encourages creativity and curiosity", "Encourages creativity and curiosity", "Value-integrated learning for holistic development"]
  },
  {
    img: img3,
    p1: "Aarambh",
    p2: "Grade6-Grade8",
    overlayTitle: "A transition phase where learners begin to explore, reason, and reflect.",
    list: ["Emphasis on conceptual clarity and application", "Development of critical and analytical thinking", "Exploration of interests through clubs and projects"]
  },
  {
    img: img4,
    p1: "Sopan",
    p2: "Grade9-Grade10",
    overlayTitle: "Structured academic preparation with focus and clarity of purpose.",
    list: ["Aligned with board curriculum and assessments", "Inculcation of discipline, time management, and focus", "Career awareness and early mentorship"]
  },
  {
    img: img5,
    p1: "Shikar",
    p2: "Grade11-Grade12",
    overlayTitle: "The final stage that prepares students for higher education and responsible adulthood",
    list: ["Stream-specific academic rigor (Science, Commerce, Humanities)", "Personalised guidance for careers and competitive exams (SICP: School Integrated Competitive Programme)", "Guidance for leadership"]
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
