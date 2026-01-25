import VideoThumb from "@/public/images/about.png";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Smart ERP & POS Solutions <br />
              Built for Indian Businesses
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Village Story’s delivers modular ERP systems, high-performance POS
                solutions, and custom applications tailored for retail,
                restaurants, and growing businesses across Tamil Nadu.
              </p>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                {/* Primary CTA */}
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#contact"
                  >
                    <span className="relative inline-flex items-center">
                      Get a Free Consultation
                      <span className="ml-1 text-white/50 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </a>
                </div>

                {/* Secondary CTA */}
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 text-gray-300 hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#demo"
                  >
                    View POS & ERP Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product / Demo video */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Village Story ERP & POS demo"
            video="videos/village story.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />

        </div>
      </div>
    </section>
  );
}
