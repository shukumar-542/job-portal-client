/* eslint-disable no-unused-vars */
import { BsBookmark } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';

// eslint-disable-next-line react/prop-types
const SingleJob = ({fresherJob}) => {
    // eslint-disable-next-line react/prop-types
    const {category,companyName,img,title} = fresherJob
    console.log(fresherJob);
    return (
        <div className="border-l-2 py-10 bg-[#FFFFFF]  border-[#2c6d6e] hover:border-[#00A7AC]">
                        <div className="flex items-center justify-center gap-5 ">
                            <div >
                                <img src={img} className="rounded-full " alt="" />
                            </div>
                            <div className="flex items-center gap-4 border-b pb-1 ">
                                <div>
                                    <p className="font-semibold font-serif hover:text-[#00A7AC]">{title}</p>
                                    <p>{category}</p>
                                </div>
                                <div className="border p-2 rounded-full border-[#00A7AC]">
                                <BsBookmark className="text-[#00A7AC]"></BsBookmark>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col items-center py-5 ">
                            <div className="space-y-2 bg-[#f5eaea] p-5 rounded-md">
                                <p> <span className="font-semibold">Company Name </span>: {companyName}</p>
                                <p className="flex items-center gap-2"><ImLocation2 className="text-2xl text-[#00A7AC]"></ImLocation2> Dhanmondi</p>
                            </div>
                        <button className="mt-5 text-[#00A7AC] btn-primary">Apply Now</button>
                        </div>
                    </div>
    );
};

export default SingleJob;