const Navbar = () => {
    // PRACTICE: Use a "isLoggedIn" boolean (from Context or LocalStorage)
    // to show "Logout" if the user is in, and "Login/Register" if they are out.
    isLoggedIn = false; // It's false because we haven't implemented login yet, but this will be dynamic in the future!
    return (
        <nav className="navbar">
            <h1>DevTrack</h1>
            {/* CHALLENGE: Implement conditional rendering for links here */}
            <nav className='nav-links'>
                <a href='/'>Home</a>
                <a href='/Login'>Login</a>
                <a href='/Register'>Register</a>
                <a href='/Editor'>Editor</a>
            </nav>

        </nav>
    );
};

export default Navbar;