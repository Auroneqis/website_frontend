import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Smartphone, Brain, Cloud, TestTube2, Lightbulb, ChevronRight } from 'lucide-react';
import reactjs from "../assets/react.png";
import ai from "../assets/ai.png";
import Vue from "../assets/vuejs.png";
import aws from "../assets/aws.png";
import Consult from "../assets/consult.png";
import testing from "../assets/testing.png";

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
      <section style={{ padding: '100px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <p className="section-label">What We Offer</p>
          <h1 className="section-title">Our Technology Services</h1>
          <p className="section-sub" style={{ margin: '0 auto 0' }}>
            We provide end-to-end technology solutions that help businesses grow faster and operate smarter.
          </p>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {services.map((s, i) => (
              <Link key={s.title} to={s.path} className="card" style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 32, alignItems: 'center',
                cursor: 'pointer',
                borderLeft: `3px solid ${s.color}`,
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16, flexShrink: 0,
                  background: `${s.color}15`, border: `1px solid ${s.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {/* <s.icon size={28} color={s.color} /> */}
                  <img src={s.icon} alt="technologies" width={50} height={50}/>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 14 }}>{s.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {s.tags.map(t => (
                      <span key={t} style={{
                        padding: '4px 12px', borderRadius: 50,
                        background: `${s.color}10`, border: `1px solid ${s.color}20`,
                        fontSize: '0.78rem', color: s.color, fontWeight: 600,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: s.color, fontFamily: 'Syne', fontWeight: 600, fontSize: '0.875rem', flexShrink: 0 }}>
                  Explore <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-2)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Not Sure Where to Start?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 36, fontSize: '1.1rem' }}>Book a free consultation and we'll help you find the perfect solution.</p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Choose Your Service <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
