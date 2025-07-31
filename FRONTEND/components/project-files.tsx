"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Archive, Search, Download, Eye, Trash2, FileText, ImageIcon, File, Upload } from "lucide-react"

interface ProjectFilesProps {
  projectId: string
}

const files = [
  {
    id: "1",
    name: "project-documentation.pdf",
    type: "pdf",
    size: "2.4 MB",
    uploadedAt: "2024-01-20",
    uploadedBy: "John Doe",
    category: "documentation",
  },
  {
    id: "2",
    name: "database-schema.sql",
    type: "sql",
    size: "156 KB",
    uploadedAt: "2024-01-18",
    uploadedBy: "Jane Smith",
    category: "database",
  },
  {
    id: "3",
    name: "ui-mockups.fig",
    type: "figma",
    size: "8.7 MB",
    uploadedAt: "2024-01-15",
    uploadedBy: "Mike Johnson",
    category: "design",
  },
  {
    id: "4",
    name: "api-collection.json",
    type: "json",
    size: "45 KB",
    uploadedAt: "2024-01-12",
    uploadedBy: "John Doe",
    category: "api",
  },
  {
    id: "5",
    name: "deployment-config.yaml",
    type: "yaml",
    size: "12 KB",
    uploadedAt: "2024-01-10",
    uploadedBy: "Jane Smith",
    category: "deployment",
  },
]

const getFileIcon = (type: string) => {
  switch (type) {
    case "pdf":
    case "doc":
    case "docx":
      return FileText
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "svg":
      return ImageIcon
    case "zip":
    case "rar":
    case "tar":
      return Archive
    default:
      return File
  }
}

const getCategoryColor = (category: string) => {
  const colors = {
    documentation: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    database: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    design: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    api: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    deployment: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  }
  return (
    colors[category as keyof typeof colors] ||
    "bg-neutral-100 text-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-400"
  )
}

export default function ProjectFiles({ projectId }: ProjectFilesProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || file.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Project Files</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">Manage documents, assets, and project archives</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Archive className="h-4 w-4 mr-2" />
            Create Archive
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Upload className="h-4 w-4 mr-2" />
            Upload Files
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
        >
          <option value="all">All Categories</option>
          <option value="documentation">Documentation</option>
          <option value="database">Database</option>
          <option value="design">Design</option>
          <option value="api">API</option>
          <option value="deployment">Deployment</option>
        </select>
      </div>

      {/* Files Grid */}
      <div className="grid gap-4">
        {filteredFiles.map((file) => {
          const FileIcon = getFileIcon(file.type)
          return (
            <Card key={file.id} className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                      <FileIcon className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-900 dark:text-white">{file.name}</h3>
                      <div className="flex items-center gap-3 mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        <span>{file.size}</span>
                        <span>•</span>
                        <span>Uploaded by {file.uploadedBy}</span>
                        <span>•</span>
                        <span>{file.uploadedAt}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getCategoryColor(file.category)}>{file.category}</Badge>
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
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredFiles.length === 0 && (
        <div className="text-center py-12">
          <Archive className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">No files found</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            {searchTerm ? "Try adjusting your search terms" : "Upload your first project file to get started"}
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Upload className="h-4 w-4 mr-2" />
            Upload Your First File
          </Button>
        </div>
      )}
    </div>
  )
}
