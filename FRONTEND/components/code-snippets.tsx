"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Code2, Plus, Search, Copy, Edit, Trash2 } from "lucide-react"

interface CodeSnippetsProps {
  projectId: string
}

const snippets = [
  {
    id: "1",
    title: "User Authentication Hook",
    description: "Custom React hook for handling user authentication",
    language: "typescript",
    tags: ["react", "hooks", "auth"],
    code: `import { useState, useEffect } from 'react';
import { User } from '../types/user';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async (token: string) => {
    try {
      const response = await fetch('/api/user', {
        headers: { Authorization: \`Bearer \${token}\` }
      });
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Failed to fetch user:', error);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, setUser };
};`,
    createdAt: "2024-01-20",
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
  },
  {
    id: "3",
    title: "API Error Handler",
    description: "Express middleware for centralized error handling",
    language: "javascript",
    tags: ["express", "middleware", "error"],
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
  },
]

export default function CodeSnippets({ projectId }: CodeSnippetsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("all")

  const filteredSnippets = snippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      snippet.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesLanguage = selectedLanguage === "all" || snippet.language === selectedLanguage

    return matchesSearch && matchesLanguage
  })

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    // You could add a toast notification here
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Code Snippets</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">Manage and organize your code snippets</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Snippet
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input
            placeholder="Search snippets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
        >
          <option value="all">All Languages</option>
          <option value="typescript">TypeScript</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="go">Go</option>
        </select>
      </div>

      {/* Snippets Grid */}
      <div className="grid gap-6">
        {filteredSnippets.map((snippet) => (
          <Card key={snippet.id} className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    {snippet.title}
                  </CardTitle>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{snippet.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{snippet.language}</Badge>
                    {snippet.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(snippet.code)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-neutral-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-neutral-100">
                  <code>{snippet.code}</code>
                </pre>
              </div>
              <div className="flex items-center justify-between mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                <span>Created on {snippet.createdAt}</span>
                <span>{snippet.code.split("\n").length} lines</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSnippets.length === 0 && (
        <div className="text-center py-12">
          <Code2 className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">No snippets found</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            {searchTerm ? "Try adjusting your search terms" : "Get started by adding your first code snippet"}
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Snippet
          </Button>
        </div>
      )}
    </div>
  )
}
