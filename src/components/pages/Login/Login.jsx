import {  useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";


const Login = () => {
    const [error, setError] = useState('')
    const { createUserWithGoogle,  loggedInUser } = useContext(AuthContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate()


    const handleGoogleLogin = () => {
        console.log('click handle google');
        createUserWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                // savedUser(user)
                navigate(from)
                // console.log(user);
                Swal.fire({
                    title: 'Login Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            })
    }

 
   

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        loggedInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // savedUser(user)
                navigate(from)
                // setSuccess('user Logged in successfully')
                Swal.fire({
                    title: 'Login Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            })
    };
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div className=' mt-4 border w-1/2 mx-auto py-12 mb-10 rounded-md shadow-lg bg-gray-100'>
            <h1 className='text-center my-4 text-3xl text-blue-500 font-bold font-serif'>Login Here</h1>



            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center flex-col space-y-2'>

                <div className="flex flex-col w-1/2 ">
                    <input placeholder="info@example.com" {...register("email", { required: true })} className="input input-bordered " />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="flex flex-col w-1/2 relative">
                    <input placeholder="Password" type={passwordVisible ? "text" : "password"}{...register("password", { required: true })} className="input input-bordered " />
                    <span onClick={togglePasswordVisibility} className="absolute right-4 top-4">
                        {passwordVisible ? <AiFillEye className="text-gray-500 text-xl"/> : <AiFillEyeInvisible  className="text-gray-500 text-xl"></AiFillEyeInvisible>}
                    </span>
                    {errors.password && <span className="text-red-500">Password is required</span>}

                </div>
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn-primary w-1/2' type="submit" />
                <p>Do nt Have an Account? <Link to="/register"  className='text-blue-600 underline'>Register</Link></p>
            </form>
            <div className='text-center my-2 text-red-500'>
                {error}
            </div>
            <div className='flex flex-col w-1/2 mx-auto space-y-2  mt-10'>
                <button onClick={handleGoogleLogin} className='border cursor-pointer border-blue-600 px-8 py-2 rounded-lg hover:bg-blue-500 '>Login With Google</button>

            </div>
        </div>
    );
};

export default Login;