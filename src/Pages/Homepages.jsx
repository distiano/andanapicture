import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Gallery from '../Components/Gallery/Gallery';
import Hero from '../Components/Hero/Hero';
import Example from '../Components/Navbar/Navbar';
import { useEffect } from 'react';

const Homepages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Example />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepages;
