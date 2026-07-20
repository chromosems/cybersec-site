import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<nav>
  <div class="nav-inner">
    <a href="#hero" class="logo">fuse-cec<span class="logo-accent">.io</span></a>
    <div class="nav-center">
      <a href="#hero">Home</a>
      <a href="#philosophy">About</a>
      <a href="#expertise">Services</a>
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
      <h1>Built by Engineers.<br>Trusted by Teams.</h1>
      <p class="hero-sub">AI security, penetration testing, cloud architecture, and detection engineering for modern digital environments.</p>
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
            <option value="ai-security">AI Security & Adversarial Testing</option>
            <option value="ai-hardening">AI Application Hardening</option>
            <option value="penetration-testing">Penetration Testing (Network, Web, API, AD)</option>
            <option value="cloud-security">Cloud Security Architecture</option>
            <option value="devsecops">Security Automation & DevSecOps</option>
            <option value="detection-engineering">Detection Engineering & SIEM Optimization</option>
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
    <h2>Engineering driven cybersecurity.</h2>
    <p class="section-desc">fuse-cec.io is a cybersecurity engineering and consulting company specializing in AI security, penetration testing, cloud security, DevSecOps, detection engineering, and compliance across cloud and on-premise IT infrastructure. Our mission is to help organizations protect and harden existing environments while building secure, resilient, and compliant systems through engineering-driven security solutions.</p>
  </div>
  <div class="philosophy-cards">
    <div class="philosophy-card">
      <h3>Why Companies Choose Us</h3>
      <ul class="choose-list">
        <li><span class="choose-bullet"></span> Full spectrum coverage: AI to AD to cloud</li>
        <li><span class="choose-bullet"></span> Engineer led delivery</li>
        <li><span class="choose-bullet"></span> Offensive + defensive in one practice</li>
        <li><span class="choose-bullet"></span> Automation first approach</li>
        <li><span class="choose-bullet"></span> Compliance ready outcomes</li>
      </ul>
    </div>
    <div class="philosophy-card">
      <h3>What We Do</h3>
      <ul class="choose-list">
        <li><span class="choose-bullet"></span> AI Security & Adversarial Testing</li>
        <li><span class="choose-bullet"></span> AI Application Hardening</li>
        <li><span class="choose-bullet"></span> Penetration Testing (Network, Web, API, AD)</li>
        <li><span class="choose-bullet"></span> Cloud Security Architecture</li>
        <li><span class="choose-bullet"></span> Security Automation & DevSecOps</li>
        <li><span class="choose-bullet"></span> Detection Engineering & SIEM Optimization</li>
        <li><span class="choose-bullet"></span> Compliance & Governance</li>
      </ul>
      <p style="margin-top: 12px; font-size: 13px; color: var(--text);">Delivered as one integrated practice, not fragmented engagements.</p>
    </div>
    <div class="philosophy-card">
      <h3>Our Impact</h3>
      <p>We harden AI applications, close network and identity attack paths, reduce cloud misconfigurations, sharpen detection rules, automate security guardrails, and build compliance into every architecture. Delivering measurable risk reduction across the full attack surface.</p>
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
      <h3>AI Security & Adversarial Testing</h3>
      <p>We secure AI-driven applications against modern threats including prompt injection, model poisoning, jailbreak attacks, data leakage, and adversarial manipulation.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>AI model penetration testing</li>
          <li>LLM prompt injection testing</li>
          <li>AI supply chain security</li>
          <li>Secure model deployment guidance</li>
          <li>AI red teaming scenarios</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">02</div>
      <h3>AI Application Hardening</h3>
      <p>We help organizations build secure AI applications by integrating guardrails, monitoring, and safe execution controls into their AI workflows.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Secure LLM architecture design</li>
          <li>Safety guardrail implementation</li>
          <li>AI logging & monitoring setup</li>
          <li>Abuse detection and anomaly rules</li>
          <li>Secure API integration for AI systems</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">03</div>
      <h3>Penetration Testing (Network, Web, API, AD)</h3>
      <p>We perform comprehensive penetration testing across your entire environment: network infrastructure, web applications, APIs, and Active Directory.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Internal & external network penetration testing</li>
          <li>Web application security assessments</li>
          <li>API security testing (REST, GraphQL, microservices)</li>
          <li>Active Directory attack path analysis</li>
          <li>Exploitation, reporting, and remediation guidance</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">04</div>
      <h3>Cloud Security Architecture</h3>
      <p>Build secure by design cloud environments across Azure, GCP, and AWS with identity hardening, segmentation, and workload protection.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Cloud architecture reviews</li>
          <li>Identity & access hardening</li>
          <li>Key Vault / KMS security</li>
          <li>Network segmentation</li>
          <li>Secure workload deployment</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">05</div>
      <h3>Security Automation & DevSecOps</h3>
      <p>Accelerate development while improving security through automated guardrails and CI/CD pipeline hardening.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>CI/CD security</li>
          <li>GitHub Advanced Security integration</li>
          <li>IaC security (Terraform)</li>
          <li>Automated misconfiguration detection</li>
          <li>Policy-as-code implementation</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">06</div>
      <h3>Detection Engineering & SIEM Optimization</h3>
      <p>Enhance visibility and reduce response time with high fidelity detection rules and log coverage.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Sentinel & Splunk detection rules</li>
          <li>Threat hunting queries</li>
          <li>Log normalization</li>
          <li>Cloud API monitoring</li>
          <li>Identity anomaly detection</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">07</div>
      <h3>Compliance & Governance</h3>
      <p>Achieve and maintain compliance with clear, auditable controls and security documentation.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>GDPR alignment</li>
          <li>ISO 27001 / NIST control design</li>
          <li>Security Decision Records (SDRs)</li>
          <li>Policy development</li>
          <li>Governance frameworks</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
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
    <h2>How It Works</h2>
    <p class="section-desc">Our engagement model is simple, transparent, and designed to deliver measurable security outcomes.</p>
  </div>
  <div class="steps">
    <div class="step">
      <div class="step-number">01</div>
      <h3>Initial Consultation</h3>
      <p>We discuss your environment, challenges, and security goals.</p>
    </div>
    <div class="step">
      <div class="step-number">02</div>
      <h3>Assessment & Scoping</h3>
      <p>We define the scope, deliverables, timelines, and required access.</p>
    </div>
    <div class="step">
      <div class="step-number">03</div>
      <h3>Execution</h3>
      <p>Our engineers perform the agreed security work: architecture, testing, automation, or detection engineering.</p>
    </div>
    <div class="step">
      <div class="step-number">04</div>
      <h3>Reporting & Delivery</h3>
      <p>You receive detailed documentation, findings, diagrams, and remediation guidance.</p>
    </div>
    <div class="step">
      <div class="step-number">05</div>
      <h3>Support & Follow-Up</h3>
      <p>We help you implement improvements and strengthen long term security posture.</p>
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
    <span class="section-tag">RETAINER MODEL</span>
    <h2>Cybersecurity Retainer Model</h2>
    <p class="section-desc">Our retainer model gives your organization continuous access to our cybersecurity expertise, ensuring proactive protection, rapid response, and ongoing improvement of your cloud and security posture.</p>
  </div>
  <h3 class="retainer-subheading">What's Included</h3>
  <div class="retainer-single">
    <ul class="retainer-list">
      <li>Monthly cloud security reviews (Azure, GCP, AWS)</li>
      <li>Continuous detection engineering updates (Sentinel, Splunk)</li>
      <li>On-demand security consultation and advisory</li>
      <li>Threat monitoring and analysis</li>
      <li>Secure architecture guidance for new projects</li>
      <li>Support for DevSecOps, CI/CD, and automation workflows</li>
      <li>Documentation updates (SDRs, policies, governance)</li>
    </ul>
  </div>
  <h3 class="retainer-subheading">Why Choose a Retainer</h3>
  <div class="retainer-grid">
    <div class="retainer-card">
      <ul class="retainer-list">
        <li>Predictable monthly cost</li>
        <li>Faster response times</li>
        <li>Continuous improvement instead of one off fixes</li>
        <li>Access to senior cybersecurity engineers</li>
      </ul>
    </div>
    <div class="retainer-card">
      <ul class="retainer-list">
        <li>Reduced risk through proactive security</li>
        <li>Ideal for growing cloud environments</li>
        <li>Priority incident response</li>
        <li>Custom security roadmaps</li>
      </ul>
    </div>
  </div>
  <h3 class="retainer-subheading">Retainer Tiers</h3>
  <div class="retainer-grid-3">
    <div class="retainer-card">
      <div class="retainer-tier">Basic</div>
      <p>For small teams needing periodic guidance</p>
    </div>
    <div class="retainer-card">
      <div class="retainer-tier">Standard</div>
      <p>For organizations with active cloud workloads</p>
    </div>
    <div class="retainer-card">
      <div class="retainer-tier">Premium</div>
      <p>For companies requiring continuous support and rapid response</p>
    </div>
  </div>
  <div class="retainer-cta">
    <a href="#hero" class="btn-primary">Get Started</a>
    <p class="retainer-cta-text">Contact us to discuss which retainer tier fits your environment and security needs.</p>
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
      <p>Evaluated Code Scanning and Secret Scanning costs, privacy implications, and operational impact across the organization. Delivered with a cost benefit analysis and rollout roadmap.</p>
    </div>
    <div class="tab-card">
      <h3>Cloud Attack Path Simulation</h3>
      <p>Adversarial scenarios demonstrating privilege escalation and identity pivoting across multi cloud environments. Mapped to MITRE ATT&CK with prioritized remediation steps.</p>
    </div>
    <div class="tab-card">
      <h3>SIEM Detection Engineering Pack</h3>
      <p>Production ready KQL and SPL rules for identity anomalies, service principal abuse, privilege escalation, and suspicious cloud API calls. Includes test cases and tuning guidance.</p>
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
        <p class="footer-tag">Industrial grade cybersecurity for mid market enterprises.</p>
      </div>
      <div class="footer-col">
        <span class="footer-heading">Contact</span>
        <span class="footer-link">Kampala, Uganda</span>
        <span class="footer-link">info@fuse-cec.io</span>
        <span class="footer-link">Mon-Fri 8am-6pm EAT</span>
      </div>
      <div class="footer-col">
        <span class="footer-heading">Services</span>
        <a href="#expertise" class="footer-link">Services</a>
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

// ------ Read more toggles ------

document.querySelectorAll('.read-more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.expertise-card')
    const deliverables = card?.querySelector('.deliverables')
    if (!deliverables) return
    const isExpanded = deliverables.classList.contains('expanded')
    deliverables.classList.toggle('expanded')
    btn.textContent = isExpanded ? 'Read more' : 'Show less'
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
