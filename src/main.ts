import './style.css';

// Clean SVG Icons
const icons = {
  github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  telegram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  mapPin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
  download: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  externalLink: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  copy: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  sun: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  arrowUpRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>`
};

interface Venture {
  id: string;
  name: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  category: 'web3' | 'mobile' | 'fullstack';
  summary: string;
  bullets: string[];
  tech: string[];
}

const ventures: Venture[] = [
  {
    id: 'moonlist',
    name: 'Moonlist Ecosystem',
    role: 'Founder & Architect',
    period: '2026 – Present',
    isCurrent: true,
    category: 'web3',
    summary: 'Engineering an AI-driven multi-chain cryptocurrency aggregator, portfolio analytics dashboard, and non-custodial execution ecosystem available seamlessly across web and mobile.',
    bullets: [
      'Cross-platform application structure supporting real-time market data tracking.',
      'Robust multi-chain wallet integration and transaction execution pipelines.'
    ],
    tech: ['Cross-Platform Architecture', 'Multi-Chain Aggregation', 'AI Analytics', 'Non-Custodial Pipelines', 'Flutter', 'React']
  },
  {
    id: 'solerium-goats',
    name: 'Solerium & GOATS Miniapp',
    role: 'Full-Stack Engineer',
    period: '2024 – 2025',
    category: 'fullstack',
    summary: 'Designed high-engagement interactive miniapps and user-facing modules optimized for performance, scalability, and seamless community onboarding.',
    bullets: [
      'Engineered interactive user-facing modules tailored for high-volume viral community adoption.',
      'Optimized client-server state synchronization to ensure reliability under heavy concurrent load.'
    ],
    tech: ['Full-Stack', 'Interactive Miniapps', 'High Concurrency', 'Community Onboarding', 'Performance Tuning']
  },
  {
    id: 'hashbit',
    name: 'Hashbit Org',
    role: 'Lead Smart Contract Developer',
    period: '2022 – 2024',
    category: 'web3',
    summary: 'Spearheaded smart contract development, protocol logic optimization, and security architecture across EVM-compatible networks.',
    bullets: [
      'Implemented complex custom fee routing and liquidity management mechanics.',
      'Conducted rigorous contract optimization and testing cycles across EVM chains.'
    ],
    tech: ['Solidity', 'Fee Routing Architecture', 'EVM Networks', 'Liquidity Management', 'Contract Optimization']
  },
  {
    id: 'docswap',
    name: 'Docswap Exchange',
    role: 'Smart Contract & Frontend',
    period: '2024',
    category: 'web3',
    summary: 'Contributed to decentralized exchange infrastructure, optimizing token swap execution pathways and liquidity provider analytical dashboards.',
    bullets: [
      'Optimized token swap execution pathways to reduce slippage and routing overhead.',
      'Implemented analytical dashboards providing actionable fee metrics to liquidity providers.'
    ],
    tech: ['Decentralized Exchange', 'Token Swap Execution', 'Analytical Dashboards', 'Web3 Frontend', 'Solidity']
  },
  {
    id: 'mobile-clients',
    name: 'Cross-Platform Mobile Clients',
    role: 'Flutter & Dart Engineer',
    period: 'Ongoing',
    isCurrent: true,
    category: 'mobile',
    summary: 'Engineered production-ready mobile applications featuring responsive layouts, smooth state management, secure local data caching, and seamless API integrations.',
    bullets: [
      'Engineered production-grade mobile applications with responsive layouts across iOS and Android.',
      'Integrated secure local caching mechanisms and resilient REST / GraphQL API pipelines.'
    ],
    tech: ['Flutter', 'Dart', 'State Management', 'Local Data Caching', 'REST & GraphQL', 'Mobile Architecture']
  }
];

let activeFilter = 'all';

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Top Bar -->
    <header class="navbar">
      <div class="container nav-inner">
        <a href="#" class="nav-brand">
          <span class="nav-brand-dot"></span>
          <span>Geoffrey Githii</span>
        </a>

        <ul class="nav-links">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#ventures">Ventures & Protocols</a></li>
          <li><a href="#competencies">Competencies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div class="nav-actions">
          <button id="theme-btn" class="btn-icon" title="Toggle theme" aria-label="Toggle theme">
            ${icons.sun}
          </button>
          <button id="view-pdf-btn" class="btn btn-secondary">
            ${icons.externalLink} View PDF
          </button>
          <a href="/Geoffrey_Githii_Portfolio.pdf" download="Geoffrey_Githii_Portfolio.pdf" class="btn btn-primary">
            ${icons.download} Download
          </a>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="overview" class="hero">
        <div class="container">
          <h1 class="hero-title">Geoffrey Githii</h1>
          <div class="hero-subtitle">Software Engineering Portfolio & Technical Track Record</div>

          <p class="hero-bio">
            Professional system architecture, cross-platform applications, smart contract protocols, and scalable mobile and web engineering delivered across diverse industry ventures from 2022 to the present.
          </p>

          <div class="hero-meta">
            <span class="meta-link">${icons.mapPin} Nairobi, Kenya</span>
            <a href="mailto:jeff@app.moonlist.app" class="meta-link">${icons.mail} jeff@app.moonlist.app</a>
            <a href="https://github.com/yenmulla" target="_blank" rel="noopener noreferrer" class="meta-link">
              ${icons.github} github.com/yenmulla ${icons.arrowUpRight}
            </a>
            <a href="https://t.me/moon_jeff" target="_blank" rel="noopener noreferrer" class="meta-link">
              ${icons.telegram} t.me/moon_jeff ${icons.arrowUpRight}
            </a>
          </div>

          <div class="hero-actions">
            <a href="mailto:jeff@app.moonlist.app" class="btn btn-primary">
              ${icons.mail} Get in Touch
            </a>
            <button id="copy-email-btn" class="btn btn-secondary">
              ${icons.copy} Copy Email Address
            </button>
            <a href="#ventures" class="btn btn-secondary">
              View Technical Track Record
            </a>
          </div>
        </div>
      </section>

      <!-- Ventures & Engineering Contributions -->
      <section id="ventures" class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2 class="section-title">Major Technical Ventures & Protocols</h2>
              <p class="section-desc">Key systems, decentralized protocols, and cross-platform clients delivered.</p>
            </div>

            <div class="filter-tabs">
              <button class="filter-tab active" data-filter="all">All (${ventures.length})</button>
              <button class="filter-tab" data-filter="web3">Web3 & EVM (${ventures.filter(v => v.category === 'web3').length})</button>
              <button class="filter-tab" data-filter="mobile">Mobile & Clients (${ventures.filter(v => v.category === 'mobile').length})</button>
              <button class="filter-tab" data-filter="fullstack">Full-Stack (${ventures.filter(v => v.category === 'fullstack').length})</button>
            </div>
          </div>

          <div class="ventures-list" id="ventures-list">
            ${renderVentures(activeFilter)}
          </div>
        </div>
      </section>

      <!-- Core Competencies & Capabilities -->
      <section id="competencies" class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2 class="section-title">Core Competencies & Technical Capabilities</h2>
              <p class="section-desc">Technical proficiencies verified across production codebases.</p>
            </div>
          </div>

          <div class="competencies-grid">
            <!-- Box 1 -->
            <div class="competency-box">
              <div class="competency-title">
                <span>Frontend & Mobile</span>
                <span class="competency-category">Client Layer</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted);">
                Cross-platform mobile applications, state architecture, and modern reactive interfaces.
              </p>
              <div class="competency-pills">
                <span class="competency-pill core">Flutter</span>
                <span class="competency-pill core">Dart</span>
                <span class="competency-pill core">React</span>
                <span class="competency-pill">TypeScript</span>
                <span class="competency-pill">Tailwind CSS</span>
                <span class="competency-pill">Vite</span>
                <span class="competency-pill">Responsive Design</span>
              </div>
            </div>

            <!-- Box 2 -->
            <div class="competency-box">
              <div class="competency-title">
                <span>Smart Contracts</span>
                <span class="competency-category">Protocol Layer</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted);">
                EVM-compatible protocol logic, contract security architecture, and routing mechanics.
              </p>
              <div class="competency-pills">
                <span class="competency-pill core">Solidity</span>
                <span class="competency-pill core">EVM Networks</span>
                <span class="competency-pill">Remix IDE</span>
                <span class="competency-pill">Tokenomics</span>
                <span class="competency-pill core">Fee Routing Architecture</span>
              </div>
            </div>

            <!-- Box 3 -->
            <div class="competency-box">
              <div class="competency-title">
                <span>Backend & APIs</span>
                <span class="competency-category">Distributed Systems</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted);">
                Edge computing, cloud functions, high-throughput microservices, and API routing.
              </p>
              <div class="competency-pills">
                <span class="competency-pill core">Firebase</span>
                <span class="competency-pill core">Node.js</span>
                <span class="competency-pill core">Cloudflare Edge Workers</span>
                <span class="competency-pill">REST APIs</span>
                <span class="competency-pill">GraphQL Integration</span>
              </div>
            </div>

            <!-- Box 4 -->
            <div class="competency-box">
              <div class="competency-title">
                <span>DevOps & Tooling</span>
                <span class="competency-category">Infrastructure</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted);">
                Automated continuous integration, deployment pipelines, and multi-chain node RPCs.
              </p>
              <div class="competency-pills">
                <span class="competency-pill core">Git</span>
                <span class="competency-pill core">GitHub Actions</span>
                <span class="competency-pill">CI/CD Pipelines</span>
                <span class="competency-pill core">Multi-Chain RPC Node Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact-section">
        <div class="container">
          <div class="contact-card">
            <div>
              <h2 class="contact-headline">Direct Contact & Engagement</h2>
              <p class="contact-text">
                Available for software engineering roles, system architecture, protocol development, and technical consulting. Feel free to reach out directly via email or Telegram.
              </p>
              <a href="mailto:jeff@app.moonlist.app" class="btn btn-primary">
                ${icons.mail} Send Email to jeff@app.moonlist.app
              </a>
            </div>

            <div class="contact-actions">
              <a href="mailto:jeff@app.moonlist.app" class="contact-row-btn">
                <span>Email</span>
                <span>jeff@app.moonlist.app</span>
              </a>
              <a href="https://t.me/moon_jeff" target="_blank" rel="noopener noreferrer" class="contact-row-btn">
                <span>Telegram</span>
                <span>@moon_jeff ${icons.arrowUpRight}</span>
              </a>
              <a href="https://github.com/yenmulla" target="_blank" rel="noopener noreferrer" class="contact-row-btn">
                <span>GitHub</span>
                <span>yenmulla ${icons.arrowUpRight}</span>
              </a>
              <a href="/Geoffrey_Githii_Portfolio.pdf" download="Geoffrey_Githii_Portfolio.pdf" class="contact-row-btn">
                <span>Resume / CV</span>
                <span>Download PDF ${icons.download}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-inner">
        <div>
          Geoffrey Githii &mdash; Software Engineering Portfolio & Technical Track Record
        </div>
        <div>
          Nairobi, Kenya
        </div>
      </div>
    </footer>

    <!-- PDF Viewer Modal -->
    <div id="pdf-modal" class="modal-overlay">
      <div class="modal-box">
        <div class="modal-header">
          <span class="modal-title">Geoffrey Githii — Official Portfolio PDF</span>
          <button id="close-modal-btn" class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <iframe src="/Geoffrey_Githii_Portfolio.pdf" style="width: 100%; height: 100%; border: none;"></iframe>
        </div>
      </div>
    </div>

    <!-- Notification Toast -->
    <div id="toast" class="toast">
      <span id="toast-text">Copied to clipboard</span>
    </div>
  `;

  attachEventHandlers();
}

