import React from "react";
import "../css/Contato.css";

function Contato() {
  return (
    <div className="contact-page">
      <h1>Contato</h1>

      <form>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" required />
        <button type="submit">Enviar</button>
      </form>

      <p>Email: contato@agencia.com.br</p>
      <p>Telefone: (11) 99999-9999</p>
      <p>Endereço: Gustavo Maciel, 21-80 - Bauru/SP</p>

      {/* 🔽 Seção Trabalhe Conosco */}
      <section className="trabalhe-conosco">
        <h2>Trabalhe Conosco</h2>
        <p>
          Somos apaixonados por inovação e performance. Se você também é, envie seu currículo e venha fazer parte da Agência Move UP!
        </p>
        <a
          href="mailto:rh@agencia.com.br?subject=Trabalhe%20Conosco"
          className="btn-trabalhe"
        >
          Enviar Currículo
        </a>
      </section>
    </div>
  );
}

export default Contato;
