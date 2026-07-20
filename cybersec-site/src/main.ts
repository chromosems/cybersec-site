import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<nav>
  <div class="nav-inner">
    <a href="#hero" class="logo">fuse-cec<span class="logo-accent">.io</span></a>
    <div class="nav-center">
      <a href="#hero">Home</a>
      <a href="#philosophy">About</a>
      <a href="#expertise">Expertise</a>
      <a href="#how-it-works">How It Works</a>
      <a href="#solutions">Deliverables</a>
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
      <p class="hero-sub">Secure-by-design cloud architectures, offensive security testing, and automated security engineering for modern digital environments.</p>
      <div class="hero-ctas">
        <a href="#expertise" class="btn-primary">Services</a>
        <a href="#hero" class="btn-outline">Contact Us</a>
      </div>
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
            <option value="cloud-security">Cloud Security Architecture</option>
            <option value="penetration-testing">Penetration Testing (Network, Web, AD, AI)</option>
            <option value="devsecops">Security Automation & DevSecOps</option>
            <option value="detection-engineering">Detection Engineering & SIEM</option>
            <option value="compliance">Compliance & Governance</option>
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
    <span class="section-tag">ABOUT US</span>
    <h2>Engineering-driven cybersecurity.</h2>
    <p class="section-desc">fuse-cec.io is a cybersecurity engineering and consulting company specializing in cloud security, offensive security, and security automation across Azure, GCP, and AWS. Our mission is to help organizations build secure, resilient, and compliant systems through engineering-driven security solutions.</p>
  </div>
  <div class="philosophy-cards">
    <div class="philosophy-card">
      <h3>Why Companies Choose Us</h3>
      <ul class="choose-list">
        <li><span class="choose-bullet"></span> Engineering-first approach</li>
        <li><span class="choose-bullet"></span> Cloud-native expertise</li>
        <li><span class="choose-bullet"></span> Offensive + defensive capability</li>
        <li><span class="choose-bullet"></span> Automation-focused</li>
        <li><span class="choose-bullet"></span> Compliance-ready</li>
      </ul>
    </div>
    <div class="philosophy-card">
      <h3>What We Do</h3>
      <p>Cloud security architecture, penetration testing (network, web, AD, AI), security automation and DevSecOps, detection engineering and SIEM, and compliance and governance. Delivered as one integrated practice, not fragmented engagements.</p>
    </div>
    <div class="philosophy-card">
      <h3>Our Impact</h3>
      <p>We reduce cloud misconfigurations, strengthen detection capabilities, improve compliance posture, and help organizations build resilient architectures that withstand real-world threats.</p>
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
      <h3>Cloud Security Architecture</h3>
      <p>Secure-by-design Azure, GCP, and AWS architectures, identity hardening, network segmentation, and workload protection.</p>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">02</div>
      <h3>Penetration Testing</h3>
      <p>Network, Active Directory, web application, and AI/LLM penetration testing. Realistic offensive assessments covering the full attack surface from external perimeter to cloud and AI pipelines.</p>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">03</div>
      <h3>Security Automation & DevSecOps</h3>
      <p>CI/CD pipeline hardening, GitHub Advanced Security integration, IaC security, and automated misconfiguration detection.</p>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">04</div>
      <h3>Detection Engineering & SIEM</h3>
      <p>Sentinel and Splunk rule development, log normalization, threat hunting, and security monitoring optimization.</p>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">05</div>
      <h3>Compliance & Governance</h3>
      <p>GDPR alignment, ISO 27001 and NIST control design, security decision records, and policy development.</p>
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
    <span class="section-tag">SAMPLE DELIVERABLES</span>
    <h2>What we produce.</h2>
    <p class="section-desc">Security decision records, assessment reports, detection packs, and attack simulations. Each deliverable is designed to be immediately actionable.</p>
  </div>
  <div class="tab-grid">
    <div class="tab-card">
      <h3>Azure Key Vault Public Access SDR</h3>
      <p>Secure architecture with compensating controls, logging, and conditional access. Includes a security decision record with threat model, risk assessment, and implementation guidance.</p>
    </div>
    <div class="tab-card">
      <h3>GitHub Advanced Security Assessment</h3>
      <p>Evaluated Code Scanning and Secret Scanning costs, privacy implications, and operational impact across the organization. Delivered with a cost-benefit analysis and rollout roadmap.</p>
    </div>
    <div class="tab-card">
      <h3>Cloud Attack Path Simulation</h3>
      <p>Adversarial scenarios demonstrating privilege escalation and identity pivoting across multi-cloud environments. Mapped to MITRE ATT&CK with prioritized remediation steps.</p>
    </div>
    <div class="tab-card">
      <h3>SIEM Detection Engineering Pack</h3>
      <p>Production-ready KQL and SPL rules for identity anomalies, service principal abuse, privilege escalation, and suspicious cloud API calls. Includes test cases and tuning guidance.</p>
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
        <span class="logo">fuse-cec<span class="logo-accent">.io</span></span>
        <p class="footer-tag">Industrial-grade cybersecurity for mid-market enterprises.</p>
      </div>
      <div class="footer-col">
        <span class="footer-heading">Contact</span>
        <span class="footer-link">Kampala, Uganda</span>
        <span class="footer-link">info@fuse-cec.io</span>
        <span class="footer-link">Mon-Fri 8am-6pm EAT</span>
      </div>
      <div class="footer-col">
        <span class="footer-heading">Services</span>
        <a href="#expertise" class="footer-link">Our Expertise</a>
        <a href="#solutions" class="footer-link">Deliverables</a>
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
