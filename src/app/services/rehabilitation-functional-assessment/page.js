import Link from "next/link";
import { ArrowRight, Activity, Brain, Shield, BarChart3 } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Rehabilitation & Functional Assessment | Essenza Wellness Center",
  description:
    "Comprehensive neurological and functional rehabilitation assessments to restore cognitive and physical performance after injury or illness.",
};

const assessments = [
  "Cognitive and neuropsychological testing",
  "Functional capacity evaluations",
  "Post-concussion and TBI assessment",
  "Neurological gait and balance analysis",
  "Return-to-work and activity clearance",
  "Chronic pain functional assessments",
];

const programs = [
  {
    icon: Brain,
    title: "Cognitive Rehabilitation",
    description: "Structured, personalized programs to restore attention, memory, processing speed, and executive function following neurological injury or illness.",
  },
  {
    icon: Activity,
    title: "Functional Recovery",
    description: "Integrative rehabilitation combining medical management, therapeutic exercise, and neurostimulation techniques to restore physical and cognitive performance.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Objective outcome measures and regular reassessments ensure your rehabilitation program evolves with your recovery trajectory.",
  },
  {
    icon: Shield,
    title: "Multidisciplinary Team",
    description: "Neurologists, psychiatrists, and rehabilitation specialists collaborate to address every dimension of your recovery.",
  },
];

export default function RehabilitationPage() {
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
            Rehabilitation & <span className="text-highlight">Functional Assessment</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            Evidence-based neurological rehabilitation and functional assessments — restoring performance, independence, and quality of life.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">What We Assess</h2>
              <p className="text-muted leading-relaxed mb-8">
                Our rehabilitation specialists conduct thorough functional and neurological evaluations to establish a clear baseline and design targeted recovery programs.
              </p>
              <ul className="space-y-3">
                {assessments.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              {programs.map((program, idx) => {
                const Icon = program.icon;
                return (
                  <div key={idx} className="group flex items-start gap-4 bg-bg rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text mb-2">{program.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{program.description}</p>
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
              Schedule a Functional Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
