
const JobPost = () => {
    return (
        <div className="bg-[#F8F8F8] min-h-screen p-20">
            <div className="bg-white p-10">
                <h1 className="text-xl font-semibold font-serif">job Information : </h1>
                <div className="grid grid-cols-2 gap-5 my-5">
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Job Title*</span>
                        </label>
                        <input type="text" placeholder="Font End Developer" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Job Category*</span>
                        </label>
                        <select className="select select-bordered">
                            <option>Font End Developer</option>
                            <option>Laravel Developer</option>
                            <option>UX/Ul Developer</option>
                            <option>MERN Developer</option>
                        </select>

                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 my-5">
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Company Name*</span>
                        </label>
                        <input type="text" placeholder="Universe Soft Care" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Location*</span>
                        </label>
                        <input type="text" placeholder="Badda, Dhaka" className="input input-bordered w-full" />

                    </div>

                </div>
                <div className="grid grid-cols-2 gap-5 my-5">
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Vacancy*</span>
                        </label>
                        <input type="text" placeholder="07 Person" className="input input-bordered w-full" />

                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text">Company Logo*</span>
                        </label>
                        <input type="text" placeholder="Logo Url" className="input input-bordered w-full" />

                    </div>

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Type Job Description"></textarea>
                   
                </div>

                <button className="btn-primary mt-10">POST NOW</button>
            </div>

        </div>
    );
};

export default JobPost;