import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
const members = [
  {
    name: "Coordinator Name",
    role: "PRESIDENT",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Coordinator Name",
    role: "VICE PRESIDENT",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Coordinator Name",
    role: "TECHNICAL LEAD",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Coordinator Name",
    role: "EVENTS LEAD",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
]

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
      className="group relative"
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#080808]">

        <motion.img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover grayscale"
          whileHover={{
            scale: 1.06,
            filter: "grayscale(0%)",
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

        {/* Blue glow */}
        <motion.div
          className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        />

        {/* Number */}
        <div className="absolute left-5 top-5 font-mono text-xs text-white/50">
          0{index + 1}
        </div>

        {/* LinkedIn */}
        <motion.a
          href="#"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur"
          whileHover={{
            scale: 1.15,
            rotate: 45,
            borderColor: "rgba(37,99,255,0.8)",
          }}
        >
    <span className="text-sm font-bold">in</span>        </motion.a>

        {/* Name */}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="mb-2 text-xs tracking-[0.25em] text-blue-400">
            {member.role}
          </p>

          <h3 className="text-2xl font-bold">
            {member.name}
          </h3>
        </div>

        {/* Hover scan */}
        <motion.div
          className="absolute left-0 h-[2px] w-full bg-blue-500"
          initial={{ top: "-2%" }}
          whileHover={{
            top: "102%",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Bottom information */}
      <div className="flex items-center justify-between border-x border-b border-white/10 px-5 py-4">
        <span className="text-xs tracking-widest text-gray-600">
          VJ ARC
        </span>

        <motion.div
          whileHover={{ x: 5 }}
          className="text-gray-500 group-hover:text-blue-400"
        >
          <ArrowUpRight size={18} />
        </motion.div>
      </div>
    </motion.div>
  )
}

function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden border-t border-white/10 py-28"
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
            The People
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              MEET THE
              <br />
              <span className="text-gray-600">TEAM.</span>
            </h2>

            <p className="max-w-md text-gray-500">
              The students driving AI Research, Coding, innovation and
              community at VJ ARC.
            </p>

          </div>
        </motion.div>

        {/* Team grid */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <TeamCard
              key={index}
              member={member}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Team