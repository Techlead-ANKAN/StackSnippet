"use client"

import { Button } from "@/components/ui/button"
import SwitchButton from "@/components/switch-button"
import { Menu, Search, Bell, User } from "lucide-react"
import { Input } from "@/components/ui/input"

interface DashboardNavbarProps {
  setSidebarOpen: (open: boolean) => void
}

export default function DashboardNavbar({ setSidebarOpen }: DashboardNavbarProps) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <Button
        variant="ghost"
        size="icon"
        className="-m-2.5 p-2.5 text-neutral-700 dark:text-neutral-300 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </Button>

      <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-800 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="relative flex flex-1 items-center">
          <Search className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-neutral-400 dark:text-neutral-500 ml-3" />
          <Input
            className="block h-full w-full border-0 py-0 pl-10 pr-0 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:ring-0 sm:text-sm bg-transparent"
            placeholder="Search projects, snippets, docs..."
            type="search"
          />
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <SwitchButton showLabel={false} />
          <Button variant="ghost" size="icon" className="text-neutral-700 dark:text-neutral-300">
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" aria-hidden="true" />
          </Button>

          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-neutral-200 dark:lg:bg-neutral-800" aria-hidden="true" />

          <Button variant="ghost" size="icon" className="text-neutral-700 dark:text-neutral-300">
            <span className="sr-only">Your profile</span>
            <User className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  )
}
