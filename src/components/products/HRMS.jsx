import { useState } from "react";
import "../../styleSheets/hrms.css";
import leave from "../../assets/leave.png";
import payroll from "../../assets/payroll.png";
import attendance from "../../assets/attendance.png";
import dashboard from "../../assets/dashboard.png";
import employee from "../../assets/employee.png";

const FEATURES = [
    {
        id: "payroll",
        label: "Payroll & Compliance",
        icon: payroll,
        title: "Zero-Error Cloud Payroll Engine",
        desc: "Experience a fully automated payroll system that handles every statutory requirement. Our PF ESI compliance software files directly with government portals.",
        bullets: [
            "Automatic TDS, PF & PT deduction",
            "Bank-ready salary files in one click",
            "Gross-to-net calculation engine",
            "Direct e-filing with government portals",
        ],
    },
    {
        id: "attendance",
        label: "Attendance",
        icon: attendance,
        title: "Manager-First Attendance System",
        desc: "The most robust attendance management system India offers — with GPS geo-fencing for field teams and seamless biometric sync.",
        bullets: [
            "AI-powered GPS geo-fencing",
            "Real-time field staff tracking",
            "Biometric device integration",
            "Overtime & shift management",
        ],
    },
    {
        id: "leave",
        label: "Leave Management",
        icon: leave,
        title: "Seamless Time-Off Module",
        desc: "A sophisticated leave management software India module. Managers approve requests with one click from any device.",
        bullets: [
            "One-click approvals for managers",
            "Custom leave policy builder",
            "Holiday calendar management",
            "Leave balance forecasting",
        ],
    },
    {
        id: "portal",
        label: "Employee Portal",
        icon: employee,
        title: "Advanced Employee Self-Service",
        desc: "A localized employee self service portal India where your team can independently manage payslips, tax declarations, and personal data.",
        bullets: [
            "Payslip download & history",
            "Form 16 & tax declaration",
            "Personal data self-management",
            "Reduces HR tickets by up to 60%",
        ],
    },
];

const ADVANTAGES = [
    {
        icon: "🔒",
        title: "Manager Isolation (Security)",
        desc: "Row-Level Security (RLS) ensures managers see only their own teams. Other department data remains strictly invisible.",
    },
    {
        icon: "📊",
        title: "Real-Time Payroll Impact",
        desc: "Simulate bonuses or adjustments to see the immediate impact on annual departmental budgets — before you commit.",
    },
    {
        icon: "🏢",
        title: "Hybrid Workforce Ready",
        desc: "Designed for the SME India market, handling contractors and full-time staff within a single unified hierarchy.",
    },
];

const FAQS = [
    { q: "What is HRMS software?", a: "It is a digital suite that integrates payroll, attendance, and recruitment into one unified platform." },
    { q: "What is the HRMS vs HRIS difference?", a: "HRIS focuses on data records; HRMS includes the 'management' layer like payroll automation, workflows, and compliance." },
    { q: "How to process payroll in India?", a: "Our system automates gross-to-net calculations, TDS, and bank-ready files in one click." },
    { q: "Why is Auroneqis the best HRMS software India?", a: "We offer unique manager-level data isolation that competitors like Keka do not prioritize." },
    { q: "Do you provide local support for HRMS software Hyderabad?", a: "Yes, we have a dedicated team in HITEC City for on-ground support." },
    { q: "Is your platform a valid Keka HR alternative?", a: "Yes, we offer a cleaner UI and more granular manager permissions at competitive pricing." },
    { q: "How does the employee self service portal India help my team?", a: "It empowers staff to manage their own data, reducing HR admin tickets by up to 60%." },
    { q: "Can you handle PF ESI compliance software requirements?", a: "Yes, we automate filings directly with government portals with zero manual effort." },
    { q: "What affects your HRMS pricing India?", a: "Our pricing is a simple base fee plus a per-employee rate after 50 users — fully transparent." },
    { q: "Why is your attendance management system India different?", a: "We use AI-powered geo-fencing and real-time GPS tracking designed specifically for field staff." },
];

