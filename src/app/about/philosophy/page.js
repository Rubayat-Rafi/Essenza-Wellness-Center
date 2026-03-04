import Link from "next/link";
import { ArrowRight, Brain, Shield, Microscope, Heart } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Our Philosophy | Essenza Wellness Center",
  description:
    "Discover the brain-first philosophy that shapes every aspect of care at Essenza Wellness Center.",
};

const principles = [
  {
    icon: Brain,
    title: "Brain-First Philosophy",
    description:
      "Cognitive health is the cornerstone of overall well-being. We treat the brain as the central organ of longevity and prioritize its health in every clinical decision.",
  },
  {
    icon: Microscope,
    title: "Evidence-Based Practice",
    description:
      "Every recommendation is grounded in peer-reviewed science. We combine the latest research with clinical expertise to guide safe, effective, and reproducible outcomes.",
  },
  {
    icon: Heart,
    title: "Whole-Person Care",
    description:
      "We look beyond symptoms to understand the full context of your health — lifestyle, genetics, hormones, and environment — designing care that treats you as a complete individual.",
  },
  {
    icon: Shield,
    title: "Precision & Accountability",
    description:
      "Objective diagnostics and continuous outcome tracking ensure your treatment plan evolves with your progress. We measure what matters and adjust accordingly.",
  },
];

export default function PhilosophyPage() {
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
            <span className="text-sm font-medium text-primary">About — Philosophy</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            Our <span className="text-highlight">Philosophy</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            We believe that true wellness begins in the brain. Our clinical philosophy integrates neuroscience, preventive medicine, and compassionate care to help you thrive at every stage of life.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">
              Core Principles
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Four guiding principles shape how we approach every patient relationship and clinical outcome.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-4">{principle.title}</h3>
                  <p className="text-muted leading-relaxed">{principle.description}</p>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">See how our philosophy comes to life in clinical practice.</p>
            <Link
              href="/about/clinical-model"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              View Our Clinical Model
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
