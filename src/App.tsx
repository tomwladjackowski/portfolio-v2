import { Route, Routes } from "react-router-dom";
import NavBar from "./sections/NavBar";
import Home from "./pages/Home/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
