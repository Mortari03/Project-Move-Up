import React from "react";
import "../css/ClientArea.css";

function ClientArea() {
  return (
    <div className="client-area-page">
      <h1>Área do Cliente</h1>
      <p>Acesso restrito. Faça login para acessar seus relatórios e arquivos.</p>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
        {/* Botão de registro abaixo */}
        <button type="button" className="btn-register" onClick={() => alert("Registrar funcionalidade futura")}>
          Registrar
        </button>
      </form>
    </div>
  );
}

export default ClientArea;
