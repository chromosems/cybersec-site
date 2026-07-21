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
      <a href="#case-studies">Case Studies</a>
      <a href="#hero" class="nav-btn nav-btn-internal">Get a free consultation</a>
    </div>
    <a href="#hero" class="nav-btn nav-btn-external">Get a free consultation</a>
    <button class="nav-toggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<a href="#hero" class="skip-link">Skip to main content</a>

<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-visual">
    <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="hv-grad" x1="0" y1="0" x2="600" y2="600">
          <stop offset="0%" stop-color="#dc2626" stop-opacity="0.12"/>
          <stop offset="50%" stop-color="#dc2626" stop-opacity="0.03"/>
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.06"/>
        </linearGradient>
      </defs>
      <!-- Outer hexagon -->
      <path d="M300 40 L520 170 L520 430 L300 560 L80 430 L80 170 Z" stroke="url(#hv-grad)" stroke-width="1.5"/>
      <!-- Inner hexagon -->
      <path d="M300 100 L460 200 L460 400 L300 500 L140 400 L140 200 Z" stroke="url(#hv-grad)" stroke-width="1" opacity="0.6"/>
      <!-- Center shield shape -->
      <path d="M300 160 L380 210 L380 320 C380 380 300 420 300 420 C300 420 220 380 220 320 L220 210 Z" stroke="#dc2626" stroke-width="2" opacity="0.15"/>
      <!-- Cross lines -->
      <line x1="300" y1="40" x2="300" y2="160" stroke="#dc2626" stroke-width="1" opacity="0.1"/>
      <line x1="300" y1="420" x2="300" y2="560" stroke="#dc2626" stroke-width="1" opacity="0.1"/>
      <line x1="80" y1="170" x2="220" y2="210" stroke="#dc2626" stroke-width="1" opacity="0.1"/>
      <line x1="520" y1="170" x2="380" y2="210" stroke="#dc2626" stroke-width="1" opacity="0.1"/>
      <line x1="80" y1="430" x2="220" y2="320" stroke="#dc2626" stroke-width="1" opacity="0.1"/>
      <line x1="520" y1="430" x2="380" y2="320" stroke="#dc2626" stroke-width="1" opacity="0.1"/>
      <!-- Corner dots -->
      <circle cx="300" cy="40" r="3" fill="#dc2626" opacity="0.2"/>
      <circle cx="520" cy="170" r="3" fill="#dc2626" opacity="0.2"/>
      <circle cx="520" cy="430" r="3" fill="#dc2626" opacity="0.2"/>
      <circle cx="300" cy="560" r="3" fill="#dc2626" opacity="0.2"/>
      <circle cx="80" cy="430" r="3" fill="#dc2626" opacity="0.2"/>
      <circle cx="80" cy="170" r="3" fill="#dc2626" opacity="0.2"/>
      <!-- Inner nodes -->
      <circle cx="300" cy="210" r="2" fill="#f59e0b" opacity="0.25"/>
      <circle cx="220" cy="265" r="2" fill="#f59e0b" opacity="0.25"/>
      <circle cx="380" cy="265" r="2" fill="#f59e0b" opacity="0.25"/>
      <circle cx="300" cy="340" r="2" fill="#f59e0b" opacity="0.25"/>
      <!-- Network lines between nodes -->
      <line x1="300" y1="210" x2="220" y2="265" stroke="#dc2626" stroke-width="0.8" opacity="0.08"/>
      <line x1="300" y1="210" x2="380" y2="265" stroke="#dc2626" stroke-width="0.8" opacity="0.08"/>
      <line x1="220" y1="265" x2="300" y2="340" stroke="#dc2626" stroke-width="0.8" opacity="0.08"/>
      <line x1="380" y1="265" x2="300" y2="340" stroke="#dc2626" stroke-width="0.8" opacity="0.08"/>
    </svg>
  </div>
  <div class="hero-layout">
    <div class="hero-text animate-on-scroll">
      <h1>Built by Engineers.<br>Trusted by Teams.</h1>
      <p class="hero-sub">Data protection compliance, mobile money security, banking security, and penetration testing for East African organizations.</p>
      <p class="hero-trust">Serving engineering teams across East Africa and globally.</p>
    </div>
    <div class="hero-form-col animate-on-scroll">
      <div class="hero-form-card">
        <h3>How Can We Help?</h3>
        <p class="hero-form-sub">Tell us about your security needs and we'll get back to you within 24 hours.</p>
        <form id="contact-form" aria-label="Contact form">
          <label for="name" class="visually-hidden">Your name</label>
          <input id="name" type="text" name="name" placeholder="Your name" required minlength="2" autocomplete="name">
          <label for="email" class="visually-hidden">Email address</label>
          <input id="email" type="email" name="email" placeholder="Email address" required autocomplete="email">
          <label for="phone" class="visually-hidden">Phone number</label>
          <input id="phone" type="tel" name="phone" placeholder="Phone number" required pattern="[0-9+\-()\s]+" title="Numbers and phone characters only (+, -, parentheses)" inputmode="numeric">
          <label for="company" class="visually-hidden">Company</label>
          <input id="company" type="text" name="company" placeholder="Company" required autocomplete="organization">
          <label for="service" class="visually-hidden">How we can help you</label>
          <select id="service" name="service" class="hero-form-select" required>
            <option value="" disabled selected>How we can help you</option>
            <option value="compliance">Uganda Data Protection Act 2019 Compliance</option>
            <option value="mobile-money">Mobile Money & USSD Security</option>
            <option value="fintech-banking">Fintech & Banking Security (BOU Compliance)</option>
            <option value="penetration-testing">Penetration Testing (Network, Web, API)</option>
            <option value="cloud-security">Cloud Security for African SMEs</option>
            <option value="monitoring">Security Monitoring & Alerting</option>
            <option value="incident-response">Incident Response & Recovery</option>
            <option value="other">Other</option>
          </select>
          <label for="message" class="visually-hidden">Tell us about your security needs</label>
          <textarea id="message" name="message" placeholder="Tell us about your security needs..." rows="3" required></textarea>
          <button type="submit" class="btn-primary">
            <span class="btn-text">Send message</span>
            <svg class="btn-spinner" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
          </button>
          <div class="form-status" role="alert" aria-live="polite"></div>
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

