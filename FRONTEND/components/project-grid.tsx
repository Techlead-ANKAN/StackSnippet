"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FolderOpen, Code2, FileText, Users, MoreHorizontal, Calendar } from "lucide-react"

const projects = [
  {
    id: "1",
    name: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    status: "ongoing",
    lastUpdated: "2 hours ago",
    snippets: 24,
    docs: 8,
    members: 4,
    tech: ["React", "Node.js", "PostgreSQL"],
    progress: 75,
  },
  {
    id: "2",
    name: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    status: "completed",
    lastUpdated: "1 day ago",
    snippets: 18,
    docs: 12,
    members: 3,
    tech: ["React Native", "Express", "MongoDB"],
    progress: 100,
  },
  {
    id: "3",
    name: "AI Chat Assistant",
    description: "Intelligent chatbot with natural language processing capabilities",
    status: "ongoing",
    lastUpdated: "3 hours ago",
    snippets: 31,
    docs: 6,
    members: 2,
    tech: ["Python", "FastAPI", "OpenAI"],
    progress: 45,
  },
  {
    id: "4",
    name: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive visualizations",
    status: "cancelled",
    lastUpdated: "1 week ago",
    snippets: 12,
    docs: 4,
    members: 2,
    tech: ["Vue.js", "D3.js", "Firebase"],
    progress: 30,
  },
]

const statusColors = {
  ongoing: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  completed: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
}

export default function ProjectGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Recent Projects</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-300/60 dark:hover:border-neutral-700/60">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-600/10 dark:bg-blue-400/10">
                      <FolderOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <Link
                        href={`/dashboard/projects/${project.id}`}
                        className="text-lg font-semibold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {project.name}
                      </Link>
                      <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">Progress</span>
                    <span className="font-medium text-neutral-900 dark:text-white">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Code2 className="h-4 w-4" />
                      <span>{project.snippets}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>{project.docs}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{project.members}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.lastUpdated}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
