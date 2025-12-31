import React from "react";
import { ClipboardCheck, Route, Shield, ArrowRight } from "lucide-react";
import Container from "../../Container/Container";
import Link from "next/link";

const PatientExperience = () => {
  const experienceSteps = [
    {
      icon: ClipboardCheck,
      title: "Your First Visit",
      description:
        "Begin with a comprehensive evaluation where we take time to understand your health history, concerns, and goals in an unhurried, supportive environment.",
    },
    {
      icon: Route,
      title: "Personalized Pathway",
      description:
        "Receive a customized treatment plan designed specifically for you, integrating the most effective therapies and strategies for your unique needs.",
    },
    {
      icon: Shield,
      title: "Safety & Monitoring",
      description:
        "Experience ongoing support with regular progress tracking, treatment adjustments, and direct access to your care team throughout your journey.",
    },
  ];

  return (
    <section className="relative py-12 lg:py-20 ">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 tracking-tight">
            Your Journey With Us
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            A thoughtful, compassionate approach to care from your very first
            visit.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {experienceSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-surface rounded-2xl p-8 border border-border shadow-sm"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-bg flex items-center justify-center font-bold text-lg shadow-md">
                  {idx + 1}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 text-primary mb-6">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/what-to-expect"
            className="inline-flex items-center justify-center gap-2 bg-bg text-primary px-8 py-4 rounded-lg text-base font-semibold border-2 border-primary hover:bg-primaryHover hover:text-bg transition-all shadow-sm hover:shadow-md duration-300 ease-in"
          >
            What to Expect
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PatientExperience;
