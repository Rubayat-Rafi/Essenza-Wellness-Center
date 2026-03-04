import Link from "next/link";
import { ArrowRight, Activity, Brain, Shield, Microscope } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Neurology & Brain Health | Essenza Wellness Center",
  description:
    "Expert neurological care for migraines, memory disorders, neuropathy, movement disorders, and more — with a brain-health-first approach.",
};

const conditions = [
  "Migraines & Chronic Headaches",
  "Memory Loss & Cognitive Decline",
  "Parkinson's Disease",
  "Neuropathy & Nerve Pain",
  "Epilepsy & Seizure Disorders",
  "Post-Concussion Syndrome",
  "Multiple Sclerosis",
  "Essential Tremor",
];

const services = [
  {
    icon: Brain,
    title: "Comprehensive Neurological Evaluation",
    description: "Detailed assessment of neurological function, cognitive performance, reflexes, and brain imaging to establish a clear clinical picture.",
  },
  {
    icon: Microscope,
    title: "Advanced Neurodiagnostics",
    description: "qEEG brain mapping, nerve conduction studies, and advanced biomarker panels provide precise diagnostic insights.",
  },
  {
    icon: Shield,
    title: "Integrated Treatment Plans",
    description: "Evidence-based treatment combining pharmacological, non-pharmacological, and rehabilitative strategies for optimal outcomes.",
  },
];

export default function NeurologyBrainHealthPage() {
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
            Neurology & <span className="text-highlight">Brain Health</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            Expert diagnosis and management of neurological conditions — with a focus on preserving, restoring, and optimizing brain function at every age.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">Conditions We Treat</h2>
              <p className="text-muted leading-relaxed mb-8">
                Our neurologists combine deep clinical expertise with advanced diagnostic tools to provide accurate diagnoses and effective treatment plans.
              </p>
              <ul className="space-y-3">
                {conditions.map((condition, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted font-medium">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="group bg-bg rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text mb-2">{service.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Schedule a Neurology Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
