import { ImLocation2 } from 'react-icons/im';

// eslint-disable-next-line react/prop-types, no-unused-vars
const SingleExprienceJob = ({ experienceJob }) => {
    console.log(experienceJob);
    // eslint-disable-next-line react/prop-types
    const {category,companyName,location,description,img,title} = experienceJob

    return (
        <div className="space-y-10 transition duration-500 shadow-md  rounded-md  border pl-10 pr-2 py-10 hover:border-[#00A7AC]">
            <h1 className="text-[#00A7AC] bg-[#CEE3FF] rounded-2xl text-center py-2 w-1/2">{description}</h1>
            <h1 className="font-semibold text-xl font-serif hover:text-[#00A7AC]">{title}</h1>
            <div className="flex item-center gap-5">
                <p className="flex items-center gap-2"><ImLocation2></ImLocation2> {location}</p>
                <p className="flex items-center gap-2"><ImLocation2></ImLocation2>{category}</p>
            </div>
            <div className='flex gap-5'>
                <img src={img} className='w-10 h-10' alt="" />
                <p>{companyName}</p>
            </div>
        </div>
    );
};

export default SingleExprienceJob;