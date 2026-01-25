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
          </div>
        </div>
      </div>
    </footer>
  );
}
