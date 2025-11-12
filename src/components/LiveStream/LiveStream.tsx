import { useState } from 'react';
import './LiveStream.css';

interface LiveStreamProps {
  className?: string;
  youtubeVideoId?: string;
  isLive?: boolean;
}

export const LiveStream = ({ 
  className = '',
  youtubeVideoId = 'dQw4w9WgXcQ', // ID de ejemplo
  isLive = false
}: LiveStreamProps) => {
  const [activeTab, setActiveTab] = useState<'stream' | 'chat'>('stream');

  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&modestbranding=1&rel=0`;
  const chatUrl = `https://www.youtube.com/live_chat?v=${youtubeVideoId}&embed_domain=${window.location.hostname}`;

  return (
    <section className={`livestream ${className}`} id="streaming">
      <div className="livestream-container">
        
        {/* Header */}
        <div className="livestream-header">
          <div className="header-content">
            <span className="section-label">Transmisión en Vivo</span>
            <h2 className="section-title">Mira la Charla en Directo</h2>
            <p className="section-description">
              Conecta con nosotros durante el evento y participa en tiempo real. 
              La transmisión estará disponible aquí el día del evento.
            </p>
          </div>
          
          {isLive && (
            <div className="live-badge">
              <span className="live-dot"></span>
              <span className="live-text">EN VIVO</span>
            </div>
          )}
        </div>

        {/* Stream Container */}
        <div className="stream-wrapper">
          
          {/* Mobile Tab Selector */}
          <div className="mobile-tabs">
            <button 
              className={`tab-button ${activeTab === 'stream' ? 'active' : ''}`}
              onClick={() => setActiveTab('stream')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Transmisión</span>
            </button>
            <button 
              className={`tab-button ${activeTab === 'chat' ? 'active' : ''}`}
              onClick={() => setActiveTab('chat')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Chat</span>
            </button>
          </div>

          {/* Stream Content */}
          <div className="stream-content">
            
            {/* Video Player */}
            <div className={`video-container ${activeTab === 'stream' ? 'active' : ''}`}>
              {!isLive ? (
                <div className="video-placeholder">
                  <div className="placeholder-content">
                    <div className="placeholder-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                        <polyline points="17 2 12 7 7 2"></polyline>
                      </svg>
                    </div>
                    <h3 className="placeholder-title">La transmisión comenzará pronto</h3>
                    <p className="placeholder-text">
                      El video en vivo estará disponible aquí el día del evento.
                      Asegúrate de registrarte para recibir un recordatorio.
                    </p>
                    <div className="placeholder-info">
                      <div className="info-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>15 de Diciembre, 2025</span>
                      </div>
                      <div className="info-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="video-iframe"
                  src={embedUrl}
                  title="YouTube Live Stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Chat Sidebar */}
            <div className={`chat-container ${activeTab === 'chat' ? 'active' : ''}`}>
              {!isLive ? (
                <div className="chat-placeholder">
                  <div className="chat-placeholder-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <h4 className="chat-placeholder-title">Chat no disponible</h4>
                  <p className="chat-placeholder-text">
                    El chat en vivo se activará cuando comience la transmisión.
                  </p>
                </div>
              ) : (
                <iframe
                  className="chat-iframe"
                  src={chatUrl}
                  title="YouTube Live Chat"
                ></iframe>
              )}
            </div>

          </div>
        </div>

        {/* Stream Info */}
        <div className="stream-info">
          <div className="info-cards">
            <div className="info-card">
              <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <div className="card-content">
                <h4 className="card-title">Problemas técnicos?</h4>
                <p className="card-text">
                  Si experimentas problemas con la transmisión, intenta refrescar 
                  la página o verla directamente en YouTube.
                </p>
              </div>
            </div>

            <div className="info-card">
              <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="card-content">
                <h4 className="card-title">Participa en el Chat</h4>
                <p className="card-text">
                  Usa el chat para hacer preguntas durante la transmisión. 
                  Los moderadores seleccionarán las mejores para la sesión de Q&A.
                </p>
              </div>
            </div>

            <div className="info-card">
              <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
              </svg>
              <div className="card-content">
                <h4 className="card-title">Grabación Disponible</h4>
                <p className="card-text">
                  Si no puedes asistir en vivo, la grabación estará disponible 
                  en nuestro canal de YouTube después del evento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="stream-cta">
          <h3 className="cta-title">¿Aún no te has registrado?</h3>
          <p className="cta-text">
            Inscríbete ahora para recibir el enlace directo y recordatorios del evento.
          </p>
          <a href="#registro" className="cta-button">
            <span>Registrarme Ahora</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};
