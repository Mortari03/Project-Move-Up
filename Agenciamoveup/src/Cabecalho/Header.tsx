import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/cabecalho.css";

function Header() {
  const [isFloating, setIsFloating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsFloating(scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isFloating ? "floating" : ""}`}>
      <h1
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }} // Adiciona o cursor de mão para indicar clique
      >
        {/* Exibe uma imagem ou outra conforme scroll */}
        {isFloating ? (
          <img
            src="/logotop.png"
            alt="Logo flutuante"
            className="floating-logo"
          />
        ) : (
          <img
            src="/MoveUp Logo.png"
            alt="Logo topo"
            className="top-logo"
          />
        )}
      </h1>

      <nav className="nav-links">
        <Link to="/servicos">SERVIÇOS</Link>
        <Link to="/sobre">SOBRE</Link>
        <Link to="/contato">CONTATO</Link>
        <div className="collorbottoncliente">
          <Link to="/cliente">ÁREA DO CLIENTE</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
