"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";

const PLANS = [
  {
    id: 1,
    badge: "Option 1",
    name: "Concierge Membership",
    price: "$5,000",
    period: "/ 12-month term",
    note: "Office visits billed separately",
    features: [
      "Same-day or next-business-day appointments",
      "24/7 urgent provider access (non-emergency)",
      "Care coordination & navigation",
      "Annual longevity & prevention care plan",
      "Secure messaging (response within 1–2 days)",
      "Clinic-to-clinic specialist coordination",
    ],
  },
  {
    id: 2,
    badge: "Option 2",
    name: "Longevity Cash Package",
    price: "$20,000",
    period: "all-inclusive",
    note: "Listed diagnostics & coordination included",
    features: [
      "Whole-body MRI + comprehensive longevity labs",
      "DEXA scan, Echo, EKG & Holter monitoring",
      "Genome sequencing + cell-free DNA cancer screen",
      "Screening mammography (age/clinically indicated)",
      "Intake visit, results review & follow-up visits",
      "Full care coordination & specialist referrals",
    ],
  },
];

const STEPS = ["Patient Info", "Select Plan", "Terms", "Signature"];

function CheckIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-wider uppercase text-highlight">
        {label}
        {required && <span className="text-[#B00020] ml-0.5">*</span>}
      </label>
      {children}
      {error && <span className="text-xs text-[#B00020]">{error}</span>}
    </div>
  );
}

