import React from 'react';
import { projectAPI } from '../services/api'; // 👈 Check that this import path matches your directory layout

const DeleteProjectButton = ({ projectId, onDelete }) => {
  
  const handleDelete = async () => {
    console.log("Attempting to delete project with ID:", projectId);
    if (window.confirm("Are you sure you want to permanently delete this item?")) {
      try {
        // Call the newly added API function
        await projectAPI.deleteProject(projectId);
        
        // Notify Dashboard.jsx to filter the removed item out of state memory
        onDelete(projectId);
      } catch (error) {
        console.error("Error deleting project:", error);
        alert("Failed to delete project. Check server console logs.");
      }
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        color: '#f87171',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        padding: '0.375rem 0.75rem',
        borderRadius: '0.375rem',
        fontSize: '0.75rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.15s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#ef4444';
        e.currentTarget.style.color = '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        e.currentTarget.style.color = '#f87171';
      }}
    >
      Delete Task
    </button>
  );
};

export default DeleteProjectButton;