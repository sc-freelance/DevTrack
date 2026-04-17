import React from 'react';
import { projectAPI } from '../services/api'; // Import the API functions to interact with the backend 
// such as deleting a project. Make sure to implement the deleteProject function in your API service.

const DeleteProjectButton = ({ projectId, onDelete }) => {
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delet this project? This action is irreversible.")) {
            try { // the try function is used generally for error handling. It allows you to test a block of code for errors while it is being executed.
                // the await keyword is used to wait for a promise to resolve. 
                // In this case, it waits for the deleteProject function to complete before moving on to the next line of code.
                await projectAPI.deleteProject(projectId);
                onDelete(projectId); // Notify parent component
            } catch (error) {
                console.error("Error deleting project:", error);
                alert("Failed to delete this project. Please try again later.");
            }
        }
    }

    return (
        <button
            onClick={handleDelete}
            // px is padding on the x-axis and likewise for py. bg-red-600 is a red background color, and hover:bg-red-700 makes it darker on hover. 
            // transition-colors and duration-300 make the color change smoothly over 300 milliseconds.
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
        >
            Delete Project
        </button>
    )
}

export default DeleteProjectButton;