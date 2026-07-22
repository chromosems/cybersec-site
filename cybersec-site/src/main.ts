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
      <a href="#advanced">Advanced</a>
      <a href="#faq">FAQ</a>
      <a href="#how-it-works">How It Works</a>
      <a href="#case-studies">Case Studies</a>
      <a href="#hero" class="nav-btn nav-btn-internal">Book free assessment</a>
    </div>
    <a href="#hero" class="nav-btn nav-btn-external">Book free assessment</a>
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
      <p class="hero-sub">Enterprise cybersecurity for East Africa. We deliver adversarial testing, cloud defense, data protection compliance, and incident response as a single, integrated practice.</p>
      <p class="hero-trust">Headquartered in Kampala. Operating across East Africa.</p>
    </div>
    <div class="hero-form-col animate-on-scroll">
      <div class="hero-form-card">
        <h3>How Can We Help?</h3>
        <p class="hero-form-sub">Book your free security posture assessment. We respond within 24 hours.</p>
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
            <option value="compliance">Data Protection & Compliance (DPA 2019 / ISO 27001)</option>
            <option value="mobile-money">Mobile Money & USSD Security</option>
            <option value="fintech-banking">Fintech & Banking Security (BOU Compliance)</option>
            <option value="penetration-testing">Penetration Testing (Network, Web, API)</option>
            <option value="cloud-security">Cloud Security for African SMEs</option>
            <option value="monitoring">Security Monitoring & Alerting</option>
            <option value="incident-response">Incident Response & Recovery</option>
            <option value="other">Other</option>
          </select>
          <label for="company-size" class="visually-hidden">Company size (optional)</label>
          <select id="company-size" name="company-size" class="hero-form-select">
            <option value="" disabled selected>Company size (optional)</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="500+">500+ employees</option>
          </select>
          <label for="security-maturity" class="visually-hidden">Current security maturity (optional)</label>
          <select id="security-maturity" name="security-maturity" class="hero-form-select">
            <option value="" disabled selected>Current security maturity (optional)</option>
            <option value="none">No formal security program</option>
            <option value="basic">Basic controls (firewall, antivirus)</option>
            <option value="mature">Mature program with monitoring</option>
          </select>
          <label for="timeline" class="visually-hidden">Timeline (optional)</label>
          <select id="timeline" name="timeline" class="hero-form-select">
            <option value="" disabled selected>When do you need this? (optional)</option>
            <option value="urgent">Urgent (within 2 weeks)</option>
            <option value="1-3-months">1-3 months</option>
            <option value="planning">Planning ahead (3+ months)</option>
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
    <p class="section-desc">fuse-cec.io is a cybersecurity engineering and consulting company based in Kampala, Uganda. We specialize in penetration testing, cloud security engineering, data protection compliance, mobile money security, banking security aligned with Bank of Uganda guidelines, and incident response for East African organizations. Our mission is to help organizations protect sensitive data, secure financial systems, and meet local regulatory requirements through engineering-driven security solutions.</p>
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
        <li><span class="choose-bullet"></span> Penetration Testing (Network, Web, API)</li>
        <li><span class="choose-bullet"></span> Cloud Security for African SMEs</li>
        <li><span class="choose-bullet"></span> Data Protection & Compliance (DPA 2019, ISO 27001, NIST)</li>
        <li><span class="choose-bullet"></span> Mobile Money & USSD Security</li>
        <li><span class="choose-bullet"></span> Fintech & Banking Security (BOU Compliance)</li>
        <li><span class="choose-bullet"></span> Security Monitoring & Alerting</li>
        <li><span class="choose-bullet"></span> Incident Response & Recovery</li>
      </ul>
      <p style="margin-top: 12px; font-size: 13px; color: var(--text);">Delivered as one integrated practice, not fragmented engagements.</p>
    </div>
    <div class="philosophy-card">
      <h3>Our Impact</h3>
      <p>We help organizations reduce security risk, achieve regulatory compliance, and build customer trust. Whether it is passing a Bank of Uganda audit, protecting mobile money transactions, or responding to a breach, we deliver measurable security outcomes that protect your business.</p>
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
      <h3>Mobile Money & USSD Security</h3>
      <p>We secure mobile money platforms, USSD applications, and payment APIs against fraud, replay attacks, session hijacking, and agent network exploitation. Deep expertise in Uganda's MTN Mobile Money and Airtel Money ecosystems, including aggregator APIs and agent network risks.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>USSD session security testing</li>
          <li>MTN & Airtel Money API penetration testing</li>
          <li>Aggregator & third-party integration review</li>
          <li>Agent network security review</li>
          <li>Fraud vector analysis</li>
          <li>PIN and OTP bypass testing</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">02</div>
      <h3>Fintech & Banking Security (BOU Compliance)</h3>
      <p>Penetration testing and security assessments aligned with Bank of Uganda cybersecurity guidelines. Covering core banking systems, SACCOs, Microfinance Deposit-taking Institutions (MDIs), ATM networks, digital channels, and third-party integrations.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Core banking system assessment</li>
          <li>SACCO & MDI security review</li>
          <li>ATM network security review</li>
          <li>Digital channel penetration testing</li>
          <li>Mobile money aggregator & API security</li>
          <li>BOU compliance gap analysis</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">03</div>
      <h3>Data Protection & Compliance</h3>
      <p>Align your organization with Uganda's Data Protection and Privacy Act 2019, supported by NITA-U guidance, ISO 27001, NIST Cybersecurity Framework, and CIS Controls. We build data inventories, consent frameworks, breach response plans, and documentation to meet Personal Data Protection Office requirements.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Data mapping & inventory per DPA 2019</li>
          <li>Consent mechanism audit</li>
          <li>Breach notification procedures</li>
          <li>PDPO documentation & NITA-U registration support</li>
          <li>ISO 27001 gap assessment & roadmap</li>
          <li>NIST CSF & CIS Controls alignment</li>
          <li>Compliance gap assessment</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">04</div>
      <h3>Penetration Testing & Vulnerability Management</h3>
      <p>Comprehensive offensive security testing and ongoing vulnerability management across your infrastructure. We find weaknesses through penetration testing of networks, web applications, and APIs, then track and manage vulnerabilities to ensure they are resolved.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Internal & external network pentesting</li>
          <li>Web application security assessment</li>
          <li>API security testing (REST, GraphQL)</li>
          <li>Active Directory attack path analysis</li>
          <li>Ongoing vulnerability scanning & tracking</li>
          <li>Remediation roadmap with prioritization</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">05</div>
      <h3>Cloud Security for African SMEs</h3>
      <p>Secure cloud and hybrid environments across AWS, Azure, and GCP — plus on-premise setups — with identity hardening, network segmentation, and data protection designed for resource-conscious but security-aware organizations.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Cloud & hybrid architecture review</li>
          <li>On-premise security assessment</li>
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
      <h3>Security Operations & Incident Response</h3>
      <p>Practical security monitoring, alerting, and rapid incident response — without enterprise-grade budgets. Log collection, alerting rules, and notification workflows that catch real threats, plus containment, forensics, and recovery when incidents occur.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Log source configuration</li>
          <li>Alerting rule development</li>
          <li>Email & Microsoft Teams notification setup</li>
          <li>False-positive tuning</li>
          <li>Incident containment & triage</li>
          <li>Digital forensics & evidence preservation</li>
          <li>Root cause analysis</li>
          <li>Recovery & restoration guidance</li>
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
    <h2>For mature security programs.</h2>
    <p class="section-desc">Advanced services for organizations that have covered the fundamentals and need deeper offensive testing, automated defense, or AI-specific security. Engaged as standalone deep-dives or alongside our primary services.</p>
  </div>
  <div class="expertise-grid animate-on-scroll">
    <div class="expertise-card">
      <div class="expertise-number">01</div>
      <h3>Security Automation & DevSecOps</h3>
      <p>Automated security guardrails integrated into development pipelines. CI/CD hardening, infrastructure-as-code scanning, and policy enforcement without slowing delivery.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>CI/CD pipeline security review</li>
          <li>GitHub Advanced Security integration</li>
          <li>IaC scanning (Terraform, CloudFormation)</li>
          <li>Automated misconfiguration detection</li>
          <li>Policy-as-code implementation</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">02</div>
      <h3>Enterprise SIEM & Detection Engineering</h3>
      <p>High-fidelity detection rules, log coverage optimization, and threat hunting queries tuned for East African threat landscapes. Practical SIEM tuning without enterprise bloat.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>Sentinel & Splunk detection rules</li>
          <li>Threat hunting query development</li>
          <li>Log source normalization</li>
          <li>Cloud API activity monitoring</li>
          <li>Identity anomaly detection</li>
        </ul>
      </div>
      <button class="read-more-btn">Read more</button>
    </div>
    <div class="expertise-card">
      <div class="expertise-number">03</div>
      <h3>AI Security & Adversarial Testing</h3>
      <p>Security testing for AI-driven applications. Prompt injection, model poisoning, jailbreak attacks, and supply chain risks. Testing and hardening in one engagement.</p>
      <div class="deliverables">
        <span class="deliverables-heading">What we deliver:</span>
        <ul>
          <li>LLM prompt injection & jailbreak testing</li>
          <li>AI model penetration testing</li>
          <li>AI supply chain security review</li>
          <li>Secure model deployment architecture</li>
          <li>Safety guardrail implementation</li>
          <li>AI abuse detection & monitoring rules</li>
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
    <h2>From discovery to verified remediation.</h2>
    <p class="section-desc">We do not hand over a PDF and disappear. Our engineers work alongside your team to find vulnerabilities, fix them, and verify the fixes. Available as a one-time engagement or an ongoing retainer.</p>
  </div>
  <div class="steps animate-on-scroll">
    <div class="step">
      <div class="step-number">01</div>
      <h3>Discovery</h3>
      <p>We assess your current security posture, map your attack surface, and identify compliance gaps. You get a clear picture of where you stand before any work begins.</p>
    </div>
    <div class="step">
      <div class="step-number">02</div>
      <h3>Scoping</h3>
      <p>We agree on exact scope, timelines, and deliverables. Project or retainer — your choice. No scope creep, no surprise invoices.</p>
    </div>
    <div class="step">
      <div class="step-number">03</div>
      <h3>Testing & Engineering</h3>
      <p>Our engineers perform the work: adversarial testing, cloud hardening, compliance build-out, or detection engineering. You receive daily progress updates.</p>
    </div>
    <div class="step">
      <div class="step-number">04</div>
      <h3>Remediation Support</h3>
      <p>We work hand-in-hand with your IT team to patch findings, harden configurations, and close security gaps. Not just advice — hands-on implementation.</p>
    </div>
    <div class="step">
      <div class="step-number">05</div>
      <h3>Verification & Delivery</h3>
      <p>We re-test fixed vulnerabilities to confirm closure. You receive a board-ready report with ranked findings, evidence, and verified remediation status.</p>
    </div>
    <div class="step">
      <div class="step-number">06</div>
      <h3>Ongoing Posture Management</h3>
      <p>For retainer clients: continuous monitoring, monthly reviews, and proactive defense improvements. Your security posture stays current as threats evolve.</p>
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
    <p class="section-desc">Our retainer model provides continuous access to our cybersecurity expertise, ensuring proactive protection, rapid response, and ongoing improvement of your cloud infrastructure, mobile money platforms, and enterprise security posture. Prefer a one-time engagement? All services are available as standalone projects too.</p>
  </div>
  <h3 class="retainer-subheading">Retainer Tiers</h3>
  <div class="retainer-grid-3 animate-on-scroll">
    <div class="retainer-card">
      <div class="retainer-tier">Basic</div>
      <p class="retainer-for">Best for small teams getting started with security</p>
      <ul class="retainer-tier-list">
        <li>Quarterly cloud security review</li>
        <li>Security monitoring setup + continuous log collection</li>
        <li>Annual focused assessment (web app or network)</li>
        <li>Vulnerability tracking dashboard</li>
        <li>1-time mobile money / USSD testing</li>
        <li>Security awareness guidance</li>
        <li>Monthly security report</li>
        <li>Email support, 24-hour response</li>
      </ul>
    </div>
    <div class="retainer-card retainer-recommended">
      <div class="retainer-badge">Recommended</div>
      <div class="retainer-tier">Standard</div>
      <p class="retainer-for">Best for growing organizations with active infrastructure</p>
      <ul class="retainer-tier-list">
        <li>Monthly cloud security review</li>
        <li>Monthly security monitoring + tuning</li>
        <li>Twice-yearly moderate scope pentest</li>
        <li>Vulnerability remediation tracking</li>
        <li>DPA 2019 + ISO 27001 review twice yearly</li>
        <li>BOU compliance guidance</li>
        <li>Mobile money / USSD testing once yearly</li>
        <li>Remote incident response (up to 20 hrs/year)</li>
        <li>Quarterly executive summary</li>
        <li>Microsoft Teams + email, 8-hour response</li>
      </ul>
    </div>
    <div class="retainer-card">
      <div class="retainer-tier">Premium</div>
      <p class="retainer-for">Best for regulated organizations requiring continuous coverage</p>
      <ul class="retainer-tier-list">
        <li>Bi-weekly cloud security review</li>
        <li>Continuous monitoring + monthly tuning</li>
        <li>Quarterly full-scope penetration testing</li>
        <li>Active vulnerability management & remediation</li>
        <li>DPA 2019 + ISO 27001 + full BOU compliance</li>
        <li>Quarterly mobile money / USSD testing</li>
        <li>Full incident response, on-site Kampala (unlimited)</li>
        <li>Fractional security engineer, up to 40 hrs/month dedicated</li>
        <li>Monthly board-ready security report</li>
        <li>Microsoft Teams + email, 4-hour response</li>
      </ul>
    </div>
  </div>

  <div class="retainer-compare-toggle">
    <button id="compare-toggle" class="compare-btn">Compare all features</button>
  </div>

  <div id="compare-table" class="retainer-table-wrapper">
    <table class="retainer-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Basic</th>
          <th class="recommended-header">Standard</th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Penetration testing</td>
          <td>Annual focused (web app or network)</td>
          <td class="recommended-cell">Twice-yearly, moderate scope</td>
          <td>Quarterly, full scope</td>
        </tr>
        <tr>
          <td>Vulnerability management</td>
          <td>Tracking dashboard</td>
          <td class="recommended-cell">Tracking + remediation support</td>
          <td>Active management & remediation</td>
        </tr>
        <tr>
          <td>Cloud security reviews</td>
          <td>Quarterly, 1 env</td>
          <td class="recommended-cell">Monthly, up to 3 env</td>
          <td>Bi-weekly, unlimited</td>
        </tr>
        <tr>
          <td>Security monitoring</td>
          <td>Setup + continuous log collection</td>
          <td class="recommended-cell">Monthly review + tuning</td>
          <td>Continuous + monthly tuning</td>
        </tr>
        <tr>
          <td>Data Protection / ISO 27001</td>
          <td>Not included</td>
          <td class="recommended-cell">Review twice yearly</td>
          <td>Ongoing</td>
        </tr>
        <tr>
          <td>BOU compliance</td>
          <td>Not included</td>
          <td class="recommended-cell">Guidance & advisory</td>
          <td>Full audit preparation + on-site</td>
        </tr>
        <tr>
          <td>Security awareness & training</td>
          <td>Guidance included</td>
          <td class="recommended-cell">Quarterly training session</td>
          <td>Monthly program + phishing simulation</td>
        </tr>
        <tr>
          <td>Mobile money / USSD</td>
          <td>1-time testing</td>
          <td class="recommended-cell">Once yearly</td>
          <td>Quarterly testing</td>
        </tr>
        <tr>
          <td>Incident response</td>
          <td>Not included</td>
          <td class="recommended-cell">Remote, up to 20 hrs/year</td>
          <td>Full on-site Kampala, unlimited</td>
        </tr>
        <tr>
          <td>Reporting</td>
          <td>Monthly security report</td>
          <td class="recommended-cell">Monthly report + quarterly exec summary</td>
          <td>Monthly board-ready report + quarterly exec summary</td>
        </tr>
        <tr>
          <td>Support</td>
          <td>Email, 24h response</td>
          <td class="recommended-cell">Teams + email, 8h response</td>
          <td>Fractional engineer, 40 hrs/month + 4h response</td>
        </tr>
      </tbody>
    </table>
  </div>
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
      <div class="case-terminal-bar">
        <div class="case-terminal-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <span class="case-terminal-title">PS C:\cases> Get-CaseStudy -Id "mobile-money-api"</span>
      </div>
      <div class="case-terminal-body">
        <span class="case-tag">Mobile Money Security</span>
        <h3>Mobile Money API Security for Ugandan Fintech</h3>
        <p><span class="case-prompt">&gt;</span> A Kampala-based fintech processing mobile money transactions for 50,000+ users suspected their API had vulnerabilities that could enable fraud. We performed API penetration testing, USSD session analysis, and agent network security review to identify attack vectors specific to East African mobile money infrastructure.</p>
        <p class="case-impact"><span class="case-prompt">&gt;</span> Three critical API vulnerabilities patched, USSD session fixation resolved, agent authentication strengthened, saving an estimated UGX 120M in potential fraud losses.</p>
      </div>
    </div>
    <div class="case-card case-pentest">
      <div class="case-terminal-bar">
        <div class="case-terminal-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <span class="case-terminal-title">PS C:\cases> Get-CaseStudy -Id "core-banking-pentest"</span>
      </div>
      <div class="case-terminal-body">
        <span class="case-tag">Banking Security</span>
        <h3>Core Banking Assessment for Ugandan Microfinance</h3>
        <p><span class="case-prompt">&gt;</span> A microfinance deposit-taking institution (MDI) with 15 branches needed to meet Bank of Uganda cybersecurity guidelines before their annual audit. We assessed their core banking system, ATM network, digital channels, and third-party integrations for security gaps and compliance violations.</p>
        <p class="case-impact"><span class="case-prompt">&gt;</span> Eight BOU compliance gaps closed, ATM network segmented from core systems, digital channel encryption upgraded, audit passed without findings.</p>
      </div>
    </div>
    <div class="case-card case-cloud">
      <div class="case-terminal-bar">
        <div class="case-terminal-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <span class="case-terminal-title">PS C:\cases> Get-CaseStudy -Id "data-protection-iso"</span>
      </div>
      <div class="case-terminal-body">
        <span class="case-tag">Data Protection</span>
        <h3>Data Protection & ISO 27001 Compliance for Kampala Health Tech</h3>
        <p><span class="case-prompt">&gt;</span> A health technology startup collecting patient data needed to comply with the Uganda Data Protection and Privacy Act 2019 and align with ISO 27001 before launching their platform. We performed a data protection assessment, built their data inventory, mapped controls to ISO 27001 Annex A, and created breach response procedures.</p>
        <p class="case-impact"><span class="case-prompt">&gt;</span> Full data inventory completed, consent framework implemented, ISO 27001 gap assessment delivered with remediation roadmap, breach response plan documented, Personal Data Protection Office registration submitted successfully.</p>
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

