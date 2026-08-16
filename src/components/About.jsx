import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const pillars = [
  {
    number: "01",
    title: "AI RESEARCH",
    description:
      "Exploring artificial intelligence through research, experimentation and real-world applications.",
    tag: "RESEARCH",
  },
  {
    number: "02",
    title: "CODING",
    description:
      "Building strong programming foundations and solving meaningful technical problems through practice and projects.",
    tag: "BUILD",
  },
  {
    number: "03",
    title: "INNOVATION",
    description:
      "Turning ideas into projects, prototypes and solutions that create meaningful impact.",
    tag: "CREATE",
  },
  {
    number: "04",
    title: "COMMUNITY",
    description:
      "Learning together, collaborating across disciplines and growing as technologists.",
    tag: "CONNECT",
  },
]

function PillarCard({ pillar, index }) {
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
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
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
        className="pointer-events-none absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full"
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
            "radial-gradient(circle, rgba(37,99,255,0.17), transparent 68%)",
          filter: "blur(12px)",
        }}
      />

      {/* Secondary ambient glow */}

      <motion.div
        className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl"
        animate={{
          scale: hovered ? 1.5 : 1,
          opacity: hovered ? 0.9 : 0.35,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />

      {/* Animated top border */}

      <motion.div
        className="absolute left-0 top-0 h-[2px] bg-blue-500"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "100%",
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 1.1,
          delay: 0.2 + index * 0.1,
          ease: "easeOut",
        }}
      />

      {/* Number + index */}

      <div className="relative z-10 flex items-start justify-between">

        <motion.span
          className="font-mono text-sm text-blue-500"
          animate={{
            opacity: hovered ? 1 : 0.65,
            x: hovered ? 4 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {pillar.number}
        </motion.span>

        <span className="font-mono text-xs tracking-widest text-gray-700">
          VJ / ARC
        </span>

      </div>

      {/* Technical tag */}

      <div className="relative z-10 mt-16">

        <motion.span
          className="inline-block border border-blue-500/30 px-3 py-1 text-[10px] tracking-[0.25em] text-blue-400"
          animate={{
            x: hovered ? 7 : 0,
            borderColor: hovered
              ? "rgba(37,99,255,0.7)"
              : "rgba(37,99,255,0.3)",
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
        >
          {pillar.tag}
        </motion.span>

      </div>

      {/* Main content */}

      <div className="relative z-10 mt-6">

        <motion.h3
          className="text-2xl font-bold tracking-tight md:text-3xl"
          animate={{
            x: hovered ? 6 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
        >
          {pillar.title}
        </motion.h3>

        <motion.p
          className="mt-5 max-w-md leading-relaxed text-gray-500"
          animate={{
            x: hovered ? 3 : 0,
            color: hovered ? "rgb(156,163,175)" : "rgb(107,114,128)",
          }}
          transition={{
            duration: 0.35,
          }}
        >
          {pillar.description}
        </motion.p>

      </div>

      {/* Arrow */}

      <motion.div
        className="absolute bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10"
        animate={{
          rotate: hovered ? 45 : 0,
          scale: hovered ? 1.12 : 1,
          borderColor: hovered
            ? "rgba(37,99,255,0.85)"
            : "rgba(255,255,255,0.1)",
          color: hovered ? "rgb(96,165,250)" : "rgb(156,163,175)",
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
        className="pointer-events-none absolute left-0 right-0 z-30 h-px bg-blue-400/40 shadow-[0_0_12px_rgba(37,99,255,0.4)]"
        initial={{
          top: "-5%",
        }}
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
          duration: 1.4,
          ease: "linear",
        }}
      />

      {/* Bottom interaction line */}

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
        animate={{
          width: hovered ? "100%" : "0%",
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />

    </motion.article>
  )
}

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 py-32"
    >
      <div className="section-container">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            About VJ ARC
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
              AI RESEARCH
              <br />
              <span className="text-gray-600">
                AND CODING.
              </span>
            </h2>

            <p className="max-w-md text-gray-500">
              VJ ARC is a student-driven technical community focused on
              AI Research, Coding, innovation and building together.
            </p>

          </div>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.number}
              pillar={pillar}
              index={index}
            />
          ))}
        </div>

      </div>

      {/* Moving section divider */}

      <div className="mt-20 overflow-hidden border-y border-white/10 py-5">

        <motion.div
          className="flex w-max gap-12 whitespace-nowrap text-sm font-medium tracking-[0.35em] text-gray-600"
          animate={{
            x: ["0%", "-50%"],
          }}
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
              "COMMUNITY",
              "BUILD",
              "CONNECT",
            ])
            .flat()
            .map((item, index) => (
              <span key={index}>
                {item}{" "}
                <span className="text-blue-500">✦</span>
              </span>
            ))}
        </motion.div>

      </div>
    </section>
  )
}

export default About