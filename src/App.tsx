import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Faculty from './pages/Faculty';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Facility from './pages/Facility';
import Contact from './pages/Contact';
import ScrollProgress from './components/ScrollProgress';
import FloatingApply from './components/FloatingApply';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream font-body text-navy">
        <ScrollProgress />
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/facility" element={<Facility />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
        <FloatingApply />
      </div>
    </BrowserRouter>
  );
}

export default App;
