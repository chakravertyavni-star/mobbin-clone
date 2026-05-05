import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import MainSection from "./components/MainSection";
import ScrollShowcase from "./components/ScrollShowcase";
import MovingShowcase from "./components/MovingShowcase";
import VideoShowcase from "./components/VideoShowcase";
import FeatureVideos from "./components/FeatureVideos";
import TestimonialsSection from "./components/TestimonialsSection";
import LogoMarquee from "./components/LogoMarquee";
import RevealFooter from "./components/RevealFooter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <MainSection />
      <ScrollShowcase />
      <MovingShowcase />
      <VideoShowcase />
      <FeatureVideos />
      <TestimonialsSection />
      <LogoMarquee />
      <RevealFooter />

      
    </>
  );
}

export default App;