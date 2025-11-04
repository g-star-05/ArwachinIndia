import "./info-section.css";
import campusImg from "./assets/campus.jpg";

export default function InfoSection() {
  return (
    <section className="info" id="about">
      <div className="info__wrap">
        <div className="info__media">
          <div className="info__frame">
            <img src={campusImg} alt="School campus" className="info__img" />
          </div>
        </div>

        <div className="info__content">
          <h2 className="info__title">A Safe, Inspiring Place to Learn & Grow</h2>
          <p className="info__para">
            Arwachin India School for Holistic Learning, located in the historic city of Burhanpur, Madhya Pradesh, is one of the best co-educational day boarding and residential schools affiliated to CBSE, New Delhi (Affiliation Number:1031016), offering classes from Pre-Nursery to Grade 12. Rooted in the ethos of integrated education, our school is a mission towards nation-building, committed to developing not only the intellect but also the character and spirit of every learner.
          </p>
          <ul className="info__list">
            <li>Giving Children a Brighter Tomorrow.</li>
            <li>Where futures are built.</li>
            <li>Sports & cultural programs</li>
            <li>Holistic Development</li>
          </ul>
          <div className="info__cta">
            <a href="#about" className="info__btn">About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
