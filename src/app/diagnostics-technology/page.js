import Link from "next/link";
import { ArrowRight, Brain, Zap, Microscope, BarChart3, Activity, Shield } from "lucide-react";
import Container from "../components/Container/Container";

export const metadata = {
  title: "Diagnostics & Technology | Essenza Wellness Center",
  description:
    "State-of-the-art neurotechnology and diagnostic tools — including qEEG brain mapping, TMS, advanced labs, and more — powering precise, personalized care.",
};

const technologies = [
  {
    icon: Brain,
    name: "QEEG",
    title: "Quantitative EEG Brain Mapping",
    description: "Records and analyzes electrical brain activity across 19+ channels, producing a detailed map of neural function. Used to guide TMS targeting, neurofeedback, and personalized treatment planning.",
    tag: "Diagnostic",
  },
  {
    icon: Zap,
    name: "TMS",
    title: "Transcranial Magnetic Stimulation",
    description: "FDA-cleared electromagnetic device that delivers focused magnetic pulses to stimulate specific brain circuits. Effective for depression, anxiety, OCD, and other neuropsychiatric conditions.",
    tag: "Therapeutic",
  },
  {
    icon: Activity,
    name: "IV",
    title: "Ketamine Infusion Systems",
    description: "Precision IV infusion equipment for controlled ketamine administration. Our protocols are guided by vital signs monitoring and clinical assessment throughout each session.",
    tag: "Therapeutic",
  },
  {
    icon: Microscope,
    name: "Lab",
    title: "Advanced Laboratory Diagnostics",
    description: "Comprehensive biomarker panels including metabolic, hormonal, inflammatory, and genetic markers. Results inform personalized treatment and longevity protocols.",
    tag: "Diagnostic",
  },
  {
    icon: BarChart3,
    name: "Neuro",
    title: "Neuropsychological Testing",
    description: "Validated cognitive assessments measuring memory, attention, processing speed, and executive function — establishing baselines and tracking treatment response over time.",
    tag: "Diagnostic",
  },
  {
    icon: Shield,
    name: "Monitor",
    title: "Continuous Outcome Monitoring",
    description: "Digital outcome tracking platforms that capture symptom changes, functional improvements, and patient-reported data — enabling data-driven treatment optimization.",
    tag: "Monitoring",
  },
];

export default function DiagnosticsTechnologyPage() {
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
            <span className="text-sm font-medium text-primary">Advanced Technology</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            Diagnostics &{" "}
            <span className="text-highlight">Technology</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            We invest in the most advanced neurotechnology available — because precise diagnosis is the foundation of truly effective care.
          </p>
        </div>
      </section>

      {/* Bottom Trust Row */}
      <section className="py-8 bg-primary">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "TMS", sub: "FDA-Cleared Therapy" },
              { label: "QEEG", sub: "Brain Mapping" },
              { label: "IV", sub: "Ketamine Protocols" },
              { label: "Lab", sub: "Advanced Diagnostics" },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-bg">{item.label}</div>
                <div className="text-sm text-bg/70 mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies Grid */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">Our Technology Suite</h2>
            <p className="text-lg text-muted leading-relaxed">
              Every tool we use is evidence-based, clinically validated, and selected for its ability to improve diagnostic accuracy and treatment outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div key={idx} className="group relative bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-highlight bg-highlight/10 border border-highlight/20 rounded-full px-3 py-1">
                      {tech.tag}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{tech.name}</div>
                  <h3 className="text-xl font-bold text-text mb-4">{tech.title}</h3>
                  <p className="text-muted leading-relaxed">{tech.description}</p>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">Discover how our technology powers your personalized care plan.</p>
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
