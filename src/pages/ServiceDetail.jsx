import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiceDetail({ icon: Icon, color, title, overview, features, whyUs, cta1, cta2 }) {

  console.log("icons: ", Icon);

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ padding: '100px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '20%', right: '10%',
          width: 400, height: 400, borderRadius: '50%',
          background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
            <div style={{
              width: 72, height: 72, borderRadius: 20,
              background: `${color}15`, border: `1px solid ${color}30`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 0 30px ${color}25`,
            }}>
              {/* <Icon size={32} color={color} /> */}
              <img src={Icon} alt="icon" width={"50"} height={"50"}/>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', letterSpacing: 2.5, textTransform: 'uppercase', color: color, fontWeight: 700, marginBottom: 4 }}>Our Services</p>
              <h1 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.1 }}>{title}</h1>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.75, maxWidth: 680, marginBottom: 40 }}>{overview}</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary" style={{ background: `linear-gradient(135deg, ${color}, ${color}bb)` }}>
              {cta1} <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline">{cta2}</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 0', background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <p className="section-label">Features</p>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>What's Included</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {features.map(f => (
                  <div key={f} style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 18px', background: 'var(--bg-card)',
                    border: '1px solid var(--border)', borderRadius: 12,
                    transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}40`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
                    <CheckCircle2 size={18} color={color} strokeWidth={2.5} />
                    <span style={{ fontSize: '0.95rem' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label">Why Choose Us</p>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Our Advantage</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {whyUs.map((w, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: `${color}15`, border: `1px solid ${color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Syne', fontWeight: 800, color: color, fontSize: '0.9rem',
                    }}>{i + 1}</div>
                    <div>
                      <h4 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: 4 }}>{w.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{
            padding: '60px 40px', borderRadius: 24,
            background: `linear-gradient(135deg, ${color}10, rgba(124,58,237,0.1))`,
            border: `1px solid ${color}25`,
          }}>
            <h2 className="section-title">Ready to Get Started?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: 36, fontSize: '1.05rem' }}>
              Let's discuss how we can transform your business with {title}.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px', background: `linear-gradient(135deg, ${color}, ${color}aa)` }}>
              Get Free Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
