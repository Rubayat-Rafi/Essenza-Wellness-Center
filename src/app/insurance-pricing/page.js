import Link from "next/link";
import { ArrowRight, Shield, CreditCard, Phone, FileCheck } from "lucide-react";
import Container from "../components/Container/Container";

export const metadata = {
  title: "Insurance & Pricing | Essenza Wellness Center",
  description:
    "Learn about insurance coverage, payment options, and pricing at Essenza Wellness Center — including HSA/FSA eligibility and concierge options.",
};

const paymentOptions = [
  {
    icon: Shield,
    title: "Insurance",
    description: "We work with select major insurance plans for covered services. Contact our team to verify your specific benefits and coverage before your first appointment.",
    tags: ["Major Medical Plans", "Coverage Verification", "Pre-authorization Support"],
  },
  {
    icon: CreditCard,
    title: "Cash-Pay & Self-Pay",
    description: "Transparent, competitive pricing for self-pay patients. We believe exceptional care should be accessible — ask our team about bundled service options.",
    tags: ["Transparent Pricing", "Service Bundles", "No Surprise Bills"],
  },
  {
    icon: FileCheck,
    title: "HSA / FSA",
    description: "Many of our services are eligible for Health Savings Account (HSA) and Flexible Spending Account (FSA) payments. Confirm eligibility with your plan administrator.",
    tags: ["HSA Eligible", "FSA Eligible", "Tax-Advantaged"],
  },
  {
    icon: Phone,
    title: "Concierge Membership",
    description: "Our concierge program offers priority scheduling, extended appointment times, direct physician access, and comprehensive annual wellness programs.",
    tags: ["Priority Access", "Annual Wellness", "Direct Provider Line"],
  },
];

const faqs = [
  {
    question: "Does insurance cover TMS therapy?",
    answer: "TMS therapy is FDA-cleared and covered by many major insurance plans for treatment-resistant depression. Coverage varies by plan — our team will verify your benefits and handle pre-authorization.",
  },
  {
    question: "Is ketamine therapy covered by insurance?",
    answer: "Ketamine infusions are generally not covered by insurance and are typically self-pay. We provide transparent pricing and offer flexible payment arrangements.",
  },
  {
    question: "What does an initial consultation cost?",
    answer: "Initial consultation fees vary by specialty and provider. Please contact our office for current pricing — we are committed to transparency and will provide a full cost breakdown before your visit.",
  },
  {
    question: "Can I use my HSA or FSA card?",
    answer: "Yes, we accept HSA and FSA cards for eligible services. Most medical services qualify — contact your HSA/FSA administrator to confirm coverage for specific treatments.",
  },
];

export default function InsurancePricingPage() {
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
            <span className="text-sm font-medium text-primary">Financial Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            Insurance & <span className="text-highlight">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            Transparent financial information to help you plan your care. We offer flexible options to ensure access to the treatment you need.
          </p>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">Payment Options</h2>
            <p className="text-lg text-muted leading-relaxed">
              We offer multiple pathways to make exceptional care accessible and affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {paymentOptions.map((option, idx) => {
              const Icon = option.icon;
              return (
                <div key={idx} className="group relative bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-4">{option.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{option.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {option.tags.map((tag, tidx) => (
                      <span key={tidx} className="text-xs font-medium text-muted bg-bg border border-border rounded-full px-3 py-1.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          {/* Insurance Verification CTA */}
          <div className="bg-primary rounded-2xl p-10 text-center mb-20">
            <h3 className="text-2xl font-bold text-bg mb-4">Verify Your Insurance Coverage</h3>
            <p className="text-bg/80 mb-8 max-w-xl mx-auto">
              Our team will check your benefits and provide a clear breakdown of expected costs before your first visit — no surprises.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-highlight text-text px-8 py-4 rounded-lg text-base font-semibold hover:bg-highlight/90 transition-all shadow-sm"
            >
              Contact Us to Verify Coverage
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-8 text-center tracking-tight">
              Insurance & Billing FAQs
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-bg rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-text mb-3">{faq.question}</h3>
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">Have more questions about billing or coverage? We're happy to help.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Speak with Our Billing Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
