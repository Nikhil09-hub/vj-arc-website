import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const faculty = [
  {
    name: "Faculty Coordinator",
    designation: "FACULTY COORDINATOR",
    department: "Department of AI & DS",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Faculty Coordinator",
    designation: "FACULTY COORDINATOR",
    department: "Department of CSE",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Faculty Coordinator",
    designation: "FACULTY COORDINATOR",
    department: "Department of CSE-DS",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
]

function FacultyCard({ member, index }) {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  })

  const [hovered, setHovered] = useState(false)

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()

    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.95,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.15,
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        setMouse({
          x: 50,
          y: 50,
        })
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative"
    >
      {/* Main card */}

      <div
        className="relative overflow-hidden border border-white/10 bg-[#080808]"
        style={{
          transform: hovered
            ? `perspective(900px) rotateX(${(mouse.y - 50) * -0.02}deg) rotateY(${(mouse.x - 50) * 0.02}deg)`
            : "perspective(900px) rotateX(0deg) rotateY(0deg)",
          transition: hovered
            ? "transform 0.15s ease-out"
            : "transform 0.5s ease-out",
        }}
      >
        {/* Image */}

        <div className="relative aspect-[5/5.5] overflow-hidden">
          <motion.img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover grayscale"
            animate={{
              scale: hovered ? 1.07 : 1,
              filter: hovered
                ? "grayscale(0%) brightness(1.05)"
                : "grayscale(100%) brightness(0.9)",
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
          />

          {/* Dark gradient */}

          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: hovered ? 0.68 : 0.85,
            }}
            style={{
              background:
                "linear-gradient(to top, #000 5%, transparent 65%, rgba(0,0,0,0.3))",
            }}
          />

          {/* Mouse-following spotlight */}

          <motion.div
            className="pointer-events-none absolute z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
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
                "radial-gradient(circle, rgba(37,99,255,0.2), transparent 70%)",
              filter: "blur(16px)",
            }}
          />

          {/* Bottom blue glow */}

          <motion.div
            className="pointer-events-none absolute -bottom-20 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"
            animate={{
              scale: hovered ? 1.4 : 1,
              opacity: hovered ? 0.85 : 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          />

          {/* Top animated border */}

          <motion.div
            className="absolute left-0 top-0 z-20 h-[2px] bg-blue-500"
            animate={{
              width: hovered ? "100%" : "0%",
            }}
            transition={{
              duration: 0.6,
            }}
          />

          {/* Faculty number */}

          <div className="absolute left-4 top-4 z-20 font-mono text-[11px] text-white/50">
            FACULTY / 0{index + 1}
          </div>

          {/* Arrow */}

          <motion.div
            className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur"
            animate={{
              scale: hovered ? 1.1 : 1,
              rotate: hovered ? 45 : 0,
              borderColor: hovered
                ? "rgba(37,99,255,0.8)"
                : "rgba(255,255,255,0.2)",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 16,
            }}
          >
            <ArrowUpRight size={16} />
          </motion.div>

          {/* Information */}

          <motion.div
            className="absolute bottom-5 left-5 right-5 z-20"
            animate={{
              y: hovered ? -4 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
          >
            <motion.p
              className="mb-1.5 text-[9px] tracking-[0.23em] text-blue-400"
              animate={{
                x: hovered ? 5 : 0,
              }}
            >
              {member.designation}
            </motion.p>

            <h3 className="text-xl font-bold">
              {member.name}
            </h3>

            <p className="mt-1.5 text-xs text-gray-400">
              {member.department}
            </p>
          </motion.div>

          {/* Scan line */}

          <motion.div
            className="pointer-events-none absolute left-0 z-30 h-[2px] w-full bg-blue-400/60"
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
              duration: 1.1,
              ease: "linear",
            }}
          />

          {/* Corner frame */}

          <motion.div
            className="pointer-events-none absolute bottom-0 right-0 z-20 h-12 w-12 border-b-2 border-r-2"
            animate={{
              borderColor: hovered
                ? "rgba(37,99,255,0.7)"
                : "rgba(37,99,255,0)",
            }}
            transition={{
              duration: 0.4,
            }}
          />
        </div>

        {/* Bottom strip */}

        <motion.div
          className="flex items-center justify-between border-t border-white/10 px-4 py-3"
          animate={{
            borderColor: hovered
              ? "rgba(37,99,255,0.35)"
              : "rgba(255,255,255,0.1)",
          }}
        >
          <span className="text-[9px] tracking-[0.25em] text-gray-600">
            VJ ARC
          </span>

          <motion.div
            animate={{
              x: hovered ? 5 : 0,
              color: hovered
                ? "rgba(59,130,246,1)"
                : "rgba(107,114,128,1)",
            }}
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function Faculty() {
  return (
    <section
      id="faculty"
      className="relative overflow-hidden border-t border-white/10 py-28"
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
            Faculty Guidance
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              FACULTY
              <br />
              <span className="text-gray-600">
                COORDINATORS.
              </span>
            </h2>

            <p className="max-w-md text-gray-500">
              Guiding VJ ARC through mentorship, experience and a vision
              for meaningful technical growth.
            </p>

          </div>
        </motion.div>

        {/* Faculty cards */}

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {faculty.map((member, index) => (
            <FacultyCard
              key={member.department}
              member={member}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Faculty