import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './views/home/Home';
// import RelaxationBioDynamique from './views/rbd/RelaxationBioDynamique';
// import KateriCreations from './views/katericreations/KateriCreations';
// import Sonotherapie from './views/sonotherapie/Sonotherapie';
import Contact from './views/contact/Contact';
import Programme from './views/programme/Programme';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programme" element={<Programme />} />
          {/* <Route path="/sonotherapie" element={<Sonotherapie />} />
          <Route path="/relaxation-bio-dynamique" element={<RelaxationBioDynamique />} />
          <Route path="/kateri-creations" element={<KateriCreations />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
