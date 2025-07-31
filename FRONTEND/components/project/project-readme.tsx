"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Eye } from "lucide-react"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"

interface ProjectReadmeProps {
  content: string
}

export function ProjectReadme({ content }: ProjectReadmeProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [readmeContent, setReadmeContent] = useState(content)

  const handleSave = () => {
    // In a real app, this would save to the backend
    setIsEditing(false)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          README.md
        </CardTitle>
        <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
          <Edit className="mr-2 h-4 w-4" />
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <Textarea
              value={readmeContent}
              onChange={(e) => setReadmeContent(e.target.value)}
              className="min-h-[400px] font-mono text-sm"
              placeholder="Write your README content in Markdown..."
            />
            <div className="flex gap-2">
              <Button onClick={handleSave}>Save Changes</Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed">{readmeContent}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
