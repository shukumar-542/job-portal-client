import { useEffect, useState } from "react";
import TopSingleIt from "./TopSingleIt";

const TopITCompany = () => {
    const [topBdIts, setTopBdIts] = useState([])
    const [topForeignIts, setTopForeignIts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/top-company')
        .then(res => res.json())
        .then(data => setTopBdIts(data))
    },[])
    useEffect(()=>{
        fetch('http://localhost:5000/foreign-top-company')
        .then(res => res.json())
        .then(data => setTopForeignIts(data))
    },[])
    console.log(topBdIts);
    return (
        <div className="max-w-7xl mx-auto p-10">
            <div className="mb-10">
                <h1 className="text-2xl font-semibold font-serif  ">Top It <span className="text-[#00A7AC]">Company</span></h1>
                <p>To choose your trending job dream & to make future bright.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
               {
                topBdIts.map(topBdIt => <TopSingleIt topBdIt={topBdIt} key={topBdIt._id}></TopSingleIt>)
               }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
               {
                topForeignIts.map(topForeignIt => <TopSingleIt topBdIt={topForeignIt} key={topForeignIt._id}></TopSingleIt>)
               }
            </div>

        </div>
    );
};

export default TopITCompany;