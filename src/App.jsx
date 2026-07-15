import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import ServiceDesign from "./pages/ServiceDesign.jsx";
import ServiceResidential from "./pages/ServiceResidential.jsx";
import ServiceInstallation from "./pages/ServiceInstallation.jsx";
import ServiceMaintenance from "./pages/ServiceMaintenance.jsx";
import ServiceCommercial from "./pages/ServiceCommercial.jsx";
import ServicePackages from "./pages/ServicePackages.jsx";
import Process from "./pages/Process.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Contact from "./pages/Contact.jsx";
import Questionnaire from "./pages/Questionnaire.jsx";
import PortfolioLanding from "./pages/PortfolioLanding.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About — canonical /about-us, redirect legacy /about */}
        <Route path="/about-us" element={<About />} />
        <Route path="/about" element={<Navigate to="/about-us" replace />} />

        {/* Process ("How It Works" in nav) */}
        <Route path="/process" element={<Process />} />

        {/* Services hub — canonical slug, redirect legacy /services */}
        <Route path="/ecological-landscaping-services" element={<Services />} />
        <Route path="/services" element={<Navigate to="/ecological-landscaping-services" replace />} />
        <Route path="/services/design" element={<ServiceDesign />} />
        <Route path="/services/residential" element={<ServiceResidential />} />
        <Route path="/services/installation" element={<ServiceInstallation />} />
        <Route path="/services/maintenance" element={<ServiceMaintenance />} />
        <Route path="/services/commercial" element={<ServiceCommercial />} />

        {/* Packages — canonical /design-packages, redirect legacy /packages */}
        <Route path="/design-packages" element={<ServicePackages />} />
        <Route path="/packages" element={<Navigate to="/design-packages" replace />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<CaseStudy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Contact — canonical /contact-us, redirect legacy /contact */}
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />

        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/portfolio-landing" element={<PortfolioLanding />} />
      </Routes>
    </>
  );
}
