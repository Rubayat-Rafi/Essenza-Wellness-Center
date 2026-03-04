import Link from "next/link";
import { ArrowRight, Brain, Heart, Activity, Users, Shield, Zap } from "lucide-react";
import Container from "../components/Container/Container";

export const metadata = {
  title: "Conditions We Treat | Essenza Wellness Center",
  description:
    "Essenza Wellness Center specializes in treating depression, anxiety, cognitive decline, hormonal imbalance, chronic stress, and many other neuropsychiatric conditions.",
};

const conditions = [
  {
    icon: Brain,
    title: "Depression & Anxiety",
    description: "From mild to treatment-resistant cases, we offer a full spectrum of evidence-based options including TMS, ketamine, medication management, and integrative care.",
    tags: ["Major Depression", "Anxiety Disorders", "Panic Disorder", "Social Anxiety"],
  },
  {
    icon: Activity,
    title: "Cognitive Decline & Memory Loss",
    description: "Early detection, risk reduction, and comprehensive management of memory disorders — including Alzheimer's, MCI, and age-related cognitive changes.",
    tags: ["Alzheimer's Disease", "MCI", "Memory Loss", "Brain Fog"],
  },
  {
    icon: Users,
    title: "Hormonal Imbalance",
    description: "Comprehensive hormonal evaluation and personalized optimization for energy, mood, cognition, and overall vitality — for both men and women.",
    tags: ["Perimenopause", "Thyroid Disorders", "Adrenal Issues", "Low Testosterone"],
  },
  {
    icon: Heart,
    title: "Chronic Stress & Burnout",
    description: "Identifying and addressing the physiological and neurological impact of chronic stress — restoring resilience, focus, and emotional balance.",
    tags: ["Burnout", "Chronic Fatigue", "HPA Axis Dysfunction", "Adrenal Fatigue"],
  },
  {
    icon: Shield,
    title: "Aging & Longevity Optimization",
    description: "Proactive protocols to slow biological aging, preserve cognitive sharpness, and maximize healthspan using advanced diagnostics and longevity medicine.",
    tags: ["Healthspan Optimization", "Preventive Medicine", "Anti-Aging", "Brain Health"],
  },
  {
    icon: Zap,
    title: "Treatment-Resistant Conditions",
    description: "For patients who have not found relief with conventional treatments, we offer advanced options including TMS, ketamine therapy, and precision psychiatry.",
    tags: ["Treatment-Resistant Depression", "Refractory Anxiety", "Ketamine Therapy", "TMS"],
  },
];

export default function ConditionsPage() {
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
            <span className="text-sm font-medium text-primary">Who We Help</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            Conditions <span className="text-highlight">We Treat</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            We specialize in complex neuropsychiatric and wellness conditions — providing answers, personalized care plans, and hope for patients who haven't found success elsewhere.
          </p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, idx) => {
              const Icon = condition.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-4">{condition.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{condition.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {condition.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="text-xs font-medium text-primary bg-primary/5 border border-primary/20 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">Don't see your condition listed? Contact us — we treat a wide range of neurological and psychiatric concerns.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Talk to a Specialist
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
