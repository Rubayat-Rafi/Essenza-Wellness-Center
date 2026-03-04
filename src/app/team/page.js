import Link from "next/link";
import { ArrowRight, Award, Brain, Heart, Microscope } from "lucide-react";
import Container from "../components/Container/Container";

export const metadata = {
  title: "Our Team | Essenza Wellness Center",
  description:
    "Meet the board-certified specialists at Essenza Wellness Center — experts in psychiatry, neurology, longevity medicine, and women's health.",
};

const team = [
  {
    name: "Dr. Sarah Chen, MD",
    role: "Psychiatrist & Medical Director",
    specialties: ["Adult Psychiatry", "TMS Therapy", "Ketamine Protocols"],
    bio: "Board-certified in psychiatry with over 15 years of clinical experience. Dr. Chen leads our psychiatric programs and specializes in treatment-resistant depression using advanced neurotechnology.",
    icon: Brain,
  },
  {
    name: "Dr. Michael Torres, MD",
    role: "Neurologist",
    specialties: ["Cognitive Neurology", "Memory Disorders", "qEEG Diagnostics"],
    bio: "A fellowship-trained neurologist specializing in cognitive decline, brain mapping, and functional neurological assessment. Dr. Torres brings precision diagnostics to every patient interaction.",
    icon: Microscope,
  },
  {
    name: "Dr. Amara Okafor, MD",
    role: "Longevity & Preventive Medicine Physician",
    specialties: ["Longevity Medicine", "Metabolic Health", "Hormone Optimization"],
    bio: "Focused on proactive health strategies, Dr. Okafor combines functional medicine with the latest longevity science to help patients maximize their healthspan and cognitive vitality.",
    icon: Heart,
  },
  {
    name: "Dr. Elena Vasquez, MD",
    role: "Women's Health Specialist",
    specialties: ["Hormone Therapy", "Perimenopause", "Integrative Women's Health"],
    bio: "Dedicated to women's hormonal health at every life stage, Dr. Vasquez creates individualized plans that address the full spectrum of hormonal transitions with compassion and clinical precision.",
    icon: Award,
  },
];

const values = [
  { label: "Board-Certified", description: "All physicians board-certified in their specialty disciplines" },
  { label: "Collaborative", description: "Multidisciplinary team reviews ensure comprehensive care" },
  { label: "Accessible", description: "Direct provider access and same-day communication available" },
];

export default function TeamPage() {
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
            <span className="text-sm font-medium text-primary">Our Specialists</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            Meet <span className="text-highlight">Our Team</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            A multidisciplinary team of board-certified specialists united by a shared commitment to clinical excellence and compassionate patient care.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {team.map((member, idx) => {
              const Icon = member.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-bg shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text">{member.name}</h3>
                      <p className="text-primary font-semibold text-sm mt-1">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((spec, sidx) => (
                      <span
                        key={sidx}
                        className="text-xs font-medium text-highlight bg-highlight/10 border border-highlight/20 rounded-full px-3 py-1"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>

          {/* Team Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
            {values.map((value, idx) => (
              <div key={idx} className="text-center p-6">
                <h3 className="text-lg font-bold text-text mb-2">{value.label}</h3>
                <p className="text-muted text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
