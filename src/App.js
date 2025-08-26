import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Home from './views/home/Home';
import Accompagnements from './views/accompagnements/Accompagnements';
import KateriCreations from './views/katericreations/KateriCreations';
import APropos from './views/a-propos/APropos';
import Contact from './views/contact/Contact';
import Programme from './views/programme/Programme';
import Blog from './views/blog/Blog';
import ArticlePage from './views/blog/ArticlePage';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/accompagnements" element={<Accompagnements />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="/kateri-creations" element={<KateriCreations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
