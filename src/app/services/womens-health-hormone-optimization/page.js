import Link from "next/link";
import { ArrowRight, Users, Heart, Shield, BarChart3, Leaf, Baby, Sparkles, CheckCircle } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Women's Health | Essenza Wellness Center",
  description:
    "A dedicated women's practice focused on prevention, longevity, and whole-person care from reproductive years through perimenopause and beyond.",
};

const stats = [
  { stat: "#1", label: "Heart disease is the leading cause of death for women in the United States" },
  { stat: "44%", label: "of U.S. women live with some form of cardiovascular disease" },
  { stat: "1 in 8", label: "women are affected by breast cancer during their lifetime" },
  { stat: "#2", label: "Breast cancer is the second leading cause of cancer death in women" },
];

const preventiveServices = [
  "Cardiometabolic risk assessment (blood pressure, cholesterol, glucose, inflammation markers)",
  "Personalized screening plans based on age, family history, and health risks",
  "Preventive strategies for cardiovascular health and longevity",
  "Weight, sleep, and stress optimization for hormonal balance",
  "Coordination with advanced diagnostics and specialists when needed",
];

const gynecologicServices = [
  "Annual well-woman exams and preventive screenings",
  "Evaluation and management of PCOS",
  "Care for endometriosis and chronic pelvic pain",
  "Evaluation of abnormal bleeding, fibroids, ovarian cysts, and pelvic concerns",
  "Sexual health and intimate wellness support",
];

const familyPlanningServices = [
  "Fertility-aware cycle care and planning",
  "Preconception health optimization",
  "Nutritional and metabolic lab evaluation",
  "Medication and thyroid review before pregnancy",
  "Personalized contraception counseling",
  "Coordination with fertility specialists when needed",
];

const hormoneServices = [
  "Evaluation of symptoms such as fatigue, brain fog, sleep disruption, mood changes, and hot flashes",
  "Evidence-based hormone and non-hormonal treatment options",
  "Lifestyle and metabolic support during perimenopause and menopause",
  "Bone, cardiovascular, and cognitive health planning for long-term wellness",
];

const conciergeServices = [
  "Extended appointment times",
  "Direct access to the care team for important questions",
  "Proactive coordination of labs, imaging, and specialist referrals",
  "Personalized care plans designed around your schedule",
];

const differentiators = [
  "Dedicated women's health practice with board-certified OB/GYN care",
  "Prevention-focused approach that identifies risk early",
  "Longevity-oriented care designed to optimize health over decades",
  "Compassionate, respectful care where your concerns are heard",
];

const commonReasons = [
  "Irregular cycles or PCOS",
  "Endometriosis and pelvic pain",
  "Perimenopause and menopause symptoms",
  "Hormone imbalance and metabolic changes",
  "Fertility planning and preconception care",
  "Preventive health and personalized screening strategies",
];

function CheckList({ items, color = "primary" }) {
  return (
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <svg className={`w-5 h-5 text-${color} shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-muted font-medium text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}

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
            Women's Health <span className="text-highlight">at Essenza</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            A dedicated women's practice focused on prevention, longevity, and whole-person care supporting women's health at every stage of life.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-surface">
        <Container>

          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-muted leading-relaxed text-lg">
              Women's health evolves throughout life from reproductive years through perimenopause and menopause. At Essenza, we provide thoughtful, evidence-based care designed to support women's long-term health, vitality, and longevity through preventive medicine and personalized care plans.
            </p>
          </div>

          {/* Why Preventive Care Matters Stats */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-8 tracking-tight">
              Why Preventive Women's Health Matters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {stats.map((item, idx) => (
                <div key={idx} className="bg-bg rounded-2xl p-6 border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-3">{item.stat}</div>
                  <p className="text-sm text-muted leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-bg rounded-2xl p-8 border border-border">
              <p className="text-text font-semibold mb-4 text-center">At Essenza, our approach focuses on:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Early detection", "Preventive screening", "Personalized risk assessment", "Targeted medical interventions"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-highlight shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted text-sm text-center mt-6 leading-relaxed">
                Our goal is to protect your health today while optimizing your long-term healthspan.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text text-center mb-10 tracking-tight">
              Women's Health Services at Essenza
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-10 leading-relaxed">
              Our program integrates gynecology, preventive medicine, and longevity-focused care, tailored to each stage of life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Early Screening */}
              <div className="group bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-text mb-4">Early Screening & Preventive Longevity Care</h3>
                <CheckList items={preventiveServices} />
              </div>

              {/* Gynecologic Care */}
              <div className="group bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-text mb-4">Comprehensive Gynecologic Care</h3>
                <CheckList items={gynecologicServices} />
              </div>

              {/* Family Planning */}
              <div className="group bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Baby className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-text mb-4">Family Planning & Preconception Care</h3>
                <CheckList items={familyPlanningServices} />
              </div>

              {/* Hormone Optimization */}
              <div className="group bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg mb-5 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-text mb-4">Hormone Optimization & Menopause Care</h3>
                <CheckList items={hormoneServices} />
              </div>
            </div>
          </div>

          {/* Concierge + Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-bg rounded-2xl p-8 border border-border">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg mb-5">
                <Sparkles className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-text mb-4">Concierge Women's Health Experience</h3>
              <p className="text-sm text-muted leading-relaxed mb-5">For patients who want a more personalized care experience, Essenza offers:</p>
              <CheckList items={conciergeServices} />
            </div>

            <div className="bg-bg rounded-2xl p-8 border border-border">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg mb-5">
                <Users className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-text mb-4">What Makes Essenza Different</h3>
              <p className="text-sm text-muted leading-relaxed mb-5">Essenza offers a modern model of women's healthcare centered on prevention, science, and trust.</p>
              <CheckList items={differentiators} color="highlight" />
            </div>
          </div>

          {/* Common Reasons + Closing CTA */}
          <div className="bg-bg rounded-2xl p-10 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-xl font-bold text-text mb-5">Common Reasons Women Seek Care at Essenza</h3>
                <CheckList items={commonReasons} />
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6">
                  <Leaf className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-text mb-4">A Proactive Approach to Your Health</h3>
                <p className="text-muted leading-relaxed mb-8">
                  Whether your focus is fertility, symptom relief, or long-term prevention, Essenza provides thoughtful, science-driven care designed to support your health at every stage of life.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
                >
                  Schedule a Women's Health Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

        </Container>
      </section>
    </>
  );
}