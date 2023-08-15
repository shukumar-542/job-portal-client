import { Helmet } from "react-helmet";
import FreasherJob from "../../FreasherJob/FreasherJob";
import ExperienceJob from "../../ExperienceJob/ExperienceJob";
import TopITCompany from "../../TopITCompany/TopITCompany";
import Blog from "../../Blog/Blog";
import Banner from "../../Banner/Banner";
import MyProfile from "../../MyProfile/MyProfile";
import AnimateBtn from "../../AnimateBtn/AnimateBtn";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="">
            <Helmet><title>Job Portal | Home</title></Helmet>
            <Banner></Banner>
            <div className="text-center mt-2">
                <AnimateBtn text={'Job Seeker'}></AnimateBtn>
                <Link to="/job-post"><AnimateBtn text={'Job Poster'}></AnimateBtn></Link>
            </div>
            <FreasherJob></FreasherJob>
            <ExperienceJob></ExperienceJob>
            <TopITCompany></TopITCompany>
            <MyProfile></MyProfile>
            <Blog></Blog>
        </div>
    );
};

export default Home;