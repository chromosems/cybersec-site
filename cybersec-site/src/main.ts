import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<nav>
  <div class="nav-inner">
    <a href="#hero" class="logo">fuse<span class="logo-accent">-cec.io</span></a>
    <div class="nav-center">
      <a href="#hero">Home</a>
      <a href="#philosophy">About</a>
      <a href="#expertise">Expertise</a>
      <a href="#how-it-works">How It Works</a>
      <a href="#solutions">Solutions</a>
      <a href="#hero" class="nav-btn nav-btn-internal">Get a free consultation</a>
    </div>
    <a href="#hero" class="nav-btn nav-btn-external">Get a free consultation</a>
    <button class="nav-toggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-layout">
    <div class="hero-text">
      <h1>Built by operators.<br>Trusted by teams.</h1>
      <p class="hero-sub">Industrial grade cybersecurity for mid market firms. Defensive operations, proactive assurance, and strategic infrastructure  in one monthly retainer.</p>
    </div>
    <div class="hero-form-col">
      <div class="hero-form-card">
        <h3>How Can We Help</h3>
        <p class="hero-form-sub">Tell us about your security needs and we'll get back to you within 24 hours.</p>
        <form id="contact-form">
          <input type="text" name="name" placeholder="Your name" required minlength="2" autocomplete="name">
          <input type="email" name="email" placeholder="Email address" required autocomplete="email">
          <input type="tel" name="phone" placeholder="Phone number" required pattern="[0-9+\-()\s]+" title="Numbers and phone characters only (+, -, parentheses)" inputmode="numeric">
          <input type="text" name="company" placeholder="Company" required autocomplete="organization">
          <select name="service" class="hero-form-select" required>
            <option value="" disabled selected>How we can help you</option>
            <option value="security-monitoring">Security Monitoring</option>
            <option value="incident-response">Incident Response</option>
            <option value="penetration-testing">Penetration Testing</option>
            <option value="risk-assessment">Risk Assessment</option>
            <option value="compliance-management">Compliance Management</option>
            <option value="cloud-security">Cloud Security</option>
            <option value="zero-trust">Zero Trust Architecture</option>
            <option value="ai-security">AI Application Security</option>
            <option value="other">Other</option>
          </select>
          <textarea name="message" placeholder="Tell us about your security needs..." rows="3" required></textarea>
          <button type="submit" class="btn-primary">Send message</button>
          <div class="form-status" role="alert"></div>
        </form>
    </div>
    </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,0 C360,60 1080,60 1440,0 L1440,80 L0,80 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="philosophy" class="section-light">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">OUR PHILOSOPHY</span>
    <h2>Bridging the gap between East African roots and global standards.</h2>
    <p class="section-desc">We combine deep local context with world class security standards. We aren't just consultants we are your dedicated security operations partners, delivering enterprise grade protection built for mid market realities.</p>
  </div>
  <div class="philosophy-cards">
    <div class="philosophy-card">
      <div class="philosophy-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
        </svg>
      </div>
      <h3>Local Context</h3>
      <p>We understand the East African threat landscape, regulatory environment, and business realities because we operate here.</p>
    </div>
    <div class="philosophy-card">
      <div class="philosophy-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
        </svg>
      </div>
      <h3>Global Standards</h3>
      <p>Our methodologies align with industry frameworks built on real frontline experience and a deep understanding of global security standards.</p>
    </div>
    <div class="philosophy-card">
      <div class="philosophy-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
        </svg>
      </div>
      <h3>Partnership Model</h3>
      <p>We embed ourselves as your security operations partner  not a vendor. One retainer, one point of contact, no handoffs.</p>
    </div>
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,80 C360,20 1080,20 1440,80 L1440,0 L0,0 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="expertise">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">OUR EXPERTISE</span>
    <h2>Our Expertise</h2>
  </div>
  <div class="expertise-grid">
    <div class="expertise-card">
      <div class="expertise-number">01</div>
      <h3>Risk Assessment</h3>
      <p>We conduct comprehensive threat modeling and vulnerability assessments to identify and mitigate critical security risks before they impact your operations.</p>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">02</div>
      <h3>Security Monitoring</h3>
      <p>Our 24/7 SOC provides continuous surveillance of your network infrastructure, detecting anomalies and malicious activities in real-time for immediate response.</p>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">03</div>
      <h3>Incident Response</h3>
      <p>We deploy rapid forensic analysis and technical remediation to contain breaches and restore normal operations, minimizing downtime and financial loss.</p>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">04</div>
      <h3>Penetration Testing</h3>
      <p>Two full scope engagements per year external, internal, and web application testing. Delivered with a prioritised remediation roadmap, not just a PDF of findings.</p>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">05</div>
      <h3>AI Penetration Testing</h3>
      <p>Specialised security assessments of AI/ML systems, LLM applications, and autonomous agents. Testing against the OWASP LLM Top 10 — prompt injection, model poisoning, data leakage, and adversarial attacks across the AI stack.</p>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">06</div>
      <h3>AI Application Security</h3>
      <p>Securing AI pipelines, LLM deployments, and machine learning infrastructure. Enforcing Zero Trust for AI models access control, input validation, and model integrity verification.</p>
    </div>
    </div>
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,80 C360,20 1080,20 1440,80 L1440,0 L0,0 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="how-it-works" class="section-light">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">HOW IT WORKS</span>
    <h2>From first conversation to active protection.</h2>
    <p class="section-desc">No long sales cycles. No hidden setup fees. You get a partner who understands your environment and starts delivering value immediately.</p>
  </div>
  <div class="steps">
    <div class="step">
      <div class="step-number">01</div>
      <h3>Discovery Call</h3>
      <p>We learn about your infrastructure, team, and current security posture. No pitch just understanding what you need.</p>
    </div>
    <div class="step">
      <div class="step-number">02</div>
      <h3>Security Baseline</h3>
      <p>We run an initial assessment across your environment networks, cloud, endpoints, identities, and AI/LLM pipelines to identify your highest priority risks.</p>
    </div>
    <div class="step">
      <div class="step-number">03</div>
      <h3>Retainer Setup</h3>
      <p>We configure your SOC monitoring, deploy agents where needed, and schedule your first penetration test and AI security assessment. Everything in one monthly retainer.</p>
    </div>
    <div class="step">
      <div class="step-number">04</div>
      <h3>Ongoing Operations</h3>
      <p>Continuous monitoring, quarterly reviews, real-time incident response, biannual pentesting, and AI model integrity reviews with a direct line to the person running your security.</p>
    </div>
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,80 C360,20 1080,20 1440,80 L1440,0 L0,0 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="retainer">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">THE RETAINER MODEL</span>
    <h2>Predictable protection. No surprises.</h2>
    <p class="section-desc">Security is a constant discipline. Our monthly retainer replaces expensive, fragmented projects with a predictable, all inclusive partnership.</p>
  </div>
  <div class="retainer-grid">
    <div class="retainer-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24">
        <path d="M12 2L3 7v6c0 5.25 3.83 10.05 9 11 5.17-.95 9-5.75 9-11V7l-9-5z"/>
        <rect x="9" y="9" width="6" height="6" rx="1"/>
      </svg>
      <h3>No hidden setup fees</h3>
      <p>What we quote is what you pay. Onboarding, agent deployment, and initial baseline assessment are included in your retainer.</p>
    </div>
    <div class="retainer-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24">
        <circle cx="12" cy="12" r="8"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="12" cy="12" r="1.5"/>
        <line x1="12" y1="4" x2="12" y2="6"/>
        <line x1="12" y1="18" x2="12" y2="20"/>
        <line x1="4" y1="12" x2="6" y2="12"/>
        <line x1="18" y1="12" x2="20" y2="12"/>
      </svg>
      <h3>Deep context, faster response</h3>
      <p>We know your environment because we monitor it daily. When something happens, we respond with context not from scratch.</p>
    </div>
    <div class="retainer-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24">
        <path d="M4 20c3-7 6-9 8-9s5 2 8 9" stroke-linecap="round"/>
        <path d="M12 11V4"/>
        <path d="M9 7l3-3 3 3"/>
      </svg>
      <h3>Aligned incentives</h3>
      <p>We focus on risk reduction, not hourly billing. Your security outcomes are our success metrics plain and simple.</p>
    </div>
    <div class="retainer-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="24" height="24">
        <path d="M12 2L4 9l3 12h10l3-12-8-7z"/>
        <path d="M4 9h16"/>
      </svg>
      <h3>Preferred rates for extras</h3>
      <p>Need a major cloud migration assessment or additional forensics? Retainer clients get priority scheduling and preferred pricing.</p>
    </div>
  </div>
  </div>
