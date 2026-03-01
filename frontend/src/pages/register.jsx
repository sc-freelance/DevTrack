import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // PRACTICE: Use your 'api.js' to POST this data to /register/
        // HINT: Add a .catch() block to handle "Username already exists" errors
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* CHALLENGE: Build the controlled inputs for Username and Password */}
            <div className='register-input'>
                <label htmlFor='username'>Username</label>
                
            </div>
            {/* Ensure 'value' and 'onChange' are correctly linked to formData */}
            <button type="submit">Join DevTrack</button>
        </form>
    );
};