import { motion } from "motion/react"
import { ArrowUpRight, ArrowDown } from "lucide-react"

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">

      {/* CTA */}
      <section className="relative min-h-[650px] flex items-center">

        {/* Background glow */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,255,0.16), transparent 65%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative rings */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10"
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
          animate={{ rotate: -360 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="section-container relative z-10 text-center">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-sm uppercase tracking-[0.35em] text-blue-400"
          >
            The next idea starts here.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 70,
              damping: 18,
            }}
            className="mt-8 text-6xl font-bold leading-[0.95] tracking-tight md:text-9xl"
          >
            READY TO
            <br />
            <span className="text-blue-500">BUILD?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-xl text-gray-500"
          >
            Join a community where AI Research and Coding become more than
            concepts — they become things you build.
          </motion.p>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(37,99,255,0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mx-auto mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-medium"
          >
            Connect With VJ ARC
            <ArrowUpRight size={19} />
          </motion.a>

        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={18} className="text-gray-600" />
        </motion.div>

      </section>

      {/* Footer */}
      <div className="border-t border-white/10">

        <div className="section-container py-12">

          <div className="flex flex-col justify-between gap-10 md:flex-row">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">

                <img
                  src="/images/logo.png"
                  alt="VJ ARC — AI Research and Coding"
                  className="h-10 w-10 object-contain"
                />

                <div>
                  <p className="font-bold tracking-wide">
                    VJ ARC
                  </p>

                  <p className="text-xs text-gray-600">
                    AI Research and Coding
                  </p>
                </div>

              </div>

              <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-600">
                A student-driven technical community at VNR VJIET.
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm text-gray-500 md:grid-cols-3">

              <a href="#about" className="transition hover:text-white">
                About
              </a>

              <a href="#programs" className="transition hover:text-white">
                Programs
              </a>

              <a href="#gallery" className="transition hover:text-white">
                Gallery
              </a>

              <a href="#team" className="transition hover:text-white">
                Team
              </a>

              <a href="#alumni" className="transition hover:text-white">
                Alumni
              </a>

              <a href="#" className="transition hover:text-blue-400">
                LinkedIn ↗
              </a>

            </div>

          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-700 md:flex-row">

            <span>
              © 2026 VJ ARC. All rights reserved.
            </span>

            <span className="tracking-[0.2em]">
              AI RESEARCH · CODING · INNOVATION
            </span>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer