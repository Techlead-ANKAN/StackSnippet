"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Plus, Search, Mail, MoreHorizontal, Crown, Shield, User } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface ProjectTeamProps {
  projectId: string
  team: Array<{
    id: string
    name: string
    role: string
    avatar: string
  }>
}

const teamMembers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "owner",
    avatar: "/placeholder.svg?height=40&width=40",
    joinedAt: "2024-01-01",
    lastActive: "2 hours ago",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "admin",
    avatar: "/placeholder.svg?height=40&width=40",
    joinedAt: "2024-01-05",
    lastActive: "1 day ago",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "member",
    avatar: "/placeholder.svg?height=40&width=40",
    joinedAt: "2024-01-10",
    lastActive: "3 hours ago",
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "member",
    avatar: "/placeholder.svg?height=40&width=40",
    joinedAt: "2024-01-15",
    lastActive: "5 hours ago",
  },
]

const getRoleIcon = (role: string) => {
  switch (role) {
    case "owner":
      return Crown
    case "admin":
      return Shield
    default:
      return User
  }
}

const getRoleColor = (role: string) => {
  const colors = {
    owner: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    admin: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    member: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  }
  return (
    colors[role as keyof typeof colors] ||
    "bg-neutral-100 text-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-400"
  )
}

export default function ProjectTeam({ projectId, team }: ProjectTeamProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === "all" || member.role === selectedRole
    return matchesSearch && matchesRole
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Team Members</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            Manage team access and permissions for this project
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Invite Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite Team Member</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="colleague@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <select
                  id="role"
                  className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
                >
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Personal Message (Optional)</Label>
                <Input id="message" placeholder="Join our project team!" />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Send Invitation</Button>
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
            placeholder="Search team members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
        >
          <option value="all">All Roles</option>
          <option value="owner">Owner</option>
          <option value="admin">Admin</option>
          <option value="member">Member</option>
        </select>
      </div>

      {/* Team Members Grid */}
      <div className="grid gap-4">
        {filteredMembers.map((member) => {
          const RoleIcon = getRoleIcon(member.role)
          return (
            <Card key={member.id} className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-medium text-neutral-900 dark:text-white">{member.name}</h3>
                        <Badge className={getRoleColor(member.role)}>
                          <RoleIcon className="h-3 w-3 mr-1" />
                          {member.role}
                        </Badge>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{member.email}</p>
                      <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                        <span>Joined {member.joinedAt}</span>
                        <span>•</span>
                        <span>Active {member.lastActive}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4" />
                    </Button>
                    {member.role !== "owner" && (
                      <Button size="sm" variant="outline">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">No team members found</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            {searchTerm ? "Try adjusting your search terms" : "Invite your first team member to get started"}
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Invite Your First Member
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="colleague@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <select
                    id="role"
                    className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
                  >
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Personal Message (Optional)</Label>
                  <Input id="message" placeholder="Join our project team!" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Send Invitation</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-900 dark:text-white">{teamMembers.length}</div>
          </CardContent>
        </Card>
        <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Active Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-900 dark:text-white">
              {teamMembers.filter((m) => m.lastActive.includes("hour")).length}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Admins</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral-900 dark:text-white">
              {teamMembers.filter((m) => m.role === "admin" || m.role === "owner").length}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
