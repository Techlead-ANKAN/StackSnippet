"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { CheckCircle2, Code2, Shield, Users, ArrowUpRight } from "lucide-react"
import { motion, useMotionValue, useTransform, type Variants } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

interface BentoItem {
  id: string
  title: string
  description: string
  href?: string
  feature?: "spotlight" | "code" | "metrics"
  spotlightItems?: string[]
  code?: string
  metrics?: Array<{
    label: string
    value: number
    suffix?: string
    color?: string
  }>
  size?: "sm" | "md" | "lg"
  className?: string
  icon?: React.ComponentType<{ className?: string }>
}

const bentoItems: BentoItem[] = [
  {
    id: "main",
    title: "Complete Project Management",
    description:
      "Organize your development projects with powerful tools for code snippets, documentation, team collaboration, and secure storage.",
    href: "/dashboard",
    feature: "spotlight",
    spotlightItems: [
      "Code snippet management with syntax highlighting",
      "Markdown documentation with live preview",
      "Secure environment variable storage",
      "Team collaboration with role-based access",
      "Project archiving and export functionality",
    ],
    size: "lg",
    className: "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
    icon: Code2,
  },
  {
    id: "snippets",
    title: "Smart Code Snippets",
    description: "Store, organize, and share code snippets with syntax highlighting and tagging system.",
    href: "/dashboard",
    feature: "code",
    code: `// React Hook for API calls
const useApi = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading };
};`,
    size: "md",
    className: "col-span-2 row-span-1",
    icon: Code2,
  },
  {
    id: "security",
    title: "Secure Storage",
    description: "Keep your environment variables and sensitive data encrypted and secure.",
    href: "/dashboard",
    feature: "metrics",
    metrics: [
      { label: "Encryption Level", value: 256, suffix: "-bit AES", color: "emerald" },
      { label: "Uptime", value: 99.9, suffix: "%", color: "blue" },
      { label: "Data Centers", value: 12, suffix: " global", color: "violet" },
    ],
    size: "md",
    className: "col-span-1 row-span-1",
    icon: Shield,
  },
  {
    id: "collaboration",
    title: "Team Collaboration",
    description: "Work together with your team using role-based access control and real-time updates.",
    href: "/dashboard",
    size: "sm",
    className: "col-span-1 row-span-1",
    icon: Users,
  },
]

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const SpotlightFeature = ({ items }: { items: string[] }) => {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, index) => (
        <motion.li
          key={`spotlight-${item.toLowerCase().replace(/\s+/g, "-")}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index }}
          className="flex items-start gap-3"
        >
          <CheckCircle2 className="h-5 w-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
          <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}

const CodeFeature = ({ code }: { code: string }) => {
  return (
    <div className="mt-4">
      <div className="bg-neutral-900 dark:bg-black text-neutral-100 p-4 rounded-lg text-sm font-mono overflow-x-auto">
        <pre className="whitespace-pre-wrap">{code}</pre>
      </div>
    </div>
  )
}

const MetricsFeature = ({
  metrics,
}: {
  metrics: Array<{
    label: string
    value: number
    suffix?: string
    color?: string
  }>
}) => {
  const getColorClass = (color = "emerald") => {
    const colors = {
      emerald: "bg-emerald-500 dark:bg-emerald-400",
      blue: "bg-blue-500 dark:bg-blue-400",
      violet: "bg-violet-500 dark:bg-violet-400",
      amber: "bg-amber-500 dark:bg-amber-400",
      rose: "bg-rose-500 dark:bg-rose-400",
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <div className="mt-4 space-y-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={`metric-${metric.label.toLowerCase().replace(/\s+/g, "-")}`}
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 * index }}
        >
          <div className="flex justify-between items-center text-sm">
            <div className="text-neutral-700 dark:text-neutral-300 font-medium">{metric.label}</div>
            <div className="text-neutral-900 dark:text-neutral-100 font-semibold">
              {metric.value}
              {metric.suffix}
            </div>
          </div>
          <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${getColorClass(metric.color)}`}
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(100, (metric.value / (metric.label === "Uptime" ? 100 : metric.value)) * 100)}%`,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.15 * index,
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const BentoCard = ({ item }: { item: BentoItem }) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [2, -2])
  const rotateY = useTransform(x, [-100, 100], [-2, 2])

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct * 100)
    y.set(yPct * 100)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <Link
        href={item.href || "#"}
        className={cn(
          "group relative flex flex-col gap-4 h-full rounded-xl p-6",
          "bg-gradient-to-b from-white/80 via-white/60 to-white/40",
          "dark:from-neutral-900/80 dark:via-neutral-900/60 dark:to-neutral-900/40",
          "border border-neutral-200/60 dark:border-neutral-800/60",
          "backdrop-blur-sm",
          "shadow-[0_4px_20px_rgb(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgb(0,0,0,0.2)]",
          "hover:border-neutral-300/50 dark:hover:border-neutral-700/50",
          "hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]",
          "transition-all duration-500 ease-out",
          item.className,
        )}
        tabIndex={0}
        aria-label={`${item.title} - ${item.description}`}
      >
        <div className="relative z-10 flex flex-col gap-4 h-full" style={{ transform: "translateZ(20px)" }}>
          <div className="space-y-3 flex-1 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {item.icon && (
                  <div className="p-2 rounded-lg bg-blue-600/10 dark:bg-blue-400/10">
                    <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                )}
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
              <div className="text-neutral-400 dark:text-neutral-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 tracking-tight leading-relaxed">
              {item.description}
            </p>

            {/* Feature specific content */}
            {item.feature === "spotlight" && item.spotlightItems && <SpotlightFeature items={item.spotlightItems} />}
            {item.feature === "code" && item.code && <CodeFeature code={item.code} />}
            {item.feature === "metrics" && item.metrics && <MetricsFeature metrics={item.metrics} />}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function BentoGrid() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Powerful features designed to streamline your development workflow and boost team productivity.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-6"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <BentoCard item={bentoItems[0]} />
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-1">
              <BentoCard item={bentoItems[2]} />
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="md:col-span-2">
              <BentoCard item={bentoItems[1]} />
            </motion.div>
            <motion.div variants={fadeInUp} className="md:col-span-1">
              <BentoCard item={bentoItems[3]} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
