import DashboardLayout from "@/components/dashboard/dashboard-layout"
import ProjectGrid from "@/components/dashboard/project-grid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter } from "lucide-react"

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">All Projects</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">
              Manage and organize all your development projects
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input placeholder="Search projects..." className="pl-10" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <ProjectGrid />
      </div>
    </DashboardLayout>
  )
}
