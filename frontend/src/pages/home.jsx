import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Main content wrapper with padding and centering */}
            <main className="flex-1 container mx-auto px-6 py-12 md:py-24">
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        DevTrack
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        This is DevTrack, where developers can track their projects and collaborate effectively.
                        At the moment, this is just a placeholder page, but we are working hard to bring you 
                        an amazing experience. 
                    </p>
                    <div className="pt-4">
                        <p className="text-sm font-medium text-primary">
                            Stay tuned for updates and new features coming soon!
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;