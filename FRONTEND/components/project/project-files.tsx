"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Plus,
  Search,
  FileText,
  Download,
  Edit,
  Trash2,
  Upload,
  File,
  ImageIcon,
  Archive,
  Calendar,
  Eye,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ProjectFilesProps {
  projectId: string
}

// Mock data
const files = [
  {
    id: "1",
    name: "API Documentation.md",
    type: "markdown",
    size: "24.5 KB",
    lastModified: "2024-01-22",
    icon: FileText,
    content: "# API Documentation\n\nThis document describes the REST API endpoints...",
  },
  {
    id: "2",
    name: "Database Schema.sql",
    type: "sql",
    size: "12.3 KB",
    lastModified: "2024-01-20",
    icon: File,
    content: "CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  email VARCHAR(255) UNIQUE NOT NULL...",
  },
  {
    id: "3",
    name: "Architecture Diagram.png",
    type: "image",
    size: "156.7 KB",
    lastModified: "2024-01-18",
    icon: ImageIcon,
    content: null,
  },
  {
    id: "4",
    name: "Project Backup.zip",
    type: "archive",
    size: "2.4 MB",
    lastModified: "2024-01-15",
    icon: Archive,
    content: null,
  },
  {
    id: "5",
    name: "Requirements.txt",
    type: "text",
    size: "1.2 KB",
    lastModified: "2024-01-14",
    icon: FileText,
    content: "express@4.18.2\ncors@2.8.5\ndotenv@16.0.3\npg@8.8.0...",
  },
]

export function ProjectFiles({ projectId }: ProjectFilesProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFile, setSelectedFile] = useState<(typeof files)[0] | null>(null)

  const filteredFiles = files.filter((file) => file.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Project Files</h2>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Upload File
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload File</DialogTitle>
                <DialogDescription>Upload a file to this project.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="file">File</Label>
                  <Input id="file" type="file" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description (optional)</Label>
                  <Textarea id="description" placeholder="Brief description of the file" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Upload</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New File
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Create New File</DialogTitle>
                <DialogDescription>Create a new file for this project.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="filename">File Name</Label>
                  <Input id="filename" placeholder="e.g., README.md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea id="content" placeholder="File content..." className="min-h-[300px] font-mono" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Create File</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search files..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="grid gap-4">
        {filteredFiles.map((file) => (
          <Card key={file.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <file.icon className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <CardTitle className="text-lg">{file.name}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{file.size}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {file.lastModified}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {file.content && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>{file.name}</DialogTitle>
                        </DialogHeader>
                        <div className="bg-muted rounded-lg p-4 max-h-96 overflow-auto">
                          <pre className="text-sm whitespace-pre-wrap">{file.content}</pre>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
