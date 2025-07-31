"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Eye, Save, X } from "lucide-react"

interface ProjectReadmeProps {
  projectId: string
}

const defaultReadme = `# E-commerce Platform

A modern, full-stack e-commerce solution built with React, Node.js, and PostgreSQL.

## Features

- **User Authentication**: Secure login and registration system
- **Product Management**: Complete CRUD operations for products
- **Shopping Cart**: Real-time cart updates with Redis caching
- **Payment Processing**: Integrated with Stripe for secure payments
- **Order Management**: Comprehensive order tracking system
- **Admin Dashboard**: Full administrative control panel

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis for session management
- **Deployment**: Docker containers on AWS ECS

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Redis 6+
- Docker (optional)

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/yourorg/ecommerce-platform.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npm run db:migrate

# Start the development server
npm run dev
\`\`\`

## API Documentation

The API documentation is available at \`/api/docs\` when running the development server.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.`

export default function ProjectReadme({ projectId }: ProjectReadmeProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(defaultReadme)
  const [editContent, setEditContent] = useState(content)

  const handleSave = () => {
    setContent(editContent)
    setIsEditing(false)
    // Here you would typically save to your backend
  }

  const handleCancel = () => {
    setEditContent(content)
    setIsEditing(false)
  }

  return (
    <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          README.md
        </CardTitle>
        <div className="flex items-center gap-2">
          {isEditing ? (
            <>
              <Button size="sm" onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button size="sm" variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </>
          ) : (
            <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <Textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="min-h-[500px] font-mono text-sm"
            placeholder="Write your README content in Markdown..."
          />
        ) : (
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed">{content}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
