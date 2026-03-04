import Link from "next/link";
import { ArrowRight, Users, Heart, Shield, BarChart3 } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Women's Health & Hormone Optimization | Essenza Wellness Center",
  description:
    "Specialized women's health care including hormone optimization, perimenopause support, and reproductive wellness — personalized for every life stage.",
};

const conditions = [
  "Perimenopause & Menopause",
  "Hormonal Imbalance",
  "Thyroid Dysfunction",
  "Adrenal Fatigue",
  "PMS & PMDD",
  "Post-Partum Hormonal Changes",
  "Low Libido",
  "Mood & Energy Disruptions",
];

const services = [
  {
    icon: BarChart3,
    title: "Comprehensive Hormone Panel",
    description: "In-depth evaluation of estrogen, progesterone, testosterone, thyroid hormones, cortisol, and DHEA to identify root causes of imbalance.",
  },
  {
    icon: Heart,
    title: "Personalized HRT",
    description: "Bioidentical hormone replacement therapy tailored to your biology — optimized for relief, safety, and long-term health.",
  },
  {
    icon: Shield,
    title: "Integrative Support",
    description: "We combine hormonal care with nutrition, lifestyle, and mental health strategies to support your overall well-being holistically.",
  },
];

export default function WomensHealthPage() {
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
            Women's Health & <span className="text-highlight">Hormone Optimization</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            Compassionate, science-backed care for hormonal health — supporting women at every stage of life with personalized, integrative solutions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">Conditions We Address</h2>
              <p className="text-muted leading-relaxed mb-8">
                Hormonal health impacts every aspect of a woman's life — from mood and energy to sleep, cognition, and physical vitality. We offer comprehensive evaluation and personalized treatment for a wide range of hormonal conditions.
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
                  <div key={idx} className="group flex items-start gap-4 bg-bg rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text mb-2">{service.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
              <div className="bg-bg rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-highlight" />
                  <h3 className="text-lg font-bold text-text">Why Choose Essenza?</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Our women's health specialists work alongside our psychiatry and neurology teams to address the full mind-body impact of hormonal health — ensuring no aspect of your wellness is overlooked.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Schedule a Women's Health Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
