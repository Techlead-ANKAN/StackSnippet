"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Shield, Plus, Search, Eye, EyeOff, Copy, Edit, Trash2, Key } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ProjectSecretsProps {
  projectId: string
}

const secrets = [
  {
    id: "1",
    key: "DATABASE_URL",
    description: "PostgreSQL database connection string",
    environment: "production",
    lastUpdated: "2024-01-20",
    updatedBy: "John Doe",
  },
  {
    id: "2",
    key: "STRIPE_SECRET_KEY",
    description: "Stripe payment processing secret key",
    environment: "production",
    lastUpdated: "2024-01-18",
    updatedBy: "Jane Smith",
  },
  {
    id: "3",
    key: "JWT_SECRET",
    description: "JSON Web Token signing secret",
    environment: "production",
    lastUpdated: "2024-01-15",
    updatedBy: "John Doe",
  },
  {
    id: "4",
    key: "REDIS_URL",
    description: "Redis cache connection URL",
    environment: "development",
    lastUpdated: "2024-01-12",
    updatedBy: "Mike Johnson",
  },
  {
    id: "5",
    key: "SENDGRID_API_KEY",
    description: "SendGrid email service API key",
    environment: "production",
    lastUpdated: "2024-01-10",
    updatedBy: "Jane Smith",
  },
]

const getEnvironmentColor = (environment: string) => {
  const colors = {
    production: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    staging: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    development: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  }
  return (
    colors[environment as keyof typeof colors] ||
    "bg-neutral-100 text-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-400"
  )
}

export default function ProjectSecrets({ projectId }: ProjectSecretsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedEnvironment, setSelectedEnvironment] = useState("all")
  const [visibleSecrets, setVisibleSecrets] = useState<Set<string>>(new Set())

  const filteredSecrets = secrets.filter((secret) => {
    const matchesSearch =
      secret.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      secret.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesEnvironment = selectedEnvironment === "all" || secret.environment === selectedEnvironment
    return matchesSearch && matchesEnvironment
  })

  const toggleSecretVisibility = (secretId: string) => {
    const newVisibleSecrets = new Set(visibleSecrets)
    if (newVisibleSecrets.has(secretId)) {
      newVisibleSecrets.delete(secretId)
    } else {
      newVisibleSecrets.add(secretId)
    }
    setVisibleSecrets(newVisibleSecrets)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Environment Variables</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            Securely manage your project's environment variables and secrets
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Secret
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Secret</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="key">Key</Label>
                <Input id="key" placeholder="e.g., DATABASE_URL" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="value">Value</Label>
                <Textarea id="value" placeholder="Secret value..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Brief description of this secret" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="environment">Environment</Label>
                <select
                  id="environment"
                  className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
                >
                  <option value="development">Development</option>
                  <option value="staging">Staging</option>
                  <option value="production">Production</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Add Secret</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <Input
            placeholder="Search secrets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={selectedEnvironment}
          onChange={(e) => setSelectedEnvironment(e.target.value)}
          className="px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
        >
          <option value="all">All Environments</option>
          <option value="development">Development</option>
          <option value="staging">Staging</option>
          <option value="production">Production</option>
        </select>
      </div>

      {/* Secrets Grid */}
      <div className="grid gap-4">
        {filteredSecrets.map((secret) => (
          <Card key={secret.id} className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                    <Key className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-neutral-900 dark:text-white">{secret.key}</h3>
                      <Badge className={getEnvironmentColor(secret.environment)}>{secret.environment}</Badge>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{secret.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-md px-3 py-2 font-mono text-sm">
                        {visibleSecrets.has(secret.id) ? (
                          <span className="text-neutral-900 dark:text-white">••••••••••••••••</span>
                        ) : (
                          <span className="text-neutral-500">••••••••••••••••</span>
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => toggleSecretVisibility(secret.id)}
                          className="h-6 w-6 p-0"
                        >
                          {visibleSecrets.has(secret.id) ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                        </Button>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => copyToClipboard(secret.key)} className="h-8">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-3 mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                      <span>Updated by {secret.updatedBy}</span>
                      <span>•</span>
                      <span>{secret.lastUpdated}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSecrets.length === 0 && (
        <div className="text-center py-12">
          <Shield className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">No secrets found</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            {searchTerm ? "Try adjusting your search terms" : "Add your first environment variable to get started"}
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Secret
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Secret</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="key">Key</Label>
                  <Input id="key" placeholder="e.g., DATABASE_URL" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="value">Value</Label>
                  <Textarea id="value" placeholder="Secret value..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="Brief description of this secret" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="environment">Environment</Label>
                  <select
                    id="environment"
                    className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
                  >
                    <option value="development">Development</option>
                    <option value="staging">Staging</option>
                    <option value="production">Production</option>
                  </select>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Add Secret</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  )
}
