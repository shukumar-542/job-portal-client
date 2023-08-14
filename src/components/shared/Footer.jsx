import apple from '../../assets/apple-app.svg'
import google from '../../assets/google-play.svg'
const Footer = () => {

  return (
    <div className='bg-[#1A1A1A] '>
      <footer className="max-w-7xl mx-auto ">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:text-left text-center text-white pt-10 pb-10'>
          <div className=''>
            <h1 className='font-semibold text-xl font-serif'>About Company</h1>
            <div className='mt-5 md:mt-10'>
              <ul className='space-y-2 '>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Contact Us</li>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Terms & Condition</li>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Privacy & Policy</li>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Candidate Listing</li>
              </ul>
            </div>
          </div>
          <div className=''>
            <h1 className='font-semibold text-xl font-serif'>For Employee</h1>
            <div className='mt-5 md:mt-10'>
              <ul className='space-y-2 '>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Create Resume</li>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Browse Categories</li>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Save Jobs List</li>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Browse Jobs</li>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Candidate Dashboard</li>
              </ul>
            </div>
          </div>
          <div className=''>
            <h1 className='font-semibold text-xl font-serif'>For Candidates</h1>
            <div className='mt-5 md:mt-10'>
              <ul className='space-y-2 '>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Post A Job</li>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Browse Candidates</li>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Job Packages</li>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Jobs Featured</li>
                <li className='hover:text-[#00A7AC] cursor-pointer'>Employer Dashboard</li>
              </ul>
            </div>
          </div>
          <div className=''>
            <h1 className='font-semibold text-xl font-serif'>Download App</h1>
            <div className='space-y-10 mt-10 w-1/2  mx-auto md:mx-0'>
              <div className='border border-gray-500 p-2'>
                <img src={apple} className='w-full' alt="" />
              </div>
              <div className='border border-gray-500 p-2'>
                <img src={google} className='w-full' alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='text-white text-center pb-4'>
        <p>&copy; All Copyright reserved by job portal</p>
      </div>
    </div>
  );
};

export default Footer;