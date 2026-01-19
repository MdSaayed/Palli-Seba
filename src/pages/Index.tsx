import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AppointmentSection from "@/components/AppointmentSection";
import BMDCSection from "@/components/BMDCSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseSection />
        <AppointmentSection />
        <BMDCSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
