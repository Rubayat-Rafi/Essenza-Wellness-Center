import Link from "next/link";
import { ArrowRight, Brain, Heart, Microscope, Award, Users, Shield } from "lucide-react";
import Container from "../components/Container/Container";

export const metadata = {
  title: "About Us | Essenza Wellness Center",
  description:
    "Learn about Essenza Wellness Center — our mission, values, and brain-first approach to longevity and mental wellness.",
};

const values = [
  {
    icon: Brain,
    title: "Clinical Excellence",
    description:
      "Board-certified specialists in psychiatry, neurology, and longevity medicine bringing decades of combined expertise to every patient.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Unhurried consultations and direct physician access ensure you feel heard, supported, and empowered throughout your wellness journey.",
  },
  {
    icon: Microscope,
    title: "Evidence-Based Innovation",
    description:
      "We combine cutting-edge neurotechnology with peer-reviewed protocols to deliver precise, personalized, and measurable outcomes.",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "5K+", label: "Patients Served" },
  { value: "3", label: "Specialty Disciplines" },
];

export default function AboutPage() {
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
            <span className="text-sm font-medium text-primary">About Essenza</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            A New Standard in{" "}
            <span className="text-highlight">Brain-Centered Care</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            Essenza Wellness Center integrates neuropsychiatry, advanced diagnostics, and longevity medicine to help you achieve lasting cognitive health and vitality.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">
                Our Mission
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                We believe the brain is the foundation of every aspect of health. Our mission is to deliver evidence-based, compassionate care that addresses the full spectrum of neurological and psychiatric health — from diagnosis to long-term wellness optimization.
              </p>
              <p className="text-muted leading-relaxed">
                Founded on the principle that cognitive health drives longevity, Essenza brings together board-certified specialists, advanced neurotechnology, and a deeply personalized approach to create care that truly transforms lives.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-bg rounded-2xl p-6 border border-border text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">
              What We Stand For
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Three core values guide every patient interaction and clinical decision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-4">{value.title}</h3>
                  <p className="text-muted leading-relaxed">{value.description}</p>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/team"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Meet Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
