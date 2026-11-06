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
  arrowUpRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>`,
  briefcase: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  code: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  sparkles: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`,
  cpu: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg>`
};

export type PortfolioMode = 'executive' | 'technical';

interface VentureView {
  role: string;
  badge: string;
  summary: string;
  bullets: string[];
  tags: string[];
  extraBadge?: string;
  architectureNote?: string;
}

interface Venture {
  id: string;
  name: string;
  period: string;
  isCurrent?: boolean;
  category: 'web3' | 'mobile' | 'fullstack';
  executive: VentureView;
  technical: VentureView;
}

const ventures: Venture[] = [
  {
    id: 'moonlist',
    name: 'Moonlist Ecosystem',
    period: '2026 – Present',
    isCurrent: true,
    category: 'web3',
    executive: {
      role: 'Founder & Product Lead',
      badge: 'Product Strategy & Vision',
      summary: 'Conceived and launched an AI-driven multi-chain cryptocurrency aggregator, empowering investors to track decentralized portfolios and execute non-custodial transactions seamlessly on web and mobile.',
      bullets: [
        'Designed end-to-end user journeys for instant multi-chain portfolio tracking and automated analytics.',
        'Integrated non-custodial wallet connections ensuring users retain complete control over private keys.',
        'Spearheaded product roadmaps connecting mobile and web clients with continuous user feedback loops.'
      ],
      tags: ['Product Leadership', 'Multi-Chain Aggregation', 'AI Portfolio Analytics', 'Non-Custodial Security', 'Web & Mobile Apps'],
      extraBadge: '✓ Live Multi-Chain Production Ecosystem'
    },
    technical: {
      role: 'System Architect & Lead Engineer',
      badge: 'Distributed Systems & Web3',
      summary: 'Architected an event-driven multi-chain crypto analytics and execution ecosystem with sub-second RPC multiplexing, reactive stream pipelines, and non-custodial cryptographic transaction dispatch.',
      bullets: [
        'Engineered cross-platform client architecture using Flutter and React with reactive unidirectional state flow.',
        'Implemented resilient RPC load-balancing and automated fallback mechanisms across 10+ EVM networks.',
        'Built secure client-side signing pipelines abstracting multi-chain nuances without private key exposure.'
      ],
      tags: ['System Architecture', 'Multi-Chain RPC Nodes', 'Reactive State Streams', 'Flutter', 'React', 'TypeScript', 'EVM Chains'],
      architectureNote: 'Architecture: Event-driven RPC multiplexer with sub-second WebSocket price streaming and non-custodial execution.'
    }
  },
  {
    id: 'solerium-goats',
    name: 'Solerium & GOATS Miniapp',
    period: '2024 – 2025',
    category: 'fullstack',
    executive: {
      role: 'Product & Full-Stack Engineer',
      badge: 'Viral Consumer Platform',
      summary: 'Delivered high-engagement interactive web applications and Telegram-compatible miniapps built for viral community growth, zero-friction onboarding, and smooth consumer UX.',
      bullets: [
        'Engineered viral user engagement loops and interactive social reward mechanics driving rapid community adoption.',
        'Delivered responsive, instant-loading interfaces resulting in minimal bounce rates under viral launch events.',
        'Collaborated directly with community and marketing stakeholders to iterate rapidly on live engagement metrics.'
      ],
      tags: ['Consumer Web Apps', 'Viral User Growth', 'Frictionless Onboarding', 'High Retention', 'Interactive Design'],
      extraBadge: '✓ High Concurrency Community Adoption'
    },
    technical: {
      role: 'Lead Full-Stack Systems Engineer',
      badge: 'High-Concurrency State Sync',
      summary: 'Engineered a low-latency interactive miniapp architecture with optimistic UI reconciliation, distributed Redis caching, WebSocket synchronization, and high concurrent connection handling.',
      bullets: [
        'Engineered client-side optimistic UI state reconciliation backed by idempotent WebSocket and REST transaction pipelines.',
        'Tuned serverless edge function execution and connection pooling to absorb concurrent load spikes without drops.',
        'Optimized asset delivery and state payload sizes, achieving sub-100ms client interactions under heavy load.'
      ],
      tags: ['TypeScript', 'Node.js', 'WebSocket State Sync', 'High Concurrency', 'Redis Caching', 'Optimistic UI'],
      architectureNote: 'Architecture: Idempotent distributed state sync layer handling heavy concurrent socket connections with zero dropped events.'
    }
  },
  {
    id: 'hashbit',
    name: 'Hashbit Org',
    period: '2022 – 2024',
    category: 'web3',
    executive: {
      role: 'Lead Protocol Developer',
      badge: 'Smart Contract Governance',
      summary: 'Led the smart contract engineering and protocol security strategy, ensuring flawless asset flow, automated protocol revenue mechanics, and a 100% exploit-free security track record.',
      bullets: [
        'Designed custom automated fee mechanisms that reliably distributed protocol earnings to liquidity providers.',
        'Achieved a spotless production security record with zero smart contract vulnerabilities or exploits.',
        'Guided technical governance, risk mitigation, and compliance across decentralized protocol deployments.'
      ],
      tags: ['Decentralized Finance', 'Protocol Revenue', 'Automated Fee Mechanics', 'Zero Exploits', 'Risk Governance'],
      extraBadge: '✓ 100% Exploit-Free Security Track Record'
    },
    technical: {
      role: 'Senior Smart Contract Developer',
      badge: 'EVM Protocol & Gas Tuning',
      summary: 'Spearheaded custom Solidity protocol development, byte-level calldata gas optimization, dynamic fee routing architecture, and comprehensive formal verification across EVM networks.',
      bullets: [
        'Implemented gas-optimized custom fee distribution contracts saving 25%+ execution gas on high-volume transfers.',
        'Constructed comprehensive unit and fuzz testing suites utilizing Foundry, Hardhat, and Slither static analysis.',
        'Hardened contract logic against reentrancy, front-running, and flash loan edge cases across EVM mainnets.'
      ],
      tags: ['Solidity 0.8.x', 'EVM Calldata Tuning', 'Fee Routing Contracts', 'Slither Analysis', 'Foundry / Hardhat', 'Reentrancy Guards'],
      architectureNote: 'Architecture: Byte-efficient calldata dispatch with checks-effects-interactions invariant safety across EVM chains.'
    }
  },
  {
    id: 'docswap',
    name: 'Docswap Exchange',
    period: '2024',
    category: 'web3',
    executive: {
      role: 'DEX & Analytics Engineer',
      badge: 'Fintech & Exchange Systems',
      summary: 'Enhanced decentralized exchange trading infrastructure, lowering swap slippage, increasing transaction throughput, and providing liquidity providers with clear, actionable fee dashboards.',
      bullets: [
        'Streamlined token trading interfaces to help crypto users execute swaps with minimal price slippage.',
        'Designed clarity-focused analytical reporting showing liquidity pool earnings and historical yield.',
        'Improved user trust through real-time fee breakdowns and clear slippage protection settings.'
      ],
      tags: ['Decentralized Exchange', 'Token Swaps', 'Fintech Dashboards', 'Slippage Reduction', 'User Trust'],
      extraBadge: '✓ Reduced Trading Slippage & Transparent Yield'
    },
    technical: {
      role: 'Smart Contract & Web3 Frontend',
      badge: 'AMM Mechanics & Execution',
      summary: 'Optimized multi-hop Automated Market Maker (AMM) execution routing, slippage bound validation, and real-time sub-graph indexer integration for liquidity provider analytics.',
      bullets: [
        'Optimized multi-hop swap execution pathways to reduce routing overhead, path slippage, and execution revert rates.',
        'Engineered responsive charting and analytical dashboards querying GraphQL decentralized indexers in real time.',
        'Integrated contract event listeners with fallback RPC providers for accurate trade confirmation notifications.'
      ],
      tags: ['AMM Math', 'Multi-Hop Routing', 'GraphQL Subgraphs', 'Ethers.js / Web3.js', 'Solidity', 'Event Indexing'],
      architectureNote: 'Architecture: Multi-hop routing pathways with bounded slippage enforcement and subgraph event streaming.'
    }
  },
  {
    id: 'mobile-clients',
    name: 'Cross-Platform Mobile Clients',
    period: 'Ongoing',
    isCurrent: true,
    category: 'mobile',
    executive: {
      role: 'Lead Mobile App Engineer',
      badge: 'iOS & Android Products',
      summary: 'Shipped production mobile applications for iOS and Android from a single codebase, delivering native responsiveness, offline access, and rapid delivery for cross-platform products.',
      bullets: [
        'Built unified cross-platform mobile apps, cutting mobile engineering overhead and time-to-market in half.',
        'Implemented offline-first functionality so users can smoothly use apps regardless of network connectivity.',
        'Maintained high App Store & Play Store quality standards with fluid gestures and responsive layouts.'
      ],
      tags: ['Cross-Platform Apps', 'iOS & Android', 'Offline-First UX', 'Fast Time-to-Market', 'Native Performance'],
      extraBadge: '✓ Unified iOS & Android Production Deployments'
    },
    technical: {
      role: 'Staff Flutter & Dart Engineer',
      badge: 'Client-Side Architecture',
      summary: 'Architected scalable mobile client foundations using Flutter & Dart, implementing clean domain-driven separation, unidirectional BLoC state management, and resilient SQLite/Hive local storage.',
      bullets: [
        'Designed clean architecture separating UI presentation, domain business rules, and abstracted data sources.',
        'Engineered offline-first caching layer with automatic sync backoff and optimistic state mutations.',
        'Built type-safe REST and GraphQL communication layers with interceptor token refresh and network telemetry.'
      ],
      tags: ['Flutter', 'Dart', 'BLoC Architecture', 'Local SQLite / Hive', 'REST & GraphQL', 'Clean Architecture'],
      architectureNote: 'Architecture: Clean domain-driven separation with unidirectional BLoC streams and resilient local storage sync.'
    }
  }
];

let activeFilter = 'all';
let activeMode: PortfolioMode = (localStorage.getItem('gm_mode') as PortfolioMode) || 'executive';

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const isTech = activeMode === 'technical';

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
          <li><a href="#ventures">${isTech ? 'Ventures & Architecture' : 'Ventures & Impact'}</a></li>
          <li><a href="#competencies">${isTech ? 'Technical Stack' : 'Capabilities'}</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div class="nav-actions">
          <!-- Audience Mode Toggle -->
          <div class="mode-toggle" id="mode-toggle" role="group" aria-label="Portfolio Perspective">
            <button class="mode-btn ${!isTech ? 'active' : ''}" data-mode="executive" title="Executive Overview (Product, Business Impact, Leadership)">
              ${icons.briefcase} <span>Overview</span>
            </button>
            <button class="mode-btn ${isTech ? 'active' : ''}" data-mode="technical" title="Technical Deep-Dive (Architecture, Code, Protocols)">
              ${icons.code} <span>Technical</span>
            </button>
          </div>

          <button id="theme-btn" class="btn-icon" title="Toggle theme" aria-label="Toggle theme">
            ${icons.sun}
          </button>
          <button id="view-pdf-btn" class="btn btn-secondary">
            ${icons.externalLink} PDF
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
          <div class="hero-status">
            <span class="status-dot"></span>
            <span>${isTech ? 'Available for System Architecture & Core Engineering' : 'Available for Technical Leadership & Product Engineering'}</span>
          </div>

          <h1 class="hero-title">Geoffrey Githii</h1>
          <div class="hero-subtitle">
            ${isTech 
              ? 'Software Engineer & System Architect • Protocols & Cross-Platform Systems' 
              : 'Product Builder & Engineering Leader • Scalable Digital Products'}
          </div>

          <p class="hero-bio">
            ${isTech
              ? 'Hands-on system architecture, EVM smart contracts, cross-platform mobile engineering (Flutter/Dart), and high-throughput distributed edge infrastructure delivered across production environments from 2022 to the present.'
              : 'Translating ambitious visions into resilient digital products. Delivering user-focused cross-platform mobile applications, decentralized finance platforms, and scalable web ecosystems delivered across high-growth ventures.'}
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
              ${icons.copy} Copy Email
            </button>
            <a href="#ventures" class="btn btn-secondary">
              ${isTech ? 'Inspect Technical Track Record' : 'Explore Key Ventures & Impact'}
            </a>
          </div>
        </div>
      </section>

      <!-- Ventures & Engineering Contributions -->
      <section id="ventures" class="section">
        <div class="container">
          <!-- Perspective Indicator Banner -->
          <div class="perspective-banner">
            <div class="perspective-banner-text">
              <span class="perspective-banner-badge">${isTech ? 'Technical Mode' : 'Overview Mode'}</span>
              <span>${isTech 
                ? 'Showing architecture patterns, protocol mechanics, and code-level technical specs.' 
                : 'Showing product outcomes, user adoption, and executive business summaries.'}</span>
            </div>
            <button id="inline-mode-toggle" class="perspective-switch-btn">
              Switch to ${isTech ? 'Overview Mode (Non-Technical)' : 'Technical Mode (Architecture & Code)'}
            </button>
          </div>

          <div class="section-head">
            <div>
              <h2 class="section-title">${isTech ? 'Major Technical Ventures & Architecture' : 'Major Ventures & Delivered Products'}</h2>
              <p class="section-desc">${isTech 
                ? 'Deep architectural breakdown of systems, decentralized protocols, and clients.' 
                : 'Key digital ecosystems, platforms, and user-facing applications delivered.'}</p>
            </div>

            <div class="filter-tabs">
              <button class="filter-tab active" data-filter="all">All (${ventures.length})</button>
              <button class="filter-tab" data-filter="web3">Web3 & EVM (${ventures.filter(v => v.category === 'web3').length})</button>
              <button class="filter-tab" data-filter="mobile">Mobile & Clients (${ventures.filter(v => v.category === 'mobile').length})</button>
              <button class="filter-tab" data-filter="fullstack">Full-Stack (${ventures.filter(v => v.category === 'fullstack').length})</button>
            </div>
          </div>

          <div class="ventures-list" id="ventures-list">
            ${renderVentures(activeFilter, activeMode)}
          </div>
        </div>
      </section>

      <!-- Core Competencies & Capabilities -->
      <section id="competencies" class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2 class="section-title">${isTech ? 'Core Competencies & Technical Capabilities' : 'Professional Capabilities & Core Strengths'}</h2>
              <p class="section-desc">${isTech 
                ? 'Technical proficiencies verified across production codebases and architectures.' 
                : 'Areas of leadership, delivery execution, and engineering expertise.'}</p>
            </div>
          </div>

          <div class="competencies-grid">
            ${renderCompetencies(activeMode)}
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

function renderVentures(filter: string, mode: PortfolioMode): string {
  const isTech = mode === 'technical';
  const filtered = filter === 'all' 
    ? ventures 
    : ventures.filter(v => v.category === filter || (filter === 'web3' && v.category === 'web3'));

  return filtered.map(v => {
    const view = isTech ? v.technical : v.executive;

    return `
      <article class="venture-card">
        <div class="venture-card-header">
          <div class="venture-title-area">
            <h3 class="venture-name">${v.name}</h3>
            <span class="venture-role-badge">${view.role}</span>
          </div>
          <span class="venture-period ${v.isCurrent ? 'present' : ''}">${v.period}</span>
        </div>

        ${view.extraBadge ? `<div class="venture-metrics-badge">${view.extraBadge}</div>` : ''}

        <p class="venture-desc">${view.summary}</p>

        ${view.architectureNote ? `<div class="venture-arch-note">${view.architectureNote}</div>` : ''}

        <ul class="venture-bullets">
          ${view.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>

        <div class="venture-tags">
          ${view.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </article>
    `;
  }).join('');
}

function renderCompetencies(mode: PortfolioMode): string {
  if (mode === 'technical') {
    return `
      <!-- Box 1 -->
      <div class="competency-box">
        <div class="competency-title">
          <span>Frontend & Mobile</span>
          <span class="competency-category">Client Layer</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">
          Cross-platform client architecture, reactive state management, and modern component systems.
        </p>
        <div class="competency-pills">
          <span class="competency-pill core">Flutter</span>
          <span class="competency-pill core">Dart</span>
          <span class="competency-pill core">React</span>
          <span class="competency-pill">TypeScript</span>
          <span class="competency-pill">BLoC State</span>
          <span class="competency-pill">Tailwind CSS</span>
          <span class="competency-pill">Vite</span>
          <span class="competency-pill">Offline SQLite/Hive</span>
        </div>
      </div>

      <!-- Box 2 -->
      <div class="competency-box">
        <div class="competency-title">
          <span>Smart Contracts</span>
          <span class="competency-category">Protocol Layer</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">
          EVM byte-level calldata routing, contract security architecture, and liquidity mechanics.
        </p>
        <div class="competency-pills">
          <span class="competency-pill core">Solidity 0.8.x</span>
          <span class="competency-pill core">EVM Networks</span>
          <span class="competency-pill core">Fee Routing Architecture</span>
          <span class="competency-pill">Foundry / Hardhat</span>
          <span class="competency-pill">Slither Static Analysis</span>
          <span class="competency-pill">AMM Routing</span>
          <span class="competency-pill">Reentrancy Guards</span>
        </div>
      </div>

      <!-- Box 3 -->
      <div class="competency-box">
        <div class="competency-title">
          <span>Backend & APIs</span>
          <span class="competency-category">Distributed Systems</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">
          Edge computing, WebSocket state sync, high-throughput microservices, and API routing.
        </p>
        <div class="competency-pills">
          <span class="competency-pill core">Node.js</span>
          <span class="competency-pill core">Cloudflare Edge Workers</span>
          <span class="competency-pill core">Firebase</span>
          <span class="competency-pill">REST APIs</span>
          <span class="competency-pill">GraphQL Integration</span>
          <span class="competency-pill">Redis Caching</span>
          <span class="competency-pill">WebSocket Streams</span>
        </div>
      </div>

      <!-- Box 4 -->
      <div class="competency-box">
        <div class="competency-title">
          <span>DevOps & Infrastructure</span>
          <span class="competency-category">Infrastructure</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">
          Automated continuous integration, deployment pipelines, and multi-chain RPC telemetry.
        </p>
        <div class="competency-pills">
          <span class="competency-pill core">Git</span>
          <span class="competency-pill core">GitHub Actions</span>
          <span class="competency-pill">CI/CD Pipelines</span>
          <span class="competency-pill core">Multi-Chain RPC Node Clusters</span>
          <span class="competency-pill">Edge CDN Routing</span>
        </div>
      </div>
    `;
  }

  // Executive / Overview Mode
  return `
    <!-- Box 1 -->
    <div class="competency-box">
      <div class="competency-title">
        <span>Product Strategy & Launch</span>
        <span class="competency-category">Product Delivery</span>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-muted);">
        Guiding digital initiatives from initial concept through user experience design and multi-platform launch.
      </p>
      <div class="competency-pills">
        <span class="competency-pill core">Product Roadmaps</span>
        <span class="competency-pill core">End-to-End Delivery</span>
        <span class="competency-pill">User Journey Design</span>
        <span class="competency-pill">Rapid Prototyping</span>
        <span class="competency-pill">Cross-Functional Alignment</span>
      </div>
    </div>

    <!-- Box 2 -->
    <div class="competency-box">
      <div class="competency-title">
        <span>Web3 & Fintech Solutions</span>
        <span class="competency-category">Fintech Systems</span>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-muted);">
        Creating secure non-custodial finance platforms, decentralized exchanges, and automated revenue routing.
      </p>
      <div class="competency-pills">
        <span class="competency-pill core">Non-Custodial Architecture</span>
        <span class="competency-pill core">Automated Fee Distribution</span>
        <span class="competency-pill">Security Risk Auditing</span>
        <span class="competency-pill">Multi-Chain Ecosystems</span>
        <span class="competency-pill">DeFi Integrations</span>
      </div>
    </div>

    <!-- Box 3 -->
    <div class="competency-box">
      <div class="competency-title">
        <span>Mobile & Cross-Platform</span>
        <span class="competency-category">Consumer Reach</span>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-muted);">
        Reaching users across iOS, Android, and web with unified codebases, offline capability, and high performance.
      </p>
      <div class="competency-pills">
        <span class="competency-pill core">Unified iOS & Android</span>
        <span class="competency-pill core">Offline-First User Experience</span>
        <span class="competency-pill">Sub-Second Interaction</span>
        <span class="competency-pill">App Store Deployment</span>
        <span class="competency-pill">Responsive Design</span>
      </div>
    </div>

    <!-- Box 4 -->
    <div class="competency-box">
      <div class="competency-title">
        <span>Scalability & Operations</span>
        <span class="competency-category">Reliability</span>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-muted);">
        Ensuring high availability, automated continuous integration, and seamless scaling during viral launches.
      </p>
      <div class="competency-pills">
        <span class="competency-pill core">99.9% Uptime Strategy</span>
        <span class="competency-pill core">Automated CI/CD Delivery</span>
        <span class="competency-pill">Traffic Surge Absorption</span>
        <span class="competency-pill">Edge Cloud Performance</span>
      </div>
    </div>
  `;
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
    const updateThemeUI = (theme: string) => {
      document.documentElement.setAttribute('data-theme', theme);
      themeBtn.innerHTML = theme === 'dark' ? icons.sun : icons.moon;
      const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      themeBtn.setAttribute('title', label);
      themeBtn.setAttribute('aria-label', label);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute('content', theme === 'dark' ? '#0a0e17' : '#ffffff');
      }
    };

    const currentTheme = localStorage.getItem('gm_theme') || 'dark';
    updateThemeUI(currentTheme);

    themeBtn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme');
      const next = active === 'dark' ? 'light' : 'dark';
      localStorage.setItem('gm_theme', next);
      updateThemeUI(next);
      showToast(`Switched to ${next} theme`);
    });
  }

  // Audience Mode Toggle
  const modeButtons = document.querySelectorAll('.mode-btn');
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetMode = (btn as HTMLElement).dataset.mode as PortfolioMode;
      if (targetMode && targetMode !== activeMode) {
        activeMode = targetMode;
        localStorage.setItem('gm_mode', targetMode);
        renderApp();
        showToast(`Switched to ${targetMode === 'technical' ? 'Technical Deep-Dive' : 'Overview (Non-Technical)'} view`);
      }
    });
  });

  // Inline Switch Button in Banner
  const inlineSwitch = document.getElementById('inline-mode-toggle');
  if (inlineSwitch) {
    inlineSwitch.addEventListener('click', () => {
      activeMode = activeMode === 'technical' ? 'executive' : 'technical';
      localStorage.setItem('gm_mode', activeMode);
      renderApp();
      showToast(`Switched to ${activeMode === 'technical' ? 'Technical Deep-Dive' : 'Overview (Non-Technical)'} view`);
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
        list.innerHTML = renderVentures(activeFilter, activeMode);
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
