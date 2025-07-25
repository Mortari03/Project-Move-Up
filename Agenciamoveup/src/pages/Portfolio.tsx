import React, { useState, useEffect, useRef } from "react";
import "../css/portfolio.css";

const projects = [
  {
    video: "/public/Andy Casagrande-hawaii-aerials-187834-filmsupply.mov",
    title: "Projeto Havaí Aéreo",
    description: "Captura aérea de paisagens havaianas para campanha publicitária.",
    feedback: "“Imagens deslumbrantes que superaram nossas expectativas!”",
  },
  {
    video: "/public/Force-car-in-desert-154502-filmsupply.mov",
    title: "Carro no Deserto",
    description: "Filmagem promocional de carro em ambiente árido e dramático.",
    feedback: "“A atmosfera criada foi exatamente o que queríamos.”",
  },
  {
    video: "/public/Oust-elderly-race-car-driver-31620-filmsupply.mov",
    title: "Piloto Sênior em Alta Velocidade",
    description: "Documentário curto destacando histórias inspiradoras de pilotos.",
    feedback: "“Conseguiram capturar a emoção e a nostalgia com perfeição.”",
  },
  {
    video: "/public/Recent-classic-muscle-car-driving-on-highway-333170-filmsupply.mov",
    title: "Muscle Car na Estrada",
    description: "Vídeo cinemático de carro clássico rodando em rodovias abertas.",
    feedback: "“Produção impecável — sentimos que estávamos no banco do passageiro.”",
  },
];

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Muda o projeto a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Renderiza o efeito de "ruído" no canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const renderNoise = () => {
      const width = canvas.width;
      const height = canvas.height;
      const imageData = ctx.createImageData(width, height);
      const buffer = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        const shade = Math.floor(Math.random() * 255);
        buffer[i] =
          (255 << 24) | // alpha
          (shade << 16) |
          (shade << 8) |
          shade;
      }

      ctx.putImageData(imageData, 0, 0);
      animationFrameId = requestAnimationFrame(renderNoise);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    renderNoise();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <div className="portfolio-page">
      {/* Canvas de ruído fica atrás do conteúdo */}
      <canvas ref={canvasRef} className="noise-canvas" />

      <div className="content-wrapper">
        <div className="left-content">
          <h1>Portfólio & Casos de Sucesso</h1>
          <h2>{currentProject.title}</h2>
          <p>{currentProject.description}</p>
          <blockquote>{currentProject.feedback}</blockquote>
        </div>

        <div className="right-carousel">
          <video
            key={currentProject.video}
            src={currentProject.video}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
