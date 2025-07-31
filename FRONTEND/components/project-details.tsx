"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FolderOpen, Code2, FileText, Archive, Shield, Users, Settings, Download, Share } from "lucide-react"
import ProjectReadme from "./project-readme"
import CodeSnippets from "./code-snippets"
import ProjectFiles from "./project-files"
import ProjectSecrets from "./project-secrets"
import ProjectTeam from "./project-team"

interface ProjectDetailsProps {
  projectId: string
}

const projectData = {
  id: "1",
  name: "E-commerce Platform",
  description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
  status: "ongoing",
  created: "2024-01-15",
  lastUpdated: "2 hours ago",
  tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
  progress: 75,
  team: [
    { id: "1", name: "John Doe", role: "owner", avatar: "/placeholder.svg?height=32&width=32" },
    { id: "2", name: "Jane Smith", role: "admin", avatar: "/placeholder.svg?height=32&width=32" },
    { id: "3", name: "Mike Johnson", role: "member", avatar: "/placeholder.svg?height=32&width=32" },
  ],
}

export default function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const [activeTab, setActiveTab] = useState("readme")

  return (
    <div className="space-y-6">
      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-start justify-between"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-600/10 dark:bg-blue-400/10">
              <FolderOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">{projectData.name}</h1>
              <p className="text-neutral-600 dark:text-neutral-400 mt-1">{projectData.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
              {projectData.status}
            </Badge>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              Last updated {projectData.lastUpdated}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {projectData.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-neutral-900 dark:text-white">Project Progress</span>
                <span className="text-neutral-600 dark:text-neutral-400">{projectData.progress}%</span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${projectData.progress}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Project Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
            <TabsTrigger value="readme" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              README
            </TabsTrigger>
            <TabsTrigger value="snippets" className="flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Snippets
            </TabsTrigger>
            <TabsTrigger value="files" className="flex items-center gap-2">
              <Archive className="h-4 w-4" />
              Files
            </TabsTrigger>
            <TabsTrigger value="secrets" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Secrets
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Team
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="readme">
            <ProjectReadme projectId={projectId} />
          </TabsContent>

          <TabsContent value="snippets">
            <CodeSnippets projectId={projectId} />
          </TabsContent>

          <TabsContent value="files">
            <ProjectFiles projectId={projectId} />
          </TabsContent>

          <TabsContent value="secrets">
            <ProjectSecrets projectId={projectId} />
          </TabsContent>

          <TabsContent value="team">
            <ProjectTeam projectId={projectId} team={projectData.team} />
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-400">Project settings will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
