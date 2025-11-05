import { useEffect, useMemo, useRef, useState } from "react";
import "./welcome-modal.css";

/**
 * Props:
 *  - open (bool)
 *  - onClose () => void
 *  - title (string)
 *  - images (string[])  // 👈 pass multiple images
 *  - frequency: "always" | "daily" | "session"  // default "daily"
 *  - onceKey (string) localStorage key, default "welcome_seen_at"
 *  - autoplayMs (number) default 4000
 */
export default function WelcomeModal({
  open,
  onClose,
  title = "Welcome",
  images = [],
  frequency = "daily",
  onceKey = "welcome_seen_at",
  autoplayMs = 4000,
}) {
  const dialogRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const count = images.length || 0;

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // focus trap (simple)
  useEffect(() => {
    if (open && dialogRef.current) dialogRef.current.focus();
  }, [open]);

  // mark seen based on frequency
  useEffect(() => {
    if (!open) return;
    const mark = () => {
      if (frequency === "always") return;
      if (frequency === "session") {
        sessionStorage.setItem(onceKey, "1");
      } else {
        localStorage.setItem(onceKey, String(Date.now()));
      }
    };
    mark();
  }, [open, frequency, onceKey]);

  // autoplay slideshow
  useEffect(() => {
    if (!open || count < 2) return;
    const tm = setInterval(() => setIdx((i) => (i + 1) % count), autoplayMs);
    return () => clearInterval(tm);
  }, [open, count, autoplayMs]);

  const next = () => setIdx((i) => (i + 1) % count);
  const prev = () => setIdx((i) => (i - 1 + count) % count);
  const hasSlides = count > 0;

  if (!open) return null;

  return (
    <div className="wm__overlay" onClick={onClose} aria-hidden="true">
      <section
        className="wm__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="wm__head">
          <h3 className="wm__title">{title}</h3>
          <button className="wm__x" onClick={onClose} aria-label="Close">✕</button>
        </header>

        <div className="wm__body">
          <div className="wm__frame">
            {hasSlides ? (
              <>
                <img key={idx} src={images[idx]} alt="" className="wm__img fade-in" />
                {count > 1 && (
                  <>
                    
                  </>
                )}
              </>
            ) : (
              <div className="wm__placeholder">Add images[] to the modal</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

/* Helper for gating in App (optional) */
export function shouldOpenWelcome(frequency = "daily", key = "welcome_seen_at") {
  if (frequency === "always") return true;
  if (frequency === "session") {
    return sessionStorage.getItem(key) !== "1";
  }
  const last = Number(localStorage.getItem(key) || 0);
  const oneDay = 24 * 60 * 60 * 1000;
  return Date.now() - last > oneDay;
}
