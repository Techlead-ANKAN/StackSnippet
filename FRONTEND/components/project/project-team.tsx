"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Mail, MoreHorizontal, Crown, Shield, User, Calendar } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface ProjectTeamProps {
  projectId: string
}

// Mock data
const teamMembers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "owner",
    avatar: "/placeholder-avatar.jpg",
    joinedAt: "2024-01-10",
    lastActive: "2 hours ago",
    contributions: 45,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "admin",
    avatar: "/placeholder-avatar.jpg",
    joinedAt: "2024-01-12",
    lastActive: "1 day ago",
    contributions: 32,
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "member",
    avatar: "/placeholder-avatar.jpg",
    joinedAt: "2024-01-15",
    lastActive: "3 hours ago",
    contributions: 18,
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "member",
    avatar: "/placeholder-avatar.jpg",
    joinedAt: "2024-01-18",
    lastActive: "5 hours ago",
    contributions: 12,
  },
]

const roleColors = {
  owner: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  admin: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  member: "bg-green-500/10 text-green-500 border-green-500/20",
}

const roleIcons = {
  owner: Crown,
  admin: Shield,
  member: User,
}

export function ProjectTeam({ projectId }: ProjectTeamProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Team Members</h2>
          <p className="text-muted-foreground">Manage team access and collaboration for this project.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Invite Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite Team Member</DialogTitle>
              <DialogDescription>Invite a new member to collaborate on this project.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="member@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Send Invitation</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search team members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="grid gap-4">
        {filteredMembers.map((member) => {
          const RoleIcon = roleIcons[member.role as keyof typeof roleIcons]
          return (
            <Card key={member.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
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
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        {member.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={roleColors[member.role as keyof typeof roleColors]}>
                      <RoleIcon className="mr-1 h-3 w-3" />
                      {member.role}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Change Role</DropdownMenuItem>
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Send Message</DropdownMenuItem>
                        {member.role !== "owner" && (
                          <DropdownMenuItem className="text-destructive">Remove from Project</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Joined</div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {member.joinedAt}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Last Active</div>
                    <div>{member.lastActive}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Contributions</div>
                    <div className="font-semibold">{member.contributions}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