</section>

<section id="global">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">GLOBAL OPERATIONS</span>
    <h2>We bridge the gap between East African roots and global standards.</h2>
    <p class="section-desc">Our industrial grade protection extends across continents, delivering precision monitoring and risk assessment for mid market firms worldwide.</p>
  </div>
  <div class="global-regions">
    <div class="global-region">
      <span class="region-name">East Africa</span>
      <span class="region-desc">Kampala, Nairobi, Kigali, Dar es Salaam</span>
    </div>
    <div class="global-region">
      <span class="region-name">Global</span>
      <span class="region-desc">Remote delivery worldwide</span>
    </div>
  </div>
  <div class="global-cta">
    <a href="#hero" class="btn-primary">Partner with us</a>
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,0 C360,60 1080,60 1440,0 L1440,80 L0,80 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="solutions" class="section-light">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">SECURITY SOLUTIONS</span>
    <h2>Security Solutions</h2>
  </div>
  <div class="tabs">
    <div class="tab-nav">
      <button class="tab-btn active" data-tab="defensive">Defensive Operations</button>
      <button class="tab-btn" data-tab="proactive">Proactive Assurance</button>
      <button class="tab-btn" data-tab="strategic">Strategic Infrastructure</button>
    </div>
    <div class="tab-panel active" id="tab-defensive">
      <div class="tab-grid">
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="7"/>
              <circle cx="12" cy="12" r="3"/>
              <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
              <path d="M12 5v1m0 12v1M5 12h1m12 0h1"/>
            </svg>
          </div>
          <h3>Security Monitoring</h3>
          <p>SIEM Integration, Log Analysis, Real time Alerts, Threat Intelligence</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z"/>
            </svg>
          </div>
          <h3>Incident Response</h3>
          <p>24/7 SOC Monitoring, Rapid Forensics, Threat Containment, Global Support</p>
        </div>
      </div>
    </div>
    <div class="tab-panel" id="tab-proactive">
      <div class="tab-grid">
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="8"/>
              <path d="M12 4v3m0 10v3M4 12h3m10 0h3"/>
              <path d="M12 12l5-5"/>
            </svg>
          </div>
          <h3>Penetration Testing</h3>
          <p>Proactive attack simulations to find and fix vulnerabilities before real attackers do.</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="3"/>
              <circle cx="12" cy="12" r="7"/>
              <circle cx="12" cy="3" r="1.5" fill="currentColor"/>
              <path d="M12 5v1"/>
            </svg>
          </div>
          <h3>AI Penetration Testing</h3>
          <p>Specialised red-teaming of AI/ML systems mapped to the OWASP LLM Top 10 — prompt injections, model extraction, training data poisoning, and adversarial robustness testing.</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="8" y="3" width="8" height="18" rx="2"/>
              <path d="M10 8h4"/>
              <path d="M10 12l1 1 2-2"/>
            </svg>
          </div>
          <h3>Risk Assessment</h3>
          <p>Threat Modeling, Vulnerability Scanning, Asset Inventory, Risk Prioritization</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2l9 7-3 11H6L3 9l9-7z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <h3>Compliance Management</h3>
          <p>Navigating the convergence of global requirements (ISO 27001, SOC 2, GDPR) and local mandates like Uganda’s Data Protection and Privacy Act, Kenya’s Data Protection Act. We ensure your security architecture isn't just world class it’s locally compliant.</p>
        </div>
      </div>
    </div>
    <div class="tab-panel" id="tab-strategic">
      <div class="tab-grid">
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M17.5 9.5A5 5 0 007 10a4 4 0 000 8h10a3.5 3.5 0 100-7z"/>
              <path d="M12 13v4"/>
              <path d="M10.5 14.5l1.5-1.5 1.5 1.5"/>
            </svg>
          </div>
          <h3>Cloud Security</h3>
          <p>Securing workloads, identities, and data across AWS, Azure, and GCP.</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="9" y="10" width="6" height="8" rx="1"/>
              <path d="M7 10V7a5 5 0 0110 0v3"/>
              <path d="M11 14l1 1 2-2"/>
            </svg>
          </div>
          <h3>Zero Trust Architecture</h3>
          <p>Secure, resilient architectures applying Zero Trust principles across networks, identities, and cloud workloads for mid-market enterprises.</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="7" cy="7" r="2"/>
              <circle cx="17" cy="7" r="2"/>
              <circle cx="12" cy="17" r="2"/>
              <path d="M7 7l5 10"/>
              <path d="M17 7l-5 10"/>
              <path d="M7 7h10"/>
            </svg>
          </div>
          <h3>AI Application Security</h3>
          <p>Securing AI pipelines, LLM deployments, and ML infrastructure. Zero Trust for AI models access control, input and output validation, and model integrity checks.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,80 C360,20 1080,20 1440,80 L1440,0 L0,0 Z" fill="#f7f8fa"/>
  </svg>
