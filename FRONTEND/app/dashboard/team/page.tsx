import DashboardLayout from "@/components/dashboard/dashboard-layout"
import ProjectTeam from "@/components/project/project-team"

const teamData = [
  { id: "1", name: "John Doe", role: "owner", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "2", name: "Jane Smith", role: "admin", avatar: "/placeholder.svg?height=32&width=32" },
  { id: "3", name: "Mike Johnson", role: "member", avatar: "/placeholder.svg?height=32&width=32" },
]

export default function TeamPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Team Management</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            Manage team members and their access across all projects
          </p>
        </div>
        <ProjectTeam projectId="all" team={teamData} />
      </div>
    </DashboardLayout>
  )
}
