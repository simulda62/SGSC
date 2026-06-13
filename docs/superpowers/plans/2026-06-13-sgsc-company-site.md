# SGSC Company Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive React/Vite corporate website for SGSC with Korean/English language switching and simple aircraft platform product cards.

**Architecture:** The app is a single page React application. `src/content.js` owns all bilingual copy and product data, `src/App.jsx` owns page composition and language/menu state, and `src/App.css` owns the defense technology visual system and responsive behavior.

**Tech Stack:** Vite, React, JavaScript, CSS, npm.

---

## File Structure

- Create `package.json`: npm scripts and dependencies for Vite React.
- Create `index.html`: Vite app shell and basic metadata.
- Create `src/main.jsx`: React root entry.
- Create `src/content.js`: bilingual site text, capability data, product data, and contact data.
- Create `src/App.jsx`: all page sections, language toggle, mobile navigation toggle.
- Create `src/App.css`: global reset, layout, technical visual placeholders, responsive rules.
- Create `.gitignore`: exclude dependencies, build output, and local brainstorming artifacts.

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `.gitignore`

- [ ] **Step 1: Create npm package metadata**

Create `package.json`:

```json
{
  "name": "sgsc-company-site",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "vite build",
    "preview": "vite preview --host 127.0.0.1"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^5.0.0",
    "vite": "^7.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {}
}
```

- [ ] **Step 2: Create the Vite HTML shell**

Create `index.html`:

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="SGSC aerospace and defense aircraft platform solutions"
    />
    <title>SGSC | Aerospace & Defense</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Create the React entry**

Create `src/main.jsx`:

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

- [ ] **Step 4: Create ignore rules**

Create `.gitignore`:

```gitignore
node_modules/
dist/
.DS_Store
.superpowers/
```

- [ ] **Step 5: Install dependencies**

Run: `npm install`

Expected: `package-lock.json` is created and npm exits successfully.

- [ ] **Step 6: Commit scaffold**

Run:

```bash
git add .gitignore index.html package.json package-lock.json src/main.jsx
git commit -m "Add Vite React scaffold"
```

Expected: commit succeeds.

## Task 2: Bilingual Content Data

**Files:**
- Create: `src/content.js`

- [ ] **Step 1: Create site content module**

Create `src/content.js`:

