import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutUs } from "@/components/AboutUs";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;