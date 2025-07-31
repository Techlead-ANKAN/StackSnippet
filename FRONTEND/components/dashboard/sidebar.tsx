"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Code2, Home, FolderOpen, Archive, Settings, Users, Search, Plus, X } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Projects", href: "/dashboard/projects", icon: FolderOpen },
  { name: "Archives", href: "/dashboard/archives", icon: Archive },
  { name: "Team", href: "/dashboard/team", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile sidebar overlay */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-72 bg-background border-r">
            <SidebarContent pathname={pathname} setOpen={setOpen} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-background px-6 pb-4">
          <SidebarContent pathname={pathname} />
        </div>
      </div>
    </>
  )
}

function SidebarContent({ pathname, setOpen }: { pathname: string; setOpen?: (open: boolean) => void }) {
  return (
    <>
      <div className="flex h-16 shrink-0 items-center justify-between">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Code2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">StackSnippet</span>
        </Link>
        {setOpen && (
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="lg:hidden">
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Button className="justify-start" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
        <Button variant="outline" className="justify-start bg-transparent" size="sm">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>

      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted",
                    )}
                    onClick={() => setOpen?.(false)}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}
