"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FolderOpen, Code2, FileText, Users, TrendingUp } from "lucide-react"

const stats = [
  {
    name: "Total Projects",
    value: "12",
    change: "+2",
    changeType: "increase",
    icon: FolderOpen,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-600/10 dark:bg-blue-400/10",
  },
  {
    name: "Code Snippets",
    value: "248",
    change: "+18",
    changeType: "increase",
    icon: Code2,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-600/10 dark:bg-emerald-400/10",
  },
  {
    name: "Documentation",
    value: "64",
    change: "+5",
    changeType: "increase",
    icon: FileText,
    color: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-600/10 dark:bg-violet-400/10",
  },
  {
    name: "Team Members",
    value: "8",
    change: "+1",
    changeType: "increase",
    icon: Users,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-600/10 dark:bg-amber-400/10",
  },
]

export default function QuickStats() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{stat.name}</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <p className="text-2xl font-semibold text-neutral-900 dark:text-white">{stat.value}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      <TrendingUp className="h-3 w-3" />
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