```js
export const content = {
  ko: {
    nav: {
      capabilities: '역량',
      products: '제품',
      about: '회사소개',
      contact: '문의',
      menu: '메뉴',
      close: '닫기',
    },
    hero: {
      eyebrow: 'AEROSPACE & DEFENSE',
      title: '임무 수행성을 높이는 항공 플랫폼 기술',
      body:
        'SGSC는 항공 플랫폼과 기체 관련 제품을 중심으로 개발, 제작, 통합, 운용 지원 역량을 연결합니다.',
      primaryCta: '제품 보기',
      secondaryCta: '사업 문의',
      meta: ['AIRFRAME', 'PLATFORM', 'MISSION READY'],
    },
    capabilities: {
      eyebrow: 'CAPABILITIES',
      title: '항공 플랫폼 전 주기를 고려한 기술 역량',
      items: [
        {
          title: '개발',
          body: '운용 환경과 임무 요구조건을 반영한 항공 플랫폼 제품 개발을 수행합니다.',
        },
        {
          title: '제작',
          body: '정밀한 제작 품질과 반복 가능한 공정으로 안정적인 제품 공급을 지향합니다.',
        },
        {
          title: '통합',
          body: '기체 구조, 임무 구성품, 플랫폼 인터페이스를 고려한 통합 역량을 제공합니다.',
        },
        {
          title: '운용 지원',
          body: '납품 이후의 정비성, 교체성, 운용 지속성을 고려한 지원 체계를 제공합니다.',
        },
      ],
    },
    products: {
      eyebrow: 'PRODUCTS',
      title: '항공 플랫폼 제품군',
      body: '초기 제품 목록은 대표 제품군 형태로 구성되어 있으며, 실제 제품명과 이미지로 교체할 수 있습니다.',
      items: [
        {
          name: 'Airframe Structure Module',
          category: '기체 구조',
          body: '항공 플랫폼의 구조 안정성과 장착성을 고려한 기체 구조 모듈입니다.',
        },
        {
          name: 'Mission Platform Assembly',
          category: '임무 플랫폼',
          body: '임무 장비 탑재와 플랫폼 인터페이스를 고려한 조립체입니다.',
        },
        {
          name: 'UAV Platform Component',
          category: '무인기 구성품',
          body: '무인 항공 플랫폼에 적용 가능한 경량 구성품 제품군입니다.',
        },
        {
          name: 'Aircraft Integration Kit',
          category: '통합 키트',
          body: '기체 적용과 현장 운용 편의성을 고려한 통합 지원 키트입니다.',
        },
      ],
    },
    about: {
      eyebrow: 'ABOUT SGSC',
      title: '신뢰 가능한 항공/방산 제품 파트너',
      body:
        'SGSC는 항공 플랫폼 중심의 제품 개발과 제작 역량을 바탕으로 방산 환경에서 요구되는 신뢰성, 품질, 운용 지속성을 중요하게 다룹니다.',
      stats: [
        { value: '4', label: 'Core Capability Areas' },
        { value: '24/7', label: 'Mission Support Mindset' },
        { value: 'KR/EN', label: 'Bilingual Communication' },
      ],
    },
    contact: {
      eyebrow: 'CONTACT',
      title: '제품 및 사업 협력 문의',
      body: '항공 플랫폼 제품, 공동 개발, 공급 협력에 대한 문의를 남겨주세요.',
      emailLabel: '이메일 문의',
      email: 'contact@sgsc.co.kr',
    },
    footer: 'SGSC Aerospace & Defense. All rights reserved.',
  },
  en: {
    nav: {
      capabilities: 'Capabilities',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
    },
    hero: {
      eyebrow: 'AEROSPACE & DEFENSE',
      title: 'Aircraft platform technology built for mission readiness',
      body:
        'SGSC connects development, manufacturing, integration, and lifecycle support around aircraft platform and airframe-related products.',
      primaryCta: 'View Products',
      secondaryCta: 'Contact Us',
      meta: ['AIRFRAME', 'PLATFORM', 'MISSION READY'],
    },
    capabilities: {
      eyebrow: 'CAPABILITIES',
      title: 'Technical capability across the aircraft platform lifecycle',
      items: [
        {
          title: 'Development',
          body: 'Aircraft platform products shaped by operating environments and mission requirements.',
        },
        {
          title: 'Manufacturing',
          body: 'Repeatable production processes focused on stable quality and reliable supply.',
        },
        {
          title: 'Integration',
          body: 'Platform-level integration across airframe structures, mission assemblies, and interfaces.',
        },
        {
          title: 'Lifecycle Support',
          body: 'Support concepts designed for maintainability, replacement, and sustained operation.',
        },
      ],
    },
    products: {
      eyebrow: 'PRODUCTS',
      title: 'Aircraft platform product lines',
      body: 'The first product list uses representative product groups and can be replaced with real names and imagery.',
      items: [
        {
          name: 'Airframe Structure Module',
          category: 'Airframe',
          body: 'A structural module designed around aircraft platform stability and installation fit.',
        },
        {
          name: 'Mission Platform Assembly',
          category: 'Mission Platform',
          body: 'An assembly designed for mission equipment mounting and platform interfaces.',
        },
        {
          name: 'UAV Platform Component',
          category: 'UAV Component',
          body: 'A lightweight component group applicable to unmanned aircraft platforms.',
        },
        {
          name: 'Aircraft Integration Kit',
          category: 'Integration Kit',
          body: 'A support kit designed for aircraft installation and field operation convenience.',
        },
      ],
    },
    about: {
      eyebrow: 'ABOUT SGSC',
      title: 'A reliable aerospace and defense product partner',
      body:
        'SGSC focuses on reliability, quality, and sustained operation for defense environments through aircraft platform product development and manufacturing capability.',
      stats: [
        { value: '4', label: 'Core Capability Areas' },
        { value: '24/7', label: 'Mission Support Mindset' },
        { value: 'KR/EN', label: 'Bilingual Communication' },
      ],
    },
    contact: {
      eyebrow: 'CONTACT',
      title: 'Product and partnership inquiries',
      body: 'Contact SGSC for aircraft platform products, joint development, and supply partnerships.',
      emailLabel: 'Email Inquiry',
      email: 'contact@sgsc.co.kr',
    },
    footer: 'SGSC Aerospace & Defense. All rights reserved.',
  },
};
```

