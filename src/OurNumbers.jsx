import { useEffect, useRef, useState } from "react";
import "./our-numbers.css";
import bg from "./assets/campus.jpg"; // put a photo in src/assets/numbers-bg.jpg

// ----- SVG ICONS (white stroke) -----
const IconStudent = () => (
  <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
    <path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M21 12v4m-18-4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="13.5" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 20.5c1.8-2.9 4.3-4.3 6.5-4.3s4.7 1.4 6.5 4.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconTeacher = () => (
  <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 20c.9-3.6 3.8-6 7-6s6.1 2.4 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3.5 12.5l4-1.5 3 1-4 1.6-3-1.1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20.5 11v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconActivities = () => (
  <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="4.5" r="2.2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7.5 21l2-6 2.5-2 2.5 2 2 6M4 9.5h16M7 9.5l4 3.5m6-3.5-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconAcres = () => (
  <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
    <path d="M4 12c0-4 3.5-7 8-7s8 3 8 7-3.5 7-8 7c-1.9 0-3.6-.5-5-1.5L4 19l1.5-3C4.6 14.7 4 13.4 4 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor"/>
  </svg>
);

// ----- Counter that DECREASES to target -----
function useDecreasingCounter(target, startExtra = 0.15, duration = 1600) {
  const [value, setValue] = useState(() => Math.ceil(target * (1 + startExtra)));
  const rafRef = useRef(null);

  useEffect(() => {
    let start = null;
    const from = Math.max(value, Math.ceil(target * (1 + startExtra)));
    const to = target;

    const step = (ts) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const current = Math.round(from - (from - to) * eased);
      setValue(current);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return value;
}

export default function OurNumbers() {
  const rootRef = useRef(null);
  const [active, setActive] = useState(false);

  // Start animation when section enters viewport
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(true)),
      { threshold: 0.35 }
    );
    if (rootRef.current) io.observe(rootRef.current);
    return () => io.disconnect();
  }, []);

  const students = useDecreasingCounter(active ? 1250 : 0);
  const teachers = useDecreasingCounter(active ? 70 : 0);
  const activities = useDecreasingCounter(active ? 50 : 0);
  const acres = useDecreasingCounter(active ? 10 : 0);

  return (
    <section
      ref={rootRef}
      className="nums"
      style={{ backgroundImage: `url(${bg})` }}
      aria-labelledby="our-numbers-title"
    >
      <div className="nums__overlay" />

      <div className="nums__wrap">
        <h2 id="our-numbers-title" className="nums__title">Our Numbers</h2>

        <div className="nums__grid">
          <Stat icon={<IconStudent />} value={students} suffix="+" label="Students" />
          <Stat icon={<IconTeacher />} value={teachers} suffix="+" label="Teachers" />
          <Stat icon={<IconActivities />} value={activities} suffix="+" label="Activities" />
          <Stat icon={<IconAcres />} value={acres} suffix="+" label="Acres Area" />
        </div>

        {/* CTA (optional) */}
        <a href="#admissions" className="nums__cta">Click to Register for Admission</a>
      </div>
    </section>
  );
}

function Stat({ icon, value, suffix, label }) {
  return (
    <div className="stat">
      <div className="stat__icon" aria-hidden="true">{icon}</div>
      <div className="stat__value">
        {value}
        <span className="stat__suffix">{suffix}</span>
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}
