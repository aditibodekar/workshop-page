import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WorkshopDetails from "../components/WorkshopDetails";
import LearningOutcomes from "../components/LearningOutcomes";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import RegistrationForm from "../components/RegistrationForm";
import Footer from "../components/Footer";
import StickyMobileCta from "../components/StickyMobileCta";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <Testimonials />
        <Faq />
        <RegistrationForm />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
