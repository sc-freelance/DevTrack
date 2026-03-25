import React, { useEffect, useState } from 'react';
import ProjectTable from '@/components/dashboard/projectTable';
import { projectAPI } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Dashboard = () => {
    const [projects, setProjects] = React.useState([]); 
    const [error, setError] = useState(null);
    const [Loading, setLoading] = useState(true);

    // useEffect is used to fetch the projects when the component mounts
    useEffect(() => {
        // We define the function inside the effect to keep it self-contained
        const loadDashboard = async () => {
            try {
                setLoading(true);
                const data = await projectAPI.getProjects();
                setProjects(data);
                setError(null);
              } catch (err) {
                // This is where your current error is being caught!
                setError("Backend server is offline. Please start the backend on port 8000.");
                console.error("API Error:", err);
              } finally {
                setLoading(false);
            }
          };

        loadDashboard();
    }, []); 

    if (Loading) return <div className="p-8 text-center">Loading projects...</div>;

    if (error) return (
        <div className="p-8 m-4 border border-red-500 bg-red-500/10 text-red-500 rounded-lg">
          {error}
        </div>
    );

    return (
    <div className="space-y-6">
      {/* Header section with proper spacing */}
      <div className="border-b pb-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Project Overview
        </h1>
        <p className="text-xl text-muted-foreground mt-2">
          Track your development progress in real-time.
        </p>
      </div>

      {/* Stats Card */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-6 text-card-foreground shadow">
          <div className="text-sm font-medium text-muted-foreground">Total Projects</div>
          <div className="text-2xl font-bold">{projects.length}</div>
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-xl border bg-card shadow">
        <ProjectTable projects={projects} />
      </div>
    </div>
  );
}

export default Dashboard;