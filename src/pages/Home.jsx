import Hero from "../components/organisms/Hero";
import WelcomeSection from "../components/organisms/WelcomeSection";
import FacultyTitleSection from "../components/organisms/FacultyTitleSection";
import FacultySection from "../components/organisms/FacultySection";
import PMBSection from "../components/organisms/PMBSection";
import NewsSection from "../components/organisms/NewsSection";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
      <Hero />
      <WelcomeSection />
      <FacultyTitleSection />
      <FacultySection />
      <PMBSection />
      <NewsSection />
      <Footer />
    </>
  );
};

export default Home;