function Input({ error, className = "", ...props }) {
  const [focused, setFocused] = useState(false);
  
  return (
    <input
      {...props}
      className={`
        font-inherit text-[15px] text-text bg-bg border rounded-md px-3.5 py-2.5 
        outline-none w-full transition-all duration-200 box-border
        ${error ? "border-[#B00020]" : focused ? "border-primaryHover shadow-[0_0_0_3px_rgba(22,54,92,0.15)]" : "border-border"}
        ${className}
      `}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function Select({ error, children, className = "", ...props }) {
  const [focused, setFocused] = useState(false);
  
  return (
    <select
      {...props}
      className={`
        font-inherit text-[15px] text-text bg-bg border rounded-md px-3.5 py-2.5 
        outline-none w-full transition-all duration-200 box-border cursor-pointer
        ${error ? "border-[#B00020]" : focused ? "border-primaryHover shadow-[0_0_0_3px_rgba(22,54,92,0.15)]" : "border-border"}
        ${className}
      `}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {children}
    </select>
  );
}

export default function EssenzaMembershipAgreement() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [info, setInfo] = useState({
    fullName: "",
    dob: "",
    phone: "",
    email: "",
    contact: "",
    effectiveDate: "",
  });
  const [infoErrors, setInfoErrors] = useState({});

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planError, setPlanError] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeInsurance, setAgreeInsurance] = useState(false);
  const [termsError, setTermsError] = useState(false);

  const [printedName, setPrintedName] = useState("");
  const [signDate, setSignDate] = useState("");
  const [sigErrors, setSigErrors] = useState({});
  const [hasSig, setHasSig] = useState(false);
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (step !== 3) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const w = canvas.parentElement.clientWidth;
      canvas.width = w * ratio;
      canvas.height = 140 * ratio;
      canvas.style.width = w + "px";
      canvas.style.height = "140px";
      const ctx = canvas.getContext("2d");
      ctx.scale(ratio, ratio);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [step]);

  const getPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    const src = e.touches ? e.touches[0] : e;
    return { x: src.clientX - rect.left, y: src.clientY - rect.top };
  };

  const onSigDown = useCallback((e) => {
    e.preventDefault();
    drawing.current = true;
    lastPos.current = getPos(e, canvasRef.current);
  }, []);

  const onSigMove = useCallback((e) => {
    e.preventDefault();
    if (!drawing.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pos = getPos(e, canvas);
    ctx.strokeStyle = "var(--primary)";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    lastPos.current = pos;
    setHasSig(true);
  }, []);

  const onSigUp = useCallback(() => {
    drawing.current = false;
  }, []);

  const clearSig = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSig(false);
  };

  const validateInfo = () => {
    const errs = {};
    if (!info.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!info.dob) errs.dob = "Please enter your date of birth.";
    if (!/^\+?[\d\s\-().]{10,}$/.test(info.phone))
      errs.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email))
      errs.email = "Please enter a valid email.";
    if (!info.contact) errs.contact = "Please select a contact method.";
    if (!info.effectiveDate)
      errs.effectiveDate = "Please select an effective date.";
    setInfoErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const goNext = () => {
    if (step === 0 && !validateInfo()) return;
    if (step === 1) {
      if (!selectedPlan) {
        setPlanError(true);
        return;
      }
      setPlanError(false);
    }
    if (step === 2) {
      if (!agreeTerms || !agreeInsurance) {
        setTermsError(true);
        return;
      }
      setTermsError(false);
    }
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    const errs = {};
    if (!printedName.trim()) errs.printedName = "Please enter your printed name.";
    if (!signDate) errs.signDate = "Please enter the signing date.";
    if (!hasSig) errs.sig = "Please provide your signature.";
    setSigErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const planLabel =
    selectedPlan === 1
      ? "Concierge Membership — $5,000/yr"
      : selectedPlan === 2
      ? "Longevity Cash Package — $20,000"
      : "";

  if (submitted) {
    return (
      <div className="min-h-screen bg-bg">
        <header className="bg-primary text-white text-center py-10 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-75 h-75 bg-highlight/10 rounded-full blur-[80px] pointer-events-none" />
          <h1 className="relative z-10 text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[0.12em] ">
            ESSENZA
          </h1>
          <p className="relative z-10 text-highlight text-base tracking-wide mt-1 italic">
            Mind and Body Longevity Clinic
          </p>
          <p className="relative z-10 text-white/50 text-xs mt-2">
            8950 Villa La Jolla Drive, Building C, Suite 212 · La Jolla, CA 92037
          </p>
        </header>

        <div className="max-w-205 mx-auto px-5 py-9 pb-20">
          <div className="bg-surface border border-border rounded-xl p-10 md:p-15 text-center">
            <div className="w-18 h-18 bg-highlight rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckIcon size={32} color="#fff" />
            </div>
            <h2 className=" text-3xl md:text-4xl text-primary mb-2.5">
              Agreement Submitted
            </h2>
            <p className="text-[15px] text-muted max-w-115 mx-auto mb-8 leading-relaxed">
              Thank you. Your Essenza membership agreement has been received. A
              confirmation will be sent to your email shortly.
            </p>
            <div className="bg-bg border border-border rounded-lg p-6 max-w-105 mx-auto mb-7 text-left">
              {[
                ["Name", info.fullName],
                ["Date of Birth", info.dob],
                ["Email", info.email],
                ["Selected Plan", planLabel],
                ["Effective Date", info.effectiveDate],
                ["Signed", signDate],
              ].map(([label, val]) => (
                <div
                  key={label}
                  className="flex justify-between text-sm py-2 border-b border-border last:border-0 gap-3"
                >
                  <span className="text-muted font-medium">{label}</span>
                  <span className="text-primary font-semibold text-right">
                    {val || "—"}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted">
              Questions? Call us or message through the patient portal.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg ">
      <header className="bg-primary text-white text-center py-10 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-75 h-75 bg-highlight/10 rounded-full blur-[80px] pointer-events-none" />
        <h1 className="relative z-10 text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[0.12em] ">
          ESSENZA
        </h1>
        <p className="relative z-10 text-highlight text-base tracking-wide mt-1 italic">
          Mind and Body Longevity Clinic
        </p>
        <p className="relative z-10 text-white/50 text-xs mt-2">
          8950 Villa La Jolla Drive, Building C, Suite 212 · La Jolla, CA 92037
        </p>
        <div className="relative z-10 inline-block mt-5  text-sm tracking-wider uppercase text-highlight border-t border-b border-highlight/40 px-6 py-1.5">
          Membership & Cash Package Agreement
        </div>
      </header>

      <div className="max-w-205 mx-auto px-5 py-9 pb-20">
        {/* Progress */}
        <div className="flex mb-8 rounded-md overflow-hidden border border-border">
          {STEPS.map((label, i) => (
            <div
              key={i}
              className={`
                flex-1 py-2.5 px-1.5 text-center text-[11px] font-semibold tracking-wider uppercase
                transition-colors duration-200
                ${i === step ? "bg-primary text-white" : ""}
                ${i < step ? "bg-highlight/20 text-primary cursor-pointer" : ""}
                ${i > step ? "bg-surface text-muted" : ""}
                ${i < STEPS.length - 1 ? "border-r border-border" : ""}
              `}
              onClick={() => i < step && setStep(i)}
            >
              {i < step && "✓ "}{label}
            </div>
          ))}
        </div>

        {/* Step 0: Patient Info */}
        {step === 0 && (
          <div className="bg-surface border border-border rounded-xl p-8 md:p-10 mb-6">
            <h2 className=" text-2xl md:text-3xl font-bold text-primary mb-1.5">
              Patient Information
            </h2>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Please complete all required fields below.
            </p>
            <hr className="h-0.5 border-0 bg-linear-to-r from-highlight to-border mb-7" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <Field label="Full Name" required error={infoErrors.fullName}>
                  <Input
                    value={info.fullName}
                    error={infoErrors.fullName}
                    onChange={(e) =>
                      setInfo((p) => ({ ...p, fullName: e.target.value }))
                    }
                    placeholder="First Middle Last"
                  />
                </Field>
              </div>
              
              <Field label="Date of Birth" required error={infoErrors.dob}>
                <Input
                  type="date"
                  value={info.dob}
                  error={infoErrors.dob}
                  onChange={(e) =>
                    setInfo((p) => ({ ...p, dob: e.target.value }))
                  }
                />
              </Field>
              
              <Field label="Phone" required error={infoErrors.phone}>
                <Input
                  type="tel"
                  value={info.phone}
                  error={infoErrors.phone}
                  onChange={(e) =>
                    setInfo((p) => ({ ...p, phone: e.target.value }))
                  }
                  placeholder="(619) 555-0100"
                />
              </Field>
              
              <div className="md:col-span-2">
                <Field label="Email" required error={infoErrors.email}>
                  <Input
                    type="email"
                    value={info.email}
                    error={infoErrors.email}
                    onChange={(e) =>
                      setInfo((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                  />
                </Field>
              </div>
              
              <Field label="Preferred Contact Method" required error={infoErrors.contact}>
                <Select
                  value={info.contact}
                  error={infoErrors.contact}
                  onChange={(e) =>
                    setInfo((p) => ({ ...p, contact: e.target.value }))
                  }
                >
                  <option value="">— Select —</option>
                  <option>Phone</option>
                  <option>Email</option>
                  <option>Patient Portal</option>
                </Select>
              </Field>
              
              <Field label="Effective Date" required error={infoErrors.effectiveDate}>
                <Input
                  type="date"
                  value={info.effectiveDate}
                  error={infoErrors.effectiveDate}
                  onChange={(e) =>
                    setInfo((p) => ({ ...p, effectiveDate: e.target.value }))
                  }
                />
              </Field>
            </div>
            
            <div className="flex justify-between items-center mt-8 gap-3">
              <span />
              <button 
                className="font-inherit text-xs font-semibold tracking-wider uppercase px-8 py-3.5 rounded-md border-none cursor-pointer bg-primary text-white shadow-md hover:bg-primaryHover transition-colors"
                onClick={goNext}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Select Plan */}
        {step === 1 && (
          <div className="bg-surface border border-border rounded-xl p-8 md:p-10 mb-6">
            <h2 className=" text-2xl md:text-3xl font-bold text-primary mb-1.5">
              Select Your Plan
            </h2>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Choose one membership option. Initial your selection on the final agreement.
            </p>
            <hr className="h-0.5 border-0 bg-linear-to-r from-highlight to-border mb-7" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 mb-4">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => {
                    setSelectedPlan(plan.id);
                    setPlanError(false);
                  }}
                  className={`
                    border-2 rounded-xl p-6 cursor-pointer relative transition-all duration-200
                    ${selectedPlan === plan.id 
                      ? "border-highlight bg-highlight/5 shadow-md" 
                      : "border-border bg-surface"}
                  `}
                >
                  {/* Check ring */}
                  <div
                    className={`
                      absolute top-4 right-4 w-5.5 h-5.5 border-2 rounded-full 
                      flex items-center justify-center transition-all duration-200
                      ${selectedPlan === plan.id 
                        ? "border-highlight bg-highlight" 
                        : "border-border bg-transparent"}
                    `}
                  >
                    {selectedPlan === plan.id && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>

                  <div className="text-[11px] font-semibold tracking-wider uppercase text-highlight mb-1.5">
                    {plan.badge}
                  </div>
                  <div className=" text-lg md:text-xl font-bold text-primary mb-1">
                    {plan.name}
                  </div>
                  <div className="text-xl md:text-2xl font-semibold text-primary mb-1">
                    {plan.price}{" "}
                    <span className="text-xs font-normal text-muted">
                      {plan.period}
                    </span>
                  </div>
                  <div className="text-xs text-highlight mb-3.5 italic">
                    {plan.note}
                  </div>
                  <ul className="list-none p-0 flex flex-col gap-1.5">
                    {plan.features.map((f, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted pl-4 relative leading-relaxed"
                      >
                        <span className="absolute left-0 text-highlight">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {planError && (
              <p className="text-xs text-[#B00020] mb-2">
                Please select a plan to continue.
              </p>
            )}
            
            <div className="flex justify-between items-center mt-8 gap-3">
              <button 
                className="font-inherit text-xs font-semibold tracking-wider uppercase px-8 py-3.5 rounded-md cursor-pointer bg-transparent text-primary border border-border hover:bg-surface transition-colors"
                onClick={goBack}
              >
                ← Back
              </button>
              <button 
                className="font-inherit text-xs font-semibold tracking-wider uppercase px-8 py-3.5 rounded-md border-none cursor-pointer bg-primary text-white shadow-md hover:bg-primaryHover transition-colors"
                onClick={goNext}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Terms */}
        {step === 2 && (
          <div className="bg-surface border border-border rounded-xl p-8 md:p-10 mb-6">
            <h2 className=" text-2xl md:text-3xl font-bold text-primary mb-1.5">
              Agreement & Terms
            </h2>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Please read the full agreement carefully before proceeding.
            </p>
            <hr className="h-0.5 border-0 bg-linear-to-r from-highlight to-border mb-7" />
            
            <div className="bg-bg border border-border rounded-md p-5 md:p-6 max-h-80 overflow-y-auto text-sm leading-relaxed text-text mb-5">
              {[
                {
                  h: "Purpose",
                  p: "This Agreement describes payment options offered by Essenza Mind and Body Longevity Clinic. This Agreement is not health insurance and does not replace your health plan. You should continue to maintain health insurance coverage.",
                },
                {
                  h: "Not for Emergencies",
                  p: "Essenza does not provide emergency care. If you believe you have a medical emergency, call 911 or go to the nearest emergency department.",
                },
                {
                  h: "Insurance and Financial Responsibility",
                  p: "You are responsible for all charges not covered by insurance, including copays, deductibles, coinsurance, denied claims, and services not covered by your plan. A superbill may be provided upon request; it does not guarantee reimbursement.",
                },
                {
                  h: "Option 1 — Visit Fees",
                  p: "Office visits are billed separately. Self-pay rates: 30-minute visit $500 · 60-minute visit $1,000. Procedures, tests, and other services billed separately per Essenza's fee schedule.",
                },
                {
                  h: "Option 2 — Exclusions",
                  p: "Contrast/sedation/additional imaging sequences; biopsies, pathology, confirmatory diagnostics, specialist consult fees; treatment costs, prescriptions, surgeries, hospital or emergency fees; costs from false-positive, false-negative, or incidental findings are not included.",
                },
                {
                  h: "Clinical Disclosures",
                  p: "Screening tests can produce false-positive and false-negative results and may identify incidental findings. Essenza will review results and recommend next steps but does not guarantee any specific outcome.",
                },
                {
                  h: "Termination and Refund Policy",
                  p: "Unless required by law, fees are generally non-refundable once services have been initiated. If Essenza terminates this Agreement without cause, the unused prepaid portion will be refunded on a pro-rated basis.",
                },
                {
                  h: "Assignment",
                  p: "This Agreement is personal to the patient and is not transferable without Essenza's written approval.",
                },
              ].map(({ h, p }) => (
                <div key={h} className="mb-3.5">
                  <div className=" font-bold text-primary mb-1">
                    {h}
                  </div>
                  <p className="m-0">{p}</p>
                </div>
              ))}
            </div>
            
            {[
              {
                id: "agreeTerms",
                state: agreeTerms,
                set: setAgreeTerms,
                label: (
                  <>
                    I have read and understand the General Terms above,
                    including the refund policy, emergency care limitations, and
                    financial responsibilities.
                  </>
                ),
              },
              {
                id: "agreeIns",
                state: agreeInsurance,
                set: setAgreeInsurance,
                label: (
                  <>
                    <strong>I understand this Agreement is not health insurance</strong>{" "}
                    and does not replace my existing health plan.
                  </>
                ),
              },
            ].map(({ id, state, set, label }) => (
              <div
                key={id}
                className="flex items-start gap-3 mb-2.5"
              >
                <input
                  type="checkbox"
                  id={id}
                  checked={state}
                  onChange={(e) => {
                    set(e.target.checked);
                    setTermsError(false);
                  }}
                  className="w-4.5 h-4.5 mt-0.5 accent-highlight cursor-pointer shrink-0"
                />
                <label
                  htmlFor={id}
                  className="text-sm text-text cursor-pointer leading-relaxed"
                >
                  {label}
                </label>
              </div>
            ))}
            
            {termsError && (
              <p className="text-xs text-[#B00020] mt-1">
                Please check both boxes to continue.
              </p>
            )}
            
            <div className="flex justify-between items-center mt-8 gap-3">
              <button 
                className="font-inherit text-xs font-semibold tracking-wider uppercase px-8 py-3.5 rounded-md cursor-pointer bg-transparent text-primary border border-border hover:bg-surface transition-colors"
                onClick={goBack}
              >
                ← Back
              </button>
              <button 
                className="font-inherit text-xs font-semibold tracking-wider uppercase px-8 py-3.5 rounded-md border-none cursor-pointer bg-primary text-white shadow-md hover:bg-primaryHover transition-colors"
                onClick={goNext}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Signature */}
        {step === 3 && (
          <div className="bg-surface border border-border rounded-xl p-8 md:p-10 mb-6">
            <h2 className=" text-2xl md:text-3xl font-bold text-primary mb-1.5">
              Sign the Agreement
            </h2>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Use your mouse or finger to draw your signature below.
            </p>
            <hr className="h-0.5 border-0 bg-linear-to-r from-highlight to-border mb-7" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <Field label="Printed Name" required error={sigErrors.printedName}>
                <Input
                  value={printedName}
                  error={sigErrors.printedName}
                  onChange={(e) => {
                    setPrintedName(e.target.value);
                    setSigErrors((p) => ({ ...p, printedName: undefined }));
                  }}
                  placeholder="Full legal name"
                />
              </Field>
              <Field label="Date" required error={sigErrors.signDate}>
                <Input
                  type="date"
                  value={signDate}
                  error={sigErrors.signDate}
                  onChange={(e) => {
                    setSignDate(e.target.value);
                    setSigErrors((p) => ({ ...p, signDate: undefined }));
                  }}
                />
              </Field>
            </div>
            
            <Field label="Patient Signature" required error={sigErrors.sig}>
              <div
                className={`
                  border rounded-md bg-surface relative overflow-hidden
                  ${sigErrors.sig ? "border-[#B00020]" : "border-border"}
                `}
              >
                <canvas
                  ref={canvasRef}
                  className="block touch-none cursor-crosshair"
                  style={{ width: '100%', height: '140px' }}
                  onMouseDown={onSigDown}
                  onMouseMove={onSigMove}
                  onMouseUp={onSigUp}
                  onMouseLeave={onSigUp}
                  onTouchStart={onSigDown}
                  onTouchMove={onSigMove}
                  onTouchEnd={onSigUp}
                />
                {!hasSig && (
                  <span className="absolute bottom-3 left-4 text-xs text-border italic pointer-events-none">
                    Sign here
                  </span>
                )}
              </div>
            </Field>
            
            <div className="mt-2">
              <button
                onClick={clearSig}
                className="font-inherit text-xs font-medium text-muted bg-transparent border border-border rounded px-3.5 py-1.5 cursor-pointer hover:bg-surface transition-colors"
              >
                Clear Signature
              </button>
            </div>
            
            <div className="flex justify-between items-center mt-8 gap-3">
              <button 
                className="font-inherit text-xs font-semibold tracking-wider uppercase px-8 py-3.5 rounded-md cursor-pointer bg-transparent text-primary border border-border hover:bg-surface transition-colors"
                onClick={goBack}
              >
                ← Back
              </button>
              <button 
                className="font-inherit text-xs font-semibold tracking-wider uppercase px-8 py-3.5 rounded-md border-none cursor-pointer bg-primary text-white shadow-md hover:bg-primaryHover transition-colors"
                onClick={handleSubmit}
              >
                Submit Agreement
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}