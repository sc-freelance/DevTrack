import React from 'react';
import { useEffect, useState } from 'react';
import ProjectTable from '@/components/dashboard/projectTable';
import { projectAPI } from '@/api/projects'

const Dashboard = () => {
    // This state variable will hold the list of projects fetched from the API
    const [projects, setProjects] = useState([]); 

    // This function fetches the project data from the API and updates the state
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadDashboard = async () => {
            try {
                const data = await projectAPI.getProjects();
                setProjects(data);
            } catch (err) {
                setError("Connection to DevTrack Backend Failed. Please try again later");
            }
        };

        loadDashboard();
    }, []); // The [] dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>
            {error && <p className="text-red-500">{error}</p>}
            
            {/* Pass the data into the table we built */}
            <ProjectTable projects={projects} />
        </div>
    )
}