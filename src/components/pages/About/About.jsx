import img from '../../../assets/about1.png.webp'
import { FaBook } from 'react-icons/fa';
import { AiOutlineSound } from 'react-icons/ai';
import { BsGraphUpArrow } from 'react-icons/bs';
import SubScribed from './SubScribed';
const About = () => {
    return (
        <div className="">
            <h1>This is about</h1>

            <div className="bg-[#F6F9FC] my-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 gap-10 py-10">
                    <div className='p-10'>
                        <h1 className="text-4xl font-semibold font-serif">Why we are different</h1>
                        <p>We collect reviews from our users so you can get an honest opinion of what an experience with our website.</p>

                        <div className='flex items-center gap-5 my-10'>
                            <div className='bg-[#007AFF] p-4 rounded-full text-white '>
                            <FaBook className='text-2xl'></FaBook>
                            </div>
                            <p className='font-semibold font-serif text-gray-500'>Keep your cool. Get on-demand help to on-demand make the best offer.</p>
                        </div>
                        <div className='flex items-center gap-5 my-10'>
                            <div className='bg-[#007AFF] p-4 rounded-full text-white'>
                            <AiOutlineSound className='text-2xl '></AiOutlineSound>
                            </div>
                            <p className='font-semibold font-serif text-gray-500'>Keep your cool. Get on-demand help to on-demand make the best offer.</p>
                        </div>
                        <div className='flex items-center gap-5 my-10'>
                            <div className='bg-[#007AFF] p-4 rounded-full text-white'>
                            <BsGraphUpArrow className='text-2xl '></BsGraphUpArrow>
                            </div>
                            <p className='font-semibold font-serif text-gray-500'>Keep your cool. Get on-demand help to on-demand make the best offer.</p>
                        </div>
                    </div>
                    
                    <div>
                        <img src={img} className='h-3/4' alt="" />
                    </div>
                </div>
            </div>
            <SubScribed></SubScribed>
        </div>
    );
};

export default About;