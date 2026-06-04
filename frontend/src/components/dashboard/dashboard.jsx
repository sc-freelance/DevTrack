import React, { useEffect, useState } from 'react';
import KanbanBoard from './KanbanBoard'; 
import { projectAPI } from '../../services/api';

const Dashboard = () => {
    const [projects, setProjects] = useState([]); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const handleDeleteRefresh = (id) => {
        setProjects(prevProjects => prevProjects.filter(project => project.id !== id));
    };

    // Filter logic: safely checks title and description fields
    const filteredProjects = projects.filter((project) => {
       const title = project.title?.toLowerCase() || "";
       const desc = project.description?.toLowerCase() || "";
       const query = searchQuery.toLowerCase();
       return title.includes(query) || desc.includes(query);
    });

    // Analytics Metrics (Derived from your project data array)
    const totalProjects = filteredProjects.length;
    const activeProjects = filteredProjects.filter(p => p.status === 'Active' || p.status === 'In Progress').length;
    const completedProjects = filteredProjects.filter(p => p.status === 'Completed').length;

    useEffect(() => {
        const loadDashboard = async () => {
            console.log("Dashboard: Attempting to fetch projects...");
            try {
                setLoading(true);
                const data = await projectAPI.getProjects();
                console.log("Dashboard: Received data:", data);
                setProjects(data);
                setError(null);
            } catch (err) {
                console.error("Dashboard: Fetch error:", err);
                setError("Connection Refused. Is the Django server running on port 8000?");
            } finally {
                setLoading(false);
            }
        };
        loadDashboard();
    }, []); 

    if (loading) {
        return <div className="min-h-screen w-full bg-[#0f172a] flex items-center justify-center text-white font-medium">Loading DevTrack Data...</div>;
    }

    if (error) {
        return <div className="min-h-screen w-full bg-[#0f172a] flex items-center justify-center text-red-400 p-4 text-center font-medium">{error}</div>;
    }

    return (
        <div className="min-h-screen w-full bg-[#0f172a] p-10 text-white">
          {/* Header Section */}
          <div className="border-b border-slate-800 pb-6 mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Project Overview</h1>
            <p className="text-slate-400 mt-2">Live data from Django Backend</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Total Projects</p>
              <p className="text-4xl font-black text-blue-500 mt-1">{totalProjects}</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl border-l-4 border-l-amber-500">
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Active Workload</p>
              <p className="text-4xl font-black text-amber-500 mt-1">{activeProjects}</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl border-l-4 border-l-emerald-500">
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Completed Tasks</p>
              <p className="text-4xl font-black text-emerald-500 mt-1">{completedProjects}</p>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Filter workspace items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md bg-slate-900 border border-slate-800 p-4 rounded-xl text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-inner"
            />
          </div>

          {/* Agile Kanban Layout */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-slate-300">Agile Kanban Board</h2>
            <KanbanBoard projects={filteredProjects} onDelete={handleDeleteRefresh} />
          </div>
        </div>
    );
};

export default Dashboard;