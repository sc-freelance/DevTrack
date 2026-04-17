import React, { useEffect, useState } from 'react';
import ProjectTable from '@/components/dashboard/projectTable';
import { projectAPI } from '../../services/api';

const Dashboard = () => {
    const [projects, setProjects] = useState([]); 
    const [error, setError] = useState(null);
    const [Loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const handleDeleteRefresh = (id) => {
        setProjects(projects.filter(project => project.id !== id));
    };

    // Filter logic: safety check added (?.) to prevent crashes
    const filteredProjects = projects.filter((project) => {
       const title = project.title?.toLowerCase() || "";
       const desc = project.description?.toLowerCase() || "";
       const query = searchQuery.toLowerCase();
       return title.includes(query) || desc.includes(query);
    });

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

    // ONLY ONE RETURN STATEMENT
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
              <p className="text-4xl font-black text-blue-500 mt-1">{projects.length}</p>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Filter projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md bg-slate-900 border border-slate-800 p-4 rounded-xl text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-inner"
            />
          </div>

          {/* Modern Table Container */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <ProjectTable projects={filteredProjects} />
            <ProjectTable projects={projects} onDelete={handleDeleteRefresh} />
          </div>
        </div>
    );
};

export default Dashboard;