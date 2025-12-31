import { ShieldCheck, Award, FileCheck, BarChart3 } from "lucide-react";
import Container from "../../Container/Container";

export default function TrustSignals() {
  const trustItems = [
    {
      icon: Award,
      title: "Board-Certified Providers",
      description:
        "Our physicians are board-certified in psychiatry, neurology, and longevity medicine, bringing decades of specialized training and clinical excellence.",
    },
    {
      icon: ShieldCheck,
      title: "FDA-Cleared Technologies",
      description:
        "We utilize only FDA-cleared medical devices and evidence-based treatments, including TMS therapy and advanced diagnostic tools.",
    },
    {
      icon: FileCheck,
      title: "Evidence-Based Protocols",
      description:
        "Every treatment plan is grounded in peer-reviewed research and clinical best practices, ensuring safe and effective care.",
    },
    {
      icon: BarChart3,
      title: "Verified Outcomes Tracking",
      description:
        "We systematically monitor treatment progress with objective metrics and validated assessments to optimize your results.",
    },
  ];

  return (
    <section className="relative py-12 lg:py-20 bg-surface">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">
            Your Safety & Trust Matter
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Rigorous standards and transparent practices guide everything we do.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-bg rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-highlight/10 text-highlight mb-5 group-hover:bg-highlight group-hover:text-surface transition-all duration-300">
                  <Icon className="w-8 h-8" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-text mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative element */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Insurance Section */}
        <div className="mt-12 pt-12 border-t border-border/50">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-text mb-6">
              Insurance & Payment Options
            </h3>
            <div className="flex flex-wrap justify-center gap-3 my-4">
              {[
                "Cash-pay",
                "Concierge options",
                "HSA/FSA (if eligible)",
                "Coverage verification",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-muted bg-bg border border-border rounded-full px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted max-w-2xl mx-auto">
              We accept most major insurance plans and offer flexible payment
              options. Contact our team to verify your coverage and discuss
              financial arrangements.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
