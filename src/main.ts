import './style.css';

// ─── Icons ──────────────────────────────────────────────────────────────────
const icons = {
  github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  telegram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  mapPin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
  download: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  externalLink: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  copy: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  sun: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  moon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  arrowUpRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>`,
  briefcase: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  code: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  folder: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
  folderOpen: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>`,
  fileTs: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  fileSol: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>`,
  terminal: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`,
  chevronDown: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  chevronRight: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  close: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  gitBranch: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`,
  error: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`,
  sparkles: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`,
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
  fileLabel: string;    // IDE filename
  fileExt: string;      // .ts | .sol | .dart
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
    fileLabel: 'moonlist.ts',
    fileExt: 'ts',
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
    fileLabel: 'solerium.ts',
    fileExt: 'ts',
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
    fileLabel: 'HashbitFee.sol',
    fileExt: 'sol',
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
    fileLabel: 'DocswapAMM.sol',
    fileExt: 'sol',
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
    fileLabel: 'portfolio_bloc.dart',
    fileExt: 'dart',
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
let activeIdeFile = ventures[0].id;

// ─── Executive (Portfolio) Mode ───────────────────────────────────────────────
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  if (activeMode === 'technical') {
    renderIDEMode(app);
  } else {
    renderPortfolioMode(app);
  }

  attachEventHandlers();
}

function renderPortfolioMode(app: HTMLElement) {
  app.className = 'mode-portfolio';
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
          <li><a href="#ventures">Ventures & Impact</a></li>
          <li><a href="#competencies">Capabilities</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div class="nav-actions">
          <div class="mode-toggle" id="mode-toggle" role="group" aria-label="Portfolio Perspective">
            <button class="mode-btn active" data-mode="executive" title="Executive Overview">
              ${icons.briefcase} <span>Overview</span>
            </button>
            <button class="mode-btn" data-mode="technical" title="Technical IDE View">
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
          <h1 class="hero-title">Geoffrey Githii</h1>
          <div class="hero-subtitle">Product Builder & Engineering Leader • Scalable Digital Products</div>
          <p class="hero-bio">
            Translating ambitious visions into resilient digital products. Delivering user-focused cross-platform mobile applications, decentralized finance platforms, and scalable web ecosystems across high-growth ventures.
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
            <a href="mailto:jeff@app.moonlist.app" class="btn btn-primary">${icons.mail} Get in Touch</a>
            <button id="copy-email-btn" class="btn btn-secondary">${icons.copy} Copy Email</button>
            <a href="#ventures" class="btn btn-secondary">Explore Key Ventures & Impact</a>
          </div>
        </div>
      </section>

      <!-- Ventures -->
      <section id="ventures" class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2 class="section-title">Major Ventures & Delivered Products</h2>
              <p class="section-desc">Key digital ecosystems, platforms, and user-facing applications delivered.</p>
            </div>
            <div class="filter-tabs">
              <button class="filter-tab active" data-filter="all">All (${ventures.length})</button>
              <button class="filter-tab" data-filter="web3">Web3 & EVM (${ventures.filter(v => v.category === 'web3').length})</button>
              <button class="filter-tab" data-filter="mobile">Mobile & Clients (${ventures.filter(v => v.category === 'mobile').length})</button>
              <button class="filter-tab" data-filter="fullstack">Full-Stack (${ventures.filter(v => v.category === 'fullstack').length})</button>
            </div>
          </div>
          <div class="ventures-list" id="ventures-list">
            ${renderVentures(activeFilter, 'executive')}
          </div>
        </div>
      </section>

      <!-- Competencies -->
      <section id="competencies" class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <h2 class="section-title">Professional Capabilities & Core Strengths</h2>
              <p class="section-desc">Areas of leadership, delivery execution, and engineering expertise.</p>
            </div>
          </div>
          <div class="competencies-grid">
            ${renderCompetencies('executive')}
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="contact-section">
        <div class="container">
          <div class="contact-card">
            <div>
              <h2 class="contact-headline">Direct Contact & Engagement</h2>
              <p class="contact-text">
                Available for software engineering roles, system architecture, protocol development, and technical consulting. Reach out directly via email or Telegram.
              </p>
              <a href="mailto:jeff@app.moonlist.app" class="btn btn-primary">
                ${icons.mail} Send Email to jeff@app.moonlist.app
              </a>
            </div>
            <div class="contact-actions">
              <a href="mailto:jeff@app.moonlist.app" class="contact-row-btn">
                <span>Email</span><span>jeff@app.moonlist.app</span>
              </a>
              <a href="https://t.me/moon_jeff" target="_blank" rel="noopener noreferrer" class="contact-row-btn">
                <span>Telegram</span><span>@moon_jeff ${icons.arrowUpRight}</span>
              </a>
              <a href="https://github.com/yenmulla" target="_blank" rel="noopener noreferrer" class="contact-row-btn">
                <span>GitHub</span><span>yenmulla ${icons.arrowUpRight}</span>
              </a>
              <a href="/Geoffrey_Githii_Portfolio.pdf" download="Geoffrey_Githii_Portfolio.pdf" class="contact-row-btn">
                <span>Resume / CV</span><span>Download PDF ${icons.download}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <div>Geoffrey Githii &mdash; Software Engineering Portfolio & Technical Track Record</div>
        <div>Nairobi, Kenya</div>
      </div>
    </footer>

    <!-- PDF Modal -->
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

    <!-- Toast -->
    <div id="toast" class="toast"><span id="toast-text">Copied</span></div>
  `;
}

