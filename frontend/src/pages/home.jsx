import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>DevTrack</h1>
            <p>This is DevTrack, where developers can track their projects and collaborate effectively.
                At the moment, this is just a placeholder page, but we are working hard to bring you an amazing experience. 
                Stay tuned for updates and new features coming soon!
            </p>
            <Footer />
        </div>
    )
}

export default Home;