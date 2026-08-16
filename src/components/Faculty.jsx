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
]
function FacultyCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden border border-white/10 bg-[#080808]">

        {/* Same card proportions as Team */}
        <div className="relative aspect-[4/5] overflow-hidden">

          <motion.img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover grayscale"
            whileHover={{
              scale: 1.04,
              filter: "grayscale(0%)",
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          />

          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Small blue accent */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
              delay: 0.3 + index * 0.1,
            }}
          />

          {/* Faculty label */}
          <div className="absolute left-5 top-5">
            <span className="text-[10px] tracking-[0.25em] text-white/60">
              FACULTY / 0{index + 1}
            </span>
          </div>

          {/* Information */}
          <div className="absolute bottom-6 left-6 right-6">

            <p className="mb-2 text-xs tracking-[0.25em] text-blue-400">
              {member.designation}
            </p>

            <h3 className="text-2xl font-bold">
              {member.name}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {member.department}
            </p>

          </div>

        </div>

        {/* Bottom strip */}
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">

          <span className="text-xs tracking-widest text-gray-600">
            VJ ARC
          </span>

          <motion.div
            whileHover={{ x: 5 }}
            className="text-gray-500 transition-colors group-hover:text-blue-400"
          >
            <ArrowUpRight size={18} />
          </motion.div>

        </div>

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
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member, index) => (
            <FacultyCard
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

export default Faculty