import { Clock, MapPin, Phone, Mail } from "lucide-react";
import Container from "../components/Container/Container";
import ContactFormCard from "../components/UI/ContactFormCard/ContactFormCard";

export const metadata = {
  title: "Contact Us | Essenza Wellness Center",
  description:
    "Get in touch with Essenza Wellness Center to schedule a consultation, verify insurance, or ask a question. Available in-person and via telehealth.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@essenzawellness.com",
    href: "mailto:hello@essenzawellness.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Wellness Drive, Suite 100\nSan Francisco, CA 94102",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 2:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-linear-to-br from-primary/5 via-primaryHover/5 to-highlight/5 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-100/40 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            Contact <span className="text-highlight">Essenza</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            Ready to take the first step? Reach out to schedule a consultation, verify insurance, or simply ask a question. We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Take the first step toward optimal brain health and lasting wellness. Our team is here to support you every step of the way — in person or via telehealth.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-highlight/10 text-highlight shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-text font-semibold hover:text-highlight transition-colors whitespace-pre-line"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-text font-semibold whitespace-pre-line">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-bg rounded-xl border border-border">
                <p className="text-sm text-muted">
                  <span className="font-semibold text-text">Telehealth Available.</span> We offer HIPAA-compliant video consultations for psychiatric evaluations, follow-ups, and medication management.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <ContactFormCard />
          </div>
        </Container>
      </section>
    </>
  );
}
