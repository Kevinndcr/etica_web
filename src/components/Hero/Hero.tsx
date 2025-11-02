import { useEffect, useRef } from 'react';
import './Hero.css';

interface HeroProps {
  className?: string;
}

export const Hero = ({ className = '' }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Canvas animation - partículas conectadas modernas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 100;
    const connectionDistance = 150;
    let mouseX = 0;
    let mouseY = 0;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Interacción con mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          this.vx -= Math.cos(angle) * 0.05;
          this.vy -= Math.sin(angle) * 0.05;
        }

        // Limitar velocidad
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 2) {
          this.vx = (this.vx / speed) * 2;
          this.vy = (this.vy / speed) * 2;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }
    }

    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Dibujar conexiones
    function drawConnections() {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    // Animación
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      drawConnections();
      requestAnimationFrame(animate);
    }

    animate();

    // Mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Anime.js para entrada del contenido
    import('animejs').then((animeModule: any) => {
      const anime = animeModule.default || animeModule;

      // Animación de entrada suave y moderna
      anime.timeline({
        easing: 'easeOutCubic',
      })
      .add({
        targets: '.hero-content-wrapper',
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 1200,
      })
      .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
      }, '-=800')
      .add({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
      }, '-=700')
      .add({
        targets: '.hero-meta-item',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: anime.stagger(100),
      }, '-=500')
      .add({
        targets: '.hero-cta',
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 800,
      }, '-=400');

    }).catch((error) => {
      console.error('Error loading anime.js:', error);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`hero ${className}`} ref={heroRef}>
      {/* Canvas Background */}
      <canvas className="hero-canvas" ref={canvasRef}></canvas>

      {/* Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content-wrapper">
          
          {/* Badge */}
          <div className="hero-event-badge">
            <span className="badge-dot"></span>
            <span>Evento en Vivo</span>
            <span className="badge-separator">•</span>
            <span>Gratuito</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Propiedad Intelectual en<br />
            <span className="hero-title-highlight">Tecnologías de la Información</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Explora el marco legal de la propiedad intelectual aplicado a las TI. 
            Derechos de autor, patentes, licencias de software y protección de datos 
            bajo la legislación costarricense y tratados internacionales.
          </p>

          {/* Meta Info */}
          <div className="hero-meta">
            <div className="hero-meta-item">
              <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <div>
                <div className="meta-label">Fecha</div>
                <div className="meta-value">Por Confirmar</div>
              </div>
            </div>

            <div className="hero-meta-item">
              <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <div className="meta-label">Duración</div>
                <div className="meta-value">2 horas</div>
              </div>
            </div>

            <div className="hero-meta-item">
              <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <div>
                <div className="meta-label">Modalidad</div>
                <div className="meta-value">Virtual</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hero-cta">
            <a href="#registro" className="cta-button cta-primary">
              <span>Reservar mi Cupo</span>
              <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#temario" className="cta-button cta-secondary">
              <span>Ver Más Información</span>
            </a>
          </div>

          {/* Features */}
          <div className="hero-features">
            <div className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Certificado de Participación</span>
            </div>
            <div className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Material Descargable</span>
            </div>
            <div className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Sesión de Q&A</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Explorar</span>
      </div>
    </section>
  );
};
