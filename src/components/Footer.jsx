import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Share2, Users, Code, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from 'react';
import Logo from "../assets/auroneqis_logo.png";

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}

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
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  return (
    <footer style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>

      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 2,
        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
      }} />

      {/* ── Newsletter / CTA banner ── */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: isMobile ? '36px 0' : '48px 0' }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: isMobile ? 20 : 24,
        }}>
          <div>
            <p className="section-label">Stay Updated</p>
            <h3 style={{ fontFamily: 'Syne', fontWeight: 600, fontSize: isMobile ? '1.3rem' : '1.6rem', lineHeight: 1.3 }}>
              Transform Your Business{' '}
              <span className="gradient-text">With Technology</span>
            </h3>
          </div>
          <Link
            to="/contact"
            className="btn-primary"
            style={{
              flexShrink: 0,
              width: isMobile ? '100%' : 'auto',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Book Free Strategy Call <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="container" style={{ padding: isMobile ? '48px 16px 40px' : '64px 24px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr 1fr'          // 2 cols on mobile
            : isTablet
              ? '1fr 1fr 1fr'    // 3 cols on tablet (brand spans full row via order trick below)
              : '1.4fr 1fr 1fr 1fr', // 4 cols on desktop
          gap: isMobile ? '36px 24px' : 48,
        }}>

          {/* Brand — full width on mobile & tablet */}
          <div style={{
            gridColumn: isMobile ? '1 / -1' : isTablet ? '1 / -1' : 'auto',
          }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, textDecoration: 'none' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                backgroundColor: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <img src={Logo} alt="logo" width={80} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.3rem' }}>
                Auro<span>neqis</span>
              </span>
            </Link>
            <p style={{
              color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7,
              marginBottom: 20, maxWidth: isTablet ? '100%' : 320,
            }}>
              Empowering businesses with scalable, secure, and intelligent technology solutions worldwide.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[Share2, Users, Code].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 38, height: 38, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
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
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem', color: 'var(--text)' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, padding: 0, margin: 0 }}>
              {services.map(s => (
                <li key={s.path}>
                  <Link to={s.path} style={{ color: 'var(--text-muted)', fontSize: '0.875rem', transition: 'color 0.2s', textDecoration: 'none' }}
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
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem', color: 'var(--text)' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, padding: 0, margin: 0 }}>
              {company.map(c => (
                <li key={c.path}>
                  <Link to={c.path} style={{ color: 'var(--text-muted)', fontSize: '0.875rem', transition: 'color 0.2s', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — full width on mobile so it doesn't get squished */}
          <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem', color: 'var(--text)' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { Icon: Mail, text: 'info@auroneqis.com' },
                { Icon: Phone, text: '+91 7995582405' },
                { Icon: Phone, text: '+91 7799382405' },
                { Icon: MapPin, text: 'Hyderabad' },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                    background: 'rgba(0,212,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={14} color="var(--accent)" />
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', wordBreak: 'break-word' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '20px 0' }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? 12 : 0,
          textAlign: isMobile ? 'center' : 'left',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
            © {new Date().getFullYear()} Auroneqis. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'Privacy Policy', path: '/privacy' },
              { label: 'Terms of Service', path: '/terms' },
            ].map(item => (
              <Link
                key={item.label}
                to={item.path}
                style={{ color: 'var(--text-muted)', fontSize: '0.85rem', transition: 'color 0.2s', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};