// ─── IDE Mode ─────────────────────────────────────────────────────────────────
function renderIDEMode(app: HTMLElement) {
  app.className = 'mode-ide';

  const activeVenture = ventures.find(v => v.id === activeIdeFile) || ventures[0];

  const extColor: Record<string, string> = {
    ts: '#3b82f6',
    sol: '#a78bfa',
    dart: '#06b6d4',
  };
  const extBadge: Record<string, string> = {
    ts: 'TS',
    sol: 'SOL',
    dart: 'DART',
  };

  // Build the "code" content for the main editor panel
  const codeLines = buildCodeView(activeVenture);

  app.innerHTML = `
    <!-- IDE Title Bar -->
    <div class="ide-titlebar">
      <div class="ide-titlebar-left">
        <div class="ide-traffic-lights">
          <span class="ide-tl red"></span>
          <span class="ide-tl yellow"></span>
          <span class="ide-tl green"></span>
        </div>
        <span class="ide-title-text">geoffrey-githii — portfolio</span>
      </div>
      <div class="ide-titlebar-center">
        <div class="ide-breadcrumb">
          <span class="ide-bc-seg">src</span>
          <span class="ide-bc-sep">›</span>
          <span class="ide-bc-seg active">${activeVenture.fileLabel}</span>
        </div>
      </div>
      <div class="ide-titlebar-right">
        <div class="ide-mode-pill">
          <button class="ide-mode-btn" data-mode="executive">${icons.briefcase} Overview</button>
          <button class="ide-mode-btn active" data-mode="technical">${icons.code} Technical</button>
        </div>
        <button id="theme-btn" class="ide-icon-btn" title="Toggle theme">${icons.sun}</button>
      </div>
    </div>

    <!-- IDE Body -->
    <div class="ide-body">

      <!-- Activity Bar (far left icon rail) -->
      <div class="ide-activitybar">
        <button class="ide-ab-btn active" title="Explorer">${icons.folderOpen}</button>
        <button class="ide-ab-btn" title="Git">${icons.gitBranch}</button>
        <button class="ide-ab-btn" title="Terminal">${icons.terminal}</button>
        <div class="ide-ab-spacer"></div>
        <a href="mailto:jeff@app.moonlist.app" class="ide-ab-btn" title="Contact">${icons.mail}</a>
        <a href="https://github.com/yenmulla" target="_blank" rel="noopener noreferrer" class="ide-ab-btn" title="GitHub">${icons.github}</a>
      </div>

      <!-- Sidebar / Explorer -->
      <div class="ide-sidebar">
        <div class="ide-sidebar-header">EXPLORER</div>
        <div class="ide-tree">
          <!-- Workspace root -->
          <div class="ide-tree-root">
            ${icons.folderOpen}
            <span>GEOFFREY-GITHII</span>
          </div>
          <!-- src folder -->
          <div class="ide-tree-group">
            <div class="ide-tree-folder open">
              ${icons.chevronDown}
              ${icons.folderOpen}
              <span>src</span>
            </div>
            <div class="ide-tree-files">
              ${ventures.map(v => `
                <div class="ide-tree-file ${v.id === activeIdeFile ? 'active' : ''}" data-venture="${v.id}">
                  <span class="ide-file-icon" style="color:${extColor[v.fileExt] || '#9ca3af'}">
                    ${icons.fileTs}
                  </span>
                  <span class="ide-file-label">${v.fileLabel}</span>
                  ${v.isCurrent ? '<span class="ide-file-dot"></span>' : ''}
                </div>
              `).join('')}
            </div>
          </div>
          <!-- Stack overview -->
          <div class="ide-tree-group">
            <div class="ide-tree-folder open">
              ${icons.chevronDown}
              ${icons.folder}
              <span>stack</span>
            </div>
            <div class="ide-tree-files">
              <div class="ide-tree-file" data-special="stack">
                <span class="ide-file-icon" style="color:#34d399">${icons.fileTs}</span>
                <span class="ide-file-label">tech-stack.json</span>
              </div>
              <div class="ide-tree-file" data-special="contact">
                <span class="ide-file-icon" style="color:#f59e0b">${icons.fileTs}</span>
                <span class="ide-file-label">contact.md</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Editor Area -->
      <div class="ide-main">

        <!-- Editor Tabs -->
        <div class="ide-tabs">
          ${ventures.map(v => `
            <div class="ide-tab ${v.id === activeIdeFile ? 'active' : ''}" data-venture="${v.id}">
              <span class="ide-tab-icon" style="color:${extColor[v.fileExt] || '#9ca3af'}">${extBadge[v.fileExt] || 'JS'}</span>
              <span class="ide-tab-label">${v.fileLabel}</span>
              ${v.isCurrent ? '<span class="ide-tab-modified"></span>' : ''}
              <span class="ide-tab-close">${icons.close}</span>
            </div>
          `).join('')}
        </div>

        <!-- Code Editor -->
        <div class="ide-editor">
          <div class="ide-editor-scroll">
            <div class="ide-line-numbers">
              ${codeLines.map((_, i) => `<div class="ide-ln">${i + 1}</div>`).join('')}
            </div>
            <div class="ide-code-content">
              ${codeLines.map(l => `<div class="ide-code-line">${l}</div>`).join('')}
            </div>
          </div>
        </div>

        <!-- Terminal Panel -->
        <div class="ide-terminal">
          <div class="ide-terminal-tabs">
            <span class="ide-terminal-tab active">${icons.terminal} TERMINAL</span>
            <span class="ide-terminal-tab">PROBLEMS <span class="ide-term-badge">0</span></span>
            <span class="ide-terminal-tab">OUTPUT</span>
          </div>
          <div class="ide-terminal-body">
            <div class="ide-term-line"><span class="ide-term-prompt">➜</span> <span class="ide-term-path">~/portfolio</span> <span class="ide-term-cmd">git log --oneline -3</span></div>
            <div class="ide-term-line ide-term-out">dba73ab feat: dual-mode portfolio — IDE technical view</div>
            <div class="ide-term-line ide-term-out">5dbc9f5 feat: LLM readiness, llms.txt, semantic HTML</div>
            <div class="ide-term-line ide-term-out">3169ade chore: Google Search Console verification</div>
            <div class="ide-term-line"><span class="ide-term-prompt">➜</span> <span class="ide-term-path">~/portfolio</span> <span class="ide-term-cmd">npm run build</span></div>
            <div class="ide-term-line ide-term-out ide-term-success">✓ built in 1.2s — dist/assets/index.js 32.67 kB │ gzip: 9.12 kB</div>
            <div class="ide-term-line"><span class="ide-term-prompt">➜</span> <span class="ide-term-path">~/portfolio</span> <span class="ide-term-cursor">█</span></div>
          </div>
        </div>

      </div>

      <!-- Right Panel: Minimap / Info -->
      <div class="ide-minimap">
        <div class="ide-minimap-header">OUTLINE</div>
        <div class="ide-outline">
          <div class="ide-outline-item">
            <span class="ide-oi-kw">interface</span> <span class="ide-oi-name">VentureSpec</span>
          </div>
          <div class="ide-outline-item">
            <span class="ide-oi-kw">const</span> <span class="ide-oi-name">architecture</span>
          </div>
          <div class="ide-outline-item">
            <span class="ide-oi-kw">const</span> <span class="ide-oi-name">stack</span>
          </div>
          <div class="ide-outline-item">
            <span class="ide-oi-kw">fn</span> <span class="ide-oi-name">deploy()</span>
          </div>
        </div>

        <div class="ide-minimap-header" style="margin-top:1.5rem;">METRICS</div>
        <div class="ide-metrics">
          <div class="ide-metric-row"><span class="ide-metric-label">Ventures</span><span class="ide-metric-val">${ventures.length}</span></div>
          <div class="ide-metric-row"><span class="ide-metric-label">Years</span><span class="ide-metric-val">4+</span></div>
          <div class="ide-metric-row"><span class="ide-metric-label">Networks</span><span class="ide-metric-val">10+</span></div>
          <div class="ide-metric-row"><span class="ide-metric-label">Exploits</span><span class="ide-metric-val ide-metric-green">0</span></div>
        </div>
      </div>
    </div>

    <!-- IDE Status Bar -->
    <div class="ide-statusbar">
      <div class="ide-status-left">
        <span class="ide-status-item ide-status-branch">${icons.gitBranch} main</span>
        <span class="ide-status-item">${icons.error} 0 &nbsp; ⚠ 0</span>
      </div>
      <div class="ide-status-center">
        Geoffrey Githii &nbsp;·&nbsp; Software Engineer & System Architect &nbsp;·&nbsp; Nairobi, Kenya
      </div>
      <div class="ide-status-right">
        <span class="ide-status-item">${activeVenture.fileExt.toUpperCase()}</span>
        <span class="ide-status-item">UTF-8</span>
        <span class="ide-status-item">TypeScript 7.0.2</span>
        <span class="ide-status-item ide-status-live">${icons.sparkles} jeff.moonlist.site</span>
      </div>
    </div>

    <!-- Toast -->
    <div id="toast" class="toast"><span id="toast-text">Copied</span></div>
  `;
}

