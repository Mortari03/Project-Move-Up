import React, { useEffect, useRef, useState } from "react";
import "../css/rodape.css";

function Footer() {
  const [scaleY, setScaleY] = useState(1);
// Dentro do useEffect → ajustado com "translateY" extra se esticada
const logoRef = useRef(null);

useEffect(() => {
  function handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const startScroll = docHeight - windowHeight - 300;
    const endScroll = docHeight - windowHeight;

    if (scrollY < startScroll) {
      setScaleY(1);
      if (logoRef.current) logoRef.current.style.transform = `scaleY(1) translateY(0px)`;
    } else if (scrollY >= startScroll && scrollY <= endScroll) {
      const progress = (scrollY - startScroll) / (endScroll - startScroll);
      const originalHeight = 150;
      const maxScale = windowHeight / originalHeight;
      const scale = 1 + progress * (maxScale - 1);
      const translateY = progress * 60; // move 60px para baixo no final
      setScaleY(scale);
      if (logoRef.current) {
        logoRef.current.style.transform = `scaleY(${scale}) translateY(${translateY}px)`;
      }
    } else {
      setScaleY(1);
      if (logoRef.current) logoRef.current.style.transform = `scaleY(1) translateY(0px)`;
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <footer className="wolff-footer">
      <div className="wolff-footer-top">
        <div className="wolff-footer-year">2025 Move UP</div>
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
      <div className="wolff-footer-logo-wrapper">
        <img
          src="/MoveUp Logo.png"
          alt="Move UP Logo"
          className="wolff-footer-logo"
          style={{ transform: `scaleY(${scaleY})` }}
        />
      </div>
    </footer>
  );
}

export default Footer;
