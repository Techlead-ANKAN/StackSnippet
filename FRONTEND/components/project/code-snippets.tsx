"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Search, Code2, Copy, Edit, Trash2, Calendar, Tag } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface CodeSnippetsProps {
  projectId: string
}

// Mock data
const snippets = [
  {
    id: "1",
    title: "User Authentication Hook",
    description: "Custom React hook for handling user authentication",
    language: "typescript",
    tags: ["react", "hooks", "auth"],
    code: `import { useState, useEffect } from 'react';
import { User } from '../types/user';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token and get user data
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Login logic
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return { user, loading, login, logout };
}`,
    createdAt: "2024-01-20",
    updatedAt: "2024-01-22",
  },
  {
    id: "2",
    title: "Database Connection",
    description: "PostgreSQL connection setup with connection pooling",
    language: "javascript",
    tags: ["database", "postgresql", "node"],
    code: `const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  getClient: () => pool.connect(),
};`,
    createdAt: "2024-01-18",
    updatedAt: "2024-01-19",
  },
  {
    id: "3",
    title: "API Error Handler",
    description: "Express middleware for centralized error handling",
    language: "javascript",
    tags: ["express", "middleware", "error-handling"],
    code: `const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error
  console.error(err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = { message, statusCode: 404 };
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = { message, statusCode: 400 };
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = { message, statusCode: 400 };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;`,
    createdAt: "2024-01-15",
    updatedAt: "2024-01-16",
  },
]

const languageColors = {
  typescript: "bg-blue-500/10 text-blue-500",
  javascript: "bg-yellow-500/10 text-yellow-600",
  python: "bg-green-500/10 text-green-500",
  java: "bg-red-500/10 text-red-500",
  css: "bg-purple-500/10 text-purple-500",
}

export function CodeSnippets({ projectId }: CodeSnippetsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSnippet, setSelectedSnippet] = useState<(typeof snippets)[0] | null>(null)

  const filteredSnippets = snippets.filter(
    (snippet) =>
      snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      snippet.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    // In a real app, show a toast notification
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Code Snippets</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Snippet
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Add New Code Snippet</DialogTitle>
              <DialogDescription>Create a new code snippet for this project.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Snippet title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Input id="language" placeholder="e.g., typescript" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Brief description of the snippet" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" placeholder="Comma-separated tags" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="code">Code</Label>
                <Textarea id="code" placeholder="Paste your code here..." className="min-h-[300px] font-mono" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Snippet</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search snippets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="grid gap-4">
        {filteredSnippets.map((snippet) => (
          <Card key={snippet.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    {snippet.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{snippet.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge
                      className={
                        languageColors[snippet.language as keyof typeof languageColors] ||
                        "bg-gray-500/10 text-gray-500"
                      }
                    >
                      {snippet.language}
                    </Badge>
                    {snippet.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={() => copyToClipboard(snippet.code)}>
                    <Copy className="h-4 w-4" />
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
            <CardContent>
              <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm">
                  <code>{snippet.code}</code>
                </pre>
              </div>
              <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Created {snippet.createdAt}
                </div>
                <div>Updated {snippet.updatedAt}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
