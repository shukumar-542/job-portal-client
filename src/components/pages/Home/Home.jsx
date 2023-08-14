import { Helmet } from "react-helmet";
import FreasherJob from "../../FreasherJob/FreasherJob";
import ExperienceJob from "../../ExperienceJob/ExperienceJob";

const Home = () => {
    return (
        <div className="">
            <Helmet><title>Job Portal | Home</title></Helmet>
            <FreasherJob></FreasherJob>
            <ExperienceJob></ExperienceJob>
        </div>
    );
};

export default Home;