import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import reactjs from "../assets/react.png";
import ai from "../assets/ai.png";
import Vue from "../assets/vuejs.png";
import aws from "../assets/aws.png";
import Consult from "../assets/consult.png";
import testing from "../assets/testing.png";
import '../styleSheets/services.css';

const services = [
  {
    icon: reactjs, title: 'Web Development', path: '/services/web', color: '#00d4ff',
    desc: 'Responsive, scalable web & application development tailored to your business goals.',
    tags: ['Responsive Web', 'Ecommerce', 'Frontend/Backend', 'Enterprise Apps'],
  },
  {
    icon: Vue, title: 'Mobile Applications', path: '/services/mobile', color: '#7c3aed',
    desc: 'Native & cross-platform mobile apps for iOS and Android that users love.',
    tags: ['Android Apps', 'Flutter', 'Cross-Platform', 'Enterprise Mobile'],
  },
  {
    icon: ai, title: 'AI & Machine Learning', path: '/services/ai', color: '#06ffa5',
    desc: 'Intelligent automation and AI-driven solutions to power your next-gen business.',
    tags: ['Generative AI', 'Automation', 'Data Analytics', 'AI Consulting'],
  },
  {
    icon: aws, title: 'Cloud Solutions', path: '/services/cloud', color: '#f59e0b',
    desc: 'AWS, Azure, and Google Cloud infrastructure for maximum performance and security.',
    tags: ['AWS', 'Azure', 'Migration', 'Cloud Security'],
  },
  {
    icon: testing, title: 'Software Testing', path: '/services/testing', color: '#f43f5e',
    desc: 'Comprehensive QA services ensuring bug-free, high-quality software releases.',
    tags: ['Manual Testing', 'Automation', 'Performance', 'Security Testing'],
  },
  {
    icon: Consult, title: 'IT Consulting', path: '/services/consulting', color: '#8b5cf6',
    desc: 'Strategic technology consulting to drive digital transformation and ROI.',
    tags: ['Digital Transformation', 'IT Strategy', 'Infrastructure', 'AI Consulting'],
  },
];

export default function Services() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── HERO ─────────────────────────────────── */}
      <section className="aq-svc-hero">
        <div className="aq-svc-hero-orb" />
        <div className="container aq-svc-hero-inner">
          <p className="section-label">What We Offer</p>
          <h1 className="section-title">Our Technology Services</h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            We provide end-to-end technology solutions that help businesses grow faster and operate smarter.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ────────────────────────── */}
      <section className="aq-svc-list-section">
        <div className="container">
          <div className="aq-svc-list">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.path}
                className="card aq-svc-card"
                style={{ borderLeft: `3px solid ${s.color}` }}
              >
                {/* ── Icon (always visible) ── */}
                <div
                  className="aq-svc-card-icon"
                  style={{
                    background: `${s.color}15`,
                    border: `1px solid ${s.color}30`,
                  }}
                >
                  <img src={s.icon} alt={s.title} width={50} height={50} />
                </div>

                {/* ── Body ── */}
                <div className="aq-svc-card-body">
                  <h3 className="aq-svc-card-title">{s.title}</h3>
                  <p className="aq-svc-card-desc">{s.desc}</p>
                  <div className="aq-svc-card-tags">
                    {s.tags.map(t => (
                      <span
                        key={t}
                        className="aq-svc-tag"
                        style={{
                          background: `${s.color}10`,
                          border: `1px solid ${s.color}20`,
                          color: s.color,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Inline CTA shown only on small screens (hidden on desktop via CSS) */}
                  <span
                    className="aq-svc-card-body-cta"
                    style={{
                      display: 'none',          /* default hidden; CSS shows on ≤768px */
                      alignItems: 'center',
                      gap: 4,
                      marginTop: 12,
                      color: s.color,
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.82rem',
                    }}
                  >
                    Explore <ChevronRight size={14} />
                  </span>
                </div>

                {/* ── Right CTA (desktop only) ── */}
                <div className="aq-svc-card-cta" style={{ color: s.color }}>
                  <span className="aq-svc-card-cta-label">Explore</span>
                  <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────── */}
      <section className="aq-svc-cta-section">
        <div className="container">
          <h2 className="section-title">Not Sure Where to Start?</h2>
          <p className="aq-svc-cta-desc">
            Book a free consultation and we'll help you find the perfect solution.
          </p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Choose Your Service <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
};