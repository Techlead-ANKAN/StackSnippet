import DashboardLayout from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Plus, Search, Edit, Eye } from "lucide-react"
import { Input } from "@/components/ui/input"

const documents = [
  {
    id: "1",
    title: "API Documentation",
    description: "Complete API reference and usage examples",
    project: "E-commerce Platform",
    lastUpdated: "2 hours ago",
    author: "John Doe",
  },
  {
    id: "2",
    title: "Database Schema",
    description: "Database design and relationships documentation",
    project: "Mobile Banking App",
    lastUpdated: "1 day ago",
    author: "Jane Smith",
  },
  {
    id: "3",
    title: "Deployment Guide",
    description: "Step-by-step deployment instructions",
    project: "AI Chat Assistant",
    lastUpdated: "3 days ago",
    author: "Mike Johnson",
  },
]

export default function DocsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Documentation</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">Manage project documentation and README files</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Document
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input placeholder="Search documentation..." className="pl-10" />
        </div>

        <div className="grid gap-6">
          {documents.map((doc) => (
            <Card key={doc.id} className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-600/10 dark:bg-blue-400/10">
                      <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{doc.title}</CardTitle>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{doc.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-4">
                    <span>Project: {doc.project}</span>
                    <span>•</span>
                    <span>By {doc.author}</span>
                  </div>
                  <span>Updated {doc.lastUpdated}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
