
const TravelTips = () => {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">

            <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/0C7VsSR/ben-stiefel-Pt-Cm-Dq-F8n-Xc-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="lg:p-8">
                        <h1 className="mb-5 text-4xl font-bold">National Parks</h1>
                        <p className="mb-5">There is plenty to keep you busy.</p>
                        <button className="btn bg-white text-cyan-700 border-none">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/37mbTvT/diego-jimenez-A-NVHPka9-Rk-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="lg:p-8">
                        <h1 className="mb-5 text-4xl font-bold">The perfect road trip</h1>
                        <p className="mb-5">Find an adventure for every season.</p>
                        <button className="btn bg-white text-cyan-700 border-none">Read On</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TravelTips;