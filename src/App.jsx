import { useState } from 'react';
import { content } from './content.js';

function App() {
  const [language, setLanguage] = useState('ko');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];

  const switchLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    setMenuOpen(false);
    document.documentElement.lang = nextLanguage === 'ko' ? 'ko' : 'en';
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="SGSC home">
          <span className="brand-mark">SGSC</span>
          <span className="brand-subtitle">Aerospace & Defense</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
        >
          {menuOpen ? t.nav.close : t.nav.menu}
        </button>

        <nav
          id="site-navigation"
          className={menuOpen ? 'site-nav is-open' : 'site-nav'}
          aria-label="Primary navigation"
        >
          <a href="#capabilities" onClick={closeMenu}>
            {t.nav.capabilities}
          </a>
          <a href="#products" onClick={closeMenu}>
            {t.nav.products}
          </a>
          <a href="#about" onClick={closeMenu}>
            {t.nav.about}
          </a>
          <a href="#contact" onClick={closeMenu}>
            {t.nav.contact}
          </a>
          <div className="language-toggle" aria-label="Language selector">
            <button
              type="button"
              className={language === 'ko' ? 'is-active' : ''}
              onClick={() => switchLanguage('ko')}
            >
              KR
            </button>
            <button
              type="button"
              className={language === 'en' ? 'is-active' : ''}
              onClick={() => switchLanguage('en')}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-band">
          <div className="section-inner hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1>{t.hero.title}</h1>
              <p className="hero-body">{t.hero.body}</p>
              <div className="hero-actions">
                <a className="button primary" href="#products">
                  {t.hero.primaryCta}
                </a>
                <a className="button secondary" href="#contact">
                  {t.hero.secondaryCta}
                </a>
              </div>
              <div className="hero-meta" aria-label="Platform keywords">
                {t.hero.meta.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <AircraftPanel />
          </div>
        </section>

        <section className="section-band capabilities" id="capabilities">
          <div className="section-inner">
            <SectionHeader eyebrow={t.capabilities.eyebrow} title={t.capabilities.title} />
            <div className="capability-grid">
              {t.capabilities.items.map((item, index) => (
                <article className="capability-item" key={item.title}>
                  <span className="item-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band products" id="products">
          <div className="section-inner">
            <SectionHeader
              eyebrow={t.products.eyebrow}
              title={t.products.title}
              body={t.products.body}
            />
            <div className="product-grid">
              {t.products.items.map((item, index) => (
                <article className="product-card" key={item.name}>
                  <div className="product-visual" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="product-content">
                    <p className="product-category">{item.category}</p>
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band about" id="about">
          <div className="section-inner about-grid">
            <div>
              <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} body={t.about.body} />
            </div>
            <div className="stat-grid">
              {t.about.stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band contact" id="contact">
          <div className="section-inner contact-panel">
            <div>
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.body}</p>
            </div>
            <a className="button primary" href={`mailto:${t.contact.email}`}>
              {t.contact.emailLabel}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span className="brand-mark">SGSC</span>
        <span>{t.footer}</span>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title, body }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function AircraftPanel() {
  return (
    <div className="aircraft-panel" aria-label="Aircraft platform technical visual">
      <div className="panel-header">
        <span>SGSC PLATFORM VIEW</span>
        <span>SYS-READY</span>
      </div>
      <div className="aircraft-outline">
        <span className="wing wing-left" />
        <span className="wing wing-right" />
        <span className="fuselage" />
        <span className="tail" />
      </div>
      <div className="panel-grid">
        <span>STRUCTURE</span>
        <span>INTEGRATION</span>
        <span>SUPPORT</span>
      </div>
    </div>
  );
}

export default App;
