import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, CheckCircle2, Users, Award, Globe, Zap } from 'lucide-react';
import about from "../assets/about.png";

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
  { name: 'Hyndhavi Paaraju', role: 'HR', bg: '#f59e0b' },
  { name: 'Jhansi Laxmi Chinthakinda', role: 'Digital Marketing Executive', bg: '#06ffa5' },
];

export default function About() {
  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ padding: '100px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div className="container">
          {/* 👇 ADD THIS FLEX WRAPPER */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
            flexWrap: 'wrap' // responsive
          }}>

            {/* LEFT CONTENT */}
            <div style={{ maxWidth: 600 }}>
              <p className="section-label">About Us</p>
              <h1 className="section-title">
                We Build Technology <br />
                <span className="gradient-text">That Drives Change</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: 40 }}>
                Auroneqis is a forward-thinking technology company specializing in delivering innovative digital solutions tailored to modern business needs.
              </p>
              <Link to="/contact" className="btn-primary">
                Work With Our Team <ArrowRight size={16} />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img src={about} alt="about" style={{ width: 350, height: 'auto' }} />
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '80px 0', background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { Icon: Target, color: '#00d4ff', label: 'Our Mission', title: 'Empowering Innovation', text: 'To empower businesses with scalable, secure, and intelligent technology solutions that accelerate growth and create lasting competitive advantages.' },
              { Icon: Eye, color: '#7c3aed', label: 'Our Vision', title: 'Global Leadership', text: 'To become a global leader in digital transformation and AI-driven innovation, helping every business unlock its fullest potential through technology.' },
            ].map(({ Icon, color, label, title, text }) => (
              <div key={label} className="card" style={{ borderColor: `${color}30` }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon size={24} color={color} />
                </div>
                <p style={{ fontSize: '0.75rem', letterSpacing: 2, textTransform: 'uppercase', color: color, fontWeight: 600, marginBottom: 8 }}>{label}</p>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.4rem', marginBottom: 12 }}>{title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p className="section-label">Expertise</p>
              <h2 className="section-title">What We Excel At</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 36 }}>
                Our team brings deep expertise across every layer of the modern technology stack, from front-end interfaces to AI infrastructure.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {expertise.map(e => (
                  <div key={e} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <CheckCircle2 size={18} color="var(--accent-3)" strokeWidth={2.5} />
                    <span style={{ fontSize: '0.95rem' }}>{e}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { val: '200+', label: 'Projects Delivered', color: 'var(--accent)' },
                { val: '50+', label: 'Happy Clients', color: 'var(--accent-2)' },
                { val: '5+', label: 'Years of Excellence', color: 'var(--accent-3)' },
                { val: '99%', label: 'Client Satisfaction', color: '#f59e0b' },
              ].map(s => (
                <div key={s.label} className="card" style={{ textAlign: 'center', padding: '32px 20px' }}>
                  <p style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '2.2rem', color: s.color, marginBottom: 4 }}>{s.val}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 0', background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-label">Our Values</p>
            <h2 className="section-title">Why Clients Trust Us</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {values.map(v => (
              <div key={v.title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'rgba(0,212,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <v.icon size={22} color="var(--accent)" />
                </div>
                <h4 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: 8 }}>{v.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-label">Leadership</p>
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {team.map(m => (
              <div key={m.name} className="card" style={{ textAlign: 'center' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${m.bg}, ${m.bg}88)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', fontFamily: 'Syne', fontWeight: 800, fontSize: '1.8rem', color: '#000',
                }}>{m.name[0]}</div>
                <h4 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: 4 }}>{m.name}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-2)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Ready to Work Together?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 36, fontSize: '1.1rem' }}>Let's build something extraordinary for your business.</p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
