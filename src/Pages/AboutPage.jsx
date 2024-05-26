import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Example from '../Components/Navbar/Navbar';
import { useEffect } from 'react';
import bg1 from '../assets/images/bg1.jpg';
import Footer from '../Components/Footer/Footer';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Example />
      <div className="hero bg-cover " style={{ backgroundImage: `url(${bg1})` }}>
        <div className="min-h-[40vh] flex justify-center items-center pt-14 bg-black bg-opacity-30">
          <h1 className="text-5xl font-thin text-white" style={{ fontFamily: '"Roboto", serif' }}>
            About Us
          </h1>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
