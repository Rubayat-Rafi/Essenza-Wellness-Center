import { Brain, Microscope, Heart } from 'lucide-react';
import Container from '../../Container/Container';

export default function WhatMakesUsDifferent() {
  const features = [
    {
      icon: Brain,
      title: "Brain-First Longevity Model",
      description: "We recognize that cognitive health is the foundation of healthy aging. Our integrated approach addresses mental wellness, neurological function, and systemic health to optimize both lifespan and healthspan.",
      highlights: [
        "Comprehensive cognitive assessments",
        "Personalized neuroprotection strategies",
        "Preventive protocols for age-related decline"
      ]
    },
    {
      icon: Microscope,
      title: "Advanced Neurotechnology",
      description: "State-of-the-art diagnostic and therapeutic tools provide unprecedented insight into brain function. We use evidence-based technologies to guide precise, individualized treatment decisions.",
      highlights: [
        "Quantitative EEG brain mapping",
        "FDA-cleared TMS therapy",
        "Advanced biomarker analysis"
      ]
    },
    {
      icon: Heart,
      title: "Concierge, Patient-Centered Care",
      description: "Unhurried consultations, direct physician access, and coordinated care teams ensure you receive the attention and support you deserve throughout your wellness journey.",
      highlights: [
        "Extended appointment times",
        "Same-day provider communication",
        "Personalized treatment coordination"
      ]
    }
  ];

  return (
    <section className="relative py-12 lg:py-20">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 tracking-tight">
            What Makes Essenza Different
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            A distinctive approach to neuropsychiatry and longevity medicine, 
            grounded in clinical excellence and advanced science.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-3" role="list">
                  {feature.highlights.map((highlight, hidx) => (
                    <li key={hidx} className="flex items-start gap-3">
                      <svg 
                        className="w-5 h-5 text-primary shrink-0 mt-0.5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2.5} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-sm text-muted font-medium">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted  mb-6">
            Ready to experience a new standard of care?
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
          >
            Schedule Your Consultation
          </a>
        </div>
      </Container>
    </section>
  );
}