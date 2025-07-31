"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Calendar, Code2, FileText, Users } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

// Mock data - in a real app, this would come from an API
const projects = [
  {
    id: "1",
    name: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    status: "ongoing" as const,
    lastUpdated: "2 hours ago",
    snippets: 24,
    files: 12,
    team: 3,
  },
  {
    id: "2",
    name: "Mobile App Backend",
    description: "REST API for mobile application with authentication",
    status: "completed" as const,
    lastUpdated: "1 day ago",
    snippets: 18,
    files: 8,
    team: 2,
  },
  {
    id: "3",
    name: "Data Analytics Dashboard",
    description: "Real-time analytics dashboard with charts and metrics",
    status: "ongoing" as const,
    lastUpdated: "3 hours ago",
    snippets: 31,
    files: 15,
    team: 4,
  },
  {
    id: "4",
    name: "Legacy System Migration",
    description: "Migrating old PHP system to modern stack",
    status: "cancelled" as const,
    lastUpdated: "1 week ago",
    snippets: 7,
    files: 3,
    team: 1,
  },
  {
    id: "5",
    name: "AI Chatbot Integration",
    description: "Integrating OpenAI GPT into customer support system",
    status: "ongoing" as const,
    lastUpdated: "5 hours ago",
    snippets: 15,
    files: 6,
    team: 2,
  },
  {
    id: "6",
    name: "DevOps Pipeline Setup",
    description: "CI/CD pipeline with Docker and Kubernetes",
    status: "completed" as const,
    lastUpdated: "3 days ago",
    snippets: 22,
    files: 9,
    team: 3,
  },
]

const statusColors = {
  ongoing: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  completed: "bg-green-500/10 text-green-500 border-green-500/20",
  cancelled: "bg-red-500/10 text-red-500 border-red-500/20",
}

export function ProjectGrid() {
  const [filter, setFilter] = useState<"all" | "ongoing" | "completed" | "cancelled">("all")

  const filteredProjects = projects.filter((project) => filter === "all" || project.status === filter)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Recent Projects</h2>
        <div className="flex gap-2">
          {["all", "ongoing", "completed", "cancelled"].map((status) => (
            <Button
              key={status}
              variant={filter === status ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(status as any)}
              className="capitalize"
            >
              {status}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle className="text-lg">
                  <Link href={`/dashboard/projects/${project.id}`} className="hover:text-primary transition-colors">
                    {project.name}
                  </Link>
                </CardTitle>
                <Badge className={statusColors[project.status]}>{project.status}</Badge>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Archive</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="line-clamp-2">{project.description}</CardDescription>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.lastUpdated}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <Code2 className="h-4 w-4 text-muted-foreground" />
                  <span>{project.snippets}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>{project.files}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{project.team}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
