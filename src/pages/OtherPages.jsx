import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Send, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../api/api';

// ============ shared hook ============
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

// ============ CASE STUDIES ============
const cases = [
  {
    tag: 'Web Development', color: '#00d4ff', client: 'FinFlow Corp',
    title: 'Enterprise Banking Platform Modernization',
    problem: 'Legacy system causing 40% downtime, poor UX, and costly maintenance.',
    solution: 'Built a modern React + Node.js microservices architecture with real-time data.',
    result: '99.9% uptime, 60% reduction in load time, $2M annual savings.',
  },
  {
    tag: 'Mobile App', color: '#7c3aed', client: 'HealthPulse',
    title: 'Telemedicine App with AI Triage',
    problem: 'Hospital needed to reduce ER overcrowding and improve patient routing.',
    solution: 'Developed Flutter app with AI-powered symptom checker and appointment system.',
    result: '35% reduction in ER visits, 50K+ active users within 3 months.',
  },
  {
    tag: 'AI Solutions', color: '#06ffa5', client: 'RetailMax',
    title: 'AI-Powered Inventory Forecasting',
    problem: 'Overstocking costing $3M/year, frequent stockouts damaging brand reputation.',
    solution: 'Built ML forecasting model integrating sales, weather, and event data.',
    result: '42% reduction in stockouts, $2.4M annual cost savings achieved.',
  },
  {
    tag: 'Cloud Migration', color: '#f59e0b', client: 'EduLearn Platform',
    title: 'Multi-Region Cloud Infrastructure',
    problem: 'On-premise servers failing under peak load with 100K concurrent students.',
    solution: 'Migrated to AWS with auto-scaling, CloudFront CDN, and RDS cluster.',
    result: 'Zero downtime during peak, 3x performance improvement, 30% cost reduction.',
  },
];

