import './Agenda.css';

interface AgendaProps {
  className?: string;
}

interface AgendaItem {
  id: number;
  time: string;
  title: string;
  description: string;
  duration: string;
  type: 'opening' | 'module' | 'break' | 'qa' | 'closing';
}

export const Agenda = ({ className = '' }: AgendaProps) => {
  const schedule: AgendaItem[] = [
    {
      id: 1,
      time: '18:00',
      title: 'Apertura y Bienvenida',
      description: 'Introducción al evento, presentación de expositores y objetivos de la charla.',
      duration: '10 min',
      type: 'opening'
    },
    {
      id: 2,
      time: '18:10',
      title: 'Módulo 1: Derechos de Autor en TI',
      description: 'Legislación de derechos de autor aplicada al software, código fuente y obras digitales. Análisis de licencias y casos prácticos.',
      duration: '40 min',
      type: 'module'
    },
    {
      id: 3,
      time: '18:50',
      title: 'Receso Breve',
      description: 'Pausa para preparar el siguiente módulo.',
      duration: '5 min',
      type: 'break'
    },
    {
      id: 4,
      time: '18:55',
      title: 'Módulo 2: Patentes en Tecnologías',
      description: 'Sistema de patentes aplicado a invenciones tecnológicas, algoritmos y procesos informáticos bajo tratados internacionales.',
      duration: '40 min',
      type: 'module'
    },
    {
      id: 5,
      time: '19:35',
      title: 'Receso Breve',
      description: 'Pausa para preparar el último módulo.',
      duration: '5 min',
      type: 'break'
    },
    {
      id: 6,
      time: '19:40',
      title: 'Módulo 3: Desafíos Éticos Actuales',
      description: 'Análisis de retos contemporáneos: IA, blockchain, open source y dilemas éticos en la propiedad intelectual digital.',
      duration: '40 min',
      type: 'module'
    },
    {
      id: 7,
      time: '20:20',
      title: 'Sesión de Preguntas y Respuestas',
      description: 'Espacio interactivo para resolver dudas con los expositores. Participa en vivo mediante el chat.',
      duration: '20 min',
      type: 'qa'
    },
    {
      id: 8,
      time: '20:40',
      title: 'Cierre y Entrega de Certificados',
      description: 'Conclusiones finales e instrucciones para obtener el certificado digital de participación.',
      duration: '10 min',
      type: 'closing'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'opening':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          </svg>
        );
      case 'module':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        );
      case 'break':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12"></polyline>
          </svg>
        );
      case 'qa':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <line x1="9" y1="10" x2="15" y2="10"></line>
            <line x1="12" y1="13" x2="12" y2="13.01"></line>
          </svg>
        );
      case 'closing':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        );
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'opening':
        return 'type-opening';
      case 'module':
        return 'type-module';
      case 'break':
        return 'type-break';
      case 'qa':
        return 'type-qa';
      case 'closing':
        return 'type-closing';
      default:
        return '';
    }
  };

  return (
    <section className={`agenda ${className}`}>
      <div className="agenda-container">
        
        {/* Header */}
        <div className="agenda-header">
          <span className="section-label">Agenda</span>
          <h2 className="section-title">Cronograma del Evento</h2>
          <p className="section-description">
            Programa detallado de la charla virtual. Duración total aproximada: 2 horas y 50 minutos.
          </p>
        </div>

        {/* Timeline */}
        <div className="agenda-timeline">
          {schedule.map((item, index) => (
            <div key={item.id} className={`timeline-item ${getTypeColor(item.type)}`}>
              
              {/* Timeline Connector */}
              {index !== 0 && <div className="timeline-connector"></div>}
              
              <div className="timeline-content">
                {/* Time Badge */}
                <div className="time-badge">
                  <svg className="clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className="time-text">{item.time}</span>
                </div>

                {/* Card */}
                <div className="agenda-card">
                  <div className="card-icon">
                    {getTypeIcon(item.type)}
                  </div>
                  
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">{item.title}</h3>
                      <span className="card-duration">{item.duration}</span>
                    </div>
                    <p className="card-description">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Footer */}
        <div className="agenda-footer">
          <div className="footer-info">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <div>
              <h4 className="info-title">Nota Importante</h4>
              <p className="info-text">
                Los horarios son aproximados y pueden variar ligeramente. 
                La transmisión iniciará puntualmente a las 6:00 PM.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
