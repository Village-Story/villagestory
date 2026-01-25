import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer background illustration"
          />
        </div>

        <div className="grid grid-cols-2 gap-12 py-8 sm:grid-cols-2 md:grid-cols-4 md:py-12 lg:grid-cols-[repeat(4,minmax(0,160px))_1fr] xl:gap-20">
          {/* Solutions */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Solutions</h3>
            <ul className="space-y-2 text-sm">
              {[
                "ERP Software",
                "POS Systems",
                "Retail Management",
                "Restaurant Solutions",
                "CRM & Accounting",
                "Manufacturing & Inventory",
              ].map((item) => (
                <li key={item}>
                  <span className="text-indigo-200/65">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Mobile App Development",
                "Web Application Development",
                "Desktop Applications",
                "Custom Software Development",
                "System Integration",
                "Support & Maintenance",
              ].map((item) => (
                <li key={item}>
                  <span className="text-indigo-200/65">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Industries</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Retail Stores",
                "Restaurants & Cafes",
                "Manufacturing Units",
                "Small & Medium Businesses",
                "Service Providers",
              ].map((item) => (
                <li key={item}>
                  <span className="text-indigo-200/65">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance & Tech */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              Technology & Compliance
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Indian GST Compliance",
                "Income Tax Reports",
                "POS + ERP Integration",
                "High Performance POS (Rust)",
                "Reports & Analytics",
              ].map((item) => (
                <li key={item}>
                  <span className="text-indigo-200/65">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3 inline-flex justify-end">
              <Logo iHeight={120} iWidth={120} />
            </div>

            <p className="mb-2 text-sm text-indigo-200/65">
              Software solutions for growing businesses
            </p>

            <p className="mb-3 text-sm text-indigo-200/65">
              Ramanathapuram, Tamil Nadu, India 🇮🇳
              <br />
              Serving businesses across Tamil Nadu
            </p>

            <p className="text-sm text-gray-700">
              © {new Date().getFullYear()} Village Story’s
              <span className="mx-2">·</span>
              All rights reserved
            </p>

            {/* Social links */}
            <ul className="mt-4 inline-flex gap-3 justify-end">
              {/* GitHub */}
              <li>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="text-indigo-500 transition hover:text-indigo-400"
                >
                  <svg
                    className="h-7 w-7 fill-current"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6 0-4.4-3.6-8-8-8z" />
                  </svg>
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-indigo-500 transition hover:text-indigo-400"
                >
                  <svg
                    className="h-7 w-7 fill-current"
                    viewBox="0 0 32 32"
                  >
                    <path d="M8.268 27H3.848V11.8h4.42V27ZM6.058 9.8C4.64 9.8 3.5 8.63 3.5 7.22 3.5 5.81 4.64 4.64 6.058 4.64c1.417 0 2.558 1.17 2.558 2.58 0 1.41-1.141 2.58-2.558 2.58ZM28.5 27h-4.42v-7.36c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.91-2.82 3.89V27h-4.42V11.8h4.24v2.08h.06c.59-1.11 2.03-2.28 4.18-2.28 4.47 0 5.3 2.95 5.3 6.78V27Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
