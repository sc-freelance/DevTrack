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
    <aside className="sidebar">
      <div className="sidebar-title">DevTrack Menu</div>
      <nav className="sidebar-nav">
        <a href="/" className="sidebar-link">Home</a>
        <a href="/dashboard" className="sidebar-link">Dashboard</a>
        <a href="/projects" className="sidebar-link">Projects</a>
        <a href="/settings" className="sidebar-link">Settings</a>
      </nav>
    </aside>
  )
}