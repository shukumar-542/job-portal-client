import { Helmet } from "react-helmet";
import FreasherJob from "../../FreasherJob/FreasherJob";

const Home = () => {
    return (
        <div className="">
            <Helmet><title>Job Portal | Home</title></Helmet>
            <FreasherJob></FreasherJob>
        </div>
    );
};

export default Home;