function renderVentures(filter: string): string {
  const filtered = filter === 'all' 
    ? ventures 
    : ventures.filter(v => v.category === filter || (filter === 'web3' && v.category === 'web3'));

  return filtered.map(v => `
    <article class="venture-card">
      <div class="venture-card-header">
        <div class="venture-title-area">
          <h3 class="venture-name">${v.name}</h3>
          <span class="venture-role-badge">${v.role}</span>
        </div>
        <span class="venture-period ${v.isCurrent ? 'present' : ''}">${v.period}</span>
      </div>

      <p class="venture-desc">${v.summary}</p>

      <ul class="venture-bullets">
        ${v.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>

      <div class="venture-tags">
        ${v.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function showToast(msg: string) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function attachEventHandlers() {
  // Theme Toggle
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    const currentTheme = localStorage.getItem('gm_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeBtn.innerHTML = currentTheme === 'dark' ? icons.sun : icons.moon;

    themeBtn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const next = active === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('gm_theme', next);
      themeBtn.innerHTML = next === 'dark' ? icons.sun : icons.moon;
      showToast(`Switched to ${next} theme`);
    });
  }

  // Filter Tabs
  const filterTabs = document.querySelectorAll('.filter-tab');
  const list = document.getElementById('ventures-list');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = (tab as HTMLElement).dataset.filter || 'all';
      if (list) {
        list.innerHTML = renderVentures(activeFilter);
      }
    });
  });

  // Copy Email Button
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('jeff@app.moonlist.app').then(() => {
        showToast('Email (jeff@app.moonlist.app) copied to clipboard');
      }).catch(() => {
        showToast('Direct: jeff@app.moonlist.app');
      });
    });
  }

  // Modal Handlers
  const viewPdfBtn = document.getElementById('view-pdf-btn');
  const modal = document.getElementById('pdf-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  if (viewPdfBtn && modal) {
    viewPdfBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

// Initial render
renderApp();
