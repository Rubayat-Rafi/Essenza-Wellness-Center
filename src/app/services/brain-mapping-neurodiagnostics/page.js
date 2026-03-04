import Link from "next/link";
import { ArrowRight, Brain, BarChart3, Microscope, Shield } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Brain Mapping & Neurodiagnostics | Essenza Wellness Center",
  description:
    "Quantitative EEG (qEEG) brain mapping and advanced neurodiagnostics for precise, personalized treatment planning at Essenza Wellness Center.",
};

const insights = [
  "Brainwave activity patterns (alpha, beta, theta, delta)",
  "Connectivity between brain regions",
  "Areas of over- or under-activation",
  "Sleep and attention regulation markers",
  "Response to prior medication or treatments",
  "Baseline for tracking treatment progress",
];

const benefits = [
  {
    icon: Brain,
    title: "Precision Targeting",
    description: "qEEG guides TMS and neurofeedback to the exact brain regions that need stimulation — removing guesswork from treatment planning.",
  },
  {
    icon: BarChart3,
    title: "Objective Data",
    description: "Provides quantifiable brain metrics to track changes over time and objectively validate treatment effectiveness.",
  },
  {
    icon: Microscope,
    title: "Personalized Protocols",
    description: "Every treatment plan is informed by your unique brain signature — not just symptoms — enabling truly individualized care.",
  },
  {
    icon: Shield,
    title: "Non-Invasive & Safe",
    description: "qEEG is a painless, non-invasive procedure that records brain activity using sensors placed on the scalp. No radiation, no risk.",
  },
];

export default function BrainMappingPage() {
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
            Brain Mapping &{" "}
            <span className="text-highlight">Neurodiagnostics</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            Quantitative EEG (qEEG) technology that maps your brain's unique activity patterns — enabling precision-guided, personalized treatment planning.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 text-sm text-muted">
            <span className="font-bold text-text text-lg">QEEG</span>
            <span>Brain Mapping Technology</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">What qEEG Reveals</h2>
              <p className="text-muted leading-relaxed mb-8">
                Quantitative EEG records the electrical activity of your brain across multiple regions and frequencies, producing a detailed "map" of how your brain is functioning. This data guides clinical decisions with unparalleled precision.
              </p>
              <ul className="space-y-3">
                {insights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted font-medium">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bg rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-text mb-4">How It Works</h3>
              <ol className="space-y-4">
                {[
                  "You sit comfortably while a sensor cap records brain activity for 20–30 minutes.",
                  "Data is processed and compared to age-matched normative databases.",
                  "Our clinicians analyze the results to identify key patterns and deviations.",
                  "Findings directly inform your personalized treatment protocol.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-primary text-bg flex items-center justify-center font-bold text-sm shrink-0">{idx + 1}</div>
                    <p className="text-sm text-muted leading-relaxed">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="group relative bg-bg rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-highlight/10 text-highlight mb-5 group-hover:bg-highlight group-hover:text-surface transition-all duration-300">
                    <Icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-text mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Schedule a Brain Mapping Session
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
