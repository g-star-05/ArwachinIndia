import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./hero.css";

import camera1 from "./assets/camera1.jpg";
import camera2 from "./assets/camera2.jpg";
import camera3 from "./assets/camera3.jpg";

export default function Hero() {
  const imgs = [camera1, camera2, camera3];
  const [idx, setIdx] = useState(0);
  const imgRef = useRef(null);

  // rotate images (optional)
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % imgs.length), 5000);
    return () => clearInterval(t);
  }, [imgs.length]);

  // set hero height on mobile to match image aspect ratio (no black bars)
  const setHeroHeight = () => {
    const hero = document.querySelector(".hero");
    const img = imgRef.current;
    const isMobile = window.innerWidth <= 640;
    if (!hero || !img) return;

    if (!isMobile) {
      hero.style.setProperty("--hero-h", "100vh"); // desktop = fill screen
      return;
    }

    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    if (!iw || !ih) return;

    // height by aspect ratio; don’t exceed viewport height
    const byRatio = (window.innerWidth * ih) / iw;
    const finalH = Math.min(byRatio, window.innerHeight);
    hero.style.setProperty("--hero-h", `${finalH}px`);
  };

  useLayoutEffect(() => {
    setHeroHeight();
    const onResize = () => setHeroHeight();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // also recompute when image changes / loads
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) setHeroHeight();
    else img.addEventListener("load", setHeroHeight);
    return () => img.removeEventListener?.("load", setHeroHeight);
  }, [idx]);

  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          ref={imgRef}
          src={imgs[idx]}
          alt="School view"
          className="hero__image"
        />
      </div>

      <div className="hero__overlay">
        <h1 className="hero__title">Arwachin India</h1>
        <p className="hero__subtitle">
          “Giving Children a Brighter Tomorrow”
        </p>
        <a href="#about" className="hero__btn">Explore More</a>
      </div>
    </section>
  );
}
