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

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/yearbook" element={<Yearbook />} />
        <Route path="/weddingcustomers/:id" element={<WeddingCustomers />} />
        <Route path="/companyprofile" element={<CompanyProfile />} />
        <Route path="/comprocustomers/:id" element={<ComproCustomers />} />
      </Routes>
    </Router>
  );
}

export default App;
