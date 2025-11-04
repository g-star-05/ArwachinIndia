import { useEffect, useRef, useState } from "react";
import "./testimonials.css";

// Put these images in /src/assets/
import t1 from "./assets/t1.jpg";
import t2 from "./assets/t2.jpg";
import t3 from "./assets/t3.jpg";
import t4 from "./assets/t4.jpg";


const DATA = [
  {
    img: t1,
    name: "Syeda  Aaiza Peerzada",
    role: "Parent",
    text:
      "“The school is so impressive and beautiful. The staff’s and teachers are so co-operative and careful, attentive. All the activities in the school is good. It help the children’s to make active and happier. Study is also good. And special thank to all the teachers and staff’s to take care of all the children’s.”",
    stars: 5,
    tone: "dark",
  },
  {
    img: t2,
    name: "Sukhpreet kaur Kochar",
    role: "Parent",
    text:
      "“Arwachin pranam! Thank you for helping our daughter to improve her learning and her confidence. I would like to take this opportunity to thank all the teachers for the efforts they are putting together to teach our children. The faculty has been making sure every child is comfortable in school. School is maintaining good discipline. Extra-curricular activities are also highly appreciated.",
    stars: 5,
    tone: "orange",
  },
  {
    img:t3,
    name: "Rahul Sugandhi",
    role: "Parent",
    text:
      "Arwachin India School is a stellar institution that prioritizes academic excellence and holistic development. The dedicated faculty goes above and beyond to provide a nurturing and stimulating environment where every student can thrive. The school's curriculum is well-rounded, focusing on both scholastic achievements and personal growth.With state-of-the-art facilities and a strong emphasis on extracurricular activities, students are encouraged to explore their interests and talents. The school's commitment to instilling strong values and discipline ensures that students are not only academically proficient but also responsible and compassionate individuals. Arwachin India School is truly a place where futures are built.",
    stars: 5,
    tone: "dark",
  },
  {
    img:t4,
    name: "Dheeraj Rassiwala",
    role: "Parent",
    text:
      "I am really grateful to the school for introducing the competitive coaching program . It has been very beneficial for my child as it provides quality guidance and focused preparation for competitive exams along with regular studies. The experienced teachers , doubt clearing sessions with weekly mock tests has improved my child's performance. I am thankful to Arwachin India School for taking such thoughtful step towards the future of students..",
    stars: 5,
    tone: "orange",
  },
];

const Star = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path d="M12 3.7l2.6 5.3 5.8.9-4.2 4.1 1 5.8L12 17.8 6.8 19.8l1-5.8-4.2-4.1 5.8-.9L12 3.7z" />
  </svg>
);

export default function Testimonials() {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [lock, setLock] = useState(false);

  // autoplay (pause on hover/touch)
  const autoplayRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const updateButtons = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < max - 4);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    const onScroll = () => updateButtons();
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(updateButtons);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  const pageScroll = (dir = 1) => {
    if (lock) return;
    setLock(true);
    const el = trackRef.current;
    const amt = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amt, behavior: "smooth" });
    setTimeout(() => setLock(false), 350);
  };

  // simple autoplay
  

  return (
    <section className="tst" aria-labelledby="tst-title">
      <div className="tst__head">
        <h2 id="tst-title" className="tst__title">Our Testimonials</h2>
        <p className="tst__sub">What parents, students, and alumni say about us.</p>
      </div>

      <div
        className="tst__track"
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        tabIndex={0}
        role="region"
        aria-label="Testimonials"
      >
        {DATA.map((d, i) => (
          <article className={`card ${d.tone}`} key={i}>
            <div className="card__hanger">
              <span className="card__dot" />
            </div>

            <div className="card__avatarWrap">
              <img src={d.img} alt={`${d.name}`} className="card__avatar" />
            </div>

            <div className="card__panel">
              <p className="card__text">{d.text}</p>
              <div className="card__name">{d.name}</div>
              <div className="card__role">{d.role}</div>
              <div className="card__stars" aria-label={`${d.stars} out of 5`}>
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} filled={k < d.stars} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="tst__arrows">
        <button
          className="tst__arrow"
          onClick={() => pageScroll(-1)}
          disabled={!canLeft || lock}
          aria-label="Scroll left"
        >
          ‹
        </button>
        <button
          className="tst__arrow"
          onClick={() => pageScroll(1)}
          disabled={!canRight || lock}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </section>
  );
}
