import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Team.css";

const members = [
  {
    name: "Igor Seco - CEO da Move UP | Marketing Digital",
    image: "/igor.jpg",
  },
  {
    name: "Gabriela Pupo - Jurídico interno (especialista em LGPD)",
    image: "/gabriela.jpg",
  },
  {
    name: "Riandro Souza - Social Media",
    image: "/riandro.jpg",
  },
  {
    name: "Théo Lopes - Estagiário",
    image: "/theo.jpg",
  },
  {
    name: "Vitor Mortari - Web Designer",
    image: "/vitor.jpg",
  },
  {
    name: "Muvielson - Assistente Virtual",
    image: "/muvielson.jpg",
  },
];

function Team() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  
  const settingsMain = {
    asNavFor: nav2,
    ref: slider1,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };

  const settingsNav = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    infinite: true,
  };

  return (
    <div className="team-page">
      <h1>Nosso Time</h1>

      <div className="team-carousel-wrapper">
        {/* Slider principal de fotos */}
        <Slider {...settingsMain} className="photo-carousel">
          {members.map((member, index) => (
            <div className="photo-card" key={index}>
              <img src={member.image} alt={member.name} />
            </div>
          ))}
        </Slider>

        {/* Slider sincronizado de nomes */}
        <Slider {...settingsNav} className="info-carousel">
          {members.map((member, index) => (
            <div className="info-card" key={index}>
              <p>{member.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Team;
