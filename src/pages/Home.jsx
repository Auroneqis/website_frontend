import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, Users, Globe, CheckCircle2, Star, ChevronRight } from 'lucide-react';
import Logo from "../assets/auroneqis_logo.png";
import Reactjs from "../assets/react.png";
import ai from "../assets/ai.png";
import Vue from "../assets/vuejs.png";
import aws from "../assets/aws.png";
import Consult from "../assets/consult.png";
import testing from "../assets/testing.png";
import "../styleSheets/home.css";

const services = [
  { icon: Reactjs, title: 'Web Development', desc: 'Responsive, scalable web & application development tailored to your business goals.', path: '/services/web', color: '#00d4ff' },
  { icon: Vue, title: 'Mobile Applications', desc: 'Native & cross-platform mobile apps for iOS and Android that users love.', path: '/services/mobile', color: '#7c3aed' },
  { icon: ai, title: 'AI & Machine Learning', desc: 'Intelligent automation and AI-driven solutions to power your next-gen business.', path: '/services/ai', color: '#06ffa5' },
  { icon: aws, title: 'Cloud Solutions', desc: 'AWS, Azure, and Google Cloud infrastructure for maximum performance and security.', path: '/services/cloud', color: '#f59e0b' },
  { icon: testing, title: 'Software Testing', desc: 'Comprehensive QA services ensuring bug-free, high-quality software releases.', path: '/services/testing', color: '#f43f5e' },
  { icon: Consult, title: 'IT Consulting', desc: 'Strategic technology consulting to drive digital transformation and ROI.', path: '/services/consulting', color: '#8b5cf6' },
];

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Global Clients' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years Experience' },
];

const industries = ['E-Commerce', 'Healthcare', 'Finance', 'Education', 'Startups', 'Enterprises'];

const whyUs = [
  { icon: Users, title: 'Expert Team', desc: 'Seasoned developers, designers, and consultants with deep domain expertise.' },
  { icon: ShieldCheck, title: 'Secure & Scalable', desc: 'Enterprise-grade security and scalable architecture built for growth.' },
  { icon: Zap, title: 'Agile Delivery', desc: 'Fast, iterative development that adapts to your changing business needs.' },
  { icon: TrendingUp, title: 'ROI Focused', desc: 'Every solution is built to maximize your return on investment.' },
];

const testimonials = [
  { name: 'Sarah M.', role: 'CTO, FinTech Startup', text: 'Auroneqis transformed our legacy platform into a scalable, modern system. Exceptional team!', rating: 5 },
  { name: 'James R.', role: 'CEO, E-Commerce Brand', text: 'They delivered our mobile app on time and beyond expectations. Truly world-class.', rating: 5 },
  { name: 'Priya K.', role: 'Product Lead, HealthTech', text: 'The AI solution they built increased our efficiency by 40%. Highly recommend!', rating: 5 },
];

