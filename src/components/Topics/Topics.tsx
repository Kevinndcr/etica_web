import './Topics.css';
import type { ReactNode } from 'react';

interface TopicsProps {
  className?: string;
}

interface Topic {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  highlights: string[];
}

export const Topics = ({ className = '' }: TopicsProps) => {
  const topics: Topic[] = [
    {
      id: 1,
      title: 'Derechos de Autor en el Ámbito de TI',
      subtitle: 'Protección Legal del Software',
      description: 'Análisis profundo de la legislación costarricense e internacional sobre derechos de autor aplicados al desarrollo de software, código fuente y obras digitales.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <circle cx="12" cy="13" r="2"></circle>
          <path d="M12 15v4"></path>
        </svg>
      ),
      highlights: [
        'Ley de Derechos de Autor y Derechos Conexos',
        'Protección del código fuente',
        'Licencias de software libre y propietario',
        'Casos prácticos y jurisprudencia'
      ]
    },
    {
      id: 2,
      title: 'Patentes y su Aplicación en Tecnologías de la Información',
      subtitle: 'Innovación y Protección Legal',
      description: 'Exploración del sistema de patentes aplicado a invenciones tecnológicas, algoritmos y sistemas informáticos bajo tratados internacionales.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      highlights: [
        'Patentabilidad de software e invenciones',
        'Proceso de registro de patentes',
        'Tratado de Cooperación en materia de Patentes (PCT)',
        'Protección de algoritmos y métodos de negocio'
      ]
    },
    {
      id: 3,
      title: 'Desafíos Actuales y Éticos en la Propiedad Intelectual en TI',
      subtitle: 'Futuro y Ética Digital',
      description: 'Análisis de los retos contemporáneos en propiedad intelectual: inteligencia artificial, blockchain, open source y dilemas éticos en la era digital.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      highlights: [
        'Propiedad intelectual en inteligencia artificial',
        'Blockchain y NFTs: nuevos paradigmas legales',
        'Ética en la apropiación del conocimiento',
        'Balance entre innovación y protección'
      ]
    }
  ];

  return (
    <section className={`topics ${className}`}>
      <div className="topics-container">
        
        {/* Header */}
        <div className="topics-header">
          <span className="section-label">Temario</span>
          <h2 className="section-title">Contenido de la Charla</h2>
          <p className="section-description">
            Tres módulos especializados que abordan los aspectos más relevantes 
            de la propiedad intelectual en el contexto de las tecnologías de la información.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={topic.id} className="topic-card" data-index={index}>
              <div className="topic-card-header">
                <div className="topic-icon-wrapper">
                  {topic.icon}
                </div>
                <span className="topic-number">Módulo {topic.id}</span>
              </div>

              <div className="topic-card-content">
                <h3 className="topic-title">{topic.title}</h3>
                <p className="topic-subtitle">{topic.subtitle}</p>
                <p className="topic-description">{topic.description}</p>

                <div className="topic-highlights">
                  <h4 className="highlights-title">Puntos Clave:</h4>
                  <ul className="highlights-list">
                    {topic.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="topic-card-footer">
                <div className="topic-duration">
                  <svg className="duration-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>~40 minutos</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="topics-footer">
          <div className="footer-card">
            <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <div className="footer-content">
              <h4 className="footer-title">Sesión Interactiva</h4>
              <p className="footer-text">
                Al finalizar los módulos, habrá una sesión de preguntas y respuestas 
                donde podrás interactuar directamente con los expositores.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
