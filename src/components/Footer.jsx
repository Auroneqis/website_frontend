import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Share2, Users, Code, ArrowUpRight } from "lucide-react";
import Logo from "../assets/auroneqis_logo.png";

const services = [
  { name: 'Web Development', path: '/services/web' },
  { name: 'Mobile Applications', path: '/services/mobile' },
  { name: 'AI & Machine Learning', path: '/services/ai' },
  { name: 'Cloud Solutions', path: '/services/cloud' },
  { name: 'Software Testing', path: '/services/testing' },
  { name: 'IT Consulting', path: '/services/consulting' },
];

const company = [
  { name: 'About Us', path: '/about' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog / Insights', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/terms' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      {/* Top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 2,
        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
      }} />

      {/* Newsletter banner */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '48px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <p className="section-label">Stay Updated</p>
            <h3 style={{ fontFamily: 'Syne', fontWeight: 600, fontSize: '1.6rem' }}>
              Transform Your Business <span className="gradient-text">With Technology</span>
            </h3>
          </div>
          <Link to="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Book Free Strategy Call <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container" style={{ padding: '64px 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48 }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                backgroundColor: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {/* <Zap size={20} color="#fff" strokeWidth={2.5} /> */}
                <img src={Logo} alt="logo" width={"80"} height={"60"}/>
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem' }}>
                Auro<span style={{ color: 'var(--accent)' }}>neqis</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 24 }}>
              Empowering businesses with scalable, secure, and intelligent technology solutions worldwide.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[Share2, Users, Code].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  color: 'var(--text-muted)', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: 20, fontSize: '0.95rem', color: 'var(--text)' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {services.map(s => (
                <li key={s.path}>
                  <Link to={s.path} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: 20, fontSize: '0.95rem', color: 'var(--text)' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {company.map(c => (
                <li key={c.path}>
                  <Link to={c.path} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: 20, fontSize: '0.95rem', color: 'var(--text)' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { Icon: Mail, text: 'Info@auroneqis.com' },
                { Icon: Phone, text: '+91 7995582405' },
                { Icon: MapPin, text: 'Hyderabad' },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,212,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={14} color="var(--accent)" />
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Auroneqis. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <Link key={item} to={item.toLowerCase().replace(/ /g, '-')} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
