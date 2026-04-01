import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import { WebDev, MobileApps, AIServices, CloudServices, TestingServices, ConsultingServices } from './pages/ServicePages';
import { CaseStudies, Blog, Contact, Privacy, Terms } from './pages/OtherPages';
import BlogForm from './admin/BlogForm';
import BlogDashboard from './admin/BlogDashboard';
import EditBlog from './admin/EditBlog';
import BlogDetails from './components/BlogDetails';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web" element={<WebDev />} />
          <Route path="/services/mobile" element={<MobileApps />} />
          <Route path="/services/ai" element={<AIServices />} />
          <Route path="/services/cloud" element={<CloudServices />} />
          <Route path="/services/testing" element={<TestingServices />} />
          <Route path="/services/consulting" element={<ConsultingServices />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-of-service" element={<Terms />} />

          <Route path="/admin_createBlog" element={<BlogForm />} />
          <Route path="/admin_dashboardBlog" element={<BlogDashboard />} />
          <Route path="/admin_editBlog/:id" element={<EditBlog />} />

          <Route path= "/blog/details/:slug" element={<BlogDetails />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
