

const SubScribed = () => {
    return (
        <div className="my-10 max-w-7xl mx-auto text-center ">
            <h1 className="w-1/2 mx-auto text-2xl md:text-4xl font-bold font-serif">Subscribe our newsletter to get updates about latest jobs</h1>
            <p className="w-3/4 mx-auto mt-2 text-gray-500">Go house hunting with confidence thanks to all the information that experts normally keep to themselves. Check the facts and figures whenever you want, from wherever you want. With the data of Walter you’ll make smarter choices when hunting for a home.</p>

            <div className="my-10 py-0 md:py-5 bg-[#f1f6fa] w-1/2 mx-auto flex items-center justify-center">
                <span className="hidden md:block text-xl md:text-4xl text-gray-500 pr-2">@</span>
                <input type="text" className="py-4 px-5 focus:outline-none bg-[#f1f6fa]" placeholder="Enter Your Email" />
                <button className="bg-[#007AFF] py-4 px-1 md:px-5 rounded-md text-xl font-serif  font-semibold text-white">Subscribed</button>
            </div>
        </div>
    );
};

export default SubScribed;