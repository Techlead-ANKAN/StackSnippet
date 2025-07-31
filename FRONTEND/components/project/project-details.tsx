"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Code2, FileText, Users, Calendar, Download, Edit, Share } from "lucide-react"
import Link from "next/link"
import { CodeSnippets } from "./code-snippets"
import { ProjectFiles } from "./project-files"
import { ProjectSecrets } from "./project-secrets"
import { ProjectTeam } from "./project-team"
import { ProjectReadme } from "./project-readme"

interface ProjectDetailsProps {
  projectId: string
}

// Mock project data
const project = {
  id: "1",
  name: "E-commerce Platform",
  description: "Full-stack e-commerce solution with React and Node.js",
  status: "ongoing" as const,
  createdAt: "2024-01-15",
  lastUpdated: "2 hours ago",
  snippets: 24,
  files: 12,
  team: 3,
  readme: `# E-commerce Platform

A modern, full-stack e-commerce solution built with React, Node.js, and PostgreSQL.

## Features

- User authentication and authorization
- Product catalog with search and filtering
- Shopping cart and checkout process
- Payment integration with Stripe
- Admin dashboard for inventory management
- Real-time order tracking

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, PostgreSQL
- **Authentication**: JWT tokens
- **Payment**: Stripe API
- **Deployment**: Docker, AWS

## Getting Started

1. Clone the repository
2. Install dependencies: \`npm install\`
3. Set up environment variables
4. Run the development server: \`npm run dev\`

## Contributing

Please read our contributing guidelines before submitting pull requests.
`,
}

const statusColors = {
  ongoing: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  completed: "bg-green-500/10 text-green-500 border-green-500/20",
  cancelled: "bg-red-500/10 text-red-500 border-red-500/20",
}

export function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge className={statusColors[project.status]}>{project.status}</Badge>
          <Button variant="outline" size="sm">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Code Snippets</CardTitle>
            <Code2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{project.snippets}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Files</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{project.files}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{project.team}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">{project.lastUpdated}</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="snippets">Code Snippets</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="secrets">Secrets</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <ProjectReadme content={project.readme} />
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
          <ProjectTeam projectId={projectId} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
