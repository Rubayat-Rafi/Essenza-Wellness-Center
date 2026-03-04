import Link from "next/link";
import { ArrowRight, Brain, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative bg-linear-to-br from-primary/5 via-primaryHover/5 to-highlight/5 min-h-[70vh] flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center w-full">
        {/* 404 number */}
        <div className="text-[10rem] md:text-[14rem] font-bold leading-none text-primary/10 select-none">
          404
        </div>

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-bg mb-6 -mt-12">
          <Brain className="w-8 h-8" />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved. Let us help you get back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-bg text-text border-2 border-border hover:border-primary hover:bg-primary hover:text-bg px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-14 pt-10 border-t border-border max-w-2xl mx-auto">
          <p className="text-sm text-muted mb-5 font-medium">Or explore these pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Services", href: "/services" },
              { label: "Conditions", href: "/conditions" },
              { label: "Our Team", href: "/team" },
              { label: "Insurance & Pricing", href: "/insurance-pricing" },
              { label: "Resources", href: "/resources" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary bg-primary/5 border border-primary/20 rounded-full px-4 py-2 hover:bg-primary hover:text-bg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
