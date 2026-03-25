import * as React from "react"
import { cn } from "@/lib/utils"

// 1. The Provider that manages the open/closed state
export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = React.useState(true)
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

const SidebarContext = React.createContext(null)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider.")
  return context
}

// 2. The actual Sidebar component
export const Sidebar = ({ className }) => {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6 border-r border-slate-800">
      <div className="text-xl font-bold mb-8 text-blue-400">DevTrack Menu</div>
      <nav className="flex flex-col gap-4">
        <a href="/" className="hover:text-blue-300 transition-colors">Dashboard</a>
        <a href="/projects" className="hover:text-blue-300 transition-colors">Projects</a>
        <a href="/settings" className="hover:text-blue-300 transition-colors">Settings</a>
      </nav>
    </aside>
  )
}