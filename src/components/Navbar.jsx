import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from "../assets/auroneqis_logo.png";

const services = [
  { name: 'Web Development', path: '/services/web' },
  { name: 'Mobile Applications', path: '/services/mobile' },
  { name: 'AI & Machine Learning', path: '/services/ai' },
  { name: 'Cloud Solutions', path: '/services/cloud' },
  { name: 'Software Testing', path: '/services/testing' },
  { name: 'IT Consulting', path: '/services/consulting' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', dropdown: services },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  useEffect(() => { setOpen(false); setDropOpen(false); }, [location]);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(5,8,16,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            backgroundColor: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(0,212,255,0.4)',
          }}>
            <img src={Logo} alt="Auroneqis_logo" width={"80px"} height={"60px"} />
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>
            Auro<span style={{ color: 'var(--accent)' }}>neqis</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none' }} className="desktop-nav">
          {navLinks.map(link => (
            link.dropdown ? (
              <div key={link.name} style={{ position: 'relative' }}
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}>
                <Link
                  to={link.path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '8px 14px',
                    color: location.pathname.startsWith('/services')
                      ? 'var(--accent)'
                      : 'var(--text-muted)',
                    textDecoration: 'none',
                  }}
                >
                  {link.name} <ChevronDown size={14} />
                </Link>
                {dropOpen && (
                  <div style={{
                    position: 'absolute', top: '100%', left: '0', transform: 'none',
                    background: 'rgba(8,13,26,0.98)', backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14,
                    padding: '8px', minWidth: 240, boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    animation: 'fadeUp 0.2s ease',
                  }}>
                    {link.dropdown.map(s => (
                      <Link key={s.path} to={s.path} style={{
                        display: 'block', padding: '10px 16px', borderRadius: 8,
                        color: location.pathname === s.path ? 'var(--accent)' : 'var(--text-muted)',
                        fontSize: '0.9rem', transition: 'all 0.2s',
                        background: location.pathname === s.path ? 'rgba(0,212,255,0.08)' : 'transparent',
                      }}
                        onMouseEnter={e => { e.target.style.background = 'rgba(0,212,255,0.08)'; e.target.style.color = 'var(--accent)'; }}
                        onMouseLeave={e => {
                          e.target.style.background = location.pathname === s.path ? 'rgba(0,212,255,0.08)' : 'transparent';
                          e.target.style.color = location.pathname === s.path ? 'var(--accent)' : 'var(--text-muted)';
                        }}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.name} to={link.path} style={{
                padding: '8px 14px', borderRadius: 8,
                color: location.pathname === link.path ? 'var(--accent)' : 'var(--text-muted)',
                fontSize: '0.95rem', transition: 'all 0.2s', fontWeight: 500,
                background: location.pathname === link.path ? 'rgba(0,212,255,0.08)' : 'transparent',
              }}>
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="desktop-nav">
          <Link to="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
            Get Free Consultation
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="mobile-menu-btn" style={{
          background: 'none', border: '1px solid var(--border)', borderRadius: 8,
          padding: 8, cursor: 'pointer', color: 'var(--text)', display: 'none',
        }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: 'rgba(5,8,16,0.98)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border)', padding: '16px 0',
          animation: 'fadeUp 0.2s ease',
        }}>
          <div className="container">
            {navLinks.map(link => (
              link.dropdown ? (
                <div key={link.name}>
                  <div style={{ padding: '10px 4px', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem' }}>{link.name}</div>
                  {link.dropdown.map(s => (
                    <Link key={s.path} to={s.path} style={{
                      display: 'block', padding: '8px 16px', color: 'var(--text-muted)', fontSize: '0.9rem',
                      borderLeft: '2px solid var(--border)',
                    }}>{s.name}</Link>
                  ))}
                </div>
              ) : (
                <Link key={link.name} to={link.path} style={{
                  display: 'block', padding: '12px 4px',
                  color: location.pathname === link.path ? 'var(--accent)' : 'var(--text)',
                  fontWeight: 500, borderBottom: '1px solid var(--border)',
                }}>{link.name}</Link>
              )
            ))}
            <Link to="/contact" className="btn-primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
