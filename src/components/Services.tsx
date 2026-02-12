export function Services() {
  const services = [
    {
      title: 'Paid Ads & Demand Generation',
      subtitle: 'We build acquisition systems — not campaigns.',
      features: [
        'Managed six-figure ad accounts across Meta and digital platforms',
        'Built conversion-first funnels for service and online businesses',
        'Scaled traffic while controlling CPC and lead quality',
        'Creative testing + audience segmentation',
        'Continuous optimization based on performance data'
      ],
      stats: [
        '45× increase in views',
        '3× MoM acquisition growth under 90 days',
        '10× increase in installs'
      ],
      insideTheWork: [
        'Creative testing',
        'Funnel rebuild',
        'Audience segmentation',
        'Scaling winners'
      ]
    },
    {
      title: 'Growth Partner (Systems + Optimization)',
      subtitle: 'Structured acquisition pipelines',
      features: [
        'Messaging frameworks (AISSE, EIB, SGSR) proven to drive results',
        'Conversion paths',
        'Reporting systems'
      ],
      stats: [
        '4X decrease in CPA',
        '48% increase in lead quality',
        '3X MoM Daily Customer Acquisition Over 90 days'
      ],
      insideTheWork: [
        'Messaging frameworks',
        'Conversion paths',
        'Reporting systems'
      ]
    },
    {
      title: 'C-Level GTM Strategy',
      subtitle: 'Led by Deidre Hudson',
      features: [
        'High-ticket retainers',
        'Revenue pipeline impact',
        'Enterprise GTM experience'
      ],
      stats: [
        'High-ticket retainers',
        'Revenue pipeline impact',
        'Enterprise GTM experience'
      ],
      insideTheWork: [
        'Positioning',
        'Founder advisory',
        'Go-to-market architecture'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl mb-4 text-center font-bold bg-gradient-to-r from-[#0B0B0B] via-[#1A1A1A] to-[#F2D27C] bg-clip-text text-transparent">
          Services
        </h2>
        <p className="text-center mb-16 max-w-2xl mx-auto text-[#D4AF37]">
          Execution → Systems → Strategy
        </p>
        
        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <h3 className="text-3xl mb-2 text-[#F2D27C]">
                {service.title}
              </h3>
              <p className="text-lg text-[#E6E6E6] mb-6">{service.subtitle}</p>
              
              {/* Features list */}
              {service.features.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-[#E6E6E6] flex items-start">
                      <span className="mr-2 text-[#D4AF37]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Stats */}
              {service.stats.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-3">Stats</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.stats.map((stat, idx) => (
                      <div key={idx} className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">{stat}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inside the Work */}
              {service.insideTheWork.length > 0 && (
                <div>
                  <h4 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-3">Inside the Work</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.insideTheWork.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-[#0B0B0B] via-[#1A1A1A] to-[#D4AF37] text-white text-sm rounded border border-[#D4AF37]/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}