import Link from "next/link";
import { ArrowRight, Zap, Brain, Shield, Award } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "TMS Therapy | Essenza Wellness Center",
  description:
    "FDA-cleared transcranial magnetic stimulation (TMS) therapy for depression, anxiety, and OCD — non-invasive, drug-free, proven effective.",
};

const benefits = [
  { title: "Non-Invasive", description: "No surgery, no anesthesia. TMS is performed in-office with no downtime." },
  { title: "Drug-Free Option", description: "Ideal for patients who prefer to avoid or reduce medication." },
  { title: "FDA-Cleared", description: "Approved for major depressive disorder, OCD, and anxious depression." },
  { title: "High Success Rate", description: "Clinical studies show response rates of 50–60% in treatment-resistant cases." },
];

const steps = [
  { step: "01", title: "Evaluation", description: "A thorough assessment determines if TMS is right for you and identifies the optimal treatment protocol." },
  { step: "02", title: "Mapping", description: "We locate the precise brain region to target using motor threshold calibration for accurate stimulation." },
  { step: "03", title: "Treatment Sessions", description: "Daily sessions of 20–40 minutes over 4–6 weeks. You remain awake and alert throughout." },
  { step: "04", title: "Progress Monitoring", description: "Ongoing symptom tracking and protocol adjustments ensure the best possible outcomes." },
];

export default function TMSTherapyPage() {
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
            TMS <span className="text-highlight">Therapy</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            FDA-cleared transcranial magnetic stimulation — a safe, non-invasive, drug-free treatment for depression, anxiety, and OCD.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 bg-highlight/10 border border-highlight/30 rounded-full px-4 py-2">
            <Award className="w-4 h-4 text-highlight" />
            <span className="text-sm font-medium text-text">FDA-Cleared Treatment</span>
          </div>
        </div>
      </section>

      {/* What is TMS */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">
                What Is TMS Therapy?
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Transcranial Magnetic Stimulation (TMS) uses focused magnetic pulses to stimulate specific neural circuits in the brain that are underactive in depression and other mood disorders. It is performed in our office, requires no anesthesia, and patients can drive themselves home immediately after.
              </p>
              <p className="text-muted leading-relaxed">
                At Essenza, we guide TMS protocols with qEEG brain mapping for precise targeting — maximizing effectiveness and minimizing treatment time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-bg rounded-xl p-6 border border-border">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-highlight/10 text-highlight mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-text mb-2">{benefit.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-8 text-center tracking-tight">The TMS Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="relative bg-bg rounded-2xl p-6 border border-border">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-bg flex items-center justify-center font-bold text-sm shadow-md">
                    {idx + 1}
                  </div>
                  <div className="text-3xl font-bold text-primary/10 mb-3">{step.step}</div>
                  <h3 className="text-lg font-bold text-text mb-3">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">Find out if TMS is right for you.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Schedule a TMS Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
