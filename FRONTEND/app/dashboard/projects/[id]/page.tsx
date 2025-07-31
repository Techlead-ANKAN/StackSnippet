import DashboardLayout from "@/components/dashboard/dashboard-layout"
import ProjectDetails from "@/components/project/project-details"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <DashboardLayout>
      <ProjectDetails projectId={params.id} />
    </DashboardLayout>
  )
}
