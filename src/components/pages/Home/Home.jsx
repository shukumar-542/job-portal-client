import { Helmet } from "react-helmet";
import FreasherJob from "../../FreasherJob/FreasherJob";
import ExperienceJob from "../../ExperienceJob/ExperienceJob";
import TopITCompany from "../../TopITCompany/TopITCompany";
import Blog from "../../Blog/Blog";
import Banner from "../../Banner/Banner";

const Home = () => {
    return (
        <div className="">
            <Helmet><title>Job Portal | Home</title></Helmet>
            <Banner></Banner>
            <FreasherJob></FreasherJob>
            <ExperienceJob></ExperienceJob>
            <TopITCompany></TopITCompany>
            <Blog></Blog>
        </div>
    );
};

export default Home;