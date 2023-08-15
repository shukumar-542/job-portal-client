import { useEffect, useState } from "react";

import SingleJob from "./SingleJob";
import Button from "../Button/Button";

const FreasherJob = () => {
    const [fresherJobs, setFresherJobs] = useState([])
    useEffect(() => {
        fetch('https://job-portal-server-tau.vercel.app/fresher')
            .then(res => res.json())
            .then(data => setFresherJobs(data))
    }, [])
    const handleAllFresherjobs = () =>{
        fetch('https://job-portal-server-tau.vercel.app/AllFresherJobs')
        .then(res => res.json())
        .then(data => setFresherJobs(data))
    }
    // console.log(fresherJobs);
    return (
        <div className="bg-[#F8F8F8] ">
            <div className="p-10 max-w-7xl mx-auto">
                <h1 className="text-2xl font-semibold font-serif my-10 "><span className="text-[#00A7AC]">Fresher</span> Jobs</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {
                        fresherJobs.map(fresherJob => <SingleJob fresherJob={fresherJob} key={fresherJob._id}></SingleJob>)
                    }
                </div>
                <div className="flex justify-center mt-10">
                    <button  onClick={()=>handleAllFresherjobs()}><Button text={'See All Jobs'}></Button></button>
                </div>

            </div>
        </div>
    );
};

export default FreasherJob;