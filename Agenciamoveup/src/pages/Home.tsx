import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "../css/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team from "./Team";
import Portfolio from "./Portfolio";
import FAQ from "./FAQ";

function Home() {
  const [activeSection, setActiveSection] = useState<"hero" | "highlights" | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const highlightsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setActiveSection("hero");
            else if (entry.target === highlightsRef.current) setActiveSection("highlights");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-50% 0px -57% 0px", // Janela central da viewport (ativa no meio do elemento)
      }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (highlightsRef.current) observer.observe(highlightsRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const body = document.body;
    body.classList.remove("body-bg-hero", "body-bg-highlights");

    if (activeSection === "hero") {
      body.classList.add("body-bg-hero");
    } else if (activeSection === "highlights") {
      body.classList.add("body-bg-highlights");
    }
  }, [activeSection]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  const imagens = ["/MOVEUP.PNG", "/MOVEUP2.PNG", "/MOVEUP3.PNG", "/MOVEUP4.PNG"];

  return (
    <>
      <section className="carrossel-topo">
        <Slider {...settings}>
          {imagens.map((src, i) => (
            <div key={i} className="slide">
              <img src={src} alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </Slider>
      </section>

      <section ref={highlightsRef} className="highlights">
        <div className="highlights-content">
          <h3 className="highlight-title">Nossos Serviços</h3>
          <p className="highlight-subtitle">
            Estratégia, inovação e execução. Um ecossistema completo para fazer sua marca crescer com autoridade digital.
          </p>
          <ul className="highlight-list">
            <li>Branding & Design</li>
            <li>SEO & Performance</li>
            <li>Web & Mobile</li>
            <li>Conteúdo Estratégico</li>
            <li>Automação & CRM</li>
          </ul>
        </div>
      </section>

      <div className="home-body">
        <section ref={heroRef} className="hero">
          <div className="hero-content stacked">
            <div className="block">
              <h2>Agência Digital Inovadora</h2>
              <p>
                Transformamos negócios por meio de design, estratégia e tecnologias modernas. Conte
                com a gente do conceito à execução.
              </p>
            </div>
            <hr />
            <div className="block">
              <h3>Vamos criar algo memorável juntos?</h3>
            </div>
            <div className="cta-button">
              <a href="#contact" className="btn-secondary">
                Fale Conosco
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="portfolio-section">
        <Portfolio />
      </section>

      <section className="faq-section">
        <FAQ />
      </section>

      <section className="team-section">
        <Team />
      </section>
    </>
  );
}

export default Home;
