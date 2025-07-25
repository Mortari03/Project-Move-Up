import React from "react";
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };

  return (
    <div className="team-page">
      <h1>Nosso Time</h1>

      <div className="team-carousel-wrapper">
        <Slider {...settings} className="photo-carousel">
          {members.map((member, index) => (
            <div className="photo-card" key={index}>
              <img src={member.image} alt={member.name} />
            </div>
          ))}
        </Slider>

        <Slider {...settings} className="info-carousel">
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
