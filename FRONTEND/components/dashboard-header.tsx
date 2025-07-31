"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Plus, Filter, MoreHorizontal } from "lucide-react"

export default function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between"
    >
      <div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Dashboard</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
          Manage your projects, snippets, and team collaboration
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>
    </motion.div>
  )
}
