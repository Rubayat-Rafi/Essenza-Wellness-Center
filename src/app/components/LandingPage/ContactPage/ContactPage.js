import React from "react";
import Container from "../../Container/Container";
import { Clock, MapPin, Phone } from "lucide-react";
import ContactFormCard from "../../UI/ContactFormCard/ContactFormCard";

const ContactPage = () => {
  return (
    <section className="relative py-12 lg:py-20 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - CTA */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6 tracking-tight">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Take the first step toward optimal brain health and lasting
              wellness. Our team is here to support you every step of the way.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-highlight/10 text-highlight shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Call Us</p>
                  <a
                    href="tel:+15551234567"
                    className="text-text font-semibold hover:text-highlight transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg  bg-highlight/10 text-highlight shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Visit Us</p>
                  <p className="text-text font-semibold">
                    123 Wellness Drive, Suite 100
                    <br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg  bg-highlight/10 text-highlight shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Hours</p>
                  <p className="text-text font-semibold">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <ContactFormCard />
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;
