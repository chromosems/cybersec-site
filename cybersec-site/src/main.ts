import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<nav>
  <div class="nav-inner">
    <a href="#hero" class="logo">fusecec<span class="logo-accent">.io</span></a>
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M12 21s-7-6-7-11a7 7 0 1114 0c0 5-7 11-7 11z"/>
          <path d="M12 14a4 4 0 100-8 4 4 0 000 8z"/>
          <circle cx="9" cy="7" r="1" fill="currentColor"/>
          <circle cx="15" cy="7" r="1" fill="currentColor"/>
          <circle cx="9" cy="13" r="1" fill="currentColor"/>
          <circle cx="15" cy="13" r="1" fill="currentColor"/>
          <path d="M10 8l-1 1M10 12l-1-1M14 8l1 1M14 12l1-1"/>
        </svg>
      </div>
      <h3>Local Context</h3>
      <p>We understand the East African threat landscape, regulatory environment, and business realities because we operate here.</p>
    </div>
    <div class="philosophy-card">
      <div class="philosophy-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <rect x="4" y="8" width="16" height="12" rx="2"/>
          <path d="M4 11h16"/>
          <path d="M8 8V6a4 4 0 118 0v2"/>
          <path d="M10 15l1.5 1.5L14 14"/>
        </svg>
      </div>
      <h3>Global Standards</h3>
      <p>Our methodologies align with industry frameworks built on real frontline experience and a deep understanding of global security standards.</p>
    </div>
    <div class="philosophy-card">
      <div class="philosophy-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M6 21a3 3 0 100-6 3 3 0 000 6z"/>
          <path d="M18 21a3 3 0 100-6 3 3 0 000 6z"/>
          <path d="M9 12h6"/>
          <path d="M7.5 15L9 12l-1.5-3"/>
          <path d="M16.5 9L15 12l1.5 3"/>
          <path d="M9 3h6l2 4.5H7L9 3z"/>
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
      <p>Specialised security assessments of AI/ML systems, LLM applications, and autonomous agents. Testing against the OWASP LLM Top 10: prompt injection, model poisoning, data leakage, and adversarial attacks across the AI stack.</p>
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
    <h2>Two weeks to a known environment.</h2>
    <p class="section-desc">We don't do pilots, proofs of concept, or discovery phases that stretch into quarters. Here's exactly how the first month looks.</p>
  </div>
  <div class="steps">
    <div class="step">
      <div class="step-number">01</div>
      <h3>The 45-minute audit</h3>
      <p>We sit down with your team and map your infrastructure, tooling, and risk surface. No slides, no demo: just a shared document and honest answers. By the end of the call, we know if we can help.</p>
    </div>
    <div class="step">
      <div class="step-number">02</div>
      <h3>We touch everything</h3>
      <p>Week one: agents deployed, SIEM connected, cloud configs reviewed, AI pipelines inventoried. We find what's exposed, what's misconfigured, and what's running unattended. You get a ranked list of what matters most.</p>
    </div>
    <div class="step">
      <div class="step-number">03</div>
      <h3>Monitoring goes live</h3>
      <p>Week two: SOC dashboards are up, alerts are routing to the right people, and your first pentest is on the calendar. You don't need to read a manual: we walk your team through what changed and why.</p>
    </div>
    <div class="step">
      <div class="step-number">04</div>
      <h3>You forget we're here</h3>
      <p>That's the goal. Monitoring runs, reports land in your inbox, and when something breaks, we're already on it. Quarterly reviews keep the roadmap sharp. You run your business; we run your security operations.</p>
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
    <h2>One number, one team, zero friction.</h2>
    <p class="section-desc">The retainer isn't a pricing scheme: it's the structural decision that makes partnership possible. No scopes, no change orders, no resetting context every engagement.</p>
  </div>
  <div class="retainer-grid">
    <div class="retainer-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
        <rect x="4" y="8" width="16" height="12" rx="1.5"/>
        <path d="M8 8V5a4 4 0 118 0v3"/>
        <path d="M16 14h1"/>
        <circle cx="12" cy="14" r="1.5" fill="currentColor"/>
      </svg>
      <h3>Your environment, already known</h3>
      <p>We don't start every call with "what's your setup?" We monitor it daily. When a threat hits, we're already inside your infrastructure, not dialling in from cold.</p>
    </div>
    <div class="retainer-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
        <path d="M12 2a16 16 0 00-8.5 14" stroke-dasharray="2 3"/>
        <path d="M12 2a16 16 0 018.5 14" stroke-dasharray="2 3"/>
        <path d="M3.5 16A16 16 0 0012 22a16 16 0 008.5-6"/>
        <circle cx="12" cy="5" r="2" fill="currentColor"/>
        <path d="M8 12l2.5 2.5L16 11"/>
      </svg>
      <h3>We eat our own cooking</h3>
      <p>Your risk profile is our dashboard. When your security posture improves, our retention renews. There's no incentive to drag work out: we succeed only when your attack surface shrinks.</p>
    </div>
    <div class="retainer-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
        <circle cx="8" cy="8" r="4"/>
        <circle cx="16" cy="16" r="4"/>
        <path d="M6 10l4 4"/>
        <path d="M14 14l4-4"/>
        <path d="M10 8h4"/>
        <path d="M12 10v4"/>
      </svg>
      <h3>Full scope, single thread</h3>
      <p>One retainer covers SOC monitoring, pentesting, risk assessment, compliance, and AI security. No separate vendors, no handoffs, no "that's out of scope" emails at 3 AM.</p>
    </div>
    <div class="retainer-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="24" height="24">
        <path d="M12 2l3 4 5 1-3 4 1 5-5-2-5 2 1-5-3-4 5-1 3-4z"/>
        <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
      </svg>
      <h3>Onboarding, baked in</h3>
      <p>Baseline assessment, agent deployment, SIEM configuration: it's all part of the first month, not a separate proposal. You pay one number from day one. No surprises because there's nothing to surprise you with.</p>
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 2l7 4v4a9 9 0 01-7 8 9 9 0 01-7-8V6l7-4z"/>
              <path d="M8 12l2.5 2.5L16 10"/>
            </svg>
          </div>
          <h3>Security Monitoring</h3>
          <p>SIEM Integration, Log Analysis, Real time Alerts, Threat Intelligence</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 3l-3 8h5l-2 8"/>
              <circle cx="12" cy="12" r="9"/>
              <path d="M9 12h6"/>
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="8"/>
              <circle cx="12" cy="12" r="3"/>
              <circle cx="12" cy="12" r="1" fill="currentColor"/>
              <path d="M20 20l-5-5"/>
              <path d="M4 4l5 5"/>
            </svg>
          </div>
          <h3>Penetration Testing</h3>
          <p>Proactive attack simulations to find and fix vulnerabilities before real attackers do.</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="6" r="2"/>
              <circle cx="6" cy="18" r="2"/>
              <circle cx="18" cy="18" r="2"/>
              <path d="M14 7l-2 2-2-2"/>
              <path d="M8 16l-1 1"/>
              <path d="M16 16l1 1"/>
              <path d="M7 8l7 8"/>
              <path d="M17 8l-7 8"/>
            </svg>
          </div>
          <h3>AI Penetration Testing</h3>
          <p>Specialised red-teaming of AI/ML systems mapped to the OWASP LLM Top 10: prompt injections, model extraction, training data poisoning, and adversarial robustness testing.</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M14 3l4 4v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1h7z"/>
              <path d="M8.5 10l2 2 3-3"/>
              <path d="M8.5 15l2 2 3-3"/>
            </svg>
          </div>
          <h3>Risk Assessment</h3>
          <p>Threat Modeling, Vulnerability Scanning, Asset Inventory, Risk Prioritization</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M5 12L9 4l5 8-5 8-4-8z"/>
              <path d="M9 4l5 8-5 8"/>
              <path d="M14 12h6"/>
              <path d="M16 9l-2 3 2 3"/>
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M17.5 10.5A5 5 0 007 11a4 4 0 000 7h10a3.5 3.5 0 10.5-6.5z"/>
              <rect x="10.5" y="12" width="4" height="3.5" rx="0.75"/>
              <path d="M12.5 12v-1a0.5 0.5 0 00-1 0v1"/>
            </svg>
          </div>
          <h3>Cloud Security</h3>
          <p>Securing workloads, identities, and data across AWS, Azure, and GCP.</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 3l7 4v5a9 9 0 01-7 8 9 9 0 01-7-8V7l7-4z"/>
              <path d="M12 3v17"/>
              <path d="M5 10l7 3 7-3"/>
            </svg>
          </div>
          <h3>Zero Trust Architecture</h3>
          <p>Secure, resilient architectures applying Zero Trust principles across networks, identities, and cloud workloads for mid-market enterprises.</p>
        </div>
        <div class="tab-card">
          <div class="tab-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <polygon points="12,2 22,7 22,17 12,22 2,17 2,7"/>
              <circle cx="12" cy="12" r="3"/>
              <circle cx="12" cy="6" r="1" fill="currentColor"/>
              <circle cx="7" cy="9" r="1" fill="currentColor"/>
              <circle cx="7" cy="15" r="1" fill="currentColor"/>
              <circle cx="12" cy="18" r="1" fill="currentColor"/>
              <circle cx="17" cy="15" r="1" fill="currentColor"/>
              <circle cx="17" cy="9" r="1" fill="currentColor"/>
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
        <span class="logo">fusecec<span class="logo-accent">.io</span></span>
        <p class="footer-tag">Industrial-grade cybersecurity for mid-market enterprises.</p>
      </div>
      <div class="footer-col">
        <span class="footer-heading">Contact</span>
        <span class="footer-link">Kampala, Uganda</span>
        <span class="footer-link">hello@fusecec.io</span>
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
      <span>&copy; 2026 fusecec.io. All rights reserved.</span>
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
