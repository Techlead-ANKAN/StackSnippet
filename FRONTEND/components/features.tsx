"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, FileText, Archive, Shield, Users, GitBranch, Search, Zap, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Code2,
    title: "Smart Code Snippets",
    description: "Store, organize, and share code snippets with syntax highlighting and version control.",
  },
  {
    icon: FileText,
    title: "Rich Documentation",
    description: "Create comprehensive README files and documentation with markdown support.",
  },
  {
    icon: Archive,
    title: "Project Archives",
    description: "Generate and manage ZIP archives of your projects with automated backups.",
  },
  {
    icon: Shield,
    title: "Secure Secrets",
    description: "Safely store environment variables and sensitive configuration data.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together with your team using shared projects and real-time updates.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Track changes and maintain version history for all your project components.",
  },
  {
    icon: Search,
    title: "Powerful Search",
    description: "Find anything across your projects with advanced search and filtering.",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "Streamline your workflow with keyboard shortcuts and quick commands.",
  },
  {
    icon: CheckCircle,
    title: "Status Tracking",
    description: "Organize projects by status: ongoing, completed, or cancelled.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need to Manage Projects</h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to enhance your development workflow and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
