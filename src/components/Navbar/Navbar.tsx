import { useState, useEffect } from 'react';
import './Navbar.css';
import logoUTN from '../../assets/imgs/logos/utn_logo_azul.jpeg';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navLinks = [
    { name: 'Inicio', id: 'inicio', href: '#' },
    { name: 'Evento', id: 'evento', href: '#evento' },
    { name: 'Temario', id: 'temario', href: '#temario' },
    { name: 'Agenda', id: 'agenda', href: '#agenda' },
    { name: 'En Vivo', id: 'envivo', href: '#envivo' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${className}`}>
        <div className="navbar-container">
          {/* Logo */}
          <a href="#inicio" className="navbar-logo" onClick={() => handleLinkClick('inicio')}>
            <img 
              src={logoUTN} 
              alt="Logo UTN" 
              className="navbar-logo-img"
            />
            <div className="navbar-brand">
              <span className="navbar-brand-title">Propiedad Intelectual en TI</span>
              <span className="navbar-brand-subtitle">Charla Virtual UTN</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                className={`navbar-link ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#registro" 
              className="navbar-cta"
              onClick={() => handleLinkClick('registro')}
            >
              <span>Registrarse</span>
              <svg className="navbar-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="navbar-mobile-header">
          <div className="navbar-mobile-logo">
            <img src={logoUTN} alt="Logo UTN" />
          </div>
        </div>
        <div className="navbar-mobile-links">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              className={`navbar-mobile-link ${activeLink === link.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.id)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.name}
            </a>
          ))}
        </div>
        <a 
          href="#registro" 
          className="navbar-mobile-cta"
          onClick={() => handleLinkClick('registro')}
        >
          <span>Registrarse Ahora</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </>
  );
};

