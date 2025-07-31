import DashboardLayout from "@/components/dashboard/dashboard-layout"
import CodeSnippets from "@/components/project/code-snippets"

export default function SnippetsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">All Code Snippets</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            Browse and manage all your code snippets across projects
          </p>
        </div>
        <CodeSnippets projectId="all" />
      </div>
    </DashboardLayout>
  )
}
