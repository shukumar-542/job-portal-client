import { useEffect, useState } from "react";
import SingleExprienceJob from "./SingleExprienceJob";
import Button from "../Button/Button";


const ExperienceJob = () => {
    const [experienceJobs ,setExperienceJobs] = useState([])
    useEffect(()=>{
        fetch('https://job-portal-server-tau.vercel.app/experience')
        .then(res => res.json())
        .then(data => setExperienceJobs(data) )
    },[])
    // console.log(experienceJobs);
    const handleAllExprienceJobs = () =>{
        fetch('https://job-portal-server-tau.vercel.app/allExperienceJobs')
        .then(res => res.json())
        .then(data => setExperienceJobs(data) )
    }
    return (
        <div className="p-10 max-w-7xl mx-auto my-10">
            <h1 className="text-2xl font-semibold font-serif mb-10 "><span className="text-[#00A7AC]">Experience</span>  Jobs</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    experienceJobs.map(experienceJob => <SingleExprienceJob experienceJob={experienceJob} key={experienceJob._id}></SingleExprienceJob>)
                }
                
            </div>
            <div className="flex justify-center mt-5">
                    <button onClick={()=>handleAllExprienceJobs()}><Button text={'See All More'}></Button></button>
                </div>
        </div>
    );
};

export default ExperienceJob;