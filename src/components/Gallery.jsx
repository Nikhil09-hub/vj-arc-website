import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, ArrowUpRight } from "lucide-react"

const images = [
  {
    id: 1,
    title: "TECH WORKSHOP",
    category: "WORKSHOPS",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "HACKATHON",
    category: "COMPETITIONS",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "AI SESSION",
    category: "AI & ML",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "CODING EVENT",
    category: "CODING",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "TEAM SESSION",
    category: "COMMUNITY",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "PROJECT SHOWCASE",
    category: "PROJECTS",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
]

function GalleryCard({ item, index, onSelect }) {
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
    <motion.div
      layoutId={`gallery-${item.id}`}
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
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
      onClick={() => onSelect(item)}
      className={`
        group relative cursor-pointer overflow-hidden
        border border-white/10
        ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
        ${index === 3 ? "md:col-span-2" : ""}
      `}
    >

      {/* Mouse spotlight */}

      <motion.div
        className="pointer-events-none absolute z-20 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
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
            "radial-gradient(circle, rgba(37,99,255,0.20), transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* Image */}

      <motion.img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
        animate={{
          scale: hovered ? 1.1 : 1,
          x: hovered ? (mouse.x - 50) * 0.025 : 0,
          y: hovered ? (mouse.y - 50) * 0.025 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />

      {/* Cinematic dark overlay */}

      <motion.div
        className="absolute inset-0 z-10 bg-black/35"
        animate={{
          backgroundColor: hovered
            ? "rgba(0,0,0,0.62)"
            : "rgba(0,0,0,0.35)",
        }}
        transition={{
          duration: 0.5,
        }}
      />

      {/* Blue atmospheric glow */}

      <motion.div
        className="pointer-events-none absolute -bottom-24 left-1/2 z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"
        animate={{
          scale: hovered ? 1.5 : 1,
          opacity: hovered ? 0.8 : 0.35,
        }}
        transition={{
          duration: 0.7,
        }}
      />

      {/* Number */}

      <div className="absolute left-5 top-5 z-30 font-mono text-xs text-white/60">
        0{item.id}
      </div>

      {/* Category */}

      <motion.div
        className="absolute left-6 top-16 z-30"
        animate={{
          x: hovered ? 7 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      >
        <span className="border border-blue-500/40 bg-black/20 px-3 py-1 text-[10px] tracking-[0.25em] text-blue-400 backdrop-blur-sm">
          {item.category}
        </span>
      </motion.div>

      {/* Bottom content */}

      <div className="absolute inset-x-0 bottom-0 z-30 p-6">

        <motion.div
          animate={{
            y: hovered ? -5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
          className="flex items-end justify-between"
        >

          <div>

            <h3 className="text-xl font-bold md:text-2xl">
              {item.title}
            </h3>

            <motion.div
              className="mt-3 h-px bg-blue-500"
              initial={{
                width: 0,
              }}
              animate={{
                width: hovered ? "70px" : "25px",
              }}
              transition={{
                duration: 0.5,
              }}
            />

          </div>

          {/* Arrow */}

          <motion.div
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur"
            animate={{
              scale: hovered ? 1.15 : 1,
              rotate: hovered ? 45 : 0,
              borderColor: hovered
                ? "rgba(37,99,255,0.8)"
                : "rgba(255,255,255,0.2)",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 15,
            }}
          >
            <ArrowUpRight size={18} />
          </motion.div>

        </motion.div>

      </div>

      {/* Scan line */}

      <motion.div
        className="pointer-events-none absolute left-0 right-0 z-40 h-[2px] bg-blue-500 shadow-[0_0_20px_rgba(37,99,255,0.8)]"
        initial={{
          top: "-2%",
          opacity: 0,
        }}
        animate={
          hovered
            ? {
                top: "102%",
                opacity: 1,
              }
            : {
                top: "-2%",
                opacity: 0,
              }
        }
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      />

      {/* Top border */}

      <motion.div
        className="absolute left-0 top-0 z-40 h-[2px] bg-blue-500"
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "100%",
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 1,
          delay: index * 0.08,
        }}
      />

    </motion.div>
  )
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section
      id="gallery"
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
            Moments
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              OUR
              <br />
              <span className="text-gray-600">
                GALLERY.
              </span>
            </h2>

            <p className="max-w-md text-gray-500">
              A glimpse into the workshops, competitions, projects and
              experiences that make VJ ARC.
            </p>

          </div>

        </motion.div>

        {/* Gallery */}

        <div className="mt-20 grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-3">

          {images.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onSelect={setSelectedImage}
            />
          ))}

        </div>

      </div>

      {/* Fullscreen viewer */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-xl"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedImage(null)}
          >

            <motion.div
              layoutId={`gallery-${selectedImage.id}`}
              className="relative max-h-[90vh] max-w-6xl overflow-hidden"
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
              }}
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[80vh] max-w-full object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8 pt-20">

                <p className="text-xs tracking-[0.25em] text-blue-400">
                  {selectedImage.category}
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {selectedImage.title}
                </h3>

              </div>

            </motion.div>

            <motion.button
              onClick={() => setSelectedImage(null)}
              whileHover={{
                scale: 1.1,
                rotate: 90,
                borderColor: "rgba(37,99,255,0.8)",
              }}
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur"
            >
              <X size={20} />
            </motion.button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  )
}

export default Gallery