<section id="philosophy" class="section-light animate-on-scroll">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">ABOUT US</span>
    <h2>Engineering-driven cybersecurity.</h2>
    <p class="section-desc">fuse-cec.io is a cybersecurity engineering and consulting company based in Kampala, Uganda. We specialize in data protection compliance, mobile money security, banking security aligned with Bank of Uganda guidelines, penetration testing, cloud security, and incident response for East African organizations. Our mission is to help organizations protect sensitive data, secure financial systems, and meet local regulatory requirements through engineering-driven security solutions.</p>
  </div>
  <div class="philosophy-cards animate-on-scroll">
    <div class="philosophy-card">
      <h3>Why Companies Choose Us</h3>
      <ul class="choose-list">
        <li><span class="choose-bullet"></span> Deep expertise in Uganda's regulatory landscape</li>
        <li><span class="choose-bullet"></span> Mobile money & fintech security specialists</li>
        <li><span class="choose-bullet"></span> Offensive + defensive in one practice</li>
        <li><span class="choose-bullet"></span> Practical solutions for East African budgets</li>
        <li><span class="choose-bullet"></span> Compliance-ready outcomes</li>
      </ul>
    </div>
    <div class="philosophy-card">
      <h3>What We Do</h3>
      <ul class="choose-list">
        <li><span class="choose-bullet"></span> Uganda Data Protection Act 2019 Compliance</li>
        <li><span class="choose-bullet"></span> Mobile Money & USSD Security</li>
        <li><span class="choose-bullet"></span> Fintech & Banking Security (BOU Compliance)</li>
        <li><span class="choose-bullet"></span> Penetration Testing (Network, Web, API)</li>
        <li><span class="choose-bullet"></span> Cloud Security for African SMEs</li>
        <li><span class="choose-bullet"></span> Security Monitoring & Alerting</li>
        <li><span class="choose-bullet"></span> Incident Response & Recovery</li>
      </ul>
      <p style="margin-top: 12px; font-size: 13px; color: var(--text);">Delivered as one integrated practice, not fragmented engagements.</p>
    </div>
    <div class="philosophy-card">
      <h3>Our Impact</h3>
      <p>We help organizations comply with the Uganda Data Protection Act, secure mobile money platforms against fraud, meet Bank of Uganda cybersecurity guidelines, close network and identity attack paths, reduce cloud misconfigurations, build practical security monitoring, and respond to incidents fast, delivering measurable risk reduction across the full attack surface.</p>
    </div>
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,80 C360,20 1080,20 1440,80 L1440,0 L0,0 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="expertise" class="animate-on-scroll">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">OUR EXPERTISE</span>
    <h2>Security services built for Uganda.</h2>
    <p class="section-desc">We focus on the threats and regulations that matter to East African organizations, from mobile money platforms to Bank of Uganda compliance.</p>
  </div>
  <div class="expertise-grid animate-on-scroll">
    <div class="expertise-card">
      <div class="expertise-number">01</div>
      <h3>Uganda Data Protection Act 2019 Compliance</h3>
      <p>Help your organization comply with Uganda's Data Protection and Privacy Act 2019. We build data inventories, consent frameworks, breach response plans, and documentation to meet Data Protection Office requirements.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Data mapping & inventory</li>
          <li>Consent mechanism audit</li>
          <li>Breach notification procedures</li>
          <li>DPO documentation & registration support</li>
          <li>Compliance gap assessment</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">02</div>
      <h3>Mobile Money & USSD Security</h3>
      <p>Secure mobile money platforms, USSD applications, and payment APIs against fraud, replay attacks, session hijacking, and agent network exploitation. Critical for fintechs, banks, and mobile network operators in East Africa.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>USSD session security testing</li>
          <li>Mobile money API penetration testing</li>
          <li>Agent network security review</li>
          <li>Fraud vector analysis</li>
          <li>PIN and OTP bypass testing</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">03</div>
      <h3>Fintech & Banking Security (BOU Compliance)</h3>
      <p>Penetration testing and security assessments aligned with Bank of Uganda cybersecurity guidelines. Covering core banking systems, ATM networks, digital channels, and third-party integrations.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Core banking system assessment</li>
          <li>ATM network security review</li>
          <li>Digital channel penetration testing</li>
          <li>SWIFT integration security</li>
          <li>BOU compliance gap analysis</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">04</div>
      <h3>Penetration Testing (Network, Web, API)</h3>
      <p>Comprehensive offensive security testing across your infrastructure. Internal and external networks, web applications, APIs, and Active Directory environments.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Internal & external network pentesting</li>
          <li>Web application security assessment</li>
          <li>API security testing (REST, GraphQL)</li>
          <li>Active Directory attack path analysis</li>
          <li>Remediation roadmap</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">05</div>
      <h3>Cloud Security for African SMEs</h3>
      <p>Secure cloud environments across AWS, Azure, and GCP with identity hardening, network segmentation, and data protection designed for resource-conscious but security-aware organizations.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Cloud architecture review</li>
          <li>Identity & access hardening</li>
          <li>Data encryption configuration</li>
          <li>Network segmentation</li>
          <li>Backup & recovery security</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">06</div>
      <h3>Security Monitoring & Alerting</h3>
      <p>Set up practical security monitoring without enterprise-grade budgets. Log collection, alerting rules, and notification workflows that catch real threats without drowning your team in noise.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Log source configuration</li>
          <li>Alerting rule development</li>
          <li>Email/Slack notification setup</li>
          <li>False-positive tuning</li>
          <li>Monthly alert review & optimization</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">07</div>
      <h3>Incident Response & Recovery</h3>
      <p>Rapid response when security incidents occur. Containment, forensics, eradication, and recovery support to minimize damage and restore operations quickly.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Incident containment & triage</li>
          <li>Digital forensics & evidence preservation</li>
          <li>Root cause analysis</li>
          <li>Recovery & restoration guidance</li>
          <li>Post-incident hardening recommendations</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,0 C360,60 1080,60 1440,0 L1440,80 L0,80 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="advanced" class="section-light animate-on-scroll">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">ADVANCED CAPABILITIES</span>
    <h2>Global-grade expertise.</h2>
    <p class="section-desc">For organizations with mature security programs or international operations, we bring advanced capabilities in AI security, automation, and enterprise-grade detection engineering.</p>
  </div>
  <div class="expertise-grid animate-on-scroll">
    <div class="expertise-card">
      <div class="expertise-number">01</div>
      <h3>AI Security & Adversarial Testing</h3>
      <p>We secure AI-driven applications against modern threats including prompt injection, model poisoning, jailbreak attacks, data leakage, and adversarial manipulation. Our engineers test AI pipelines end-to-end to ensure your AI systems remain safe, reliable, and compliant.</p>
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
      <div class="expertise-number">04</div>
      <h3>Enterprise SIEM Optimization</h3>
      <p>Enhance visibility and reduce response time with high-fidelity detection rules and log coverage using enterprise-grade platforms.</p>
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
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,80 C360,20 1080,20 1440,80 L1440,0 L0,0 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="how-it-works" class="section-light animate-on-scroll">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">HOW IT WORKS</span>
    <h2>How It Works</h2>
    <p class="section-desc">Our engagement model is simple, transparent, and designed to deliver measurable security outcomes.</p>
  </div>
  <div class="steps animate-on-scroll">
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
      <p>Our engineers perform the agreed-upon security work: architecture, testing, automation, or detection engineering.</p>
    </div>
    <div class="step">
      <div class="step-number">04</div>
      <h3>Reporting & Delivery</h3>
      <p>You receive detailed documentation, findings, diagrams, and remediation guidance.</p>
    </div>
    <div class="step">
      <div class="step-number">05</div>
      <h3>Support & Follow-Up</h3>
      <p>We help you implement improvements and strengthen long-term security posture.</p>
    </div>
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,80 C360,20 1080,20 1440,80 L1440,0 L0,0 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="retainer" class="animate-on-scroll">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">RETAINER MODEL</span>
    <h2>Cybersecurity Retainer Model</h2>
    <p class="section-desc">Our retainer model provides continuous access to our cybersecurity expertise, ensuring proactive protection, rapid response, and ongoing improvement of your cloud, mobile money, and enterprise security posture. Prefer a one-time engagement? All services are available as standalone projects too.</p>
  </div>
  <h3 class="retainer-subheading">Retainer Tiers</h3>
  <p class="section-desc" style="text-align: center; margin-bottom: 8px; max-width: 640px; margin-left: auto; margin-right: auto;">Every retainer includes twice-yearly penetration testing with scope tailored to your environment.</p>
  <div class="retainer-grid-3 animate-on-scroll">
    <div class="retainer-card">
      <div class="retainer-tier">Basic</div>
      <ul class="retainer-tier-list">
        <li>Quarterly cloud security review, 1 environment</li>
        <li>Monthly security monitoring</li>
        <li>Data Protection Act gap assessment</li>
        <li>Remote incident response advisory</li>
        <li>Email support, 24-hour response</li>
      </ul>
    </div>
    <div class="retainer-card retainer-recommended">
      <div class="retainer-badge">Recommended</div>
      <div class="retainer-tier">Standard</div>
      <ul class="retainer-tier-list">
        <li>Monthly cloud security review, up to 3 environments</li>
        <li>Monthly security monitoring + tuning</li>
        <li>Data Protection Act quarterly review</li>
        <li>Mobile money API review once yearly</li>
        <li>Remote incident response included</li>
        <li>Slack + email support, 8-hour response</li>
      </ul>
    </div>
    <div class="retainer-card">
      <div class="retainer-tier">Premium</div>
      <ul class="retainer-tier-list">
        <li>Bi-weekly cloud security review, unlimited environments</li>
        <li>Continuous security monitoring + weekly tuning</li>
        <li>Data Protection Act ongoing + BOU alignment</li>
        <li>Quarterly mobile money and USSD testing</li>
        <li>Full incident response, on-site in Kampala</li>
        <li>Dedicated engineer, 4-hour response</li>
      </ul>
    </div>
  </div>
  <div class="retainer-cta">
    <a href="#hero" class="btn-primary">Get Started</a>
    <p class="retainer-cta-text">Contact us to discuss which retainer tier fits your organization, regulatory requirements, and security needs.</p>
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,0 C360,60 1080,60 1440,0 L1440,80 L0,80 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="case-studies" class="section-light animate-on-scroll">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">CASE STUDIES</span>
    <h2>Real engagements across East Africa.</h2>
    <p class="section-desc">Selected engagements that demonstrate how we help Ugandan and East African organizations improve their security posture and meet regulatory requirements.</p>
  </div>
  <div class="cases-grid animate-on-scroll">
    <div class="case-card case-ai">
      <span class="case-tag">Mobile Money Security</span>
      <h3>Mobile Money API Security for Ugandan Fintech</h3>
      <p>A Kampala-based fintech processing mobile money transactions for 50,000+ users suspected their API had vulnerabilities that could enable fraud. We performed API penetration testing, USSD session analysis, and agent network security review to identify attack vectors specific to East African mobile money infrastructure.</p>
      <p class="case-impact">Three critical API vulnerabilities patched, USSD session fixation resolved, agent authentication strengthened, saving an estimated UGX 120M in potential fraud losses.</p>
    </div>
    <div class="case-card case-pentest">
      <span class="case-tag">Banking Security</span>
      <h3>Core Banking Assessment for Ugandan Microfinance</h3>
      <p>A microfinance institution with 15 branches needed to meet Bank of Uganda cybersecurity guidelines before their annual audit. We assessed their core banking system, ATM network, digital channels, and third-party integrations for security gaps and compliance violations.</p>
      <p class="case-impact">Eight BOU compliance gaps closed, ATM network segmented from core systems, digital channel encryption upgraded, audit passed without findings.</p>
    </div>
    <div class="case-card case-siem">
      <span class="case-tag">Security Monitoring</span>
      <h3>Monitoring Setup for Ugandan NGO Cloud Migration</h3>
      <p>A health-focused NGO migrating patient data to AWS had no visibility into their cloud environment. We set up practical security monitoring with log collection, alerting rules, and Slack notifications tuned for their limited IT team and budget.</p>
      <p class="case-impact">Security monitoring active across 12 AWS services, 8 alerting rules deployed, mean incident awareness time reduced from days to under 30 minutes.</p>
    </div>
    <div class="case-card case-cloud">
      <span class="case-tag">Data Protection</span>
      <h3>Data Protection Act Compliance for Kampala Health Tech</h3>
      <p>A health technology startup collecting patient data needed to comply with the Uganda Data Protection and Privacy Act 2019 before launching their platform. We performed a data protection assessment, built their data inventory, and created breach response procedures.</p>
      <p class="case-impact">Full data inventory completed, consent framework implemented, breach response plan documented, Data Protection Office registration submitted successfully.</p>
    </div>
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,80 C360,20 1080,20 1440,80 L1440,0 L0,0 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="cta" class="cta-band animate-on-scroll">
  <div class="container">
    <div class="cta-content">
      <h2>Ready to harden your security?</h2>
      <p>Get a free consultation. We respond within 24 hours.</p>
      <a href="#hero" class="btn-primary">Get Started</a>
    </div>
  </div>
