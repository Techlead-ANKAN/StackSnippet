"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import SwitchButton from "@/components/switch-button"
import { Code2, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-50 border-b border-neutral-200/10 dark:border-neutral-800/10 backdrop-blur-xl bg-white/5 dark:bg-black/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/20 blur-xl rounded-full" />
            </div>
            <span className="text-xl font-bold text-neutral-900 dark:text-white">StackSnippet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Docs
            </Link>
            <SwitchButton />
            <Link href="/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <SwitchButton showLabel={false} />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-neutral-200/10 dark:border-neutral-800/10"
          >
            <div className="py-4 space-y-4">
              <Link
                href="/features"
                className="block text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="block text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/docs"
                className="block text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                Docs
              </Link>
              <Link href="/dashboard">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
