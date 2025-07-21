import React from "react";
import { Link } from "react-router-dom";
import "../styles/general.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="landing-nav">
        <h1 className="logo">OPTIMIZZATE</h1>
        <Link to="/CandidateLogin" className="btn btn-login">
          Inicia Sesión como Candidato
        </Link>
        <Link to="/CompanyLogin" className="btn btn-login">
          Inicia Sesión como Empresa
        </Link>
      </nav>

      <main className="landing-main">
  {/* Optimización con IA */}
  <section className="section-optimization">
    <h2>Optimización con IA</h2>
    <p>
      Nuestra aplicación utiliza algoritmos de inteligencia artificial avanzados para transformar el proceso de reclutamiento. Descubre cómo la tecnología puede facilitar tus objetivos:
    </p>
    <ul>
      <li>📊 <strong>Analizar perfiles de candidatos:</strong> Procesamiento en segundos gracias a algoritmos inteligentes.</li>
      <li>🤖 <strong>Automatizar programación:</strong> Agenda entrevistas con facilidad y precisión.</li>
      <li>🔍 <strong>Identificar el mejor ajuste:</strong> Encuentra el talento ideal basado en datos concretos.</li>
    </ul>

  </section>

  {/* Beneficios para Empresas */}
  <section className="section-benefits">
    <h2>Beneficios para Empresas</h2>
    <p>
      Acelera tu proceso de contratación con herramientas diseñadas para maximizar la eficiencia y garantizar resultados de calidad.
    </p>
    <div className="benefits-container">
      <div className="benefit">
        <h3>🕒 Ahorro de Tiempo</h3>
        <p>Encuentra candidatos en minutos, no en días.</p>
        
      </div>
      <div className="benefit">
        <h3>📈 Mejora del Proceso</h3>
        <p>Automatización que simplifica tu flujo de trabajo.</p>
        
      </div>
      <div className="benefit">
        <h3>💡 Decisiones Inteligentes</h3>
        <p>Datos y análisis para elegir al mejor talento.</p>
        
      </div>
    </div>
  </section>

  {/* Beneficios para Candidatos */}
  <section className="section-candidates">
    <h2>Beneficios para Candidatos</h2>
    <p>
      Encuentra tu próxima oportunidad con herramientas diseñadas para potenciar tu perfil profesional y conectar con las mejores empresas.
    </p>
    <ul>
      <li>🎯 <strong>Ofertas personalizadas:</strong> Encuentra oportunidades ideales según tu experiencia y habilidades.</li>
      <li>💼 <strong>Recomendaciones inteligentes:</strong> Mejora tus posibilidades de éxito con sugerencias basadas en IA.</li>
      <li>⚡ <strong>Procesos rápidos:</strong> Reduce tiempos y elimina complicaciones innecesarias.</li>
    </ul>
    
  </section>

  {/* Cómo Funciona */}
  <section className="section-how-it-works">
    <h2>¿Cómo Funciona?</h2>
    <p>
      Integramos tecnología de inteligencia artificial para ofrecer una experiencia fluida tanto para empresas como para candidatos. Sigue estos simples pasos:
    </p>
    <ol>
      <li>🚀 <strong>Regístrate:</strong> Selecciona si eres una empresa o un candidato.</li>
      <li>📥 <strong>Sube tus datos:</strong> Las empresas pueden publicar ofertas y los candidatos subir su información profesional.</li>
      <li>🤝 <strong>Conexión:</strong> La IA empareja el mejor talento con las mejores oportunidades laborales.</li>
      <li>📅 <strong>Gestión de entrevistas:</strong> Prográmate fácilmente con herramientas automatizadas.</li>
    </ol>
    <img 
      src="https://via.placeholder.com/600x300" 
      alt="Proceso de funcionamiento de la plataforma" 
      className="section-image"
    />
  </section>

        {/* Call to Action */}
        <div className="cta-buttons">
          <Link to="/companyregister" className="btn btn-register-empresa">
            Regístrate como Empresa
          </Link>
          <Link to="/candidateregister" className="btn btn-register-candidato">
            Regístrate como Candidato
          </Link>
        </div>
      </main>

      <footer className="landing-footer">
        <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

