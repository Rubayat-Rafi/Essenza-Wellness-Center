import Link from "next/link";
import Image from "next/image";
import { Award, Brain, Shield, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-primary/5 via-primaryHover/5 to-highlight/5 overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Now Accepting New Patients
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] tracking-tight">
                Brain-First Approach to{" "}
                <span className="text-highlight">
                  Longevity & Mental Wellness
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                Evidence-based neuropsychiatry and preventive medicine. Advanced
                diagnostics, personalized protocols, and compassionate care for
                lasting cognitive health and vitality.
              </p>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-highlight" aria-hidden="true" />
                <span className="text-sm font-medium text-muted">
                  Board-Certified Specialists
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-highlight" aria-hidden="true" />
                <span className="text-sm font-medium text-muted">
                  Advanced Neurodiagnostics
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-highlight" aria-hidden="true" />
                <span className="text-sm font-medium text-muted">
                  HIPAA-Compliant Care
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-bg text-text hover:text-bg px-8 py-4 rounded-lg text-base font-semibold border-2 border-border hover:border-primary hover:bg-primary transition-all duration-300 ease-in"
              >
                Explore Services
              </Link>
            </div>

            {/* Subtext */}
            <p className="text-sm text-muted pt-2">
              Comprehensive initial consultations available in-person or via
              telehealth.
              <Link
                href="/insurance-pricing"
                className="text-highlight hover:underline ml-1"
              >
                View insurance & pricing
              </Link>
            </p>
          </div>

          {/* Right Column - Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-bg rounded-2xl shadow-2xl border border-border overflow-hidden">
                {/* Image placeholder with gradient */}
                <div className="aspect-3/3 relative">
                  <Image
                    src="/hero.png"
                    width={400}
                    height={500}
                    alt="hero-image"
                    className="h-full w-full object-cover object-top"
                  />
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 bg-linear-to-t from-primary/80 via-primaryHover/40 to-transparent">
                    <div className="space-y-3 text-surface">
                      <div className="inline-flex items-center gap-2 bg-bg/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                        <Brain className="w-4 h-4" />
                        <span>Personalized Brain Health</span>
                      </div>
                      <h3 className="text-2xl font-bold">
                        Where Science Meets Compassion
                      </h3>
                      <p className="text-sm text-bg/90">
                        Integrating neurology, psychiatry, and longevity
                        medicine for comprehensive care.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="bg-primary px-6 py-5">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-bg">15+</div>
                      <div className="text-xs text-bg/70 mt-1">
                        Years
                        <br />
                        Experience
                      </div>
                    </div>
                    <div className="border-l border-r border-border/40">
                      <div className="text-2xl font-bold text-bg">98%</div>
                      <div className="text-xs text-bg/70 mt-1">
                        Patient
                        <br />
                        Satisfaction
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-bg">5K+</div>
                      <div className="text-xs text-bg/70 mt-1">
                        Patients
                        <br />
                        Served
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accreditation badge */}
              <div className="absolute -top-4 -right-4 bg-highlight text-text px-5 py-3 rounded-full shadow-xl z-10">
                <div className="text-center">
                  <div className="text-xs font-semibold">Accredited</div>
                  <div className="text-[10px] opacity-90">
                    Clinical Excellence
                  </div>
                </div>
              </div>

              {/* Floating trust element */}
              <div className="hidden lg:block absolute bottom-6 -left-36 bg-bg rounded-xl shadow-lg border border-border p-4 max-w-50 z-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-highlight/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-highlight" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-text">
                      Secure & Confidential
                    </div>
                    <div className="text-xs text-muted mt-0.5">
                      HIPAA-compliant telehealth available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Row */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-text">TMS</div>
              <div className="text-sm text-muted mt-1">
                FDA-Approved Therapy
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text">QEEG</div>
              <div className="text-sm text-muted mt-1">Brain Mapping</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text">IV</div>
              <div className="text-sm text-muted mt-1">
                Ketamine Protocols
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text">Lab</div>
              <div className="text-sm text-muted mt-1">
                Advanced Diagnostics
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
