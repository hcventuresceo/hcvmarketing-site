import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { WhoWeWorkWith } from './components/WhoWeWorkWith';
import { ServicesPreview } from './components/ServicesPreview';
import { PlaybookDownload } from './components/PlaybookDownload';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingForm } from './components/BookingForm';
import { FlipSide } from './components/FlipSide';
import { ServicesPage } from './components/ServicesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { AboutPage } from './components/AboutPage';
import { SEO } from './components/SEO';
import { StructuredData } from './components/StructuredData';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'booking' | 'flipside' | 'services' | 'casestudies' | 'about'>('home');

  // Scroll to top whenever view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Make navigation functions available globally
  (window as any).navigateToBooking = () => setCurrentView('booking');
  (window as any).navigateToFlipSide = () => setCurrentView('flipside');
  (window as any).navigateToHome = () => setCurrentView('home');
  (window as any).navigateToServices = () => setCurrentView('services');
  (window as any).navigateToCaseStudies = () => setCurrentView('casestudies');
  (window as any).navigateToAbout = () => setCurrentView('about');

  if (currentView === 'booking') {
    return (
      <>
        <SEO 
          title="Book Your Call | Hudson & Co Marketing"
          description="Schedule your strategy call with Hudson & Co Marketing. Let's discuss your growth goals."
          path="/booking"
        />
        <StructuredData />
        <BookingForm />
      </>
    );
  }

  if (currentView === 'flipside') {
    return (
      <>
        <SEO 
          title="Early-Stage Founders | Hudson & Co Marketing"
          description="Growth execution for early-stage founders under $100K revenue."
          path="/early-stage"
        />
        <StructuredData />
        <FlipSide />
      </>
    );
  }

  if (currentView === 'services') {
    return (
      <>
        <SEO 
          title="Services | Hudson & Co Marketing - Growth Execution & GTM Strategy"
          description="Expert paid ads, lead generation, revenue operations, and GTM strategy for founder-led businesses."
          path="/services"
        />
        <StructuredData />
        <ServicesPage />
      </>
    );
  }

  if (currentView === 'casestudies') {
    return (
      <>
        <SEO 
          title="Case Studies | Hudson & Co Marketing - Real Results for Real Businesses"
          description="See how we've helped founder-led businesses achieve 45× view increases, 4× CPA decreases, and $2M+ in revenue."
          path="/case-studies"
        />
        <StructuredData />
        <CaseStudiesPage />
      </>
    );
  }

  if (currentView === 'about') {
    return (
      <>
        <SEO 
          title="About | Hudson & Co Marketing - Execution-First Growth Partners"
          description="Meet the team behind Hudson & Co Marketing. Senior-level marketers who've scaled businesses from zero to millions."
          path="/about"
        />
        <StructuredData />
        <AboutPage />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <SEO />
      <StructuredData />
      <Hero />
      <LogoMarquee />
      <WhoWeWorkWith />
      <ServicesPreview />
      <PlaybookDownload />
      <FinalCTA />
      <Footer />
    </div>
  );
}