<section id="faq" class="section-light animate-on-scroll">
  <div class="container">
  <div class="section-header">
    <span class="section-tag">FAQ</span>
    <h2>Questions we hear often.</h2>
  </div>
  <div class="faq-list">
    <div class="faq-item faq-red">
      <div class="faq-header">
        <span class="faq-number">01</span>
        <h3>Do you help fix vulnerabilities, or just report them?</h3>
      </div>
      <p>Both. We do not hand over a PDF and disappear. Our engineers work alongside your IT team to patch findings, harden configurations, and close security gaps. We then re-test to verify fixes are holding. This is included in our retainer model and available as an add-on for one-time projects.</p>
    </div>
    <div class="faq-item faq-blue">
      <div class="faq-header">
        <span class="faq-number">02</span>
        <h3>What does a typical engagement look like?</h3>
      </div>
      <p>A typical engagement runs through six stages: discovery (understanding your posture), scoping (agreeing on exact targets), testing & engineering (the hands-on work), remediation support (fixing findings together), verification (re-testing to confirm closure), and ongoing posture management (for retainer clients). You receive daily progress updates during testing and a board-ready report at delivery.</p>
    </div>
    <div class="faq-item faq-amber">
      <div class="faq-header">
        <span class="faq-number">03</span>
        <h3>Can you help us prepare for a BOU audit or DPA 2019 compliance?</h3>
      </div>
      <p>Yes. We have deep experience with Bank of Uganda cybersecurity guidelines, Uganda's Data Protection and Privacy Act 2019, and ISO 27001. For banks and MDIs, we assess against BOU requirements and provide gap analysis with remediation roadmaps. For organizations handling sensitive data, we build data inventories, consent frameworks, and breach response plans aligned with DPA 2019, ISO 27001, and NIST frameworks.</p>
    </div>
    <div class="faq-item faq-emerald">
      <div class="faq-header">
        <span class="faq-number">04</span>
        <h3>Is our data safe during testing?</h3>
      </div>
      <p>Absolutely. We operate under signed confidentiality agreements and follow responsible disclosure practices. We never exploit vulnerabilities beyond what is necessary to demonstrate risk, and we schedule testing outside your business-critical hours unless you request otherwise.</p>
    </div>
    <div class="faq-item faq-purple">
      <div class="faq-header">
        <span class="faq-number">05</span>
        <h3>What types of organizations do you work with?</h3>
      </div>
      <p>Fintechs, banks, SACCOs, microfinance deposit-taking institutions (MDIs), health tech, NGOs, and mobile network operators across East Africa. While our deepest expertise is in Uganda's mobile money and banking ecosystems, we deliver cloud security, penetration testing, and compliance services remotely to clients globally.</p>
    </div>
  </div>
  </div>
