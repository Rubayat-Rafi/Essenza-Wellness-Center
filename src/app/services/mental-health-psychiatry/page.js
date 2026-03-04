import Link from "next/link";
import { ArrowRight, Stethoscope, Brain, Heart, Shield } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Mental Health & Psychiatry | Essenza Wellness Center",
  description:
    "Comprehensive psychiatric care for depression, anxiety, ADHD, PTSD, and more — led by board-certified psychiatrists.",
};

const conditions = [
  "Depression & Major Depressive Disorder",
  "Anxiety Disorders & Panic",
  "ADHD & Attention Disorders",
  "PTSD & Trauma",
  "Bipolar Disorder",
  "OCD & Intrusive Thoughts",
];

const approach = [
  {
    icon: Brain,
    title: "Thorough Evaluation",
    description: "Every patient receives a comprehensive psychiatric assessment covering mental health history, neurological factors, and lifestyle influences.",
  },
  {
    icon: Heart,
    title: "Personalized Treatment",
    description: "We design individualized plans that may include medication management, therapy coordination, TMS, or ketamine — tailored to your specific needs.",
  },
  {
    icon: Shield,
    title: "Ongoing Support",
    description: "Regular follow-up appointments, direct provider access, and continuous outcome monitoring ensure sustained progress and plan optimization.",
  },
];

export default function MentalHealthPage() {
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
            Mental Health &{" "}
            <span className="text-highlight">Psychiatry</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            Board-certified psychiatric care delivered with compassion, precision, and a commitment to lasting mental wellness.
          </p>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">
                Conditions We Treat
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Our psychiatrists specialize in diagnosing and treating a full spectrum of mental health conditions using evidence-based, personalized approaches.
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
            <div className="bg-bg rounded-2xl p-8 border border-border">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6">
                <Stethoscope className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Why Choose Essenza?</h3>
              <p className="text-muted leading-relaxed mb-6">
                We integrate psychiatry with advanced diagnostics and neurotechnology for a truly comprehensive approach to mental wellness — beyond medication alone.
              </p>
              <ul className="space-y-3">
                {["Board-certified psychiatrists", "Advanced neurodiagnostics (qEEG)", "TMS & ketamine integration", "Telehealth available"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-highlight shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Approach */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-8 text-center tracking-tight">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approach.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group relative bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4">{item.title}</h3>
                    <p className="text-muted leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Book a Psychiatric Evaluation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
