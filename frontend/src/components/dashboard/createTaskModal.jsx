import React, { useState } from 'react';
import { projectAPI } from '../../services/api';

const CreateTaskModal = ({ isOpen, onClose, onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('to_do');
    const [isSubmitting, setSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return alert("Title is required.");

        setSubmitting(true);
        try {
            const payload = { title, description, status };
            const newProject = await projectAPI.createProject(payload);

            // Pass the newly created object back up to the dashboard state
            onTaskCreated(newProject);
            
            // Reset form and close
            setTitle('');
            setDescription('');
            setStatus('to_do');
            onClose();
        } catch (error) {
            console.error("Error creating project:", error);
            alert(error.response?.data?.non_field_errors?.[0] || "Failed to create project. Please try again.");
        } finally { // the finally block is used to ensure that setSubmitting(false) is called regardless of whether the try block succeeds or if an error is caught in the catch block. This is important to reset the submitting state and allow the user to attempt to submit again if there was an error.
            setSubmitting(false);
        }
};

return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="create-project-heading">
        <div className="modal-container">
            <div className="modal-header">
                <h3 id="create-project-heading">Create New Project Task</h3>
                <button onClick={onClose} className="close-x-btn" aria-label="Close dialog">&times;</button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                    <label htmlFor="project-title">Project Title</label>
                    <input id="project-title"
                      type="text" 
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)} 
                      placeholder="e.g., Integrate Auth Endpoint"
                      required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="project-description">Description</label>
                    <textarea id="project-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Provide a brief summary of the requirements..."
                        rows="3"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="project-status">Initial Status Column</label>
                    <select id="project-status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="to_do">To Do</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <div className="modal-actions">
                    <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
                    <button type="submit" disabled={isSubmitting} className="submit-btn">
                        {isSubmitting ? 'Creating...' : 'Add to Board'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default CreateTaskModal;