import DashboardLayout from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Archive, Download, Eye, Trash2, Search, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"

const archives = [
  {
    id: "1",
    name: "E-commerce Platform v1.0",
    description: "Complete project archive including source code, documentation, and assets",
    size: "245 MB",
    createdAt: "2024-01-15",
    status: "completed",
    downloads: 12,
  },
  {
    id: "2",
    name: "Mobile Banking App Beta",
    description: "Beta version archive with testing documentation",
    size: "189 MB",
    createdAt: "2024-01-10",
    status: "archived",
    downloads: 8,
  },
  {
    id: "3",
    name: "Legacy System Migration",
    description: "Archive of old system before migration",
    size: "567 MB",
    createdAt: "2024-01-05",
    status: "archived",
    downloads: 3,
  },
]

const statusColors = {
  completed: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  archived: "bg-neutral-100 text-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-400",
}

export default function ArchivesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Project Archives</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">
              Manage archived projects and download project backups
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Create Archive
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input placeholder="Search archives..." className="pl-10" />
        </div>

        <div className="grid gap-6">
          {archives.map((archive) => (
            <Card key={archive.id} className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-600/10 dark:bg-amber-400/10">
                      <Archive className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{archive.name}</CardTitle>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{archive.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className={statusColors[archive.status as keyof typeof statusColors]}>
                          {archive.status}
                        </Badge>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">{archive.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
                  <span>Created on {archive.createdAt}</span>
                  <span>{archive.downloads} downloads</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