</div>

<footer>
  <div class="container">
  <div class="footer-inner" style="padding: 0; max-width: none;">
    <div class="footer-grid">
      <div class="footer-col">
        <span class="logo">fuse<span class="logo-accent">-cec.io</span></span>
        <p class="footer-tag">Industrial-grade cybersecurity for mid-market enterprises.</p>
      </div>
      <div class="footer-col">
        <span class="footer-heading">Contact</span>
        <span class="footer-link">Kampala, Uganda</span>
        <span class="footer-link">hello@fuse-cec.io</span>
        <span class="footer-link">+256 700 000 000</span>
        <span class="footer-link">Mon-Fri 8am-6pm EAT</span>
      </div>
      <div class="footer-col">
        <span class="footer-heading">Services</span>
        <a href="#expertise" class="footer-link">Our Expertise</a>
        <a href="#solutions" class="footer-link">Security Solutions</a>
        <a href="#how-it-works" class="footer-link">How It Works</a>
        <a href="#retainer" class="footer-link">Retainer Model</a>
      </div>
      <div class="footer-col">
        <span class="footer-heading">Company</span>
        <a href="#philosophy" class="footer-link">About</a>
        <a href="#global" class="footer-link">Global Operations</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 fuse-cec.io. All rights reserved.</span>
      <span class="footer-legal">Privacy Policy | Terms of Service</span>
    </div>
  </div>
  </div>
