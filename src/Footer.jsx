import "./footer.css";
import logo from "./assets/logo.png"; // put your logo here (PNG/SVG/JPG)

function SocialIcon({ href = "#", label, children }) {
  return (
    <a
      className="ft__social"
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__wrap">
        {/* Brand + About */}
        <div className="ft__col">
          <div className="ft__brand">
            <img src={logo} alt="Arwachin India School logo" className="ft__logo" />
            <div>
              <h3 className="ft__title">Arwachin India School</h3>
              <p className="ft__tag">Burhanpur, MP</p>
            </div>
          </div>

          <p className="ft__about">
            A school for holistic learning—strong academics, life skills, and values.
            We help students grow with curiosity, confidence, and character.
          </p>

          <div className="ft__socials">
            {/* 👉 replace href="#" with your real links */}
            <SocialIcon href="#" label="Facebook">
              {/* Facebook */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.02H7.9v-2.92h2.54V9.41c0-2.5 1.48-3.88 3.76-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.92h-2.32v7.02C18.34 21.22 22 17.06 22 12.06z" />
              </svg>
            </SocialIcon>

            <SocialIcon href="#" label="Instagram">
              {/* Instagram */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </SocialIcon>

            <SocialIcon href="#" label="LinkedIn">
              {/* LinkedIn */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1.01 1.83-2.08 3.76-2.08 4.02 0 4.77 2.65 4.77 6.09V23h-4v-6.7c0-1.6-.03-3.67-2.23-3.67-2.24 0-2.58 1.75-2.58 3.55V23h-4V8z"/>
              </svg>
            </SocialIcon>

            <SocialIcon href="#" label="YouTube">
              {/* YouTube */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.24 31.24 0 0 0 0 12c0 1.92.17 3.84.5 5.8.28 1.04 1.08 1.85 2.12 2.14 1.85.56 9.38.56 9.38.56s7.53 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14c.33-1.96.5-3.88.5-5.8 0-1.92-.17-3.84-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Address / Contacts */}
        <div className="ft__col">
          <h4 className="ft__h4">Address</h4>
          <address className="ft__addr">
            Arwachin India School<br />
            Arwachin Parisar, 70/3, Bada Buzurg, Lalbagh<br />
            Burhanpur(450331)
          </address>

          <h4 className="ft__h4">Contact</h4>
          <ul className="ft__list">
            <li><a href="tel:+919111567888">+91  9111567888,</a></li>
            <li><a href="tel:+919111867888">+91 9111867888</a></li>
            <li><a href="tel:+919111967888">+91 9111967888</a></li>
          </ul>
          <h4 className="ft__h4">Email</h4>
            <ul className="ft__list">
                <li><a href="mailto:arwachinindia2016@gmail.com">arwachinindia2016@gmail.com,</a></li>
                <li><a href="mailto:arwachinindia@gmail.com">arwachinindia@gmail.com</a></li>
            </ul>
          

          <h4 className="ft__h4">Quick Links</h4>
          <ul className="ft__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Map */}
        <div className="ft__col">
          <h4 className="ft__h4">Find Us</h4>
          <div className="ft__mapWrap">
            {/* Google Maps embed – Arwachin India School, Burhanpur */}
            <iframe
              className="ft__map"
              title="Arwachin India School Burhanpur Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Arwachin%20India%20School%20Burhanpur&output=embed"
            />
          </div>
          <a
            className="ft__mapLink"
            href="https://www.google.com/maps/search/?api=1&query=Arwachin%20India%20School%20Burhanpur"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ft__bar">
        <p>© {new Date().getFullYear()} Arwachin India School — All rights reserved.</p>
      </div>
    </footer>
  );
}