// ─── Component ──────────────────────────────────────────────────────────────

export default function HRMS() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("payroll");
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

    return (
        <div className="arn-root">
            {/* ── NAVBAR ── */}
            {/* <header>
                <nav className="arn-navbar">
                    <div className="arn-navbar-inner">
                        <div className="arn-logo">
                            Aurone<span>qis</span>
                        </div>
                        <ul className="arn-nav-links">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#advantages">Why Us</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#faqs">FAQs</a></li>
                            <li><a href="#trial" className="arn-nav-cta">Free Trial</a></li>
                        </ul>
                        <button
                            className="arn-hamburger"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle navigation"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </nav>
                <nav className={`arn-mobile-menu${mobileOpen ? " arn-open" : ""}`}>
                    <a href="#features" onClick={() => setMobileOpen(false)}>Features</a>
                    <a href="#advantages" onClick={() => setMobileOpen(false)}>Why Us</a>
                    <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
                    <a href="#faqs" onClick={() => setMobileOpen(false)}>FAQs</a>
                    <a href="#trial" className="arn-mobile-cta" onClick={() => setMobileOpen(false)}>Start Free Trial</a>
                </nav>
            </header> */}

            {/* ── HERO ── */}
            <section className="arn-hero" id="home">
                <div className="arn-hero-inner">
                    <div className="arn-hero-text">
                        <div className="arn-hero-badge">India's #1 Manager-Centric HRMS</div>
                        <h1>
                            Empower Your Managers with the <span>Best HRMS Software</span> in India
                        </h1>
                        <p className="arn-hero-sub">
                            The only manager-centric platform built for decentralized growth. Automate your cloud payroll operations while giving reporting managers total autonomy over their teams.
                        </p>
                        <div className="arn-hero-actions">
                            <button className="arn-btn-primary" id="trial">Start Your Free Trial</button>
                            <button className="arn-btn-secondary">Schedule a Demo</button>
                        </div>
                        <p className="arn-microcopy">No credit card required. Setup in minutes.</p>
                    </div>

                    <div className="arn-hero-visual">
                        <img src={dashboard} alt="Auroneqis dashboard analytics platform" className="arn-hero-dashboard" />
                    </div>
                </div>
            </section>

            {/* ── TRUSTED BY ── */}
            <section className="arn-trusted">
                <div className="arn-section-inner">
                    <div className="arn-section-header arn-center">
                        <span className="arn-section-label">Social Proof</span>
                        <h2 className="arn-section-title">Powering the Next Generation of HR Software for SME India</h2>
                        <p className="arn-section-subtitle">
                            Trusted by 500+ growing companies in HITEC City, Gachibowli, and across India.
                        </p>
                    </div>
                    <div className="arn-stats-grid">
                        <div className="arn-stat-card">
                            <div className="arn-stat-number"><span>99.9</span>%</div>
                            <div className="arn-stat-desc">Payroll Accuracy — zero-error runs, every cycle</div>
                        </div>
                        <div className="arn-stat-card">
                            <div className="arn-stat-number"><span>50</span>%</div>
                            <div className="arn-stat-desc">Faster Onboarding compared to manual processes</div>
                        </div>
                        <div className="arn-stat-card">
                            <div className="arn-stat-number"><span>#1</span></div>
                            <div className="arn-stat-desc">Keka HR Alternative for Managerial Autonomy</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURES ── */}
            <section className="arn-section arn-features" id="features">
                <div className="arn-section-inner">
                    <div className="arn-section-header">
                        <span className="arn-section-label">Core Features</span>
                        <h2 className="arn-section-title">Everything You Need in One Attendance Management System India</h2>
                        <p className="arn-section-subtitle">
                            Four integrated modules that eliminate manual HR work and give your managers real autonomy.
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="arn-tabs" role="tablist">
                        {FEATURES.map((f) => (
                            <button
                                key={f.id}
                                className={`arn-tab-btn${activeTab === f.id ? " arn-active" : ""}`}
                                role="tab"
                                aria-selected={activeTab === f.id}
                                onClick={() => setActiveTab(f.id)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Panels */}
                    {FEATURES.map((f) => (
                        <div
                            key={f.id}
                            className={`arn-tab-panel${activeTab === f.id ? " arn-active" : ""}`}
                            role="tabpanel"
                        >
                            <div className="arn-feature-content">
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                                <ul className="arn-feature-bullets">
                                    {f.bullets.map((b, i) => <li key={i}>{b}</li>)}
                                </ul>
                            </div>
                            <div className="arn-feature-visual">
                                <img src={f.icon} alt={f.label} className="arn-feature-icon-large" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ADVANTAGES ── */}
            <section className="arn-section arn-advantages" id="advantages">
                <div className="arn-section-inner">
                    <div className="arn-section-header">
                        <span className="arn-section-label">Strategic Edge</span>
                        <h2 className="arn-section-title">Why We Are the Top HRMS Software Hyderabad Choice</h2>
                        <p className="arn-section-subtitle">
                            Built for decision-makers, not just HR admins. Here's what sets Auroneqis apart.
                        </p>
                    </div>
                    <div className="arn-advantages-grid">
                        {ADVANTAGES.map((a, i) => (
                            <div className="arn-adv-card" key={i}>
                                <div className="arn-adv-icon">{a.icon}</div>
                                <h3>{a.title}</h3>
                                <p>{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COMPARISON ── */}
            <section className="arn-section arn-comparison">
                <div className="arn-section-inner">
                    <div className="arn-section-header arn-center">
                        <span className="arn-section-label">Competitor Comparison</span>
                        <h2 className="arn-section-title">The Smart Keka HR Alternative</h2>
                        <p className="arn-section-subtitle">
                            While most systems are built for HR Admins, Auroneqis is built for Decision Makers — a Unified Operating System connecting HR, IT, and Finance.
                        </p>
                    </div>
                    <div className="arn-comparison-grid">
                        <div className="arn-compare-card">
                            <h3>Other HRMS Platforms</h3>
                            <ul className="arn-compare-list">
                                <li><span className="arn-cx">✗</span> Built for HR Admins only</li>
                                <li><span className="arn-cx">✗</span> No manager-level data isolation</li>
                                <li><span className="arn-cx">✗</span> Siloed HR, IT, and Finance data</li>
                                <li><span className="arn-cx">✗</span> No real-time payroll simulation</li>
                                <li><span className="arn-cx">✗</span> Complex contractor management</li>
                            </ul>
                        </div>
                        <div className="arn-compare-card arn-featured">
                            <div className="arn-compare-badge">Auroneqis Edge</div>
                            <h3>Auroneqis Platform</h3>
                            <ul className="arn-compare-list">
                                <li><span className="arn-ci">✓</span> Built for Decision Makers & Managers</li>
                                <li><span className="arn-ci">✓</span> Row-Level Security (RLS) per manager</li>
                                <li><span className="arn-ci">✓</span> Unified OS for HR, IT & Finance</li>
                                <li><span className="arn-ci">✓</span> Live departmental budget simulation</li>
                                <li><span className="arn-ci">✓</span> Hybrid workforce in one hierarchy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRICING ── */}
            <section className="arn-section arn-pricing" id="pricing">
                <div className="arn-section-inner">
                    <div className="arn-section-header arn-center">
                        <span className="arn-section-label">Pricing</span>
                        <h2 className="arn-section-title">Transparent HRMS Pricing India for Every Stage</h2>
                        <p className="arn-section-subtitle">Three outcome-focused tiers. No hidden fees. Scale when you're ready.</p>
                    </div>
                    <div className="arn-pricing-grid">
                        {/* Essential */}
                        <div className="arn-price-card">
                            <div>
                                <div className="arn-price-name">Essential</div>
                                <div className="arn-price-desc">Core HR + Leave Management</div>
                            </div>
                            <div className="arn-price-amount">₹2,495<span>/mo</span></div>
                            <ul className="arn-price-features">
                                <li>Up to 50 employees</li>
                                <li>Core HR module</li>
                                <li>Leave management</li>
                                <li>Employee self-service portal</li>
                                <li>Email support</li>
                            </ul>
                            <button className="arn-btn-plan arn-btn-plan-outline">Login to Portal</button>
                        </div>

                        {/* Growth – Featured */}
                        <div className="arn-price-card arn-featured">
                            <div className="arn-price-tag">Recommended</div>
                            <div>
                                <div className="arn-price-name">Growth</div>
                                <div className="arn-price-desc">Core + Payroll + Attendance</div>
                            </div>
                            <div className="arn-price-amount">₹4,950<span>/mo + ₹99/emp</span></div>
                            <ul className="arn-price-features">
                                <li>Everything in Essential</li>
                                <li>Cloud payroll engine</li>
                                <li>PF, ESI & TDS compliance</li>
                                <li>GPS geo-fencing attendance</li>
                                <li>Biometric sync</li>
                                <li>Priority support</li>
                            </ul>
                            <button className="arn-btn-plan arn-btn-plan-fill">Login to Portal</button>
                        </div>

                        {/* Enterprise */}
                        <div className="arn-price-card">
                            <div>
                                <div className="arn-price-name">Enterprise</div>
                                <div className="arn-price-desc">AI Attrition + Custom Workflows</div>
                            </div>
                            <div className="arn-price-amount" style={{ fontSize: "1.6rem" }}>Custom Quote</div>
                            <ul className="arn-price-features">
                                <li>Everything in Growth</li>
                                <li>AI attrition prediction</li>
                                <li>Custom approval workflows</li>
                                <li>Dedicated HITEC City support</li>
                                <li>SLA guarantee</li>
                            </ul>
                            <button className="arn-btn-plan arn-btn-plan-outline">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQS ── */}
            <section className="arn-section arn-faq" id="faqs">
                <div className="arn-section-inner">
                    <div className="arn-section-header arn-center">
                        <span className="arn-section-label">FAQs</span>
                        <h2 className="arn-section-title">Got Questions? We Have Answers.</h2>
                        <p className="arn-section-subtitle">
                            Everything you need to know about Auroneqis HRMS before you get started.
                        </p>
                    </div>

                    <div className="arn-faq-grid">
                        {/* Left Column */}
                        <div className="arn-faq-column">
                            {FAQS.slice(0, 5).map((faq, i) => (
                                <div
                                    key={i}
                                    className={`arn-faq-item${openFaq === i ? " arn-open" : ""}`}
                                >
                                    <button
                                        className="arn-faq-question"
                                        onClick={() => toggleFaq(i)}
                                        aria-expanded={openFaq === i}
                                    >
                                        {faq.q}
                                        <span className="arn-faq-chevron">▼</span>
                                    </button>

                                    <div className="arn-faq-answer">
                                        {faq.a}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="arn-faq-column">
                            {FAQS.slice(5, 10).map((faq, i) => {
                                const faqIndex = i + 5;

                                return (
                                    <div
                                        key={faqIndex}
                                        className={`arn-faq-item${openFaq === faqIndex ? " arn-open" : ""}`}
                                    >
                                        <button
                                            className="arn-faq-question"
                                            onClick={() => toggleFaq(faqIndex)}
                                            aria-expanded={openFaq === faqIndex}
                                        >
                                            {faq.q}
                                            <span className="arn-faq-chevron">▼</span>
                                        </button>

                                        <div className="arn-faq-answer">
                                            {faq.a}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER CTA ── */}
            <section className="arn-footer-cta">
                <h2>Ready to transform your workplace?</h2>
                <p>Join 500+ growing companies across Hyderabad and India who trust Auroneqis.</p>
                <button className="arn-btn-primary">Transform Your HR Today</button>
            </section>

            {/* ── FOOTER ── */}
            <footer className="arn-footer">
                <p>© {new Date().getFullYear()} Auroneqis. All rights reserved. | HRMS Software Hyderabad, India</p>
            </footer>
        </div>
    );
};