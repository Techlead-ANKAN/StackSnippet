"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FolderOpen, CheckCircle, Clock, Archive } from "lucide-react"

const stats = [
  {
    title: "Total Projects",
    value: "24",
    icon: FolderOpen,
    description: "Active projects",
  },
  {
    title: "Completed",
    value: "18",
    icon: CheckCircle,
    description: "Successfully finished",
  },
  {
    title: "In Progress",
    value: "5",
    icon: Clock,
    description: "Currently working on",
  },
  {
    title: "Archived",
    value: "12",
    icon: Archive,
    description: "Stored for reference",
  },
]

export function QuickStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
