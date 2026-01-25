import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Business-Centric Solutions
              </span>
            </div>

            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Designed for How Indian Businesses Work
            </h2>

            <p className="text-lg text-indigo-200/65">
              From ERP modules to high-performance POS systems, Village Story’s
              helps businesses automate operations, stay compliant, and scale
              confidently — without unnecessary complexity.
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">

            {/* Card 1 – ERP Modules */}
            <a className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px" href="#erp">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                <Image
                  className="inline-flex"
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="ERP Modules"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Modular ERP
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Choose only what your business needs — Sales, Purchase,
                    Manufacturing, Assets, CRM, Accounts, and more — all working
                    seamlessly together.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2 – POS Performance */}
            <a className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px" href="#pos">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                <Image
                  className="inline-flex"
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="High Performance POS"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        High-Performance POS
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Rust-powered POS solutions for retail and restaurants —
                    supporting fast billing, KOT, kitchen displays, and smooth
                    ERP integration.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 3 – Customization & Compliance */}
            <a className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px" href="#compliance">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                <Image
                  className="inline-flex"
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Customization & Compliance"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Custom & Compliant
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Built for Indian tax compliance with GST, reports, and
                    accounting workflows — fully customizable to match your
                    business processes.
                  </p>
                </div>
              </div>
            </a>

          </Spotlight>
        </div>
      </div>
    </section>
  );
}
