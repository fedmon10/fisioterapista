
import { useEffect } from 'react';
import './App.css';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.jpg';
import logo3 from './assets/logo3.png';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImg = document.querySelector('.hero-bg-img');
      if (heroImg) {
        const speed = 0.5; // Velocità del parallax (più basso = più lento)
        heroImg.style.transform = `translateY(${scrolled * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing">
      <nav className="navbar">
        <div className="navbar-container">
          <img src={logo3} alt="Logo" className="navbar-logo" />
          
          <div className="navbar-info">
            <div className="navbar-info-item">
              <svg className="navbar-icon" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Lun-Mer-Ven 14:30-19:00 | Mar-Gio 09:00-19:00 | Sab 09:00-14:00</span>
            </div>
            
            <div className="navbar-info-item">
              <svg className="navbar-icon" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span> 3477798870 Contattare tramite messaggio WhatsApp</span>
            </div>
          </div>
        </div>
      </nav>
      
      <section className="hero">
        <div className="hero-container">
          <div className="hero-background">
            <img src={image1} alt="Anatomical background" className="hero-bg-img" />
          </div>
          
          <div className="hero-overlay">
            <div className="hero-text-container">
              <h1 className="hero-title" style={{backgroundImage: `url(${image1})`}}>RIABILITAZIONE</h1>
            </div>
          </div>
        </div>
      </section>
      
      <section className="treatments">
        <div className="treatments-container">
          <div className="treatments-header">
            <h2>Cosa si tratta nello studio</h2>
            <p>Riabilitazione pre-post operatoria e trattamenti osteopatici</p>
          </div>
          
          <div className="treatments-grid">
            <div className="treatment-card">
              <div className="treatment-icon">
                <img src={image2} alt="Treatment" className="treatment-img" />
                <span className="treatment-overlay-text">Rinforzo muscolare e rieducazione posturale</span>
              </div>
            </div>
            
            <div className="treatment-card">
              <div className="treatment-icon">
                <img src={image3} alt="Hand pain" className="treatment-img" />
                <span className="treatment-overlay-text">Dorsalgia e rieducazione posturale</span>
              </div>
            </div>
            
            <div className="treatment-card">
              <div className="treatment-icon">
                <img src={image4} alt="Elbow pain" className="treatment-img" />
                <span className="treatment-overlay-text">Riabilitazione dell’arto superiore</span>
              </div>
            </div>
            
            <div className="treatment-card">
              <div className="treatment-icon">
                <img src={image5} alt="Back pain" className="treatment-img" />
                <span className="treatment-overlay-text">Cervicalgia e rieducazione posturale</span>
              </div>
            </div>
            
            <div className="treatment-card">
              <div className="treatment-icon">
                <img src={image6} alt="Foot pain" className="treatment-img" />
                <span className="treatment-overlay-text">Massoterapia</span>
              </div>
            </div>
            
            <div className="treatment-card">
              <div className="treatment-icon">
                <img src={image7} alt="Osteopata" className="treatment-img" />
                <span className="treatment-overlay-text">Trattamenti osteopatici</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2>Le esperienze dei pazienti raccontate dalle loro parole</h2>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-avatar">
                  <svg className="avatar-icon" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="testimonial-info">
                  <h4>Emanuela Spalvieri</h4>
                  <div className="testimonial-stars">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
Su suggerimento di un ottimo chirurgo ortopedico mi sono rivolta a Federico, per intraprendere un percorso di riabilitazione dopo una brutta frattura scomposta al piatto tibiale. Sin dal principio si è mostrato preparato, attento e scrupoloso. È un professionista che, oltre che a possedere tecnica e sapere, motiva e supporta il paziente, componenti per me indispensabili per chi ha un lungo periodo di riabilitazione da affrontare. Sempre disponibile a chiarire dubbi e perplessità. Ora ho ripreso la mia vita quotidiana come prima dell'incidente, molto lo devo a lui!              </p>
              <span className="testimonial-date">1 mese fa</span>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-avatar">
                  <svg className="avatar-icon" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="testimonial-info">
                  <h4>Valeria Licheri</h4>
                  <div className="testimonial-stars">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
Il dottor Federico Monaco è un professionista eccellente, capace di unire competenza, empatia e un’attenzione straordinaria per il paziente. Fin dal primo incontro trasmette tranquillità, prendendosi il tempo necessario per ascoltare e comprendere a fondo l’origine del problema, non limitandosi solo a trattare il sintomo, ma cercando di risalire alla causa. Il suo approccio attento e personalizzato fa sentire ogni paziente seguito con cura e fiducia. Se cercate un osteopata e fisioterapista serio, preparato e appassionato del suo lavoro, vi consiglio assolutamente di affidarvi a lui!              </p>
              <span className="testimonial-date">1 mese fa</span>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-avatar">
                  <svg className="avatar-icon" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="testimonial-info">
                  <h4>Alessia Carfagni</h4>
                  <div className="testimonial-stars">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
Il dott. Monaco TOP!!!! Da anni gli "acciacchi" da ex sportiva ormai consolidati e la vita di ufficio, ore ed ora davanti al PC, hanno scatenato una terribile cervicale oltre a lombalgia e dolori alla schiena a volte insopportabili spesso limitanti, non riuscivo neanche a praticare yoga. Federico ha saputo approcciare il mio problema in modo professionale ed anche emotivo e dopo un'attenta anamnesi è intervenuto direi in modo risolutivo: dolori passati, elasticità muscolare ripristinata e soprattutto sto bene! Ora stiamo lavorando ad una serie di esercizi al fine di non ricadere nelle vecchie pene. Grazie grazie grazie!              </p>
              <span className="testimonial-date">1 mese fa</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="doctor-profile">
        <div className="doctor-container">
          <div className="doctor-content">
            <div className="doctor-image">
              <img src={image1} alt="Dr. Federico Monaco" />
              <div className="experience-badges">
                <div className="experience-badge">
                  <span className="badge-number">27+</span>
                  <span className="badge-text">Anni di esperienza</span>
                </div>
                <div className="experience-badge specialization">
                  <span className="badge-number">2</span>
                  <span className="badge-text">Titoli di studio</span>
                </div>
              </div>
            </div>
            
            <div className="doctor-info">
              <div className="doctor-header">
                <h2>Dr. Federico Monaco</h2>
              </div>
              
              <div className="doctor-text">
                <p>Sono <strong>Federico Monaco</strong>, fisioterapista dal 1997 e osteopata dal 2010. Lungo il mio percorso professionale ho sviluppato un <strong>approccio integrato</strong> che unisce competenze fisioterapiche e osteopatiche, con l'obiettivo di offrire al paziente trattamenti personalizzati e mirati al recupero globale della salute e del benessere.</p>
                <p>Svolgo attività sia presso il mio studio sia a domicilio, nella zona centrale di Roma.</p>
              </div>
              
              <div className="qualifications-section">
                <div className="qualification-card">
                  <div className="qualification-icon qualifiche">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" fill="#4a90e2"/>
                    </svg>
                  </div>
                  <div className="qualification-content">
                    <h4>Qualifiche Professionali</h4>
                    <ul>
                      <li>Fisioterapista (1997)</li>
                      <li>Osteopata (2010)</li>
                      <li>Albo FNOFI n°1066</li>
                    </ul>
                  </div>
                </div>
                
                <div className="qualification-card">
                  <div className="qualification-icon dove">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#22c55e"/>
                    </svg>
                  </div>
                  <div className="qualification-content">
                    <h4>Dove Ricevo</h4>
                    <ul>
                      <li>Studio privato</li>
                      <li>Trattamenti a domicilio (Roma centro)</li>
                      <li>Via Gattamelata 85, 00176 Roma</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="approach-section">
                
                <div className="approach-items">
                  <div className="approach-item">
                    <div className="approach-icon personalizzato">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" fill="#4a90e2"/>
                      </svg>
                    </div>
                    <div className="approach-content">
                      <h5>Personalizzato</h5>
                      <p>Trattamenti individuali</p>
                    </div>
                  </div>
                  
                  <div className="approach-item">
                    <div className="approach-icon integrato">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="#1c8781"/>
                      </svg>
                    </div>
                    <div className="approach-content">
                      <h5>Integrato</h5>
                      <p>Fisioterapia e osteopatia</p>
                    </div>
                  </div>
                  
                  <div className="approach-item">
                    <div className="approach-icon globale">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#e74c3c"/>
                      </svg>
                    </div>
                    <div className="approach-content">
                      <h5>Globale</h5>
                      <p>Recupero completo del benessere</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      
      <footer className="footer">
        <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo3} alt="Logo" className="footer-logo-img" />
          </div>            <div className="footer-info">
              <div className="footer-section">
                <h4>Orari di Apertura</h4>
                <p>Lunedì – Mercoledì – Venerdì: 14:30 – 19:00</p>
                <p>Martedì – Giovedì: 09:00 – 19:00</p>
                <p>Sabato: 09:00 – 14:00</p>
              </div>
              
              <div className="footer-section">
                <h4>Contatti</h4>
                <p>
                  <svg className="footer-icon" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  3477798870 Contattare tramite messaggio WhatsApp
                </p>
              </div>
              
              <div className="footer-section">
                <h4>Studio</h4>
                <div className="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.183843948572!2d12.534254876484365!3d41.88890316473728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f62243f2b80ef%3A0xfc5534a895eb9180!2sVia%20Erasmo%20Gattamelata%2C%2085%2C%2000176%20Roma%20RM!5e0!3m2!1sit!2sit!4v1758184654177!5m2!1sit!2sit"
                    width="100%" 
                    height="120" 
                    style={{border: 0, borderRadius: '12px'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Studio Location"
                  ></iframe>
                  <p className="address-text">Via Gattamelata 85, 00176 Roma</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Studio Monaco. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
