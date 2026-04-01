import { Code2, Smartphone, Brain, Cloud, TestTube2, Lightbulb } from 'lucide-react';
import ServiceDetail from './ServiceDetail';
import Reactjs from "../assets/react.png";
import ai from "../assets/ai.png";
import Vue from "../assets/vuejs.png";
import aws from "../assets/aws.png";
import Consult from "../assets/consult.png";
import testing from "../assets/testing.png";

export function WebDev() {
  return <ServiceDetail
    icon={Reactjs} color="#00d4ff"
    title="Web & Application Development"
    overview="We provide cutting-edge web and application development including responsive web development, frontend website development, and custom web development services to build high-performance digital platforms that convert visitors into customers."
    features={[
      'Responsive Web Development',
      'Ecommerce Web Development',
      'Front End & Back End Development',
      'Enterprise Web Application Development',
      'Web Based Development',
      'Custom UI/UX Design',
    ]}
    whyUs={[
      { title: 'SEO-Friendly Development', desc: 'Every site we build is optimized for search engines from the ground up.' },
      { title: 'Fast Loading & Scalable Architecture', desc: 'Performance-first approach ensuring sub-2s load times across devices.' },
      { title: 'Secure Coding Standards', desc: 'OWASP-compliant development with regular security audits built in.' },
      { title: 'Custom UI/UX Design', desc: 'Pixel-perfect interfaces designed to maximize user engagement and conversions.' },
    ]}
    cta1="Build Your Website Today"
    cta2="Get a Free Quote"
  />;
}

export function MobileApps() {
  return <ServiceDetail
    icon={Vue} color="#7c3aed"
    title="Mobile Application Development"
    overview="We are expert mobile app developers delivering mobile application development, Android app development, and cross-platform mobile development solutions that users love and businesses rely on."
    features={[
      'Custom Mobile App Development',
      'Flutter Development',
      'Android App Development',
      'iOS App Development',
      'Enterprise Mobile App Development',
      'Secure Mobile App Development',
    ]}
    whyUs={[
      { title: 'High-Performance Apps', desc: 'Optimized for speed, battery efficiency, and smooth 60fps user experiences.' },
      { title: 'Scalable Architecture', desc: 'Built to handle millions of users as your business grows.' },
      { title: 'User-Friendly Design', desc: 'Intuitive interfaces that follow platform design guidelines and delight users.' },
      { title: 'End-to-End Development', desc: 'From concept to App Store — we handle every step of the journey.' },
    ]}
    cta1="Launch Your App Now"
    cta2="Talk to Experts"
  />;
}

export function AIServices() {
  return <ServiceDetail
    icon={ai} color="#06ffa5"
    title="AI & Machine Learning Solutions"
    overview="We deliver cutting-edge artificial intelligence and applications, including AI automation solutions, generative AI solutions, and machine learning development services that transform how businesses operate and compete."
    features={[
      'AI Business Solutions',
      'AI Customer Service Solutions',
      'Data Analytics and AI',
      'AI Consulting Services',
      'Machine Learning Development',
      'Generative AI Solutions',
    ]}
    whyUs={[
      { title: 'Advanced AI Models', desc: 'Leverage state-of-the-art LLMs, computer vision, and predictive analytics.' },
      { title: 'Business-Focused Solutions', desc: 'Every AI implementation is designed to solve real business problems.' },
      { title: 'Automation-Driven Growth', desc: 'Automate repetitive workflows and unlock up to 40% efficiency gains.' },
      { title: 'Ethical AI Practices', desc: 'Responsible, transparent, and explainable AI systems you can trust.' },
    ]}
    cta1="Implement AI Today"
    cta2="Get AI Strategy"
  />;
}

export function CloudServices() {
  return <ServiceDetail
    icon={aws} color="#f59e0b"
    title="Cloud Infrastructure & Solutions"
    overview="We provide scalable cloud computing services using Amazon Web Services, Google Cloud Computing, and Windows Azure Platform, helping businesses migrate, optimize, and secure their infrastructure in the cloud."
    features={[
      'Cloud Migration Services',
      'Hybrid Cloud Solutions',
      'Cloud Infrastructure Services',
      'Cloud Security Services',
      'AWS Cloud Services',
      'Cost Optimization & Management',
    ]}
    whyUs={[
      { title: 'Secure Cloud Architecture', desc: 'Multi-layered security with compliance-ready infrastructure by design.' },
      { title: 'Cost Optimization', desc: 'Reduce cloud spend by 20–40% through right-sizing and smart resource management.' },
      { title: 'High Availability', desc: '99.99% uptime SLAs backed by multi-region failover and disaster recovery.' },
      { title: 'Expert Certified Team', desc: 'AWS, Azure, and GCP certified architects with deep cloud expertise.' },
    ]}
    cta1="Move to Cloud Now"
    cta2="Start Cloud Journey"
  />;
}

export function TestingServices() {
  return <ServiceDetail
    icon={testing} color="#f43f5e"
    title="Software Testing & QA Services"
    overview="We provide reliable quality assurance services, including manual testing, automation testing services, and API software testing to ensure every release meets the highest standards of performance and security."
    features={[
      'Manual Testing',
      'Regression Testing in Software Testing',
      'Test Automation in Software Testing',
      'Software Performance Testing',
      'Security Testing Services',
      'End-to-End Testing Services',
    ]}
    whyUs={[
      { title: 'Bug-Free Delivery', desc: 'Comprehensive testing coverage ensures zero critical bugs reach production.' },
      { title: 'Faster Releases', desc: 'Shift-left testing and CI/CD integration accelerates your development cycle.' },
      { title: 'High-Quality Assurance', desc: 'Rigorous processes aligned with ISO 29119 quality standards.' },
      { title: 'Expert QA Team', desc: 'Certified QA engineers with expertise across testing tools and frameworks.' },
    ]}
    cta1="Ensure Quality Now"
    cta2="Test Your Product"
  />;
}

export function ConsultingServices() {
  return <ServiceDetail
    icon={Consult} color="#8b5cf6"
    title="IT Consulting & Strategy Services"
    overview="We offer comprehensive technology consulting services, including digital transformation consulting, IT strategy consulting, and enterprise IT consulting to help your organization navigate the modern technology landscape with confidence."
    features={[
      'Business Technology Consulting',
      'IT Infrastructure Consulting',
      'Artificial Intelligence Consulting',
      'Custom Software Consulting',
      'Digital Transformation Consulting',
      'IT Strategy & Roadmap Planning',
    ]}
    whyUs={[
      { title: 'Strategic Guidance', desc: 'Tailored technology roadmaps aligned with your business objectives.' },
      { title: 'Industry Expertise', desc: 'Cross-industry experience spanning fintech, healthcare, retail, and more.' },
      { title: 'ROI-Driven Solutions', desc: 'Every recommendation is backed by measurable business impact analysis.' },
      { title: 'Vendor-Neutral Advice', desc: 'Objective recommendations focused solely on your best interests.' },
    ]}
    cta1="Get Expert Advice"
    cta2="Book Consultation"
  />;
}
