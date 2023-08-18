/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { ImLocation2 } from 'react-icons/im';
import MyModal from '../MyModal/MyModal';



// eslint-disable-next-line react/prop-types
const TopSingleIt = ({ topBdIt }) => {
    // eslint-disable-next-line react/prop-types
    const { companyName, img, vacancy, location, category } = topBdIt
   
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

   
    return (
        <div className="space-y-10 bg-[#E5F6F7] transition duration-500 shadow-md  rounded-md  border pl-10 pr-2 py-10 hover:border-[#00A7AC]">
            <div >
                <div className='flex items-center gap-5 '>
                    <img src={img} className='w-10 h-10 rounded-full' alt="" />
                    <p className='font-semibold font-serif'>{companyName}</p>
                </div>
            </div>
            <div className="flex item-center gap-5">
                <p className="flex items-center gap-2"><ImLocation2></ImLocation2> {location}</p>
                <p className="flex items-center gap-2"><ImLocation2></ImLocation2>{category}</p>
            </div>
            <div className='flex items-center gap-10'>
                <button className='btn-primary' onClick={() => setIsOpen(true) }>
                    <span>View Details</span>
                    <MyModal isOpen={isOpen} topBdIt={topBdIt} closeModal={closeModal}></MyModal>
                </button>
                <p > <span className='font-semibold font-serif'>Vacancy : </span> {vacancy}</p>
            </div>


        </div>
    );
};

export default TopSingleIt;