</section>

<div class="section-wave">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,0 C360,60 1080,60 1440,0 L1440,80 L0,80 Z" fill="#f7f8fa"/>
  </svg>
</div>

<section id="cta" class="cta-band animate-on-scroll">
  <div class="container">
    <div class="cta-content">
      <h2>Get the same results for your organization.</h2>
      <p>Book a free consultation and we will assess your security posture, identify gaps, and recommend a clear path forward.</p>
      <a href="#hero" class="btn-primary">Book Free Assessment</a>
    </div>
  </div>
</section>

<footer>
  <div class="container">
  <div class="footer-inner" style="padding: 0; max-width: none;">
    <div class="footer-grid">
      <div class="footer-col">
        <span class="logo">fuse-cec<span class="logo-accent">.io</span></span>
        <p class="footer-tag">Enterprise-grade cybersecurity for East African organizations.</p>
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

// ------ Retainer comparison toggle ------

const compareToggle = document.querySelector<HTMLButtonElement>('#compare-toggle')
const compareTable = document.querySelector<HTMLDivElement>('#compare-table')
compareToggle?.addEventListener('click', () => {
  const isOpen = compareTable?.classList.contains('is-open')
  compareTable?.classList.toggle('is-open', !isOpen)
  compareToggle.textContent = isOpen ? 'Compare all features' : 'Hide comparison'
  compareToggle.classList.toggle('active', !isOpen)
})

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
