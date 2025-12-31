"use client";
import React, { useRef, useState } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import Link from "next/link";

const navData = {
  topbar: {
    message: "Board-certified, evidence-based care",
    phone: "+1 (555) 123-4567",
    // ctaLabel: "Book a Consultation",
    // ctaHref: "/contact",
  },
  nav: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Our Philosophy", href: "/about/philosophy" },
        { label: "Clinical Model", href: "/about/clinical-model" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      children: [
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
          label: "Brain Mapping & Neurodiagnostics",
          href: "/services/brain-mapping-neurodiagnostics",
        },
        {
          label: "Longevity & Preventive Medicine",
          href: "/services/longevity-preventive-medicine",
        },
        {
          label: "Women's Health & Hormone Optimization",
          href: "/services/womens-health-hormone-optimization",
        },
        {
          label: "Geriatric & Cognitive Care",
          href: "/services/geriatric-cognitive-care",
        },
        {
          label: "Rehabilitation & Functional Assessment",
          href: "/services/rehabilitation-functional-assessment",
        },
      ],
    },
    { label: "Diagnostics & Technology", href: "/diagnostics-technology" },
    { label: "Conditions", href: "/conditions" },
    { label: "Our Team", href: "/team" },
    { label: "Resources", href: "/resources" },
    { label: "Insurance & Pricing", href: "/insurance-pricing" },
    { label: "Contact", href: "/contact" },
  ],
  primaryCta: { label: "Book a Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/services" },
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const closeTimer = useRef(null);

  const openMenu = (idx) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(idx);
  };
  const closeMenuSoon = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <div className="bg-surface">
      {/* Topbar */}
      <div className=" max-md:hidden bg-primary text-bg text-sm border-b border-border">
        <div className="max-w-360 mx-auto sm:px-2 px-4 py-3 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="opacity-90">{navData.topbar.message}</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href={`tel:${navData.topbar.phone}`}
              className="flex items-center gap-2 text-bg no-underline opacity-90 hover:opacity-100 transition-opacity"
            >
              <Phone size={16} />
              <span>{navData.topbar.phone}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-border ">
        <div className="max-w-360 mx-auto sm:px-2 px-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center max-lg:space-x-2">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 bg-transparent border-none cursor-pointer text-text"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Logo */}
              <Link
                href="/"
                className="text-2xl font-semibold text-text no-underline tracking-tight"
              >
                Essenza
              </Link>
            </div>

            <div className="flex items-center">
              {/* Desktop Navigation */}
              <div className="hidden xl:flex items-center">
                {navData.nav.slice(0, -1).map((item, idx) => (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => item.children && openMenu(idx)}
                    onMouseLeave={() => item.children && closeMenuSoon()}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-3.5 py-2.5 text-text no-underline text-base font-medium rounded-md hover:bg-primary/5 transition-colors"
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            openDropdown === idx ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {item.children && openDropdown === idx && (
                      <div
                        onMouseEnter={() => openMenu(idx)}
                        onMouseLeave={closeMenuSoon}
                        className={`absolute top-full left-0 mt-2 bg-surface border border-border rounded-lg shadow-xl ${
                          item.label === "Services"
                            ? "min-w-[320px]"
                            : "min-w-55"
                        } z-50`}
                      >
                        <div className="p-2">
                          {item.children.map((child, cidx) => (
                            <a
                              key={cidx}
                              href={child.href}
                              className="block px-4 py-3 text-text no-underline text-sm rounded-md hover:bg-primary/5 transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Link
                href={navData.primaryCta.href}
                className="bg-primary text-bg px-4 md:px-6 py-1.5 md:py-2.5 rounded-md no-underline text-sm md:text-base font-medium ml-2 hover:bg-primaryHover transition-colors"
              >
                {navData.primaryCta.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Drawer + Backdrop */}
        <div className="xl:hidden">
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => {
              setMobileMenuOpen(false);
              setMobileDropdown(null);
            }}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            className={`fixed top-0 left-0 z-50 h-full w-[88%] max-w-sm bg-surface shadow-2xl transform transition-transform duration-300 ease-out ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-border">
              <Link
                href="/"
                className="text-xl font-semibold text-text no-underline tracking-tight"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileDropdown(null);
                }}
              >
                Essenza
              </Link>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileDropdown(null);
                }}
                className="p-2 bg-transparent border-none cursor-pointer text-text"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="px-6 py-4 overflow-y-auto h-[calc(100%-4rem)]">
              {navData.nav.map((item, idx) => {
                const isOpen = mobileDropdown === idx;
                const hasChildren = !!item.children?.length;

                return (
                  <div key={idx} className="border-b border-border/60">
                    {hasChildren ? (
                      <button
                        type="button"
                        onClick={() => setMobileDropdown(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between py-4 text-text text-left text-base font-medium bg-transparent border-none cursor-pointer"
                        aria-expanded={isOpen}
                        aria-controls={`drawer-section-${idx}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-4 text-text no-underline text-base font-medium"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileDropdown(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Accordion */}
                    {hasChildren && (
                      <div
                        id={`drawer-section-${idx}`}
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pl-4 pb-3">
                            {item.children.map((child, cidx) => (
                              <Link
                                key={cidx}
                                href={child.href}
                                className="block py-2 text-muted no-underline text-base hover:text-text transition-colors"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileDropdown(null);
                                }}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
