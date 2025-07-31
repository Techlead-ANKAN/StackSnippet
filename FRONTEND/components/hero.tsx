"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, FileText, Archive, Shield, Users, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 dark:bg-blue-400/10 border border-blue-600/20 dark:border-blue-400/20"
            >
              <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Developer Project Management</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Organize Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
                Development Projects
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Streamline your workflow with powerful tools for code snippets, documentation, team collaboration, and
              secure project management.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
              View Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16 max-w-4xl mx-auto"
          >
            {[
              { icon: Code2, label: "Code Snippets" },
              { icon: FileText, label: "Documentation" },
              { icon: Archive, label: "Project Archives" },
              { icon: Shield, label: "Secure Storage" },
              { icon: Users, label: "Team Collaboration" },
              { icon: Zap, label: "Workflow Automation" },
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-neutral-200/10 dark:border-neutral-800/10"
              >
                <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
