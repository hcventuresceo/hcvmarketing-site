import { useState, useEffect } from 'react';
import { trackFormSubmission, trackCalendlyLoad } from '../utils/analytics';

export function BookingForm() {
  const [step, setStep] = useState<'form' | 'calendly'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    website: '',
    businessType: '',
    monthlyRevenue: '',
    helpWith: [] as string[],
    currentCustomers: '',
    whatsBroken: '',
    ranPaidAds: '',
    marketingBudget: '',
    timeline: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateToHome = () => {
    if ((window as any).navigateToHome) {
      (window as any).navigateToHome();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to Zapier webhook or email service
      // Replace ZAPIER_WEBHOOK_URL with your actual webhook URL
      const webhookUrl = 'ZAPIER_WEBHOOK_URL'; // e.g., 'https://hooks.zapier.com/hooks/catch/xxxxx/yyyyy/'
      
      // Format the data for better readability in emails
      const formattedData = {
        ...formData,
        helpWith: formData.helpWith.join(', '),
        submittedAt: new Date().toISOString(),
      };

      // Send to webhook
      if (webhookUrl !== 'ZAPIER_WEBHOOK_URL') {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formattedData),
        });
      }

      // Track form submission for Google Analytics & Google Ads
      trackFormSubmission('Booking Form', formData.monthlyRevenue);

      // Log for debugging (remove in production if not needed)
      console.log('Form submitted:', formattedData);
      
      // Move to Calendly step
      setStep('calendly');
    } catch (error) {
      console.error('Form submission error:', error);
      // Still proceed to calendly even if webhook fails
      setStep('calendly');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleHelpWith = (option: string) => {
    setFormData(prev => ({
      ...prev,
      helpWith: prev.helpWith.includes(option)
        ? prev.helpWith.filter(item => item !== option)
        : [...prev.helpWith, option]
    }));
  };

  if (step === 'calendly') {
    // Track Calendly page view
    trackCalendlyLoad();

    return (
      <div className="min-h-screen bg-[#0B0B0B] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <button
            onClick={navigateToHome}
            className="mb-8 text-white hover:text-[#D4AF37] transition-all duration-600 flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <h2 className="text-4xl mb-4 text-center font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
            Thanks — book your call below.
          </h2>
          <div className="mt-12">
            <iframe
              src="https://calendly.com/admin-hudsoncoventures/30min"
              width="100%"
              height="800"
              frameBorder="0"
              title="Book a call"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <button
          onClick={navigateToHome}
          className="mb-8 text-white hover:text-[#D4AF37] transition-all duration-600 flex items-center gap-2"
        >
          ← Back to Home
        </button>
        <h1 className="text-5xl mb-4 text-center font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
          Let's See If We're a Fit
        </h1>
        <p className="text-center text-white mb-12 max-w-2xl mx-auto">
          We work with founder-led businesses already generating revenue.
          Answer a few questions so we can prepare for your call.
        </p>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Section 1 - Basics */}
          <div 
            className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20"
            style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
          >
            <h3 className="text-2xl mb-6 text-[#F2D27C]">
              Basics
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent placeholder:text-neutral-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent placeholder:text-neutral-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent placeholder:text-neutral-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                  Website / Landing Page
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleChange('website', e.target.value)}
                  className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent placeholder:text-neutral-500"
                />
              </div>
            </div>
          </div>

          {/* Section 2 - Qualification */}
          <div 
            className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20"
            style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
          >
            <h3 className="text-2xl mb-6 text-[#F2D27C]">
              Qualification
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                  What best describes your business? *
                </label>
                <select
                  required
                  value={formData.businessType}
                  onChange={(e) => handleChange('businessType', e.target.value)}
                  className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                >
                  <option value="">Select one...</option>
                  <option value="service">Service-based</option>
                  <option value="ecommerce">Online / eCommerce</option>
                  <option value="saas">SaaS / Tech</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                  Current monthly revenue *
                </label>
                <select
                  required
                  value={formData.monthlyRevenue}
                  onChange={(e) => handleChange('monthlyRevenue', e.target.value)}
                  className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                >
                  <option value="">Select one...</option>
                  <option value="under10k">Under $10k</option>
                  <option value="10k-50k">$10k–$50k</option>
                  <option value="50k-100k">$50k–$100k</option>
                  <option value="100k-250k">$100k-$250K</option>
                  <option value="250k-500k">$250K-$500K</option>
                  <option value="500k-750k">$500k-$750K</option>
                  <option value="750k-1m">$750K-$1M</option>
                  <option value="1m+">$1m+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                  What are you primarily looking for help with? (select all that apply) *
                </label>
                <div className="space-y-3">
                  {['Paid ads', 'Lead generation', 'Funnel / conversion', 'Growth systems / automation', 'GTM strategy', 'Not sure yet'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.helpWith.includes(option)}
                        onChange={() => toggleHelpWith(option)}
                        className="w-4 h-4 text-[#D4AF37] border-[#D4AF37]/30 rounded focus:ring-[#D4AF37]"
                      />
                      <span className="ml-3 text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 - Sales Signal */}
          <div 
            className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20"
            style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
          >
            <h3 className="text-2xl mb-6 text-[#F2D27C]">
              Sales Signal
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                  How are you currently getting customers? *
                </label>
                <textarea
                  required
                  value={formData.currentCustomers}
                  onChange={(e) => handleChange('currentCustomers', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                  What's broken right now? *
                </label>
                <textarea
                  required
                  value={formData.whatsBroken}
                  onChange={(e) => handleChange('whatsBroken', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                  Have you run paid ads before? *
                </label>
                <select
                  required
                  value={formData.ranPaidAds}
                  onChange={(e) => handleChange('ranPaidAds', e.target.value)}
                  className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                >
                  <option value="">Select one...</option>
                  <option value="yes-current">Yes, currently</option>
                  <option value="yes-past">Yes, in the past</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                  What's your monthly marketing budget? *
                </label>
                <select
                  required
                  value={formData.marketingBudget}
                  onChange={(e) => handleChange('marketingBudget', e.target.value)}
                  className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                >
                  <option value="">Select one...</option>
                  <option value="under1k">Under $1k</option>
                  <option value="1k-3k">$1k–$3k</option>
                  <option value="3k-10k">$3k–$10k</option>
                  <option value="10k+">$10k+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 4 - Intent */}
          <div 
            className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20"
            style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
          >
            <h3 className="text-2xl mb-6 text-[#F2D27C]">
              Intent
            </h3>
            <div>
              <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                If we're aligned, how soon are you looking to start? *
              </label>
              <select
                required
                value={formData.timeline}
                onChange={(e) => handleChange('timeline', e.target.value)}
                className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              >
                <option value="">Select one...</option>
                <option value="immediate">Immediately</option>
                <option value="30days">30 days</option>
                <option value="60plus">60+ days</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#D4AF37] text-[#0B0B0B] px-12 py-4 rounded-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-600 text-lg font-semibold"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.3)' }}
            >
              Continue to Book Call
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}