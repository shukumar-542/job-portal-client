import { CountUp } from 'use-count-up'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/dKwLWC2/banner.png)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold text-white "><CountUp isCounting end={120} duration={3.2} />+  <span className="text-[#00A7AC]">Category</span>  Job’s Here</h1>
                    <p className="mb-5">Jobs are available on your skills, perfect jobs to make bright future & get your choose jobs become a strong.</p>

                   
                 
                        <button className="bg-[#007AFF] py-4 px-1 md:px-5 rounded-md text-xl font-serif  font-semibold text-white">Subscribed</button>
                    
             
                </div>

                
            </div>
        </div>
    );
};

export default Banner;