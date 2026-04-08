import React from 'react'

export const Home = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
                {/* text content section */}
                <div>
                    <h1 className="text-4xl font-bold leading-tight text-brand-dark md:text-5xl">
                        We serve the richest <span className="text-primary">Coffee</span> in the city.
                    </h1>
                </div>
                {/* image content section */}
                <div></div>
            </div>
        </section>
    )
}

export default Home;
