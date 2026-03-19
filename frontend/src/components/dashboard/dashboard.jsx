import React, { useEffect, useState } from 'react';
import ProjectTable from '@/components/dashboard/projectTable';
import { projectAPI } from '@/api/projects';

const Dashboard = () => {
    const [projects, setProjects] = useState([]); 
    const [error, setError] = useState(null);

    // useEffect is used to fetch the projects when the component mounts
    useEffect(() => {
        // We define the function inside the effect to keep it self-contained
        const loadDashboard = async () => {
            try {
                // Fetch projects from the API and update state
                const data = await projectAPI.getProjects();
                setProjects(data);
            } catch (err) {
                setError("Connection to DevTrack Backend Failed.");
                console.error("API Error:", err);
            }
        };

        loadDashboard();
    }, []); 

    return (
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Project Overview</h1>
            <p className="text-gray-500">Track your development progress</p>
          </header>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-500">Total Projects</p>
              <p className="text-2xl font-bold">{projects.length}</p>
            </div>
           {/* Add more stats cards here */}
          </div>

          {/* Main Table Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <ProjectTable projects={projects} />
          </div>
        </div>
    );
}

export default Dashboard;