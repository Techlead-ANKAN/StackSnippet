"use client"

import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(100,116,139,${0.08 + i * 0.015})`,
    width: 0.8 + i * 0.025,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-gray-600"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.12 + path.id * 0.008}
            initial={{ pathLength: 0.3, opacity: 0.8 }}
            animate={{
              pathLength: 1,
              opacity: [0.4, 0.8, 0.4],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function BackgroundStripes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0" style={{ height: "800vh" }}>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
        <FloatingPaths position={0.5} />
        <FloatingPaths position={-0.5} />
      </div>
    </div>
  )
}
