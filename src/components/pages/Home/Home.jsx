import { Helmet } from "react-helmet";
import FreasherJob from "../../FreasherJob/FreasherJob";
import ExperienceJob from "../../ExperienceJob/ExperienceJob";
import TopITCompany from "../../TopITCompany/TopITCompany";

const Home = () => {
    return (
        <div className="">
            <Helmet><title>Job Portal | Home</title></Helmet>
            <FreasherJob></FreasherJob>
            <ExperienceJob></ExperienceJob>
            <TopITCompany></TopITCompany>
        </div>
    );
};

export default Home;