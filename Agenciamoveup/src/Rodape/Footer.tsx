import React, { useEffect, useRef, useState } from "react";
import "../css/rodape.css";

function Footer() {
  const [scaleY, setScaleY] = useState(1);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;

      // Parâmetros de controle
      const startScroll = 1920;
      const endScroll = 2500;
      const maxScale = 1.5;

      if (scrollY < startScroll) {
        setScaleY(1); // antes de 1920px, normal
      } else if (scrollY >= startScroll && scrollY <= endScroll) {
        const progress = (scrollY - startScroll) / (endScroll - startScroll); // 0 a 1
        const scale = 1 + progress * (maxScale - 1); // 1 a maxScale
        setScaleY(scale);
      } else {
        setScaleY(1); // depois de 2500px, volta ao normal
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // executa na primeira carga

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="wolff-footer">
      <div className="wolff-footer-top">
        <div className="wolff-footer-year">2025 Wolff Olins</div>
        <div className="wolff-footer-links">
          <div>
            <strong>Talk to us or ask us anything.</strong>
            <ul>
              <li><a href="#">→ Contact Us</a></li>
              <li><a href="#">→ Cookie Policy</a></li>
              <li><a href="#">→ Privacy Notice</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href="#">→ LinkedIn</a></li>
              <li><a href="#">→ Twitter</a></li>
              <li><a href="#">→ Instagram</a></li>
              <li><a href="#">→ YouTube</a></li>
              <li><a href="#">→ Archive</a></li>
            </ul>
          </div>
          <div className="back-to-top">
            <a href="#top" aria-label="Back to top">↑<br />Back to top</a>
          </div>
        </div>
      </div>
      <div
        className="wolff-footer-logo"
        style={{ transform: `scaleY(${scaleY})` }}
      >
        Wolff Olins
      </div>
    </footer>
  );
}

export default Footer;
