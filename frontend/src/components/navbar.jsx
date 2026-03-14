import React from 'react';

const Navbar = () => {
    // PRACTICE: Use a "isLoggedIn" boolean (from Context or LocalStorage)
    // to show "Logout" if the user is in, and "Login/Register" if they are out.
    const isLoggedIn = false; // It's false because we haven't implemented login yet, but this will be dynamic in the future!
    return (
        <nav className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md sticky top-0">
          <div className="text-xl font-bold tracking-tight">DevTrack</div>
  
          <div className="flex gap-6 items-center">
            <a href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Home</a>
            <a href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Login</a>
            <a href="/register" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Register</a>
            <a href="/editor" className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-all">
              Open Editor
            </a>
          </div>
        </nav>
    );
};

export default Navbar;