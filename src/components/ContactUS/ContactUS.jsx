import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { BiLogoTwitter } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
const ContactUS = () => {
    return (
        <div>
            <div className="text-center my-10 my-container">
                <h1 className="text-3xl font-bold  text-[#081C47]">Get In Touch With Us</h1>
                <hr className="w-48 h-1 mx-auto mb-4 bg-gray-100 border-0 rounded  dark:bg-gray-700" />
                <p className="text-gray-500">Elevate Your Institute Management and Student Success - Contact Us Now!</p>
            </div>

            <div className="md:flex   gap-10 shadow-2xl md:mx-[100px] ps-10  my-10 ">
                <div className="flex-1 pt-10 ps-10">
                    <h1 className="text-4xl font-semibold">Contact Us</h1>
                    <p className='w-1/2 mt-4 text-xl'>Feel Free to contact us any time. We will get back to you as soon as we can!</p>

                    <form className='my-5 space-y-2 w-full pb-10'>
                        <div className='w-full'>
                            <label htmlFor="Name" className='block'>Name</label>
                            <input type="text" className='border-b focus:outline-0 w-3/12 mt-2' placeholder='Doe' />
                        </div>
                        <div>
                            <label htmlFor="Name" className='block'>Email</label>
                            <input type="Email" className='border-b focus:outline-0 w-3/12 mt-2' placeholder='Email' />
                        </div>
                        <div>
                            <label htmlFor="Name" className='block'>Message</label>
                            <textarea name="Message" className='border-b focus:outline-0 w-3/12 mt-2' id="" cols="25" rows="3" placeholder='write your message'></textarea>
                        </div>
                    </form>
                </div>

                
                    <div className="flex  items-center bg-[#0064E1] relative w-[150px] text-white ">
                        <div className='space-y-4 absolute right-0'>
                            <div className='bg-[#081C47] w-[300px] space-y-5 p-8 rounded-bl-xl rounded-tl-xl'>
                                <h1>Contact Information</h1>
                                <p className='flex items-center gap-2 text-sm'>
                                    <BiSolidPhoneCall></BiSolidPhoneCall>
                                    +1012 3456 789
                                </p>
                                <p className='flex items-center gap-2 text-sm'>
                                    <MdEmail></MdEmail>
                                    demo@gmail.com
                                </p>
                                <p className='flex items-center gap-2 text-sm'>
                                    <MdLocationOn></MdLocationOn>
                                    132 Dartmouth Street Boston, Massachusetts 02156 United States
                                </p>
                            </div>
                        </div>
                        <div className='absolute bottom-5 '>
                            <div className='flex gap-5 ms-8'>
                                <BiLogoTwitter className=''></BiLogoTwitter>
                                <AiOutlineInstagram></AiOutlineInstagram>
                                <BsFacebook></BsFacebook>
                            </div>
                        </div>
                    </div>
                </div>



        </div>
    );
};

export default ContactUS;