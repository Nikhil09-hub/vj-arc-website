import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"

const alumni = [
  {
    quote:
      "VJ ARC gave me the confidence to turn curiosity into real projects and explore technology beyond the classroom.",
    name: "Alumni Name",
    role: "VJ ARC ALUMNI",
    year: "2024",
  },
  {
    quote:
      "The community pushed me to experiment, collaborate and build things I never thought I could build as a student.",
    name: "Alumni Name",
    role: "VJ ARC ALUMNI",
    year: "2025",
  },
  {
    quote:
      "What started as a technical club became a community of people who genuinely wanted to learn and create together.",
    name: "Alumni Name",
    role: "VJ ARC ALUMNI",
    year: "2025",
  },
]

function Alumni() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const current = alumni[active]

  const next = () => {
    setDirection(1)
    setActive((prev) => (prev + 1) % alumni.length)
  }

  const previous = () => {
    setDirection(-1)
    setActive((prev) => (prev - 1 + alumni.length) % alumni.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 7000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="alumni"
      className="relative min-h-[750px] overflow-hidden border-t border-white/10 py-32"
    >

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Animated blue orb */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="section-container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            From Our Alumni
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              FEW WORDS
              <br />
              <span className="text-gray-600">FROM THEM.</span>
            </h2>

            <p className="max-w-sm text-gray-500">
              The people who were once part of VJ ARC continue to carry its
              spirit beyond campus.
            </p>

          </div>
        </motion.div>

        {/* Testimonial */}
        <div className="relative mx-auto mt-24 max-w-6xl">

          {/* Giant quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 70,
            }}
            className="absolute -left-4 -top-16 text-blue-500/20 md:-left-12 md:-top-20"
          >
            <Quote size={110} strokeWidth={1} />
          </motion.div>

          {/* Quote */}
          <div className="relative min-h-[330px] overflow-hidden border-y border-white/10 py-16 md:px-12">

            <AnimatePresence mode="wait" custom={direction}>

              <motion.div
                key={active}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction * 100,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  x: direction * -100,
                  filter: "blur(8px)",
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="relative"
              >

                <p className="max-w-5xl text-3xl font-medium leading-relaxed tracking-tight md:text-5xl">
                  “{current.quote}”
                </p>

                <div className="mt-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                  <div>
                    <p className="text-lg font-semibold">
                      {current.name}
                    </p>

                    <p className="mt-1 text-xs tracking-[0.25em] text-blue-400">
                      {current.role} · {current.year}
                    </p>
                  </div>

                  <div className="font-mono text-sm text-gray-600">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(alumni.length).padStart(2, "0")}
                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">

            {/* Progress */}
            <div className="flex gap-2">
              {alumni.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > active ? 1 : -1)
                    setActive(index)
                  }}
                  className="group h-8"
                >
                  <span
                    className={`block h-[2px] transition-all duration-500 ${
                      index === active
                        ? "w-16 bg-blue-500"
                        : "w-8 bg-white/20 group-hover:bg-white/50"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">

              <motion.button
                onClick={previous}
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(37,99,255,0.8)",
                }}
                whileTap={{ scale: 0.9 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10"
              >
                <ArrowLeft size={18} />
              </motion.button>

              <motion.button
                onClick={next}
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(37,99,255,0.8)",
                }}
                whileTap={{ scale: 0.9 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10"
              >
                <ArrowRight size={18} />
              </motion.button>

            </div>

          </div>

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-28 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gray-600">
            VJ ARC
          </span>

          <span className="text-xs uppercase tracking-[0.3em] text-gray-600">
            AI RESEARCH · CODING · COMMUNITY
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default Alumni