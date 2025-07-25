import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/Cabecalho/Header.tsx";
import Footer from "./Rodape/Footer.tsx";
import Home from "./pages/Home";
import Services from "./pages/Services.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Innovation from "./pages/Innovation.tsx";
import About from "./pages/sobre.tsx";
import Team from "./pages/Team.tsx";
import Contact from "./pages/contato.tsx";
import ClientArea from "./pages/ClientArea.tsx";
import Blog from "./pages/Blog.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import FAQ from "./pages/FAQ.tsx";
import Careers from "./pages/Careers.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfUse from "./pages/TermsOfUse.tsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/inovacao" element={<Innovation />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/time" element={<Team />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/cliente" element={<ClientArea />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/depoimentos" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/carreiras" element={<Careers />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
