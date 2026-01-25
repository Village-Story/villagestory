import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      {/* Background shapes */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image src={BlurredShapeGray} width={760} height={668} alt="Blurred shape" />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image src={BlurredShape} width={760} height={668} alt="Blurred shape" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20">

          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Enterprise-Grade Capabilities
              </span>
            </div>

            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Built for Real-World Business Operations
            </h2>

            <p className="text-lg text-indigo-200/65">
              From ERP modules to high-performance POS systems, Village Story’s
              delivers reliable, scalable, and compliant software solutions
              designed for Indian businesses.
            </p>
          </div>

          {/* Feature image */}
          <div className="flex justify-center pb-4 md:pb-12">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Village Story ERP and POS features"
            />
          </div>

          {/* Feature items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">

            <article>
              <h3 className="mb-1 font-nacelle font-semibold text-gray-200">
                Modular ERP System
              </h3>
              <p className="text-indigo-200/65">
                Sales, Purchase, Manufacturing, Assets, CRM, Accounts and more —
                enable only what your business needs.
              </p>
            </article>

            <article>
              <h3 className="mb-1 font-nacelle font-semibold text-gray-200">
                High-Speed POS
              </h3>
              <p className="text-indigo-200/65">
                Rust-powered POS built for retail and restaurants with fast
                billing, KOT, and kitchen display support.
              </p>
            </article>

            <article>
              <h3 className="mb-1 font-nacelle font-semibold text-gray-200">
                Indian Tax Compliance
              </h3>
              <p className="text-indigo-200/65">
                GST-ready accounting, statutory reports, and India-specific
                compliance built into every module.
              </p>
            </article>

            <article>
              <h3 className="mb-1 font-nacelle font-semibold text-gray-200">
                Custom Software Development
              </h3>
              <p className="text-indigo-200/65">
                Web, mobile, and desktop applications tailored to your business
                workflows — platform agnostic and scalable.
              </p>
            </article>

            <article>
              <h3 className="mb-1 font-nacelle font-semibold text-gray-200">
                Seamless Integrations
              </h3>
              <p className="text-indigo-200/65">
                Integrate POS with ERP or connect with external systems without
                performance or data consistency issues.
              </p>
            </article>

            <article>
              <h3 className="mb-1 font-nacelle font-semibold text-gray-200">
                Low-Cost & Scalable Hosting
              </h3>
              <p className="text-indigo-200/65">
                Optimized deployments with minimal hosting cost, suitable for
                small businesses and enterprises alike.
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}