export function CaseStudies() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '100px 0 60px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <p className="section-label">Case Studies</p>
          <h1 className="section-title">Real Results for Real Businesses</h1>
          <p className="section-sub" style={{ margin: '0 auto 0' }}>Explore our proven track record of delivering impactful technology solutions.</p>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {cases.map(c => (
              <div key={c.title} className="card" style={{ borderLeft: `3px solid ${c.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <span style={{ padding: '4px 12px', borderRadius: 50, background: `${c.color}15`, color: c.color, fontSize: '0.78rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginRight: 12 }}>{c.tag}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{c.client}</span>
                  </div>
                  <ArrowUpRight size={18} color="var(--text-muted)" />
                </div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.3rem', marginBottom: 24 }}>{c.title}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                  {[
                    { label: 'Problem', text: c.problem, color: '#f43f5e' },
                    { label: 'Solution', text: c.solution, color: c.color },
                    { label: 'Result', text: c.result, color: '#06ffa5' },
                  ].map(item => (
                    <div key={item.label}>
                      <p style={{ fontSize: '0.72rem', letterSpacing: 2, textTransform: 'uppercase', color: item.color, fontWeight: 700, marginBottom: 8 }}>{item.label}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
              Start Your Success Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============ BLOG ============
export function Blog() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async (pageNumber) => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseURL}/admin/blogs?page=${pageNumber} `);
      setBlogs(res.data.content || []);
      setTotalPages(res.data.totalPages || 0);
      setPage(res.data.number || 0);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlogs(page); }, [page]);

  const stripHtml = (html) => {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
  };

  const handleReadMore = (id) => navigate(`/blog/details/${id}`);

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '100px 0 60px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20%', right: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <p className="section-label">Insights</p>
          <h1 className="section-title">Tech Blog & Insights</h1>
          <p className="section-sub">Industry trends, tutorials, and deep-dives on AI, web development, cloud, and digital transformation.</p>
        </div>
      </section>

      <section style={{ padding: '20px 0 100px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {blogs.map(blog => (
              <div key={blog.id} className="card" style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{ padding: '3px 10px', borderRadius: 50, background: '#00d4ff15', color: '#00d4ff', fontSize: '0.75rem', fontWeight: 700 }}>
                    {blog.category}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    {new Date(blog.createdAt).toDateString()}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.05rem', marginBottom: 10 }}>{blog.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: 16 }}>
                  {stripHtml(blog.content).slice(0, 120)}...
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span onClick={() => handleReadMore(blog.id)} style={{ cursor: 'pointer', color: '#00d4ff', fontWeight: 600 }}>
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ============ CONTACT ============
export function Contact() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    color: 'var(--text)',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'DM Sans, sans-serif',
    boxSizing: 'border-box',
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${baseURL}/contact`, form);
      if (form.name && form.email && form.message) setSent(true);
      alert(res.data);
    } catch (err) {
      console.log("error contact: ", err);
    }
  };

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ padding: isMobile ? '60px 0 40px' : '100px 0 60px', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '30%', left: '20%',
          width: 500, height: 400,
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <p className="section-label">Get In Touch</p>
          <h1 className="section-title" style={{ fontSize: isMobile ? 'clamp(1.6rem, 6vw, 2.2rem)' : undefined }}>
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: isMobile ? '0.95rem' : '1.1rem', maxWidth: 520, lineHeight: 1.7 }}>
            Ready to transform your business? Reach out and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: isMobile ? '24px 0 64px' : '40px 0 100px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1.5fr',
            gap: isMobile ? 32 : isTablet ? 40 : 64,
            alignItems: 'start',
          }}>

            {/* ── Info Panel ── */}
            <div>
              {/* Contact items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                {[
                  { icon: Mail, label: 'Email Us', value: 'info@auroneqis.com', color: '#00d4ff' },
                  { icon: Phone, label: 'Call Us', value: '+91 7995582405', color: '#7c3aed' },
                  { icon: Phone, label: 'HR', value: '+91 7799382405', color: '#b73aed' },
                  { icon: MapPin, label: 'Location', value: 'Hyderabad', color: '#06ffa5' },
                ].map(({ icon: Ico, label, value, color }) => (
                  <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                      background: `${color}15`, border: `1px solid ${color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Ico size={20} color={color} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 2 }}>{label}</p>
                      <p style={{ fontWeight: 600, fontSize: isMobile ? '0.9rem' : '1rem', wordBreak: 'break-word' }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategy call card */}
              <div style={{ padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16 }}>
                <h4 style={{ fontFamily: 'Syne', fontWeight: 700, marginBottom: 8 }}>Free Strategy Call</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: 16, lineHeight: 1.6 }}>
                  Schedule a 30-min call with our experts to discuss your project and goals.
                </p>
                <Link
                  to="#"
                  className="btn-outline"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', display: 'flex', textAlign: 'center' }}
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>

            {/* ── Contact Form ── */}
            <div className="card" style={{ padding: isMobile ? '24px 16px' : '32px' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'rgba(6,255,165,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}>
                    <Send size={28} color="var(--accent-3)" />
                  </div>
                  <h3 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.4rem', marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-muted)' }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div>
                  <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.3rem', marginBottom: 24 }}>Send Us a Message</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

                    {/* Name + Email — side by side on tablet+, stacked on mobile */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                      gap: 16,
                    }}>
                      {[
                        { key: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                        { key: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
                      ].map(f => (
                        <div key={f.key}>
                          <label style={{ display: 'block', marginBottom: 8, fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>{f.label}</label>
                          <input
                            type={f.type}
                            placeholder={f.placeholder}
                            value={form[f.key]}
                            onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                            style={inputStyle}
                            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                            onBlur={e => e.target.style.borderColor = 'var(--border)'}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Service select */}
                    <div>
                      <label style={{ display: 'block', marginBottom: 8, fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>Service Interested In</label>
                      <select
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        style={{ ...inputStyle, color: form.service ? 'var(--text)' : 'var(--text-muted)' }}
                      >
                        <option value="">Select a service</option>
                        {['WEB_DEVELOPMENT', 'MOBILE_APPLICATIONS', 'AI_MACHINE_LEARNING', 'CLOUD_SOLUTIONS', 'SOFTWARE_TESTING', 'IT_CONSULTING'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display: 'block', marginBottom: 8, fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>Message</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your project..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '14px', display: 'flex', alignItems: 'center', gap: 8 }}
                    >
                      Send Message <Send size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

// ============ PRIVACY ============
export function Privacy() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="section-label">Legal</p>
          <h1 className="section-title">Privacy Policy</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: 40 }}>Last updated: January 1, 2025</p>
          {[
            { title: 'Data We Collect', text: 'We collect information you provide directly to us, including name, email address, and project details when you contact us. We also automatically collect certain usage data when you visit our website.' },
            { title: 'How We Use Your Data', text: "Your data is used solely to respond to inquiries, deliver services, and improve our platform. We never sell personal data to third parties and do not use it for advertising purposes." },
            { title: 'Cookies', text: 'We use minimal, functional cookies to operate our website. Analytics cookies (if any) are anonymized. You can control cookie preferences through your browser settings.' },
            { title: 'Data Security', text: 'We implement industry-standard security measures including TLS encryption, access controls, and regular audits to protect your information against unauthorized access.' },
            { title: 'Your Rights', text: 'You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at privacy@auroneqis.com.' },
          ].map(section => (
            <div key={section.title} style={{ marginBottom: 36 }}>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12, color: 'var(--accent)' }}>{section.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{section.text}</p>
            </div>
          ))}
          <div style={{ marginTop: 48 }}>
            <Link to="/contact" className="btn-outline">Contact for Queries <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============ TERMS ============
export function Terms() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="section-label">Legal</p>
          <h1 className="section-title">Terms of Service</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: 40 }}>Last updated: January 1, 2025</p>
          {[
            { title: 'Acceptance of Terms', text: 'By accessing or using Auroneqis services, you agree to be bound by these terms. If you do not agree, please do not use our services.' },
            { title: 'Services', text: 'Auroneqis provides technology consulting, development, and related services as agreed in individual project contracts. Scope, timelines, and deliverables are defined per engagement.' },
            { title: 'Intellectual Property', text: 'Upon full payment, clients receive ownership of custom deliverables created specifically for them. Auroneqis retains rights to proprietary frameworks, tools, and methodologies.' },
            { title: 'Confidentiality', text: 'Both parties agree to maintain confidentiality of sensitive business information shared during engagements, governed by separate NDAs where applicable.' },
            { title: 'Limitation of Liability', text: 'Auroneqis total liability shall not exceed the total fees paid for the specific service giving rise to the claim within the preceding 12 months.' },
          ].map(section => (
            <div key={section.title} style={{ marginBottom: 36 }}>
              <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12, color: 'var(--accent)' }}>{section.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{section.text}</p>
            </div>
          ))}
          <div style={{ marginTop: 48 }}>
            <Link to="/contact" className="btn-outline">Contact for Queries <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