</footer>
`

// ------ Tabs ------

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab')
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'))
    const panel = document.getElementById('tab-' + tabId)
    if (panel) panel.classList.add('active')
  })
})

// ------ Smooth scroll ------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault()
    const target = document.querySelector(anchor.getAttribute('href')!)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  })
})

// ------ Mobile nav toggle ------

const navToggle = document.querySelector<HTMLButtonElement>('.nav-toggle')
const navCenter = document.querySelector<HTMLDivElement>('.nav-center')
navToggle?.addEventListener('click', () => {
  navCenter?.classList.toggle('open')
  navToggle?.classList.toggle('open')
})
document.querySelectorAll('.nav-center a').forEach(link => {
  link.addEventListener('click', () => {
    navCenter?.classList.remove('open')
    navToggle?.classList.remove('open')
  })
})

// ------ Form submission ------

const contactForm = document.querySelector<HTMLFormElement>('#contact-form')
contactForm?.addEventListener('submit', async e => {
  e.preventDefault()
  const status = contactForm.querySelector<HTMLDivElement>('.form-status')!
  const btn = contactForm.querySelector<HTMLButtonElement>('button[type="submit"]')!
  const data = new FormData(contactForm)

  status.textContent = ''
  status.className = 'form-status'
  btn.disabled = true
  btn.textContent = 'Sending...'

  try {
    const res = await fetch('https://formspree.io/f/xqerbgkr', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' },
    })
    if (res.ok) {
      status.textContent = 'Thanks! We will get back to you within 24 hours.'
      status.classList.add('form-status-success')
      contactForm.reset()
    } else {
      status.textContent = 'Something went wrong. Please try again or email us directly.'
      status.classList.add('form-status-error')
    }
  } catch {
    status.textContent = 'Network error. Please try again.'
    status.classList.add('form-status-error')
  }

  btn.disabled = false
  btn.textContent = 'Send message'
})

// ------ Auto-detect phone country code ------

const dialCodes: Record<string, string> = {
  UG: '+256', KE: '+254', TZ: '+255', RW: '+250', BI: '+257', SS: '+211',
  US: '+1', GB: '+44', AE: '+971', SA: '+966', QA: '+974', ZA: '+27',
  NG: '+234', EG: '+20', IN: '+91', CN: '+86', JP: '+81', DE: '+49',
  FR: '+33', NL: '+31', AU: '+61', FI: '+358', SE: '+46', NO: '+47',
  DK: '+45', ES: '+34', IT: '+39', PT: '+351', CH: '+41', AT: '+43',
  BE: '+32', IE: '+353', PL: '+48', CZ: '+420', SK: '+421', HU: '+36',
  RO: '+40', BG: '+359', GR: '+30', TR: '+90', RU: '+7',
}

fetch('https://ipapi.co/json/')
  .then(r => r.json())
  .then(d => {
    const code = dialCodes[d.country] || '+256'
    const input = document.querySelector<HTMLInputElement>('input[name="phone"]')
    if (input && !input.value) input.placeholder = `Phone number (${code}...)`
  })
  .catch(() => {})
