import { useContext } from 'react';
import { ImLocation2 } from 'react-icons/im';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

// eslint-disable-next-line react/prop-types, no-unused-vars
const SingleExprienceJob = ({ experienceJob }) => {
    // eslint-disable-next-line react/prop-types
    const {category,companyName,location,description,img,title} = experienceJob

    const { user} = useContext(AuthContext);
    const navigate = useNavigate();
    const locations = useLocation();
    const handleApply = (fresherJob) =>{
        console.log(fresherJob);
        if (user && user.email) {
            const appliedJobItem = { job_id: fresherJob._id, title,category, email: user.email }
            fetch('https://job-portal-server-tau.vercel.app/appliedJob', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(appliedJobItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Applied job successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: locations } })
                }
            })
        }
    }

    return (
        <div className="space-y-10 transition duration-500 shadow-md  rounded-md  border pl-10 pr-2 py-10 hover:border-[#00A7AC]">
            <h1 className="text-[#00A7AC] bg-[#CEE3FF] rounded-2xl text-center py-2 w-1/2">{description}</h1>
            <h1 className="font-semibold text-xl font-serif hover:text-[#00A7AC]">{title}</h1>
            <div className="flex item-center gap-5">
                <p className="flex items-center gap-2"><ImLocation2></ImLocation2> {location}</p>
                <p className="flex items-center gap-2"><ImLocation2></ImLocation2>{category}</p>
            </div>
            <div className='flex items-center gap-5'>
                <img src={img} className='w-10 h-10' alt="" />
                <p className='font-semibold font-serif'>{companyName}</p>
            </div>
            <button className="" onClick={()=>handleApply(experienceJob)}><Button text={'Apply Now'}></Button></button>

        </div>
    );
};

export default SingleExprienceJob;