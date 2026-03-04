import Link from "next/link";
import { ArrowRight, Zap, Droplets, Brain, Heart, Users, Stethoscope, Activity, Shield, Dna } from "lucide-react";
import Container from "../components/Container/Container";

export const metadata = {
  title: "Services | Essenza Wellness Center",
  description:
    "Explore our full range of neuropsychiatric, longevity, and wellness services — designed to optimize brain health and overall vitality.",
};

const services = [
  {
    icon: Stethoscope,
    title: "Mental Health & Psychiatry",
    description: "Comprehensive psychiatric evaluation and treatment for mood disorders, anxiety, ADHD, and more — with medication management and psychotherapy coordination.",
    href: "/services/mental-health-psychiatry",
  },
  {
    icon: Zap,
    title: "TMS Therapy",
    description: "FDA-cleared transcranial magnetic stimulation for depression, anxiety, and OCD. Non-invasive, drug-free brain stimulation with proven clinical results.",
    href: "/services/tms-therapy",
  },
  {
    icon: Droplets,
    title: "Ketamine Therapy",
    description: "Evidence-based ketamine infusions for treatment-resistant depression and anxiety. Rapid relief combined with integrative psychotherapy for lasting recovery.",
    href: "/services/ketamine-therapy",
  },
  {
    icon: Activity,
    title: "Neurology & Brain Health",
    description: "Expert diagnosis and management of neurological conditions including migraines, memory disorders, neuropathy, and movement disorders.",
    href: "/services/neurology-brain-health",
  },
  {
    icon: Brain,
    title: "Brain Mapping & Neurodiagnostics",
    description: "Quantitative EEG (qEEG) brain mapping for precise insights into brain wave patterns, guiding targeted and personalized treatment protocols.",
    href: "/services/brain-mapping-neurodiagnostics",
  },
  {
    icon: Heart,
    title: "Longevity & Preventive Medicine",
    description: "Advanced biomarker testing, metabolic optimization, and personalized longevity protocols to maximize healthspan and quality of life.",
    href: "/services/longevity-preventive-medicine",
  },
  {
    icon: Users,
    title: "Women's Health & Hormone Optimization",
    description: "Specialized care for perimenopause, hormonal imbalances, and reproductive health — with personalized hormone therapy tailored for every life stage.",
    href: "/services/womens-health-hormone-optimization",
  },
  {
    icon: Shield,
    title: "Geriatric & Cognitive Care",
    description: "Dedicated support for memory disorders, cognitive decline, and healthy brain aging — with compassionate, evidence-based neurological care.",
    href: "/services/geriatric-cognitive-care",
  },
  {
    icon: Dna,
    title: "Rehabilitation & Functional Assessment",
    description: "Functional neurological assessments and rehabilitation programs that restore cognitive and physical performance after injury, illness, or decline.",
    href: "/services/rehabilitation-functional-assessment",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-linear-to-br from-primary/5 via-primaryHover/5 to-highlight/5 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-100/40 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary">What We Offer</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            Comprehensive <span className="text-highlight">Wellness Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            From advanced neurotechnology to personalized longevity medicine — we offer an integrated suite of services to optimize your brain health and overall vitality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link
                  key={idx}
                  href={service.href}
                  className="group relative bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-4">{service.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{service.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">Not sure where to start? Our team will guide you.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
