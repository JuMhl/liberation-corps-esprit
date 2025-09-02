import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '@/components/footer/Footer.jsx';
import NavBar from '@/components/navbar/NavBar.jsx';
import Home from '@/views/home/Home.jsx';
import Accompagnements from '@/views/accompagnements/Accompagnements.jsx';
import KateriCreations from '@/views/katericreations/KateriCreations.jsx';
import APropos from '@/views/a-propos/APropos.jsx';
import Contact from '@/views/contact/Contact.jsx';
import Programme from '@/views/programme/Programme.jsx';
import Blog from '@/views/blog/Blog.jsx';
import ArticlePage from '@/views/blog/ArticlePage.jsx';

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
