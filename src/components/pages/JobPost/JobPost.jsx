import { useState } from "react";
import Swal from "sweetalert2";

const JobPost = () => {
    const [selectedValue, setSelectedValue] = useState('Full Time');

    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    };

    const handleJobPost = (e) => {
        e.preventDefault();
        const title = e.target.title.value
        const category = selectedValue;
        const companyName = e.target.companyName.value;
        const experience = e.target.experience.value;
        const location = e.target.location.value
        const salary = e.target.salary.value
        const vacancy = e.target.vacancy.value
        const img = e.target.logo.value;
        const description= e.target.description.value;

        const data = {title, category,companyName,location,salary,vacancy,experience,img,description};
        console.log(data);
        fetch('http://localhost:5000/jobPost', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Job Posted successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })

    }
    return (
        <div className="bg-[#F8F8F8] min-h-screen p-20">
            <div className="bg-white p-10">
                <h1 className="text-xl font-semibold font-serif">job Information : </h1>
                <form onSubmit={handleJobPost}>
                    <div className="grid grid-cols-2 gap-5 my-5">
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text">Job Title*</span>
                            </label>
                            <input type="text" name="title" placeholder="Font End Developer" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Job Category*</span>
                            </label>
                            <select className="select select-bordered" value={selectedValue} onChange={handleSelectChange}>
                                <option value="font End Developer">Full Time</option>
                                <option value="Laravel Developer">Part Time</option>
                              
                            </select>

                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 my-5">
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text">Company Name*</span>
                            </label>
                            <input type="text" name="companyName" placeholder="Universe Soft Care" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text">Location*</span>
                            </label>
                            <input type="text" name="location" placeholder="Badda, Dhaka" className="input input-bordered w-full" />

                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-5 my-5">
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text">Salary*</span>
                            </label>
                            <input type="text" name="salary" placeholder="$2000" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text">vacancy*</span>
                            </label>
                            <input type="text" name="vacancy" placeholder="07 Person" className="input input-bordered w-full" />

                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-5 my-5">
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text">Experience Level*</span>
                            </label>
                            <input type="text" name="experience" placeholder="1 Year" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text">Company Logo*</span>
                            </label>
                            <input type="text" name="logo" placeholder="Logo Url" className="input input-bordered w-full" />

                        </div>

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Type Job Description"></textarea>

                    </div>

                    <button className="btn-primary mt-10">POST NOW</button>
                </form>
            </div>

        </div>
    );
};

export default JobPost;