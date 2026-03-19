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
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>
            {/* Error message display */}
            {error && (
                <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
                    {error}
                </div>
            )}
            
            <ProjectTable projects={projects} />
        </div>
    );
}

export default Dashboard;