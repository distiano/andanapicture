import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepages from './Pages/Homepages';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Wedding from './Pages/Wedding';
import Yearbook from './Pages/Yearbook';
import WeddingCustomers from './Pages/WeddingCustomers';
import AboutPage from './Pages/AboutPage';
import CompanyProfile from './Pages/CompanyProfile';
import ComproCustomers from './Pages/ComproCustomers';
import ContactPage from './Pages/ContactPage';
import YearbookCustomers from './Pages/YearbookCustomers';
import WeddingCinematic from './Pages/WeddingCinematic';
import WeddingCinematicCustomers from './Pages/WeddingCinematicCustomers';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/yearbook" element={<Yearbook />} />
        <Route path="/wedding/:id" element={<WeddingCustomers />} />
        <Route path="/yearbook/:id" element={<YearbookCustomers />} />
        <Route path="/companyprofile" element={<CompanyProfile />} />
        <Route path="/weddingcinematic" element={<WeddingCinematic />} />
        <Route path="/comprocustomers/:id" element={<ComproCustomers />} />
        <Route path="/weddingcinematic/:id" element={<WeddingCinematicCustomers />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
