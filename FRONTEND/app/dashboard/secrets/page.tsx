import DashboardLayout from "@/components/dashboard/dashboard-layout"
import ProjectSecrets from "@/components/project/project-secrets"

export default function SecretsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Environment Variables</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            Securely manage environment variables across all projects
          </p>
        </div>
        <ProjectSecrets projectId="all" />
      </div>
    </DashboardLayout>
  )
}
