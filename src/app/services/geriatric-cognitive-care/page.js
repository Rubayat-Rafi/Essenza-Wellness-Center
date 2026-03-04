import Link from "next/link";
import { ArrowRight, Shield, Brain, Heart, Users } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Geriatric & Cognitive Care | Essenza Wellness Center",
  description:
    "Compassionate, expert care for memory disorders, cognitive decline, and healthy aging — helping older adults maintain brain health and independence.",
};

const conditions = [
  "Alzheimer's Disease",
  "Mild Cognitive Impairment (MCI)",
  "Vascular Dementia",
  "Parkinson's-Related Cognitive Decline",
  "Age-Related Memory Loss",
  "Delirium & Confusion",
  "Late-Life Depression & Anxiety",
  "Polypharmacy & Medication Management",
];

const services = [
  {
    icon: Brain,
    title: "Cognitive Assessment",
    description: "Standardized cognitive testing, qEEG brain mapping, and neuroimaging review to accurately characterize the type and stage of cognitive change.",
  },
  {
    icon: Heart,
    title: "Personalized Care Plans",
    description: "Evidence-based treatment plans addressing cognitive, psychiatric, and physical health — designed to preserve function and quality of life.",
  },
  {
    icon: Users,
    title: "Family & Caregiver Support",
    description: "We partner with families and caregivers, providing education, guidance, and coordination to support everyone involved in the care journey.",
  },
  {
    icon: Shield,
    title: "Preventive Brain Health",
    description: "For adults 55+ seeking to proactively protect their cognitive health, we offer risk assessment and evidence-based neuroprotective protocols.",
  },
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
            Expert, compassionate care for memory disorders and cognitive aging — preserving independence, dignity, and quality of life.
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
                Our geriatric and cognitive care team brings specialized expertise in the neurological and psychiatric aspects of aging — addressing memory, mood, and functional health with compassion and clinical precision.
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
            <div className="space-y-5">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="group flex items-start gap-4 bg-bg rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
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
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Schedule a Cognitive Care Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
