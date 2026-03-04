import Link from "next/link";
import { ArrowRight, Heart, BarChart3, Microscope, Shield } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Longevity & Preventive Medicine | Essenza Wellness Center",
  description:
    "Advanced longevity protocols and preventive medicine to optimize healthspan, metabolic health, and cognitive vitality.",
};

const pillars = [
  {
    icon: Microscope,
    title: "Advanced Biomarker Testing",
    description: "Comprehensive panels including metabolic markers, inflammatory markers, hormones, genetic risk factors, and organ function — painting a complete picture of your biological age.",
  },
  {
    icon: Heart,
    title: "Metabolic Optimization",
    description: "Targeted interventions for insulin sensitivity, lipid metabolism, body composition, and mitochondrial health — the foundations of cellular longevity.",
  },
  {
    icon: BarChart3,
    title: "Cognitive Performance",
    description: "Protocols to preserve and enhance memory, executive function, and mental clarity — keeping your brain sharp as you age.",
  },
  {
    icon: Shield,
    title: "Personalized Longevity Protocols",
    description: "Custom lifestyle, nutritional, supplementation, and therapeutic plans grounded in your individual data and the latest longevity research.",
  },
];

const includes = [
  "Comprehensive health & longevity assessment",
  "Advanced metabolic and hormonal panels",
  "Epigenetic age analysis",
  "Personalized nutrition and lifestyle guidance",
  "Evidence-based supplementation plans",
  "Ongoing biomarker monitoring and optimization",
];

export default function LongevityPage() {
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
            <span className="text-sm font-medium text-primary">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            Longevity & <span className="text-highlight">Preventive Medicine</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            Proactive, science-driven strategies to maximize your healthspan — living not just longer, but stronger, sharper, and more vital.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">
                Beyond Reactive Medicine
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Traditional medicine waits for illness to appear. Our longevity medicine practice identifies risks years in advance, optimizes your biological systems, and creates personalized protocols that slow aging at the cellular level.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                We combine the latest research in longevity science with deep clinical expertise to help you feel your best — at any age.
              </p>
              <h3 className="text-xl font-bold text-text mb-4">What's Included</h3>
              <ul className="space-y-3">
                {includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="group flex items-start gap-4 bg-bg rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text mb-2">{pillar.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Start Your Longevity Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
