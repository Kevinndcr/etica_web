import './Footer.css';
import logoUTN from '../../assets/imgs/logos/utn_logo_azul.jpeg';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: 'https://cdn-icons-png.flaticon.com/512/3256/3256013.png'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: 'https://cdn-icons-png.flaticon.com/512/3670/3670147.png'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
    }
  ];

  return (
    <footer className={`footer ${className}`}>
      <div className="footer-container">
        <div className="footer-content">
          {/* Sección: Acerca de */}
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <img 
                src={logoUTN} 
                alt="Logo UTN" 
                className="footer-logo-img"
              />
              <span className="footer-logo-text">UTN</span>
            </div>
            <p className="footer-section-text">
              Charla Virtual sobre Propiedad Intelectual en Tecnologías de la Información. 
              Conoce los fundamentos legales, regulaciones y tipos de propiedad intelectual 
              aplicables al ámbito de las TI, basados en la legislación costarricense y tratados internacionales.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-link" 
                  aria-label={social.name}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="footer-social-icon"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Sección: Enlaces Rápidos */}
          <div className="footer-section">
            <h3 className="footer-section-title">Navegación</h3>
            <div className="footer-links">
              <a href="#inicio" className="footer-link">Inicio</a>
              <a href="#charla" className="footer-link">Sobre la Charla</a>
              <a href="#temario" className="footer-link">Temario</a>
              <a href="#expositores" className="footer-link">Expositores</a>
            </div>
          </div>

          {/* Sección: Información del Evento */}
          <div className="footer-section">
            <h3 className="footer-section-title">Información del Evento</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Fecha</span>
                <span className="footer-contact-value">Por confirmar</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Hora</span>
                <span className="footer-contact-value">Por confirmar</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Modalidad</span>
                <span className="footer-contact-value">Virtual</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Contacto</span>
                <a href="mailto:eventos@utn.edu.ar" className="footer-contact-link">
                  eventos@utn.edu.ar
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              {currentYear} Universidad Tecnológica Nacional
            </p>
            <p className="footer-credits">
              Desarrollado por estudiantes de UTN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


