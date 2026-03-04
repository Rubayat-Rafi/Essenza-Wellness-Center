import Link from "next/link";
import { ArrowRight, ClipboardCheck, Route, Shield, BarChart3 } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Clinical Model | Essenza Wellness Center",
  description:
    "Understand the integrated, four-phase clinical model that guides every patient journey at Essenza Wellness Center.",
};

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Comprehensive Assessment",
    description:
      "Your journey begins with an in-depth evaluation — medical history, neurological screening, advanced diagnostics (qEEG, labs, biomarkers), and a thorough understanding of your lifestyle and goals.",
    highlights: ["Neurological & psychiatric evaluation", "Advanced biomarker testing", "Brain mapping (qEEG) when indicated"],
  },
  {
    icon: Route,
    step: "02",
    title: "Personalized Treatment Planning",
    description:
      "Our multidisciplinary team collaborates to design a customized protocol addressing the root causes of your concerns, integrating the most effective therapies for your unique biology and goals.",
    highlights: ["Individualized protocol design", "Multidisciplinary team review", "Clear goals and outcome metrics"],
  },
  {
    icon: Shield,
    step: "03",
    title: "Evidence-Based Treatment",
    description:
      "We deliver FDA-cleared therapies and evidence-based interventions — including TMS, ketamine protocols, hormone optimization, and longevity medicine — with safety as our highest priority.",
    highlights: ["FDA-cleared therapeutic modalities", "Ongoing safety monitoring", "Direct physician oversight"],
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Continuous Monitoring & Optimization",
    description:
      "Treatment doesn't stop at delivery. We track your progress with validated assessments and objective data, refining your plan to ensure lasting results and long-term wellness.",
    highlights: ["Regular progress evaluations", "Data-driven plan adjustments", "Long-term wellness support"],
  },
];

export default function ClinicalModelPage() {
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
            <span className="text-sm font-medium text-primary">About — Clinical Model</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            Our <span className="text-highlight">Clinical Model</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            A four-phase, data-driven approach that transforms complex health challenges into clear, personalized pathways to lasting wellness.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <div className="text-4xl font-bold text-primary/10 leading-none">{step.step}</div>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-4">{step.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.highlights.map((h, hidx) => (
                      <li key={hidx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-muted font-medium">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">Ready to experience our model firsthand?</p>
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
