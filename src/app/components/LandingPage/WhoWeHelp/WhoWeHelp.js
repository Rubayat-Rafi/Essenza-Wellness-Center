import {
  CloudRain,
  Brain,
  Activity,
  Flame,
  Sparkles,
  HeartPulse,
} from "lucide-react";
import Container from "../../Container/Container";

export default function WhoWeHelp() {
  const conditions = [
    {
      icon: CloudRain,
      title: "Depression & Anxiety",
      description:
        "Comprehensive treatment for mood disorders using advanced therapies including TMS, ketamine, and evidence-based psychotherapy. We address the root causes of depression and anxiety to help you reclaim joy and peace of mind.",
    },
    {
      icon: Brain,
      title: "Cognitive Decline & Memory Loss",
      description:
        "Early detection and intervention for memory concerns, mild cognitive impairment, and dementia. Our brain-first approach combines advanced diagnostics with neuroprotective strategies to preserve cognitive function.",
    },
    {
      icon: Activity,
      title: "Hormonal Imbalance",
      description:
        "Specialized care for thyroid disorders, perimenopause, menopause, and hormonal transitions. Personalized hormone optimization to restore energy, mood, and vitality at every stage of life.",
    },
    {
      icon: Flame,
      title: "Chronic Stress & Burnout",
      description:
        "Targeted interventions for stress-related conditions, adrenal dysfunction, and executive burnout. We help high-performing individuals restore resilience and sustainable wellness without compromising success.",
    },
    {
      icon: Sparkles,
      title: "Aging & Longevity Optimization",
      description:
        "Proactive protocols to extend healthspan and optimize quality of life. Advanced biomarker testing, metabolic optimization, and preventive strategies to age with vitality and purpose.",
    },
    {
      icon: HeartPulse,
      title: "Treatment-Resistant Conditions",
      description:
        "Specialized care when conventional treatments haven't worked. We offer innovative therapies like TMS and ketamine for individuals who haven't found relief through traditional approaches.",
    },
  ];

  return (
    <section className="relative py-12 lg:py-20">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 tracking-tight">
            Who We Help
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Expert care for individuals seeking lasting solutions to complex
            neuropsychiatric and age-related health challenges.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((condition, idx) => {
            const Icon = condition.icon;
            return (
              <div
                key={idx}
                className="group relative bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text mb-4">
                  {condition.title}
                </h3>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {condition.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted mb-6">
            Find personalized solutions for your unique health journey.
          </p>
          <a
            href="/conditions"
            className="inline-flex items-center justify-center bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
          >
            View Conditions We Treat
          </a>
        </div>
      </Container>
    </section>
  );
}
