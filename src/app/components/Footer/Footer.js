import Link from "next/link";
import Container from "../Container/Container";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const siteData = {
  name: "Essenza Wellness Center",
  tagline: "Where Brain Health Drives Longevity",
  footer: {
    columns: [
      {
        title: "Clinic",
        links: [
          { label: "About", href: "/about" },
          { label: "Our Philosophy", href: "/about/philosophy" },
          { label: "Clinical Model", href: "/about/clinical-model" },
          { label: "Our Team", href: "/team" },
        ],
      },
      {
        title: "Services",
        links: [
          {
            label: "Mental Health & Psychiatry",
            href: "/services/mental-health-psychiatry",
          },
          { label: "TMS Therapy", href: "/services/tms-therapy" },
          { label: "Ketamine Therapy", href: "/services/ketamine-therapy" },
          {
            label: "Neurology & Brain Health",
            href: "/services/neurology-brain-health",
          },
          {
            label: "Longevity & Preventive Medicine",
            href: "/services/longevity-preventive-medicine",
          },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Conditions We Treat", href: "/conditions" },
          {
            label: "Diagnostics & Technology",
            href: "/diagnostics-technology",
          },
          { label: "Resources", href: "/resources" },
          { label: "Insurance & Pricing", href: "/insurance-pricing" },
        ],
      },
    ],
    contact: {
      phone: "(555) 123-4567",
      email: "info@essenzawellness.com",
      address: "123 Wellness Drive, Suite 200, Your City, ST 12345",
      hours: ["Mon–Fri: 9am–5pm", "Sat: By appointment", "Sun: Closed"],
    },
    legal: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "HIPAA Compliance", href: "/legal/hipaa" },
    ],
    disclaimer:
      "Information on this website is for educational purposes and is not medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment.",
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-primaryHover border-t border-border py-6 md:py-12 sm:px-2 px-4"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-semibold text-surface no-underline tracking-tight"
            >
              {siteData.name}
            </Link>
            <p className="mt-2 text-sm text-bg/80">{siteData.tagline}</p>

            <div className="mt-6 space-y-3">
              <div>
                <h3 className="text-sm font-medium text-surface mb-2">
                  Contact
                </h3>
                <div className="space-y-2 text-sm text-bg/80">
                  <Link
                    href={`tel:${siteData.footer.contact.phone}`}
                    className="block hover:text-surface transition-colors"
                    aria-label={`Call ${siteData.footer.contact.phone}`}
                  >
                    {siteData.footer.contact.phone}
                  </Link>
                  <Link
                    href={`mailto:${siteData.footer.contact.email}`}
                    className="block hover:text-surface transition-colors"
                    aria-label={`Email ${siteData.footer.contact.email}`}
                  >
                    {siteData.footer.contact.email}
                  </Link>
                  <p className="text-bg/80">
                    {siteData.footer.contact.address}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-surface mb-2">Hours</h3>
                <div className="space-y-1 text-sm text-bg/80">
                  {siteData.footer.contact.hours.map((hour, idx) => (
                    <p key={idx}>{hour}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div
              className="mt-6 flex space-x-4 items-center"
              role="group"
              aria-label="Social media links"
            >
              <Link
                href="#"
                className="text-bg/80 hover:text-surface transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-bg/80 hover:text-surface transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-bg/80 hover:text-surface transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Link Columns */}
          {siteData.footer.columns.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-lg md:text-xl font-semibold text-surface mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3" role="list">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-sm text-bg/80 hover:text-surface transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border/20">
          <p className="text-xs text-bg/80 leading-relaxed">
            <strong>Medical Disclaimer:</strong> {siteData.footer.disclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-bg/80">
            © {currentYear} {siteData.name}. All rights reserved.
          </p>

          <div className="flex gap-6">
            {siteData.footer.legal.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-sm text-bg/80 hover:text-surface transition-colors no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
