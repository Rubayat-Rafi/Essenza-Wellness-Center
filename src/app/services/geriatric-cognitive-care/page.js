import Link from "next/link";
import { ArrowRight, Shield, Brain, Heart, Users, Sparkles, Activity } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Geriatric & Cognitive Care | Essenza Wellness Center",
  description:
    "Elevated, concierge-style geriatric care focused on longevity, cognitive vitality, and exceptional personalized health management.",
};

const services = [
  "Comprehensive longevity and health optimization assessments",
  "Advanced brain health and memory evaluation",
  "Personalized chronic disease management and prevention",
  "Precision medication review and simplification",
  "Lifestyle, nutrition, and wellness optimization for healthy aging",
  "Integrative and functional medicine therapies",
  "Preventive strategies to support strength, mobility, and independence",
  "Coordinated care across specialists and healthcare services",
];

export default function GeriatricCarePage() {
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
            Geriatric & <span className="text-highlight">Cognitive Care</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            A refined, personalized approach to aging focused on longevity, cognitive vitality, and exceptional care tailored to your goals and lifestyle.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>

          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">
              Elevated Geriatric Care
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              Essenza provides a refined, personalized approach to geriatric medicine designed for individuals who value proactive health management, longevity, and exceptional care. Our concierge-style services focus on optimizing physical health, cognitive vitality, and overall well-being through comprehensive and individualized care plans.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">
                Signature Geriatric Services
              </h2>
              <ul className="space-y-3">
                {services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlight cards */}
            <div className="space-y-5">
              <div className="group flex items-start gap-4 bg-bg rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text mb-2">Cognitive Vitality</h3>
                  <p className="text-sm text-muted leading-relaxed">Advanced brain health evaluation and memory assessments to protect and optimize your cognitive function as you age.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 bg-bg rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text mb-2">Longevity & Optimization</h3>
                  <p className="text-sm text-muted leading-relaxed">Comprehensive health assessments and preventive strategies designed to support strength, mobility, and independence at every stage.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 bg-bg rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text mb-2">Concierge-Style Care</h3>
                  <p className="text-sm text-muted leading-relaxed">Coordinated, individualized care across specialists ensuring every aspect of your health is managed with precision and attention.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Banner */}
          <div className="bg-bg rounded-2xl p-10 border border-border text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6">
              <Heart className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-4 tracking-tight">
              Aging, Redefined
            </h3>
            <p className="text-muted leading-relaxed max-w-2xl mx-auto mb-8">
              At Essenza, we believe aging should be active, vibrant, and empowered supported by thoughtful medical care tailored to each individual's goals and lifestyle.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Schedule a Geriatric Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </Container>
      </section>
    </>
  );
}