- [ ] **Step 2: Commit content data**

Run:

```bash
git add src/content.js
git commit -m "Add bilingual SGSC site content"
```

Expected: commit succeeds.

## Task 3: React Page Composition

**Files:**
- Create: `src/App.jsx`

- [ ] **Step 1: Create the React app shell and sections**

Create `src/App.jsx`:

```jsx
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
          <a href="#capabilities" onClick={closeMenu}>{t.nav.capabilities}</a>
          <a href="#products" onClick={closeMenu}>{t.nav.products}</a>
          <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
          <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
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
                <a className="button primary" href="#products">{t.hero.primaryCta}</a>
                <a className="button secondary" href="#contact">{t.hero.secondaryCta}</a>
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
```

- [ ] **Step 2: Run build to expose missing CSS/import issues**

Run: `npm run build`

Expected: build fails only if dependencies are not installed or a referenced file is missing. If `src/App.css` is missing at this point, continue to Task 4 before final build verification.

- [ ] **Step 3: Commit React composition**

Run:

```bash
git add src/App.jsx
git commit -m "Add SGSC page composition"
```

Expected: commit succeeds.

## Task 4: Responsive Visual Styling

**Files:**
- Create: `src/App.css`

- [ ] **Step 1: Create site styling**

Create `src/App.css`:

