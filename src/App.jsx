import { useEffect, useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import PedagogyGrid from "./PedagogyGrid";
import ScrollCards from "./ScrollCards";
import LifeAtArwachin from "./LifeAtArwachin";
import OurNumber from "./OurNumbers";
import Testimonials from "./Testimonials";
import MessageFromBoard from "./MessageFromBoard";
import Footer from "./Footer";
import WelcomeModal, { shouldOpenWelcome } from "./WelcomeModal";

// import multiple banner images
import b1 from "./assets/welcome-1.jpg";
import b2 from "./assets/welcome-2.jpg";
import b3 from "./assets/welcome-3.jpg";

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // ✅ show on every refresh for now:
    const showNow = shouldOpenWelcome("always"); // change to "daily" or "session" later
    if (showNow) setTimeout(() => setOpen(true), 600);
  }, []);

  return (
    <>
      <WelcomeModal
        open={open}
        onClose={() => setOpen(false)}
        title="Welcome to Arwachin India School 🎉"
        images={[b1, b2, b3]}   // 👈 slideshow
        frequency="always"      // "always" | "daily" | "session"
        autoplayMs={4000}
      />

      <ResponsiveNavbar />
      <Hero />
      <InfoSection />
      <PedagogyGrid />
      <ScrollCards />
      <LifeAtArwachin />
      <OurNumber />
      <Testimonials />
      <MessageFromBoard />
      <Footer />
    </>
  );
}
