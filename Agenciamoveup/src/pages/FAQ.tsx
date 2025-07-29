import React from "react";
import "../css/Faq.css";

function FAQ() {
  const faqs = [
    {
      question: "Como funciona o contrato?",
      answer: "Trabalhamos com planos mensais, sem fidelidade.",
    },
    {
      question: "Quais ferramentas vocês usam?",
      answer: "Google Analytics, SEMrush, RD Station e outras.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Normalmente entre 3 e 6 meses, dependendo da estratégia.",
    },
    {
      question: "Vocês criam sites também?",
      answer: "Sim, desenvolvemos sites responsivos e otimizados.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, nossos planos são sem fidelidade.",
    },
    {
      question: "Vocês trabalham com redes sociais?",
      answer: "Sim, criamos e gerenciamos conteúdo para redes sociais.",
    },
    {
      question: "Como é feita a cobrança?",
      answer: "Mensalmente via boleto ou cartão.",
    },
    {
      question: "Vocês fazem anúncios pagos?",
      answer: "Sim, gerenciamos campanhas no Google, Meta e LinkedIn.",
    },
    {
      question: "Preciso ter um site já pronto?",
      answer: "Não, podemos criar um novo site do zero para você.",
    },
    {
      question: "Vocês oferecem relatórios?",
      answer: "Sim, enviamos relatórios mensais com métricas e insights.",
    },
    {
      question: "Vocês atendem empresas de qualquer setor?",
      answer: "Sim, temos clientes de diversos segmentos.",
    },
    {
      question: "Qual o diferencial da MoveUp?",
      answer: "Nosso foco é crescimento com dados, estratégia e execução.",
    },
  ];

  // Divide as FAQs em 3 colunas
  const columns = [[], [], []];
  faqs.forEach((faq, index) => {
    columns[index % 3].push(faq);
  });

  return (
    <div className="faq-page">
      <h1>Perguntas Frequentes</h1>
      <div className="faq-columns">
        {columns.map((column, colIndex) => (
          <div className="faq-column" key={colIndex}>
            {column.map((faq, i) => (
              <div className="faq-item" key={i}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
