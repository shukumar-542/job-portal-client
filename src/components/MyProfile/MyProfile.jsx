import img1 from '../../assets/ss1.png'
import img2 from '../../assets/ss2.png'
const MyProfile = () => {
    return (
        <div className="max-w-7xl mx-auto p-10">
            <h1 className="text-2xl font-semibold font-serif my-10 "><span className="text-[#00A7AC]">My</span> Profile</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-10'>
                <div className='hidden md:block'>
                <iframe src="https://drive.google.com/file/d/1CzcpTT05AJCAjgUu-mLbhGVsTJwWZIaP/preview" height="380" width="540" allow="autoplay"></iframe>
                </div>
                <div>
                    <img src={img1} alt="Shoes" className="rounded-xl h-[380px] w-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000" />
                </div>
            </div>
             <img src={img2} alt="Shoes" className="rounded-xl  h-[380px] w-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000" />
        </div>
    );
};

export default MyProfile;