</section>

<footer>
  <div class="container">
  <div class="footer-inner" style="padding: 0; max-width: none;">
    <div class="footer-grid">
      <div class="footer-col">
        <span class="logo">fuse-cec<span class="logo-accent">.io</span></span>
        <p class="footer-tag">Industrial-grade cybersecurity for East African organizations.</p>
      </div>
      <div class="footer-col">
        <span class="footer-heading">Contact</span>
        <span class="footer-link">Kampala, Uganda</span>
        <span class="footer-link">info@fuse-cec.io</span>
      </div>
      <div class="footer-col">
        <span class="footer-heading">Services</span>
        <a href="#expertise" class="footer-link">Services</a>
        <a href="#how-it-works" class="footer-link">How It Works</a>
        <a href="#case-studies" class="footer-link">Case Studies</a>
        <a href="#retainer" class="footer-link">Retainer Model</a>
      </div>
      <div class="footer-col">
        <span class="footer-heading">Company</span>
        <a href="#philosophy" class="footer-link">About</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 fuse-cec.io. All rights reserved.</span>
      <span class="footer-legal">Built in Kampala, Uganda</span>
    </div>
  </div>
  </div>
</footer>

<button class="back-to-top" aria-label="Back to top" title="Back to top">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
</button>
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

// ------ Sticky nav + scroll spy + back-to-top ------

