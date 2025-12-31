import { Zap, Droplets, Brain, Heart, Users, Stethoscope } from "lucide-react";
import Container from "../../Container/Container";


export default function CoreServices() {
  const services = [
    {
      icon: Zap,
      title: "TMS Therapy",
      description:
        "FDA-cleared transcranial magnetic stimulation for depression, anxiety, and OCD. Non-invasive brain stimulation that targets specific neural circuits to restore healthy function.",
    },
    {
      icon: Droplets,
      title: "Ketamine Therapy",
      description:
        "Evidence-based ketamine treatment for treatment-resistant depression and anxiety. Rapid-acting relief combined with supportive psychotherapy for lasting results.",
    },
    {
      icon: Brain,
      title: "Brain Mapping (qEEG)",
      description:
        "Quantitative EEG analysis provides detailed insights into brain wave patterns. Precision diagnostics that guide personalized treatment planning and track progress.",
    },
    {
      icon: Heart,
      title: "Longevity & Preventive Medicine",
      description:
        "Comprehensive protocols to optimize healthspan and extend quality of life. Advanced biomarker testing, metabolic optimization, and age-management strategies.",
    },
    {
      icon: Users,
      title: "Women's Health & Hormone Optimization",
      description:
        "Specialized care for hormonal transitions, perimenopause, and reproductive health. Personalized hormone therapy and wellness optimization for women at every life stage.",
    },
    {
      icon: Stethoscope,
      title: "Neurology & Geriatrics",
      description:
        "Expert management of neurological conditions and age-related cognitive concerns. Comprehensive care for memory disorders, movement disorders, and healthy brain aging.",
    },
  ];

  return (
    <section className="relative py-12 lg:py-20 bg-surface">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 tracking-tight">
            Core Services
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Comprehensive neuropsychiatric and longevity services designed to
            optimize your brain health and overall wellness.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted mb-6">
            Discover how our specialized services can support your health goals.
          </p>
          <a
            href="/services"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
          >
            Explore All Services
          </a>
        </div>
      </Container>
    </section>
  );
}
