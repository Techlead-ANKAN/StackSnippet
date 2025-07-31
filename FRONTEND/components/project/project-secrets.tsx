"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Shield, Eye, EyeOff, Edit, Trash2, Copy, Calendar } from "lucide-react"
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

interface ProjectSecretsProps {
  projectId: string
}

// Mock data
const secrets = [
  {
    id: "1",
    key: "DATABASE_URL",
    value: "postgresql://user:password@localhost:5432/ecommerce",
    description: "PostgreSQL database connection string",
    lastUpdated: "2024-01-20",
    createdBy: "John Doe",
  },
  {
    id: "2",
    key: "STRIPE_SECRET_KEY",
    value: "sk_test_51234567890abcdef",
    description: "Stripe payment processing secret key",
    lastUpdated: "2024-01-18",
    createdBy: "Jane Smith",
  },
  {
    id: "3",
    key: "JWT_SECRET",
    value: "super-secret-jwt-key-12345",
    description: "JWT token signing secret",
    lastUpdated: "2024-01-15",
    createdBy: "John Doe",
  },
  {
    id: "4",
    key: "REDIS_URL",
    value: "redis://localhost:6379",
    description: "Redis cache connection URL",
    lastUpdated: "2024-01-14",
    createdBy: "Mike Johnson",
  },
]

export function ProjectSecrets({ projectId }: ProjectSecretsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [visibleSecrets, setVisibleSecrets] = useState<Set<string>>(new Set())

  const filteredSecrets = secrets.filter(
    (secret) =>
      secret.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      secret.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleSecretVisibility = (secretId: string) => {
    const newVisible = new Set(visibleSecrets)
    if (newVisible.has(secretId)) {
      newVisible.delete(secretId)
    } else {
      newVisible.add(secretId)
    }
    setVisibleSecrets(newVisible)
  }

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value)
    // In a real app, show a toast notification
  }

  const maskValue = (value: string) => {
    return "•".repeat(Math.min(value.length, 20))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Environment Secrets</h2>
          <p className="text-muted-foreground">
            Securely store sensitive configuration data and environment variables.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Secret
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Secret</DialogTitle>
              <DialogDescription>Add a new environment variable or secret to this project.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="key">Key</Label>
                <Input id="key" placeholder="e.g., API_KEY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="value">Value</Label>
                <Input id="value" type="password" placeholder="Secret value" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Brief description of this secret" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Add Secret</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search secrets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="grid gap-4">
        {filteredSecrets.map((secret) => (
          <Card key={secret.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-amber-500" />
                    {secret.key}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{secret.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={() => toggleSecretVisibility(secret.id)}>
                    {visibleSecrets.has(secret.id) ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => copyToClipboard(secret.value)}>
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
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                {visibleSecrets.has(secret.id) ? secret.value : maskValue(secret.value)}
              </div>
              <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Updated {secret.lastUpdated}
                </div>
                <div>Created by {secret.createdBy}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
