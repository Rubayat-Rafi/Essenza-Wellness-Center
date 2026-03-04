import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Brain, Heart, Shield, Microscope } from "lucide-react";
import Container from "../components/Container/Container";

export const metadata = {
  title: "Resources | Essenza Wellness Center",
  description:
    "Patient resources, educational guides, and FAQs about mental health, neurology, TMS, ketamine therapy, and longevity medicine at Essenza Wellness Center.",
};

const articles = [
  {
    icon: Brain,
    category: "Mental Health",
    title: "Understanding Treatment-Resistant Depression",
    description: "Learn about why some patients don't respond to standard antidepressants and what advanced options — including TMS and ketamine — offer as alternatives.",
  },
  {
    icon: Microscope,
    category: "Neurotechnology",
    title: "What Is qEEG Brain Mapping?",
    description: "A patient-friendly guide to quantitative EEG — how it works, what it measures, and why it matters for personalized psychiatric and neurological care.",
  },
  {
    icon: Heart,
    category: "Longevity",
    title: "Key Biomarkers for Healthy Aging",
    description: "Discover which lab markers our longevity specialists track to assess biological age, metabolic health, and cognitive performance — and why they matter.",
  },
  {
    icon: Shield,
    category: "Women's Health",
    title: "Navigating Perimenopause & Hormone Optimization",
    description: "An evidence-based overview of hormonal changes during perimenopause and the clinical approaches available for restoring balance and vitality.",
  },
];

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "We work with select insurance plans and offer cash-pay, HSA/FSA, and concierge options. Contact our team to verify your specific coverage.",
  },
  {
    question: "How do I know which service is right for me?",
    answer: "Your journey begins with a comprehensive initial consultation where our providers will evaluate your health history and recommend the most appropriate care path.",
  },
  {
    question: "Is telehealth available?",
    answer: "Yes — we offer HIPAA-compliant telehealth for psychiatric consultations, follow-up appointments, and certain evaluations.",
  },
  {
    question: "What should I expect at my first visit?",
    answer: "Your first visit is an in-depth evaluation (60–90 minutes) covering your full health history, current concerns, goals, and a review of any prior testing. We take the time to truly understand you.",
  },
];

export default function ResourcesPage() {
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
            <span className="text-sm font-medium text-primary">Patient Resources</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            Resources & <span className="text-highlight">Education</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            Educational guides, clinical insights, and answers to common questions — helping you make informed decisions about your care.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">Patient Education</h2>
            <p className="text-lg text-muted leading-relaxed">
              Clinical insights written to empower you with knowledge about your health and treatment options.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {articles.map((article, idx) => {
              const Icon = article.icon;
              return (
                <div key={idx} className="group relative bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-bg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-highlight bg-highlight/10 border border-highlight/20 rounded-full px-3 py-1">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-4">{article.title}</h3>
                  <p className="text-muted leading-relaxed mb-4">{article.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <BookOpen className="w-4 h-4" />
                    Read article
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          {/* FAQ */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Quick answers to the questions we hear most often from new patients.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-bg rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-primary text-bg flex items-center justify-center font-bold text-sm shrink-0">
                      Q
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text mb-3">{faq.question}</h3>
                      <p className="text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">Still have questions? Our team is here to help.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