const nav = document.querySelector('nav')
const backToTop = document.querySelector<HTMLButtonElement>('.back-to-top')
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-center a[href^="#"]')
const sections = document.querySelectorAll<HTMLElement>('section[id]')

// Sticky nav scrolled state
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60
  nav?.classList.toggle('nav-scrolled', scrolled)
  backToTop?.classList.toggle('visible', scrolled)
})

// Back to top
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// Scroll spy
const observerOptions = { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id')
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
      })
    }
  })
}, observerOptions)

sections.forEach(section => observer.observe(section))

// ------ Scroll animations ------

const animObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      animObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

document.querySelectorAll('.animate-on-scroll').forEach(el => animObserver.observe(el))

// ------ Form submission ------

const contactForm = document.querySelector<HTMLFormElement>('#contact-form')
contactForm?.addEventListener('submit', async e => {
  e.preventDefault()
  const status = contactForm.querySelector<HTMLDivElement>('.form-status')!
  const btn = contactForm.querySelector<HTMLButtonElement>('button[type="submit"]')!
  const btnText = btn.querySelector<HTMLSpanElement>('.btn-text')!
  const data = new FormData(contactForm)

  status.textContent = ''
  status.className = 'form-status'
  btn.disabled = true
  btnText.textContent = 'Sending...'

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
      if (typeof gtag !== 'undefined') {
        gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        })
      }
    } else {
      status.textContent = 'Something went wrong. Please try again or email us directly.'
      status.classList.add('form-status-error')
    }
  } catch {
    status.textContent = 'Network error. Please try again.'
    status.classList.add('form-status-error')
  }

  btn.disabled = false
  btnText.textContent = 'Send message'
})

// Phone placeholder with default East Africa code
const phoneInput = document.querySelector<HTMLInputElement>('input[name="phone"]')
if (phoneInput) phoneInput.placeholder = 'Phone number (+256...)'
