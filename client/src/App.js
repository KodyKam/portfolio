// client/src/App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ClientWork from "./pages/ClientWork";

// Admin / internal (no auth for now)
import AdminContacts from "./pages/AdminContacts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public marketing pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/client-work" element={<ClientWork />} /> {/* new client work page */}
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Internal / admin */}
        <Route path="/admin/contacts" element={<AdminContacts />} />

        {/* Fallback (optional, but recommended later) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;