```css
:root {
  color: #f8fafc;
  background: #07111f;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background:
    linear-gradient(180deg, rgba(7, 17, 31, 0.96), rgba(10, 16, 27, 1)),
    #07111f;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.site-shell {
  min-height: 100vh;
  overflow-x: hidden;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px clamp(20px, 4vw, 56px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.22);
  background: rgba(7, 17, 31, 0.88);
  backdrop-filter: blur(18px);
}

.brand {
  display: flex;
  align-items: baseline;
  gap: 12px;
  min-width: max-content;
}

.brand-mark {
  font-weight: 800;
  letter-spacing: 0;
}

.brand-subtitle {
  color: #94a3b8;
  font-size: 0.76rem;
  text-transform: uppercase;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 22px;
  color: #cbd5e1;
  font-size: 0.92rem;
}

.site-nav a:hover {
  color: #ffffff;
}

.language-toggle {
  display: inline-flex;
  border: 1px solid rgba(148, 163, 184, 0.38);
}

.language-toggle button {
  min-width: 42px;
  border: 0;
  border-right: 1px solid rgba(148, 163, 184, 0.38);
  padding: 8px 10px;
  color: #cbd5e1;
  background: transparent;
  cursor: pointer;
}

.language-toggle button:last-child {
  border-right: 0;
}

.language-toggle button.is-active {
  color: #07111f;
  background: #93c5fd;
}

.menu-toggle {
  display: none;
  border: 1px solid rgba(148, 163, 184, 0.38);
  color: #f8fafc;
  background: transparent;
  padding: 8px 12px;
  cursor: pointer;
}

.section-band {
  border-bottom: 1px solid rgba(148, 163, 184, 0.16);
}

.section-inner {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 92px 0;
}

.hero .section-inner {
  padding-top: 104px;
  padding-bottom: 104px;
}

.hero-grid,
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  gap: clamp(36px, 6vw, 76px);
  align-items: center;
}

.eyebrow {
  margin: 0 0 14px;
  color: #93c5fd;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  max-width: 760px;
  margin-bottom: 22px;
  font-size: clamp(2.6rem, 7vw, 5.7rem);
  line-height: 0.96;
  letter-spacing: 0;
}

h2 {
  max-width: 760px;
  margin-bottom: 18px;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.04;
  letter-spacing: 0;
}

h3 {
  margin-bottom: 10px;
  font-size: 1.08rem;
}

p {
  color: #cbd5e1;
  line-height: 1.7;
}

.hero-body {
  max-width: 650px;
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 30px 0;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  border: 1px solid rgba(147, 197, 253, 0.55);
  padding: 0 18px;
  font-weight: 700;
}

.button.primary {
  color: #07111f;
  background: #93c5fd;
}

.button.secondary {
  color: #dbeafe;
  background: rgba(15, 23, 42, 0.72);
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-meta span,
.product-category,
.item-index {
  color: #bfdbfe;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.hero-meta span {
  border: 1px solid rgba(147, 197, 253, 0.28);
  padding: 8px 10px;
  background: rgba(15, 23, 42, 0.56);
}

.aircraft-panel {
  min-height: 420px;
  border: 1px solid rgba(147, 197, 253, 0.32);
  background:
    linear-gradient(rgba(147, 197, 253, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(147, 197, 253, 0.08) 1px, transparent 1px),
    rgba(15, 23, 42, 0.72);
  background-size: 34px 34px;
  padding: 20px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
}

.panel-header,
.panel-grid {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: #dbeafe;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.aircraft-outline {
  position: relative;
  height: 290px;
  margin: 28px 0;
  border: 1px solid rgba(148, 163, 184, 0.22);
}

.aircraft-outline span {
  position: absolute;
  display: block;
  background: rgba(147, 197, 253, 0.82);
}

.fuselage {
  left: 48%;
  top: 24px;
  width: 22px;
  height: 230px;
  transform: translateX(-50%);
}

.wing {
  top: 118px;
  width: 42%;
  height: 18px;
}

.wing-left {
  left: 8%;
  transform: skewY(-12deg);
}

.wing-right {
  right: 12%;
  transform: skewY(12deg);
}

.tail {
  left: 43%;
  bottom: 28px;
  width: 56px;
  height: 14px;
}

.section-header {
  max-width: 820px;
  margin-bottom: 34px;
}

.capability-grid,
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.capability-item,
.product-card,
.stat-item {
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.54);
}

.capability-item {
  min-height: 250px;
  padding: 24px;
}

.product-card {
  display: flex;
  flex-direction: column;
  min-height: 380px;
}

.product-visual {
  display: flex;
  align-items: flex-end;
  height: 150px;
  padding: 16px;
  color: rgba(147, 197, 253, 0.8);
  background:
    linear-gradient(135deg, rgba(147, 197, 253, 0.2), transparent 45%),
    linear-gradient(rgba(147, 197, 253, 0.12) 1px, transparent 1px),
    #0f172a;
  background-size: auto, 22px 22px;
  font-size: 2rem;
  font-weight: 800;
}

.product-content {
  padding: 22px;
}

.about {
  background: rgba(2, 6, 23, 0.38);
}

.stat-grid {
  display: grid;
  gap: 14px;
}

.stat-item {
  padding: 24px;
}

.stat-item strong {
  display: block;
  margin-bottom: 6px;
  color: #ffffff;
  font-size: 2rem;
}

.stat-item span {
  color: #cbd5e1;
}

.contact-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.contact-panel p {
  max-width: 620px;
}

.site-footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 28px clamp(20px, 4vw, 56px);
  color: #94a3b8;
  font-size: 0.9rem;
}

@media (max-width: 980px) {
  .hero-grid,
  .about-grid {
    grid-template-columns: 1fr;
  }

  .capability-grid,
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .aircraft-panel {
    min-height: 360px;
  }
}

@media (max-width: 760px) {
  .topbar {
    align-items: flex-start;
    padding: 14px 20px;
  }

  .brand {
    flex-direction: column;
    gap: 2px;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .site-nav {
    position: absolute;
    top: 64px;
    left: 20px;
    right: 20px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    border: 1px solid rgba(148, 163, 184, 0.24);
    background: #081525;
  }

  .site-nav.is-open {
    display: flex;
  }

  .site-nav a {
    padding: 14px;
    border-bottom: 1px solid rgba(148, 163, 184, 0.16);
  }

  .language-toggle {
    margin: 12px;
  }

  .section-inner,
  .hero .section-inner {
    width: min(100% - 32px, 1180px);
    padding: 64px 0;
  }

  h1 {
    font-size: clamp(2.35rem, 12vw, 3.7rem);
    line-height: 1;
  }

  h2 {
    font-size: clamp(1.9rem, 9vw, 2.6rem);
  }

  .capability-grid,
  .product-grid {
    grid-template-columns: 1fr;
  }

  .contact-panel,
  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .aircraft-panel {
    min-height: 320px;
  }

  .aircraft-outline {
    height: 220px;
  }

  .fuselage {
    height: 170px;
  }

  .wing {
    top: 92px;
  }
}
```

