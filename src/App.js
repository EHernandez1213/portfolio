import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Top from './components/Top';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <>
      <Top />
      <Main />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
