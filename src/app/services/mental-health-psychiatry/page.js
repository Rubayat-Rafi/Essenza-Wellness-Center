import Link from "next/link";
import { ArrowRight, Stethoscope, Brain, Heart, Shield, Zap, FlaskConical } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Mental Health & Psychiatry | Essenza Wellness Center",
  description:
    "Comprehensive psychiatric care for depression, anxiety, ADHD, PTSD, and more led by board-certified psychiatrists.",
};

const medicationItems = [
  "Comprehensive psychiatric evaluations",
  "Individualized medication plans",
  "Regular follow-up and monitoring",
  "Focus on safe, effective, long-term treatment",
];

const tmsItems = [
  "Non-invasive FDA-cleared treatment for depression",
  "Uses targeted magnetic stimulation to help regulate mood",
  "Effective option for treatment-resistant depression",
];

const ketamineItems = [
  "FDA-approved treatment for certain forms of resistant depression",
  "Provided in a closely monitored clinical setting",
  "Can deliver rapid relief of depressive symptoms",
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
            Expert psychiatric care delivered with compassion, precision, and a commitment to lasting mental wellness.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">
              Expert Psychiatric Care at Essenza
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              At Essenza, we provide personalized, evidence-based psychiatric care focused on improving mental health and overall quality of life. Our multidisciplinary team takes a thoughtful, patient-centered approach to diagnosis, treatment planning, and long-term wellness.
            </p>
          </div>

          {/* Personalized Medication Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6">
                <Stethoscope className="w-7 h-7" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">
                Personalized Medication Management
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Our psychiatrists carefully evaluate each patient to develop the most effective treatment plan.
              </p>
              <ul className="space-y-3">
                {medicationItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advanced Treatments */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
                Advanced Treatments for Depression
              </h2>
              <p className="text-muted leading-relaxed">
                For patients whose depression has not improved with standard treatments, Essenza offers innovative therapies.
              </p>

              {/* TMS Card */}
              <div className="bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">Transcranial Magnetic Stimulation (TMS)</h3>
                <ul className="space-y-2">
                  {tmsItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-highlight shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-muted font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ketamine Card */}
              <div className="bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-bg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FlaskConical className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">Ketamine Therapy</h3>
                <ul className="space-y-2">
                  {ketamineItems.map((item, idx) => (
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
          </div>

          {/* Closing CTA Banner */}
          <div className="bg-bg rounded-2xl p-10 border border-border text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6">
              <Heart className="w-7 h-7" aria-hidden="true" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 tracking-tight">
              Compassionate, Innovative Care
            </h2>
            <p className="text-muted leading-relaxed max-w-2xl mx-auto mb-8">
              At Essenza, we combine advanced psychiatric treatments with compassionate care to help patients regain emotional balance, improve daily functioning, and move toward lasting mental wellness.
            </p>
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