- [ ] **Step 2: Run production build**

Run: `npm run build`

Expected: Vite completes successfully and creates `dist/`.

- [ ] **Step 3: Commit styling**

Run:

```bash
git add src/App.css
git commit -m "Style responsive SGSC company site"
```

Expected: commit succeeds.

## Task 5: Local Verification and Browser QA

**Files:**
- Modify only if verification finds a concrete defect:
  - `src/App.jsx`
  - `src/App.css`
  - `src/content.js`

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: command exits with code 0 and reports built assets in `dist/`.

- [ ] **Step 2: Start the local dev server**

Run: `npm run dev`

Expected: Vite prints a local URL, usually `http://127.0.0.1:5173/`.

- [ ] **Step 3: Open desktop viewport**

Use the Browser plugin or an equivalent browser tool to open the dev server URL at desktop width.

Expected:

- Hero headline is visible and does not overlap the aircraft panel.
- Navigation links are on one row.
- Product cards display as four columns.
- The SGSC brand is visible in the first viewport.

- [ ] **Step 4: Verify language switching**

Click `EN`.

Expected:

- Hero headline changes to `Aircraft platform technology built for mission readiness`.
- Navigation changes to English.
- Product section title changes to `Aircraft platform product lines`.

Click `KR`.

Expected:

- Hero headline changes to `임무 수행성을 높이는 항공 플랫폼 기술`.
- Navigation changes to Korean.

- [ ] **Step 5: Verify mobile layout**

Open a mobile viewport around 390px wide.

Expected:

- Menu button is visible.
- Navigation is hidden until the menu button is clicked.
- Product cards display in one column.
- No horizontal scrolling, text overlap, or clipped buttons appear.

- [ ] **Step 6: Fix only observed QA defects**

If a concrete issue is found, edit the relevant file with the smallest change that fixes it, then rerun `npm run build` and repeat the affected browser check.

- [ ] **Step 7: Commit verification fixes**

If changes were made:

```bash
git add src/App.jsx src/App.css src/content.js
git commit -m "Fix SGSC site verification issues"
```

If no changes were made, skip this commit.

## Task 6: Final Status

**Files:**
- No file changes expected.

- [ ] **Step 1: Check repository state**

Run: `git status --short`

Expected: only ignored files or local runtime artifacts remain untracked. Source files and plan files are committed.

- [ ] **Step 2: Report verification results**

Report:

- Dev server URL.
- Build command result.
- Browser checks completed.
- Any remaining known limitations, especially placeholder products/images and placeholder contact email.
