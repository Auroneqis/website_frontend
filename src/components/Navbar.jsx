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

  useEffect(() => {
    setOpen(false);
    setDropOpen(false);
  }, [location]);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(5,8,16,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
    }}>

      {/* Container */}
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 'clamp(60px, 8vw, 72px)',
          gap: '10px',
        }}
      >

        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <div style={{
            width: 'clamp(36px, 4vw, 48px)',
            height: 'clamp(36px, 4vw, 48px)',
            minWidth: 'clamp(36px, 4vw, 48px)',
            borderRadius: 10,
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(0,212,255,0.4)',
            overflow: 'hidden'
          }}>
            <img
              src={Logo}
              alt="Auroneqis_logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'fill'
              }}
            />
          </div>

          <span style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1rem, 2vw, 1.4rem)',
            letterSpacing: '-0.5px',
            whiteSpace: 'nowrap'
          }}>
            Auro<span>neqis</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            listStyle: 'none'
          }}
        >
          {navLinks.map(link =>
            link.dropdown ? (
              <div
                key={link.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
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
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'rgba(8,13,26,0.98)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 14,
                    padding: '8px',
                    minWidth: 240,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  }}>
                    {link.dropdown.map(s => (
                      <Link
                        key={s.path}
                        to={s.path}
                        style={{
                          display: 'block',
                          padding: '10px 16px',
                          borderRadius: 8,
                          color: location.pathname === s.path
                            ? 'var(--accent)'
                            : 'var(--text-muted)',
                          fontSize: '0.9rem',
                          background:
                            location.pathname === s.path
                              ? 'rgba(0,212,255,0.08)'
                              : 'transparent',
                        }}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  padding: '8px 14px',
                  borderRadius: 8,
                  color:
                    location.pathname === link.path
                      ? 'var(--accent)'
                      : 'var(--text-muted)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  background:
                    location.pathname === link.path
                      ? 'rgba(0,212,255,0.08)'
                      : 'transparent',
                }}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.875rem' }}
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 8,
            width: 40,
            height: 40,
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text)',
            flexShrink: 0
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: 'rgba(5,8,16,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border)',
          padding: '16px 0',
        }}>
          <div className="container">
            {navLinks.map(link =>
              link.dropdown ? (
                <div key={link.name}>
                  <div style={{
                    padding: '10px 4px',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    {link.name}
                  </div>

                  {link.dropdown.map(s => (
                    <Link
                      key={s.path}
                      to={s.path}
                      style={{
                        display: 'block',
                        padding: '8px 16px',
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        borderLeft: '2px solid var(--border)',
                      }}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    display: 'block',
                    padding: '12px 4px',
                    color:
                      location.pathname === link.path
                        ? 'var(--accent)'
                        : 'var(--text)',
                    fontWeight: 500,
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {link.name}
                </Link>
              )
            )}

            <Link
              to="/contact"
              className="btn-primary"
              style={{
                marginTop: 16,
                width: '100%',
                justifyContent: 'center'
              }}
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          
          nav .container {
            padding: 0 12px;
          }
        }
      `}</style>
    </nav>
  );
};