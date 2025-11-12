import { useState } from 'react';
import './Registration.css';

interface RegistrationProps {
  className?: string;
  googleFormsUrl?: string;
}

export const Registration = ({ 
  className = '',
  googleFormsUrl = 'https://forms.google.com/your-form-url' // URL placeholder
}: RegistrationProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      title: 'Acceso Gratuito',
      description: 'Sin costos ni tarifas ocultas'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      title: 'Certificado Digital',
      description: 'Válido para horas de capacitación'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      title: 'Sesión Interactiva',
      description: 'Preguntas en tiempo real'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      title: 'Material de Apoyo',
      description: 'Presentaciones y recursos descargables'
    }
  ];

  return (
    <section className={`registration ${className}`} id="registro">
      <div className="registration-container">
        
        {/* Decorative Elements */}
        <div className="registration-decoration">
          <div className="decoration-circle decoration-circle-1"></div>
          <div className="decoration-circle decoration-circle-2"></div>
          <div className="decoration-circle decoration-circle-3"></div>
        </div>

        <div className="registration-content">
          
          {/* Left Side - Info */}
          <div className="registration-info">
            <span className="section-label">Inscripción Abierta</span>
            <h2 className="section-title">Asegura tu Lugar en el Evento</h2>
            <p className="section-description">
              Regístrate ahora y recibe recordatorios del evento, acceso directo a la transmisión 
              y tu certificado digital de participación al finalizar.
            </p>

            {/* Benefits Grid */}
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="registration-note">
              <svg className="note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <p className="note-text">
                El formulario es breve y solo toma 2 minutos completarlo. 
                Recibirás un correo de confirmación inmediatamente.
              </p>
            </div>
          </div>

          {/* Right Side - CTA Card */}
          <div className="registration-cta">
            <div 
              className="cta-card"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="cta-card-header">
                <div className="cta-icon-large">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <h3 className="cta-card-title">Registro Rápido</h3>
                <p className="cta-card-subtitle">
                  Completa el formulario y únete a nosotros
                </p>
              </div>

              <div className="cta-card-body">
                <ul className="cta-checklist">
                  <li className="checklist-item">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Datos personales básicos</span>
                  </li>
                  <li className="checklist-item">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Correo electrónico</span>
                  </li>
                  <li className="checklist-item">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Confirmación instantánea</span>
                  </li>
                </ul>

                <a 
                  href={googleFormsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  <span className="button-text">Ir al Formulario de Inscripción</span>
                  <svg 
                    className="button-icon" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>

                <p className="cta-disclaimer">
                  Al registrarte, aceptas recibir comunicaciones sobre el evento. 
                  No compartiremos tu información.
                </p>
              </div>

              {/* Floating Badge */}
              <div className="floating-badge">
                <span className="badge-text">🎉 +500 registrados</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>Datos Protegidos</span>
              </div>
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Sin Spam</span>
              </div>
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>100% Seguro</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
