import { useEffect, useMemo, useRef, useState } from "react";
import "./scroll-cards.css";

import c1 from "./assets/card1.jpg";
import c2 from "./assets/card2.jpg";
import c3 from "./assets/card3.jpg";
import c4 from "./assets/card4.jpg";
import c5 from "./assets/card5.jpg";
import c6 from "./assets/card6.jpg";

const ITEMS = [
  { img: c1, text: "Interschool Sports Meet 2025 — teamwork and discipline." },
  { img: c2, text: "STEM Lab: robotics & electronics for hands-on learning." },
  { img: c3, text: "Art & Culture week — creativity, music, and theatre." },
  { img: c4, text: "Library hour — reading habit and comprehension." },
  { img: c5, text: "Field visits — learning beyond the classroom." },
  { img: c6, text: "Coding club — logic building with fun challenges." },
];

export default function ScrollCards() {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [progress, setProgress] = useState(0); // 0..1
  const [active, setActive] = useState(0);

  const count = ITEMS.length;

  const updateUI = () => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = Math.max(1, el.scrollWidth - el.clientWidth);
    const p = Math.min(1, Math.max(0, el.scrollLeft / maxScroll));
    setProgress(p);
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < maxScroll - 4);

    // active card closest to center
    const center = el.scrollLeft + el.clientWidth / 2;
    const cards = Array.from(el.querySelectorAll(".strip__card"));
    let best = 0, bestDist = Infinity;
    cards.forEach((node, i) => {
      const rect = node.getBoundingClientRect();
      const left = rect.left + el.scrollLeft - el.getBoundingClientRect().left;
      const cardCenter = left + rect.width / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < bestDist) { bestDist = dist; best = i; }
    });
    setActive(best);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateUI();
    const onScroll = () => updateUI();
    el.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(updateUI);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  const scrollByAmount = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const snapToIndex = (i) => {
    const el = trackRef.current;
    const card = el?.querySelectorAll(".strip__card")?.[i];
    if (!el || !card) return;
    const rect = card.getBoundingClientRect();
    const left = rect.left + el.scrollLeft - el.getBoundingClientRect().left;
    el.scrollTo({ left: left - 16, behavior: "smooth" }); // 16px matches track padding
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); scrollByAmount(1); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); scrollByAmount(-1); }
  };

  const dots = useMemo(() => Array.from({ length: count }, (_, i) => i), [count]);

  return (
    <section className="strip" aria-labelledby="strip-title">
      <div className="strip__head">
        <h2 id="strip-title" className="strip__title">Our Core Values</h2>
        <p className="strip__sub">Glimpses of our vibrant campus life — where learning meets experience.</p>
      </div>

      {/* Progress bar */}
      <div className="strip__progress">
        <div className="strip__progressFill" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <div className="strip__scroller">
        {/* edge fades */}
        <div className="strip__fade left" aria-hidden="true"></div>
        <div className="strip__fade right" aria-hidden="true"></div>

        <button
          className="strip__arrow left"
          onClick={() => scrollByAmount(-1)}
          disabled={!canLeft}
          aria-label="Scroll left"
        >
          ‹
        </button>

        <div
          ref={trackRef}
          className="strip__track"
          tabIndex={0}
          role="region"
          aria-label="Life at Arwachin highlights"
          onKeyDown={onKeyDown}
        >
          {ITEMS.map((it, i) => (
            <article className={`strip__card ${i === active ? "is-active" : ""}`} key={i}>
              <div className="strip__media">
                <img src={it.img} alt="" className="strip__img" loading="lazy" />
              </div>
              <p className="strip__text">{it.text}</p>
            </article>
          ))}
        </div>

        <button
          className="strip__arrow right"
          onClick={() => scrollByAmount(1)}
          disabled={!canRight}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>

      {/* Pagination dots */}
      <div className="strip__dots" role="tablist" aria-label="Slide navigation">
        {dots.map((i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            className={`strip__dot ${active === i ? "active" : ""}`}
            onClick={() => snapToIndex(i)}
          />
        ))}
      </div>
    </section>
  );
  }

