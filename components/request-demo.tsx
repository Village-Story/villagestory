"use client";

import { motion } from "framer-motion";

export default function RequestDemo() {
  return (
    <section
      id="demo"
      className="scroll-mt-24 py-20 relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-4">
            Request a Demo
          </h2>
          <p className="text-gray-400 mb-12">
            Talk to our experts and see how our ERP & POS solutions fit your business.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-gray-800 bg-gray-900/60 p-6 text-center transition-shadow hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <div className="mb-4 text-3xl text-indigo-400 group-hover:scale-110 transition-transform">
              📞
            </div>
            <h3 className="text-lg font-medium text-gray-200 mb-3">
              Call Us
            </h3>
            <p className="text-gray-400">
              <a href="tel:+917200303774" className="hover:text-indigo-400">
                +91 72003 03774
              </a>
            </p>
            <p className="text-gray-400">
              <a href="tel:+917094915455" className="hover:text-indigo-400">
                +91 70949 15455
              </a>
            </p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-gray-800 bg-gray-900/60 p-6 text-center transition-shadow hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <div className="mb-4 text-3xl text-indigo-400 group-hover:scale-110 transition-transform">
              📧
            </div>
            <h3 className="text-lg font-medium text-gray-200 mb-3">
              Email Us
            </h3>
            <p className="text-gray-400">
              <a
                href="mailto:sales@villagestory.com"
                className="hover:text-indigo-400"
              >
                sales@villagestory.com
              </a>
            </p>
            <p className="text-gray-400">
              <a
                href="mailto:support@villagestory.com"
                className="hover:text-indigo-400"
              >
                support@villagestory.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
