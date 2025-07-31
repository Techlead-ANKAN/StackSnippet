import DashboardLayout from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { User, Bell, Shield, Palette, Database } from "lucide-react"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Settings</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">Manage your account settings and preferences</p>
        </div>

        <div className="grid gap-6">
          {/* Profile Settings */}
          <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save Changes</Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emailNotifications">Email Notifications</Label>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Receive email notifications for project updates
                  </p>
                </div>
                <Switch id="emailNotifications" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="pushNotifications">Push Notifications</Label>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Receive push notifications in your browser
                  </p>
                </div>
                <Switch id="pushNotifications" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="teamUpdates">Team Updates</Label>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Get notified when team members make changes
                  </p>
                </div>
                <Switch id="teamUpdates" defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch id="twoFactor" />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Update Password</Button>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    Light
                  </Button>
                  <Button variant="outline" size="sm">
                    Dark
                  </Button>
                  <Button variant="outline" size="sm">
                    System
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="compactMode">Compact Mode</Label>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Use a more compact layout to fit more content
                  </p>
                </div>
                <Switch id="compactMode" />
              </div>
            </CardContent>
          </Card>

          {/* Data & Privacy */}
          <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Data & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Export My Data
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Download Account Data
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-red-600 hover:text-red-700 bg-transparent"
                >
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
