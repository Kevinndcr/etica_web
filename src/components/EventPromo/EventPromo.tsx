import { useEffect, useState } from 'react';
import './EventPromo.css';

interface EventPromoProps {
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const EventPromo = ({ className = '' }: EventPromoProps) => {
  // Fecha de ejemplo: 15 de diciembre de 2025, 6:00 PM
  const eventDate = new Date('2025-12-15T18:00:00');
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +eventDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`event-promo ${className}`}>
      <div className="event-promo-container">
        
        {/* Header */}
        <div className="event-promo-header">
          <span className="section-label">Próximo Evento</span>
          <h2 className="section-title">Únete a Nuestra Charla Virtual</h2>
          <p className="section-description">
            Un evento exclusivo organizado por la Universidad Técnica Nacional para 
            profundizar en los aspectos legales de la propiedad intelectual en el 
            ámbito tecnológico.
          </p>
        </div>

        {/* Event Details Card */}
        <div className="event-card">
          <div className="event-card-grid">
            
            {/* Left Side - Date & Time */}
            <div className="event-info">
              <div className="date-badge">
                <div className="date-badge-month">Diciembre</div>
                <div className="date-badge-day">15</div>
                <div className="date-badge-year">2025</div>
              </div>

              <div className="event-details">
                <div className="event-detail-item">
                  <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div>
                    <div className="detail-label">Hora de Inicio</div>
                    <div className="detail-value">6:00 PM (Hora Costa Rica)</div>
                  </div>
                </div>

                <div className="event-detail-item">
                  <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                    <polyline points="17 2 12 7 7 2"></polyline>
                  </svg>
                  <div>
                    <div className="detail-label">Plataforma</div>
                    <div className="detail-value">YouTube Live</div>
                  </div>
                </div>

                <div className="event-detail-item">
                  <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <div>
                    <div className="detail-label">Cupos</div>
                    <div className="detail-value">Ilimitados</div>
                  </div>
                </div>

                <div className="event-detail-item">
                  <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <div>
                    <div className="detail-label">Costo</div>
                    <div className="detail-value">Gratuito</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Countdown */}
            <div className="countdown-section">
              <h3 className="countdown-title">Faltan</h3>
              <div className="countdown-grid">
                <div className="countdown-item">
                  <div className="countdown-value">{timeLeft.days}</div>
                  <div className="countdown-label">Días</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">{timeLeft.hours}</div>
                  <div className="countdown-label">Horas</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">{timeLeft.minutes}</div>
                  <div className="countdown-label">Minutos</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">{timeLeft.seconds}</div>
                  <div className="countdown-label">Segundos</div>
                </div>
              </div>

              <div className="countdown-cta">
                <a href="#registro" className="countdown-button">
                  <span>Reservar mi Lugar</span>
                  <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <p className="countdown-note">
                  Inscripción gratuita • Certificado incluido
                </p>
              </div>
            </div>

          </div>

          {/* Event Highlights */}
          <div className="event-highlights">
            <div className="highlight-item">
              <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Transmisión en vivo e interactiva</span>
            </div>
            <div className="highlight-item">
              <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Sesión de preguntas y respuestas</span>
            </div>
            <div className="highlight-item">
              <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Material de apoyo descargable</span>
            </div>
            <div className="highlight-item">
              <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Certificado digital de participación</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