// ─── Code View Builder ─────────────────────────────────────────────────────────
function hl(cls: string, text: string) {
  return `<span class="hl-${cls}">${text}</span>`;
}
function escapeLine(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildCodeView(v: Venture): string[] {
  const t = v.technical;
  const fileComment: Record<string, string> = {
    ts: '//',
    sol: '//',
    dart: '//',
  };
  const cmt = fileComment[v.fileExt] || '//';

  const lines: string[] = [];

  const push = (...parts: string[]) => lines.push(parts.join(''));
  const blank = () => lines.push('');

  // File header comment
  push(`${hl('comment', `${cmt} ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}`);
  push(`${hl('comment', `${cmt}  ${escapeLine(v.name)}`)}`);
  push(`${hl('comment', `${cmt}  Role: ${escapeLine(t.role)}`)}`);
  push(`${hl('comment', `${cmt}  Period: ${escapeLine(v.period)}`)}`);
  push(`${hl('comment', `${cmt}  Spec: ${escapeLine(t.badge)}`)}`);
  push(`${hl('comment', `${cmt} ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)}`);
  blank();

  if (v.fileExt === 'sol') {
    push(`${hl('kw', 'pragma')} ${hl('kw', 'solidity')} ${hl('str', '^0.8.20')};`);
    blank();
    push(`${hl('kw', 'import')} ${hl('str', '"@openzeppelin/contracts/security/ReentrancyGuard.sol"')};`);
    push(`${hl('kw', 'import')} ${hl('str', '"@openzeppelin/contracts/access/Ownable.sol"')};`);
    blank();
    push(`${hl('comment', `${cmt} @dev ${escapeLine(t.summary.substring(0, 80))}...`)}`);
    push(`${hl('kw', 'contract')} ${hl('type', escapeLine(v.name.replace(/\s+/g, '')))} ${hl('kw', 'is')} ${hl('type', 'ReentrancyGuard')}, ${hl('type', 'Ownable')} {`);
    blank();
    push(`    ${hl('comment', `${cmt} ── State ───────────────────────────────────────────────────────────`)}`);
    push(`    ${hl('kw', 'uint256')} ${hl('kw', 'public')} ${hl('id', 'protocolFee')} = ${hl('num', '250')}; ${hl('comment', '// 2.5% basis points')}`);
    push(`    ${hl('kw', 'mapping')}(${hl('kw', 'address')} => ${hl('kw', 'uint256')}) ${hl('kw', 'public')} ${hl('id', 'balances')};`);
    push(`    ${hl('kw', 'bool')} ${hl('kw', 'private')} ${hl('id', 'locked')} = ${hl('bool', 'false')};`);
    blank();
    push(`    ${hl('comment', `${cmt} ── Events ──────────────────────────────────────────────────────────`)}`);
    push(`    ${hl('kw', 'event')} ${hl('type', 'FeesDistributed')}(${hl('kw', 'address')} ${hl('kw', 'indexed')} ${hl('id', 'recipient')}, ${hl('kw', 'uint256')} ${hl('id', 'amount')});`);
    blank();
    push(`    ${hl('comment', `${cmt} ── Core Logic ──────────────────────────────────────────────────────`)}`);
    push(`    ${hl('comment', `${cmt} @dev Checks-Effects-Interactions pattern enforced throughout`)}`);
    push(`    ${hl('kw', 'function')} ${hl('fn', 'distributeFees')}(${hl('kw', 'address')}[] ${hl('kw', 'calldata')} ${hl('id', 'recipients')})`);
    push(`        ${hl('kw', 'external')} ${hl('kw', 'nonReentrant')} ${hl('kw', 'onlyOwner')} {`);
    push(`        ${hl('kw', 'uint256')} ${hl('id', 'total')} = ${hl('id', 'address')}(${hl('kw', 'this')}).balance;`);
    push(`        ${hl('kw', 'require')}(${hl('id', 'total')} > ${hl('num', '0')}, ${hl('str', '"No fees to distribute"')});`);
    blank();
    push(`        ${hl('kw', 'uint256')} ${hl('id', 'share')} = ${hl('id', 'total')} / ${hl('id', 'recipients')}.length;`);
    push(`        ${hl('kw', 'for')} (${hl('kw', 'uint256')} ${hl('id', 'i')} = ${hl('num', '0')}; ${hl('id', 'i')} &lt; ${hl('id', 'recipients')}.length; ${hl('id', 'i')}++) {`);
    push(`            ${hl('id', 'balances')}[${hl('id', 'recipients')}[${hl('id', 'i')}]] += ${hl('id', 'share')};`);
    push(`            ${hl('kw', 'emit')} ${hl('type', 'FeesDistributed')}(${hl('id', 'recipients')}[${hl('id', 'i')}], ${hl('id', 'share')});`);
    push(`        }`);
    push(`    }`);
    blank();
    push(`    ${hl('comment', `${cmt} Architecture: ${escapeLine(t.architectureNote || '')}`)}`);
    push(`}`);
  } else if (v.fileExt === 'dart') {
    push(`${hl('kw', 'import')} ${hl('str', "'package:flutter_bloc/flutter_bloc.dart'")};`);
    push(`${hl('kw', 'import')} ${hl('str', "'package:hive/hive.dart'")};`);
    blank();
    push(`${hl('comment', `${cmt} ${escapeLine(t.summary.substring(0, 80))}...`)}`);
    push(`${hl('kw', 'class')} ${hl('type', escapeLine(v.name.replace(/\s+\S+$/, '').replace(/\s+/g, '')))}Bloc ${hl('kw', 'extends')} ${hl('type', 'Bloc')}<${hl('type', 'PortfolioEvent')}, ${hl('type', 'PortfolioState')}> {`);
    push(`  ${hl('kw', 'final')} ${hl('type', 'PortfolioRepository')} ${hl('id', '_repository')};`);
    push(`  ${hl('kw', 'final')} ${hl('type', 'Box')}<${hl('type', 'CachedData')}> ${hl('id', '_cache')};`);
    blank();
    push(`  ${hl('type', escapeLine(v.name.replace(/\s+\S+$/, '').replace(/\s+/g, '')))}Bloc({${hl('kw', 'required')} ${hl('type', 'PortfolioRepository')} ${hl('id', 'repository')}, ${hl('kw', 'required')} ${hl('type', 'Box')}<${hl('type', 'CachedData')}> ${hl('id', 'cache')}}) : ${hl('id', '_repository')} = ${hl('id', 'repository')}, ${hl('id', '_cache')} = ${hl('id', 'cache')}, ${hl('kw', 'super')}(${hl('type', 'PortfolioInitial')}()) {`);
    push(`    ${hl('id', 'on')}<${hl('type', 'LoadPortfolio')}>(_onLoad);`);
    push(`    ${hl('id', 'on')}<${hl('type', 'SyncPortfolio')}>(_onSync);`);
    push(`  }`);
    blank();
    push(`  ${hl('type', 'Future')}<${hl('kw', 'void')}> ${hl('fn', '_onLoad')}(${hl('type', 'LoadPortfolio')} ${hl('id', 'event')}, ${hl('type', 'Emitter')}<${hl('type', 'PortfolioState')}> ${hl('id', 'emit')}) ${hl('kw', 'async')} {`);
    push(`    ${hl('id', 'emit')}(${hl('type', 'PortfolioLoading')}());`);
    push(`    ${hl('kw', 'try')} {`);
    push(`      ${hl('comment', `// optimistic: return cached data first`)}`);
    push(`      ${hl('kw', 'final')} ${hl('id', 'cached')} = ${hl('id', '_cache')}.${hl('id', 'get')}(${hl('str', "'portfolio'")});`);
    push(`      ${hl('kw', 'if')} (${hl('id', 'cached')} != ${hl('kw', 'null')}) ${hl('id', 'emit')}(${hl('type', 'PortfolioLoaded')}(${hl('id', 'data')}: ${hl('id', 'cached')}));`);
    push(`      ${hl('kw', 'final')} ${hl('id', 'fresh')} = ${hl('kw', 'await')} ${hl('id', '_repository')}.${hl('fn', 'fetchPortfolio')}();`);
    push(`      ${hl('kw', 'await')} ${hl('id', '_cache')}.${hl('fn', 'put')}(${hl('str', "'portfolio'")}, ${hl('id', 'fresh')});`);
    push(`      ${hl('id', 'emit')}(${hl('type', 'PortfolioLoaded')}(${hl('id', 'data')}: ${hl('id', 'fresh')}));`);
    push(`    } ${hl('kw', 'catch')} (${hl('id', 'e')}) {`);
    push(`      ${hl('id', 'emit')}(${hl('type', 'PortfolioError')}(${hl('id', 'message')}: ${hl('id', 'e')}.${hl('id', 'toString')}()));`);
    push(`    }`);
    push(`  }`);
    push(`}`);
  } else {
    // TypeScript
    push(`${hl('kw', 'import')} ${hl('id', 'type')} { ${hl('type', 'Architecture')} } ${hl('kw', 'from')} ${hl('str', "'../types'")};`);
    blank();
    push(`${hl('comment', `${cmt} ${escapeLine(t.summary.substring(0, 90))}`)}`);
    push(`${hl('kw', 'interface')} ${hl('type', 'VentureSpec')} {`);
    push(`  ${hl('id', 'name')}: ${hl('type', 'string')};`);
    push(`  ${hl('id', 'role')}: ${hl('type', 'string')};`);
    push(`  ${hl('id', 'period')}: ${hl('type', 'string')};`);
    push(`  ${hl('id', 'architecture')}: ${hl('type', 'Architecture')};`);
    push(`  ${hl('id', 'tags')}: ${hl('type', 'string')}[];`);
    push(`}`);
    blank();
    push(`${hl('kw', 'const')} ${hl('id', 'architecture')}: ${hl('type', 'Architecture')} = {`);
    push(`  ${hl('id', 'pattern')}: ${hl('str', `'${escapeLine(t.architectureNote?.split(':')[1]?.trim().split('.')[0] || 'Event-driven microservices')}'`)},`);
    push(`  ${hl('id', 'stacks')}: [`);
    t.tags.slice(0, 4).forEach(tag => {
      push(`    ${hl('str', `'${escapeLine(tag)}'`)},`);
    });
    push(`  ],`);
    push(`};`);
    blank();
    push(`${hl('kw', 'const')} ${hl('id', 'venture')}: ${hl('type', 'VentureSpec')} = {`);
    push(`  ${hl('id', 'name')}: ${hl('str', `'${escapeLine(v.name)}'`)},`);
    push(`  ${hl('id', 'role')}: ${hl('str', `'${escapeLine(t.role)}'`)},`);
    push(`  ${hl('id', 'period')}: ${hl('str', `'${escapeLine(v.period)}'`)},`);
    push(`  ${hl('id', 'architecture')},`);
    push(`  ${hl('id', 'tags')}: [`);
    t.tags.forEach(tag => {
      push(`    ${hl('str', `'${escapeLine(tag)}'`)},`);
    });
    push(`  ],`);
    push(`};`);
    blank();
    push(`${hl('comment', `${cmt} ── Key Contributions ───────────────────────────────────────────────`)}`);
    t.bullets.forEach((b, i) => {
      push(`${hl('comment', `${cmt} ${i + 1}. ${escapeLine(b)}`)}`);
    });
    blank();
    push(`${hl('kw', 'async')} ${hl('kw', 'function')} ${hl('fn', 'deploy')}(${hl('id', 'config')}: ${hl('type', 'DeployConfig')}): ${hl('type', 'Promise')}<${hl('type', 'void')}> {`);
    push(`  ${hl('kw', 'const')} { ${hl('id', 'env')}, ${hl('id', 'rpc')}, ${hl('id', 'chain')} } = ${hl('id', 'config')};`);
    push(`  ${hl('kw', 'await')} ${hl('id', 'validate')}({ ${hl('id', 'env')}, ${hl('id', 'rpc')} });`);
    push(`  ${hl('kw', 'await')} ${hl('id', 'build')}(${hl('str', "'production'")});`);
    push(`  ${hl('kw', 'await')} ${hl('id', 'push')}({ ${hl('id', 'chain')}, ${hl('id', 'rpc')} });`);
    push(`}`);
    blank();
    push(`${hl('kw', 'export default')} ${hl('id', 'venture')};`);
  }

  return lines;
}

// ─── Executive renderVentures ─────────────────────────────────────────────────
function renderVentures(filter: string, mode: PortfolioMode): string {
  const filtered = filter === 'all'
    ? ventures
    : ventures.filter(v => v.category === filter);

  return filtered.map(v => {
    const view = mode === 'technical' ? v.technical : v.executive;
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

// ─── Competencies ─────────────────────────────────────────────────────────────
function renderCompetencies(mode: PortfolioMode): string {
  if (mode === 'technical') {
    return `
      <div class="competency-box">
        <div class="competency-title"><span>Frontend & Mobile</span><span class="competency-category">Client Layer</span></div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Cross-platform client architecture, reactive state management, and modern component systems.</p>
        <div class="competency-pills">
          <span class="competency-pill core">Flutter</span><span class="competency-pill core">Dart</span>
          <span class="competency-pill core">React</span><span class="competency-pill">TypeScript</span>
          <span class="competency-pill">BLoC State</span><span class="competency-pill">Tailwind CSS</span>
          <span class="competency-pill">Vite</span><span class="competency-pill">Offline SQLite/Hive</span>
        </div>
      </div>
      <div class="competency-box">
        <div class="competency-title"><span>Smart Contracts</span><span class="competency-category">Protocol Layer</span></div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">EVM byte-level calldata routing, contract security architecture, and liquidity mechanics.</p>
        <div class="competency-pills">
          <span class="competency-pill core">Solidity 0.8.x</span><span class="competency-pill core">EVM Networks</span>
          <span class="competency-pill core">Fee Routing Architecture</span><span class="competency-pill">Foundry / Hardhat</span>
          <span class="competency-pill">Slither Static Analysis</span><span class="competency-pill">AMM Routing</span>
          <span class="competency-pill">Reentrancy Guards</span>
        </div>
      </div>
      <div class="competency-box">
        <div class="competency-title"><span>Backend & APIs</span><span class="competency-category">Distributed Systems</span></div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Edge computing, WebSocket state sync, high-throughput microservices, and API routing.</p>
        <div class="competency-pills">
          <span class="competency-pill core">Node.js</span><span class="competency-pill core">Cloudflare Edge Workers</span>
          <span class="competency-pill core">Firebase</span><span class="competency-pill">REST APIs</span>
          <span class="competency-pill">GraphQL Integration</span><span class="competency-pill">Redis Caching</span>
          <span class="competency-pill">WebSocket Streams</span>
        </div>
      </div>
      <div class="competency-box">
        <div class="competency-title"><span>DevOps & Infrastructure</span><span class="competency-category">Infrastructure</span></div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Automated continuous integration, deployment pipelines, and multi-chain RPC telemetry.</p>
        <div class="competency-pills">
          <span class="competency-pill core">Git</span><span class="competency-pill core">GitHub Actions</span>
          <span class="competency-pill">CI/CD Pipelines</span>
          <span class="competency-pill core">Multi-Chain RPC Node Clusters</span>
          <span class="competency-pill">Edge CDN Routing</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="competency-box">
      <div class="competency-title"><span>Product Strategy & Launch</span><span class="competency-category">Product Delivery</span></div>
      <p style="font-size: 0.85rem; color: var(--text-muted);">Guiding digital initiatives from concept through UX design and multi-platform launch.</p>
      <div class="competency-pills">
        <span class="competency-pill core">Product Roadmaps</span><span class="competency-pill core">End-to-End Delivery</span>
        <span class="competency-pill">User Journey Design</span><span class="competency-pill">Rapid Prototyping</span>
        <span class="competency-pill">Cross-Functional Alignment</span>
      </div>
    </div>
    <div class="competency-box">
      <div class="competency-title"><span>Web3 & Fintech Solutions</span><span class="competency-category">Fintech Systems</span></div>
      <p style="font-size: 0.85rem; color: var(--text-muted);">Secure non-custodial finance platforms, DEXes, and automated revenue routing.</p>
      <div class="competency-pills">
        <span class="competency-pill core">Non-Custodial Architecture</span><span class="competency-pill core">Automated Fee Distribution</span>
        <span class="competency-pill">Security Risk Auditing</span><span class="competency-pill">Multi-Chain Ecosystems</span>
        <span class="competency-pill">DeFi Integrations</span>
      </div>
    </div>
    <div class="competency-box">
      <div class="competency-title"><span>Mobile & Cross-Platform</span><span class="competency-category">Consumer Reach</span></div>
      <p style="font-size: 0.85rem; color: var(--text-muted);">Reaching users across iOS, Android, and web with unified codebases and high performance.</p>
      <div class="competency-pills">
        <span class="competency-pill core">Unified iOS & Android</span><span class="competency-pill core">Offline-First UX</span>
        <span class="competency-pill">Sub-Second Interaction</span><span class="competency-pill">App Store Deployment</span>
        <span class="competency-pill">Responsive Design</span>
      </div>
    </div>
    <div class="competency-box">
      <div class="competency-title"><span>Scalability & Operations</span><span class="competency-category">Reliability</span></div>
      <p style="font-size: 0.85rem; color: var(--text-muted);">High availability, automated CI/CD, and seamless scaling during viral launches.</p>
      <div class="competency-pills">
        <span class="competency-pill core">99.9% Uptime Strategy</span><span class="competency-pill core">Automated CI/CD Delivery</span>
        <span class="competency-pill">Traffic Surge Absorption</span><span class="competency-pill">Edge Cloud Performance</span>
      </div>
    </div>
  `;
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function showToast(msg: string) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;
  toastText.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── Event Handlers ───────────────────────────────────────────────────────────
function attachEventHandlers() {
  // Theme Toggle (works in both modes)
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    const updateThemeUI = (theme: string) => {
      document.documentElement.setAttribute('data-theme', theme);
      themeBtn.innerHTML = theme === 'dark' ? icons.sun : icons.moon;
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0e17' : '#ffffff');
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

  // Mode Toggle (portfolio navbar buttons)
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetMode = (btn as HTMLElement).dataset.mode as PortfolioMode;
      if (targetMode && targetMode !== activeMode) {
        activeMode = targetMode;
        localStorage.setItem('gm_mode', targetMode);
        renderApp();
        showToast(targetMode === 'technical' ? 'Switched to IDE — Technical view' : 'Switched to Portfolio — Overview');
      }
    });
  });

  // IDE Mode Toggle buttons (in titlebar)
  document.querySelectorAll('.ide-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetMode = (btn as HTMLElement).dataset.mode as PortfolioMode;
      if (targetMode && targetMode !== activeMode) {
        activeMode = targetMode;
        localStorage.setItem('gm_mode', targetMode);
        renderApp();
        showToast(targetMode === 'technical' ? 'Switched to IDE — Technical view' : 'Switched to Portfolio — Overview');
      }
    });
  });

  // IDE Sidebar file clicks
  document.querySelectorAll('.ide-tree-file[data-venture]').forEach(el => {
    el.addEventListener('click', () => {
      const id = (el as HTMLElement).dataset.venture;
      if (id) {
        activeIdeFile = id;
        renderApp();
      }
    });
  });

  // IDE Tab clicks
  document.querySelectorAll('.ide-tab[data-venture]').forEach(el => {
    el.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      // Don't switch on close button click
      if (target.closest('.ide-tab-close')) return;
      const id = (el as HTMLElement).dataset.venture;
      if (id) {
        activeIdeFile = id;
        renderApp();
      }
    });
  });

  // Portfolio filter tabs
  const filterTabs = document.querySelectorAll('.filter-tab');
  const list = document.getElementById('ventures-list');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = (tab as HTMLElement).dataset.filter || 'all';
      if (list) list.innerHTML = renderVentures(activeFilter, activeMode);
    });
  });

  // Copy email
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('jeff@app.moonlist.app')
        .then(() => showToast('Email copied to clipboard'))
        .catch(() => showToast('jeff@app.moonlist.app'));
    });
  }

  // PDF Modal
  const viewPdfBtn = document.getElementById('view-pdf-btn');
  const modal = document.getElementById('pdf-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  if (viewPdfBtn && modal) viewPdfBtn.addEventListener('click', () => modal.classList.add('active'));
  if (closeModalBtn && modal) closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
}

// Initial render
renderApp();
