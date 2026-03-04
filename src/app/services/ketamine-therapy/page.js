import Link from "next/link";
import { ArrowRight, Droplets, Brain, Shield, Heart } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Ketamine Therapy | Essenza Wellness Center",
  description:
    "Evidence-based ketamine infusions for treatment-resistant depression, anxiety, and chronic pain — delivered in a safe, supervised clinical setting.",
};

const conditions = [
  "Treatment-Resistant Depression",
  "Suicidal Ideation",
  "Anxiety Disorders",
  "PTSD",
  "Bipolar Depression",
  "Chronic Pain Syndromes",
];

const features = [
  {
    icon: Brain,
    title: "Rapid Relief",
    description: "Many patients experience significant improvement within 24–72 hours — far faster than traditional antidepressants.",
  },
  {
    icon: Shield,
    title: "Medically Supervised",
    description: "All infusions are administered by board-certified physicians in a controlled, comfortable clinical environment.",
  },
  {
    icon: Heart,
    title: "Integrative Care",
    description: "We combine ketamine with psychotherapy coordination and ongoing psychiatric support for lasting, meaningful results.",
  },
];

export default function KetamineTherapyPage() {
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
            Ketamine <span className="text-highlight">Therapy</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            A breakthrough treatment for patients who haven't found relief with traditional therapies — offering rapid, evidence-based relief from severe depression and anxiety.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">
                What Is Ketamine Therapy?
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Ketamine is a fast-acting anesthetic that, at sub-anesthetic doses, produces rapid antidepressant and anti-anxiety effects. It works by modulating the brain's glutamate system — a fundamentally different mechanism from traditional antidepressants — making it effective even for treatment-resistant cases.
              </p>
              <p className="text-muted leading-relaxed">
                At Essenza, ketamine therapy is delivered as a carefully monitored IV infusion protocol, typically involving 6 sessions over 2–3 weeks, followed by maintenance as needed.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text mb-6 tracking-tight">Conditions We Treat</h2>
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
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="group relative bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-4">{feature.title}</h3>
                  <p className="text-muted leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">Speak with a provider about whether ketamine therapy is right for you.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Request a Ketamine Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
