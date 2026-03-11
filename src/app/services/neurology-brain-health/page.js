import Link from "next/link";
import { ArrowRight, Brain, Shield, Microscope, Heart, Users, Star } from "lucide-react";
import Container from "../../components/Container/Container";

export const metadata = {
  title: "Neurology & Brain Health | Essenza Wellness Center",
  description:
    "Comprehensive migraine and neurological care integrated neurology and psychiatry for migraines, chronic pain, headache disorders, and more.",
};

const conditions = [
  "Migraines and chronic headache disorders",
  "Cluster headaches",
  "Facial pain and TMJ disorders",
  "Neuropathic pain",
  "Depression",
  "Anxiety disorders",
  "OCD and PTSD",
];

const treatments = [
  "Botulinum toxin (Botox) injections",
  "Occipital nerve blocks",
  "Sphenopalatine ganglion blocks",
  "Medication infusions",
  "Transcranial Magnetic Stimulation (TMS)",
  "Brain mapping (QEEG) for chronic migraine and regional pain syndromes",
];

export default function NeurologyBrainHealthPage() {
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
            <span className="text-sm font-medium text-primary">Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
            Neurology & <span className="text-highlight">Brain Health</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mt-6 max-w-3xl mx-auto leading-relaxed">
            Comprehensive migraine and neurological care integrating neurology and psychiatry to treat the root causes of chronic pain and headache disorders.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-surface">
        <Container>

          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 tracking-tight">
              Comprehensive Migraine & Neurological Care
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              At Essenza, our board-certified neurology and psychiatry specialists work together to provide integrated, evidence-based care for neurological and psychological conditions. Because these conditions often overlap, our team focuses on identifying and treating the underlying causes of migraines and chronic pain disorders.
            </p>
          </div>

          {/* Conditions + Treatments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">

            {/* Conditions */}
            <div className="bg-bg rounded-2xl p-8 border border-border">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6">
                <Brain className="w-7 h-7" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 tracking-tight">Conditions We Treat</h2>
              <ul className="space-y-3 mb-6">
                {conditions.map((condition, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted font-medium">{condition}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted leading-relaxed border-t border-border pt-6">
                Migraines are often polygenic and triggered by multiple factors, including stress and other psychological conditions. Our multidisciplinary approach allows us to address both the neurological and psychological components of migraine and pain syndromes.
              </p>
            </div>

            {/* Treatments */}
            <div className="space-y-6">
              <div className="bg-bg rounded-2xl p-8 border border-border">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6">
                  <Microscope className="w-7 h-7" aria-hidden="true" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 tracking-tight">Advanced Treatment Options</h2>
                <p className="text-muted leading-relaxed mb-6">
                  We offer a full range of personalized treatment options, including:
                </p>
                <ul className="space-y-3 mb-6">
                  {treatments.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-highlight shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-muted font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted leading-relaxed border-t border-border pt-6">
                  We also provide second-opinion evaluations for patients who have not found relief with prior migraine treatments.
                </p>
              </div>
            </div>
          </div>

          {/* Women's Migraine Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="group bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Specialized Migraine Care for Women</h3>
              <p className="text-muted leading-relaxed">
                Women are three times more likely to experience migraines than men. Hormonal changes during menstruation, pregnancy, perimenopause, and menopause can significantly influence migraine patterns.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                In collaboration with our gynecology partners, we offer specialized care tailored to hormone-related migraines in women.
              </p>
            </div>

            {/* Commitment */}
            <div className="group bg-bg rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-bg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-text mb-4">Our Commitment to Patients</h3>
              <p className="text-muted leading-relaxed">
                Migraines are among the leading causes of disability worldwide, yet effective treatment options are available.
              </p>
              <p className="text-muted leading-relaxed mt-4">
                At Essenza, our mission is to provide timely access to expert evaluation and advanced treatment, helping patients regain control of their health and return to the moments that matter most.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-bg px-8 py-4 rounded-lg text-base font-semibold hover:bg-primaryHover transition-all shadow-sm hover:shadow-md"
            >
              Schedule a Neurology Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}