export default function Home() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── HERO ──────────────────────────────────── */}
      <section className="aq-hero-section">
        {/* Background orbs */}
        <div style={{
          position: 'absolute', top: '10%', left: '60%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <div className="container aq-hero-grid">
          {/* Left: text */}
          <div className="aq-hero-content">
            <div className="aq-hero-badge">
              <div className="aq-hero-badge-dot" />
              <span className="aq-hero-badge-text">Trusted by 50+ Global Businesses</span>
            </div>

            <h1 className="aq-hero-title">
              Build Smart Digital<br />
              <span className="gradient-text">Solutions That</span><br />
              Drive Growth
            </h1>

            <p className="aq-hero-desc">
              From web and application development to AI-powered solutions, Auroneqis helps businesses innovate, scale, and succeed in the digital world.
            </p>

            <div className="aq-hero-cta-group">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline">
                View Our Services
              </Link>
            </div>

            <div className="aq-stats-row">
              {stats.map(s => (
                <div key={s.label}>
                  <p className="aq-stat-value">{s.value}</p>
                  <p className="aq-stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: orbit visual */}
          <div className="aq-hero-visual">
            <div className="aq-hero-orbit-ring">
              <div className="aq-hero-orbit-inner">
                <div className="aq-hero-logo-core">
                  <img src={Logo} alt="auroneqis_logo" width="250" height="150" />
                </div>
              </div>

              {/* Orbiting service icons */}
              {services.slice(0, 6).map((s, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  width: 44, height: 44,
                  marginTop: -22, marginLeft: -22,
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: `1px solid ${s.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transform: `rotate(${i * 60}deg) translateX(150px) rotate(-${i * 60}deg)`,
                  boxShadow: `0 0 15px ${s.color}60`,
                }}>
                  <img src={s.icon} alt={s.title} width="30" height="30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────── */}
      <section className="aq-trust-strip">
        <div className="container aq-trust-inner">
          {['Trusted by startups & enterprises', 'Scalable & secure solutions', 'Agile development approach', '100% client-focused delivery'].map(item => (
            <div key={item} className="aq-trust-item">
              <CheckCircle2 size={16} color="var(--accent-3)" />
              <span className="aq-trust-label">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────── */}
      <section className="aq-services-section">
        <div className="container">
          <div className="aq-section-header">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              End-to-end technology solutions that help businesses grow faster and operate smarter.
            </p>
          </div>

          <div className="aq-services-grid">
            {services.map(s => (
              <Link key={s.title} to={s.path} className="card" style={{ cursor: 'pointer', display: 'block' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, marginBottom: 20,
                  background: `${s.color}15`, border: `1px solid ${s.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <img src={s.icon} alt={s.title} width="40" height="40" />
                </div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.15rem', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: s.color, fontSize: '0.875rem', fontWeight: 600 }}>
                  Learn More <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="aq-services-footer">
            <Link to="/services" className="btn-outline">Explore All Services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────── */}
      <section className="aq-why-section">
        <div className="container">
          <div className="aq-why-grid">
            <div className="aq-why-left">
              <p className="section-label">Why Auroneqis</p>
              <h2 className="section-title">
                The Partner You <span className="gradient-text">Can Rely On</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: 40, lineHeight: 1.7 }}>
                We combine cutting-edge technology with a client-first approach to deliver solutions that truly drive business outcomes.
              </p>
              <Link to="/about" className="btn-primary">Partner With Us <ArrowRight size={16} /></Link>
            </div>

            <div className="aq-why-right">
              {whyUs.map(item => (
                <div key={item.title} className="card">
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, marginBottom: 14,
                    background: 'rgba(0,212,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <item.icon size={20} color="var(--accent)" />
                  </div>
                  <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────── */}
      <section className="aq-industries-section">
        <div className="container">
          <div className="aq-section-header" style={{ marginBottom: 48 }}>
            <p className="section-label">Sectors</p>
            <h2 className="section-title">Industries We Serve</h2>
          </div>

          <div className="aq-industries-pills">
            {industries.map(ind => (
              <div key={ind} className="aq-industry-pill">
                <Globe size={14} />
                <span>{ind}</span>
              </div>
            ))}
          </div>

          <div className="aq-industries-footer">
            <Link to="/case-studies" className="btn-outline">See Case Studies <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────── */}
      <section className="aq-testimonials-section">
        <div className="container">
          <div className="aq-section-header" style={{ marginBottom: 56 }}>
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>

          <div className="aq-testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="card">
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Syne', fontWeight: 800, fontSize: '1rem', color: '#000',
                    flexShrink: 0,
                  }}>{t.name[0]}</div>
                  <div>
                    <p style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>{t.name}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────── */}
      <section className="aq-cta-section">
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="container aq-cta-inner">
          <p className="section-label">Ready to Start?</p>
          <h2 className="aq-cta-title">
            Transform Your Ideas Into <br />
            <span className="gradient-text">Powerful Digital Solutions</span>
          </h2>
          <p className="aq-cta-desc">
            Join 50+ businesses that trust Auroneqis to deliver exceptional technology solutions.
          </p>
          <div className="aq-cta-btn-group">
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 32px' }}>
              Book Free Strategy Call <ArrowRight size={18} />
            </Link>
            <Link to="/case-studies" className="btn-outline" style={{ fontSize: '1rem', padding: '15px 32px' }}>
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
