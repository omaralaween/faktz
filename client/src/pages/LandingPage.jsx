import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import SeeInAction from "../components/SeeInAction";
import AboutSection from "../components/AboutFaktz";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SeeInAction />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
