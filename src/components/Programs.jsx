import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const programs = [
  {
    number: "01",
    year: "2026",
    title: "TECHNICAL WORKSHOPS",
    description:
      "Hands-on sessions designed to help students explore emerging technologies and build practical skills.",
    tag: "LEARN",
  },
  {
    number: "02",
    year: "2026",
    title: "HACKATHONS",
    description:
      "Collaborative challenges where ideas become prototypes through coding, creativity and teamwork.",
    tag: "BUILD",
  },
  {
    number: "03",
    year: "2026",
    title: "AI & ML SESSIONS",
    description:
      "Exploring artificial intelligence, machine learning and the technologies shaping tomorrow.",
    tag: "RESEARCH",
  },
  {
    number: "04",
    year: "2026",
    title: "CODING EVENTS",
    description:
      "Competitive and collaborative coding experiences designed to sharpen problem-solving skills.",
    tag: "CODE",
  },
]

function ProgramCard({ program, index }) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()

    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        setMouse({ x: 50, y: 50 })
      }}
      className="group relative min-h-[420px] overflow-hidden border border-white/10 bg-[#080808] p-8 md:p-10"
    >

      {/* Mouse-following spotlight */}
      <motion.div
        className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 25,
          mass: 0.4,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,255,0.18), transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* Animated top border */}
      <motion.div
        className="absolute left-0 top-0 h-[2px] bg-blue-500"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 0.3 + index * 0.12,
          ease: "easeOut",
        }}
      />

      {/* Corner glow */}
      <motion.div
        className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl"
        animate={
          hovered
            ? {
                scale: 1.8,
                opacity: 1,
              }
            : {
                scale: 1,
                opacity: 0.4,
              }
        }
        transition={{ duration: 0.7 }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">

        <motion.span
          className="font-mono text-sm text-blue-500"
          animate={{
            opacity: hovered ? 1 : 0.6,
          }}
        >
          {program.number}
        </motion.span>

        <span className="font-mono text-xs tracking-widest text-gray-600">
          {program.year}
        </span>

      </div>

      {/* Tag */}
      <div className="relative z-10 mt-16">
        <motion.span
          animate={{
            x: hovered ? 8 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
          className="inline-block border border-blue-500/30 px-3 py-1 text-[10px] tracking-[0.25em] text-blue-400"
        >
          {program.tag}
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-6">

        <motion.h3
          animate={{
            x: hovered ? 6 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
          className="text-2xl font-bold tracking-tight md:text-3xl"
        >
          {program.title}
        </motion.h3>

        <p className="mt-5 max-w-md leading-relaxed text-gray-500">
          {program.description}
        </p>

      </div>

      {/* Arrow */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10"
        animate={{
          rotate: hovered ? 45 : 0,
          scale: hovered ? 1.1 : 1,
          borderColor: hovered
            ? "rgba(37,99,255,0.8)"
            : "rgba(255,255,255,0.1)",
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 15,
        }}
      >
        <ArrowUpRight size={20} />
      </motion.div>

      {/* Scan line */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-blue-400/30"
        initial={{ top: "-5%" }}
        animate={
          hovered
            ? {
                top: ["0%", "100%"],
              }
            : {
                top: "-5%",
              }
        }
        transition={{
          duration: 1.5,
          ease: "linear",
        }}
      />

    </motion.article>
  )
}

function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden border-t border-white/10 py-32"
    >

      <div className="section-container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            What We Do
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
              PROGRAMS
              <br />
              <span className="text-gray-600">& EVENTS.</span>
            </h2>

            <p className="max-w-md text-gray-500">
              From workshops to hackathons, VJ ARC creates spaces where
              students learn, experiment and build together.
            </p>

          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-2">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.number}
              program={program}
              index={index}
            />
          ))}
        </div>

      </div>
      <div className="mt-20 overflow-hidden border-y border-white/10 py-5">
  <motion.div
    className="flex w-max gap-12 whitespace-nowrap text-sm font-medium tracking-[0.35em] text-gray-600"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {Array(2)
      .fill([
        "AI RESEARCH",
        "CODING",
        "INNOVATION",
        "BUILD",
        "LEARN",
        "CONNECT",
      ])
      .flat()
      .map((item, index) => (
        <span key={index}>
          {item} <span className="text-blue-500">✦</span>
        </span>
      ))}
  </motion.div>
</div>
    </section>
    
  )
}

export default Programs