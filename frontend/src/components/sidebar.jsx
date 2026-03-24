import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Settings, LogOut, Inbox, Users } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation(); // Get current URL path

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={18} /> },
    { name: 'Projects', path: '/projects', icon: <FolderKanban size={18} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
    { name: 'Logout', path: '/logout', icon: <LogOut size={18} /> },
    { name: 'Inbox', path: '/inbox', icon: <Inbox size={18} /> },
    { name: 'Users', path: '/users', icon: <Users size={18} /> },
  ];

  return (
    <>
      {/* Mobile Toggle (Kept your button logic) */}
      <button className="sm:hidden p-2 m-2 text-zinc-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
      </button>

      <aside className="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 border-r border-border bg-surface">
        <div className="h-full px-3 py-4 overflow-y-auto">
          {/* Logo Section */}
          <div className="mb-6 px-2">
            <h2 className="text-xl font-bold text-foreground">Dev<span className="text-primary">Track</span></h2>
          </div>

          <ul className="space-y-2 font-medium">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-2 rounded-md transition-all group ${
                      isActive 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-foreground'
                    }`}
                  >
                    <span className={`${isActive ? 'text-primary' : 'group-hover:text-foreground'}`}>
                      {item.icon}
                    </span>
                    <span className="ms-3 flex-1 whitespace-nowrap">{item.name}</span>
                    {item.badge && (
                      <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Logout at the bottom */}
          <div className="absolute bottom-4 left-0 w-full px-3">
             <button className="flex items-center w-full p-2 text-zinc-400 hover:text-red-400 rounded-md hover:bg-red-400/10 transition-all">
                <LogOut size={20} />
                <span className="ms-3">Logout</span>
             </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;