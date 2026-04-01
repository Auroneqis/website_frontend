import { useState } from 'react';
import { MessageCircle, X, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      {open && (
        <div style={{
          position: 'absolute', bottom: 64, right: 0,
          width: 300, background: 'var(--bg-card)',
          border: '1px solid var(--border-accent)', borderRadius: 20,
          padding: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          animation: 'fadeUp 0.3s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Zap size={16} color="#fff" />
            </div>
            <div>
              <p style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.95rem' }}>Auroneqis AI</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>● Online</p>
            </div>
          </div>
          <div style={{
            background: 'rgba(0,212,255,0.06)', borderRadius: 12, padding: '14px 16px',
            marginBottom: 16, border: '1px solid rgba(0,212,255,0.12)',
          }}>
            <p style={{ fontSize: '0.9rem' }}>Hi! 👋 Need help with your project?</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { label: 'Get a Quote', path: '/contact' },
              { label: 'Talk to Expert', path: '/contact' },
              { label: 'Explore Services', path: '/services' },
            ].map(opt => (
              <Link key={opt.label} to={opt.path} onClick={() => setOpen(false)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 14px', background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 10, fontSize: '0.875rem', color: 'var(--text)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}>
                {opt.label} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      )}

      <button onClick={() => setOpen(!open)} style={{
        width: 54, height: 54, borderRadius: '50%',
        background: open ? 'var(--bg-card)' : 'linear-gradient(135deg, var(--accent), var(--accent-2))',
        border: open ? '1px solid var(--border-accent)' : 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', boxShadow: '0 4px 24px rgba(0,212,255,0.4)',
        color: '#fff', transition: 'all 0.3s ease',
        animation: open ? 'none' : 'pulse-ring 2s infinite',
      }}>
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <style>{`
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(0,212,255,0.4); }
          70% { box-shadow: 0 0 0 14px rgba(0,212,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,212,255,0); }
        }
      `}</style>
    </div>
  );
}
