import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, CheckCircle2, Award, Globe, Zap } from 'lucide-react';
import about from "../assets/about.png";
import "../styleSheets/about.css";

const expertise = [
  'Web & Application Development',
  'Mobile App Development',
  'AI & Automation Solutions',
  'Cloud Infrastructure',
  'IT Consulting',
  'Software Quality Assurance',
];

const values = [
  { icon: Heart, title: 'Client-First Approach', desc: 'Everything we build starts and ends with client success in mind.' },
  { icon: Zap, title: 'Transparent Process', desc: 'Open communication and full visibility throughout every project.' },
  { icon: Award, title: 'Proven Expertise', desc: 'Years of experience delivering world-class technology solutions.' },
  { icon: Globe, title: 'End-to-End Support', desc: 'From ideation to deployment and beyond, we are always there.' },
];

const team = [
  { name: 'Mahesh', role: 'Founder Director', bg: '#7c3aed' },
  { name: 'Sanjay Kumar', role: 'Executive Director', bg: '#ff5100' },
  { name: 'Vishnu', role: 'CEO', bg: '#00d4ff' },
  { name: 'Hyndhavi Paparaju', role: 'HR', bg: '#f59e0b' },
  { name: 'Jhansi Laxmi Chinthakinda', role: 'Digital Marketing Executive', bg: '#06ffa5' },
];

const statCards = [
  { val: '200+', label: 'Projects Delivered', color: 'var(--accent)' },
  { val: '50+', label: 'Happy Clients', color: 'var(--accent-2)' },
  { val: '5+', label: 'Years of Excellence', color: 'var(--accent-3)' },
  { val: '99%', label: 'Client Satisfaction', color: '#f59e0b' },
];

export default function About() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── HERO ────────────────────────────────── */}
      <section className="aq-about-hero">
        <div className="aq-about-hero-orb" />

        <div className="container">
          <div className="aq-about-hero-flex">

            {/* Left: text */}
            <div className="aq-about-hero-left">
              <p className="section-label">About Us</p>
              <h1 className="section-title">
                We Build Technology <br />
                <span className="gradient-text">That Drives Change</span>
              </h1>
              <p className="aq-about-hero-desc">
                Auroneqis is a forward-thinking technology company specializing in delivering innovative digital solutions tailored to modern business needs.
              </p>
              <Link to="/contact" className="btn-primary">
                Work With Our Team <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: image */}
            <div className="aq-about-hero-right">
              <img src={about} alt="About Auroneqis" className="aq-about-hero-img" />
            </div>

          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ────────────────────── */}
      <section className="aq-about-mv-section">
        <div className="container">
          <div className="aq-about-mv-grid">
            {[
              {
                Icon: Target, color: '#00d4ff', label: 'Our Mission', title: 'Empowering Innovation',
                text: 'To empower businesses with scalable, secure, and intelligent technology solutions that accelerate growth and create lasting competitive advantages.',
              },
              {
                Icon: Eye, color: '#7c3aed', label: 'Our Vision', title: 'Global Leadership',
                text: 'To become a global leader in digital transformation and AI-driven innovation, helping every business unlock its fullest potential through technology.',
              },
            ].map(({ Icon, color, label, title, text }) => (
              <div key={label} className="card" style={{ borderColor: `${color}30` }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <Icon size={24} color={color} />
                </div>
                <p style={{ fontSize: '0.75rem', letterSpacing: 2, textTransform: 'uppercase', color, fontWeight: 600, marginBottom: 8 }}>
                  {label}
                </p>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.4rem', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ───────────────────────────── */}
      <section className="aq-about-expertise-section">
        <div className="container">
          <div className="aq-about-expertise-grid">

            {/* Left: list */}
            <div className="aq-about-expertise-left">
              <p className="section-label">Expertise</p>
              <h2 className="section-title">What We Excel At</h2>
              <p className="aq-about-expertise-desc">
                Our team brings deep expertise across every layer of the modern technology stack, from front-end interfaces to AI infrastructure.
              </p>
              <div className="aq-about-expertise-list">
                {expertise.map(e => (
                  <div key={e} className="aq-about-expertise-item">
                    <CheckCircle2 size={18} color="var(--accent-3)" strokeWidth={2.5} />
                    <span>{e}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stat cards */}
            <div className="aq-about-stats-grid">
              {statCards.map(s => (
                <div key={s.label} className="card aq-about-stat-card">
                  <p className="aq-about-stat-value" style={{ color: s.color }}>{s.val}</p>
                  <p className="aq-about-stat-label">{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────── */}
      <section className="aq-about-values-section">
        <div className="container">
          <div className="aq-about-values-header">
            <p className="section-label">Our Values</p>
            <h2 className="section-title">Why Clients Trust Us</h2>
          </div>
          <div className="aq-about-values-grid">
            {values.map(v => (
              <div key={v.title} className="card aq-about-value-card">
                <div className="aq-about-value-icon">
                  <v.icon size={22} color="var(--accent)" />
                </div>
                <h4 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: 8 }}>{v.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ────────────────────────────────── */}
      <section className="aq-about-team-section">
        <div className="container">
          <div className="aq-about-team-header">
            <p className="section-label">Leadership</p>
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <div className="aq-about-team-grid">
            {team.map(m => (
              <div key={m.name} className="card aq-about-team-card">
                <div
                  className="aq-about-team-avatar"
                  style={{ background: `linear-gradient(135deg, ${m.bg}, ${m.bg}88)` }}
                >
                  {m.name[0]}
                </div>
                <h4 className="aq-about-team-name">{m.name}</h4>
                <p className="aq-about-team-role">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="aq-about-cta-section">
        <div className="container">
          <h2 className="section-title">Ready to Work Together?</h2>
          <p className="aq-about-cta-desc">Let's build something extraordinary for your business.</p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
};
