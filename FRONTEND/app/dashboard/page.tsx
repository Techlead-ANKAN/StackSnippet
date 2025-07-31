import DashboardLayout from "@/components/dashboard/dashboard-layout"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import QuickStats from "@/components/dashboard/quick-stats"
import ProjectGrid from "@/components/dashboard/project-grid"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <DashboardHeader />
        <QuickStats />
        <ProjectGrid />
      </div>
    </DashboardLayout>
  )
}
