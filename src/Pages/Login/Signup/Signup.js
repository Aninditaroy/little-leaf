import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from './../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // const email = user?.user?.email;
    // const name = user?.user?.displayName
    // console.log("Forfgh", email, name)

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // const [token] = useToken(user);

    // console.log("from sugnup", user)

    // if (token) {
    //     navigate('/dashboard')
    // }

    if (user) {
        navigate('/home')
    }

    useEffect(() => {
        if (error) {

            if (error?.code === 'auth/invalid-email') {
                toast("Invalid email provided, please provide a valid email");
            }
            else if (error.code === 'auth/missing-email') {
                toast("Missing Email.");
            }
            else if (error.code === 'auth/wrong-password') {
                toast("Wrong password.");
            }
            else if (error.code === 'auth/internal-error') {
                toast("Internal Error.");
            }
            else {
                toast.error(`${error?.message} `)
            }

        }

    }, [error])


    // if (loading || updating) {
    //     return <Loading></Loading>
    // }

    let signInError;

    if (error) {
        signInError = <p className='text-red-500 font-bold mb-2 mt-0 pt-0'><small>{updateError?.message}</small></p>


    }




    const onSubmit = async data => {
        // console.log(data.email, data.password)

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log("update done", data)
        reset()

    };
    return (
        <div className=" h-screen overflow-hidden flex items-center justify-center">
            <div className="bg-white lg:w-96 md:w-5/12	 w-10/12 shadow-3xl shadow-2xl shadow-2xl border-l-4 border-solid border-[#6da820c8] rounded-2xl mb-10 pb-10">

                <div className="bg-[#6da820c8] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-4 mb-40">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                    </svg>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6  pt-16 pb-0">




                    <div className='mb-6 '>
                        <div className="flex items-center text-lg ">
                            <span className=' absolute ml-3'><i class="uil uil-user-plus"></i></span>


                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full  bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />

                        </div>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                        </label>
                    </div>

                    <div className='mb-6 '>
                        <div className="flex items-center text-lg ">

                            <span className=' absolute ml-3'><i class="uil uil-envelope-edit"></i></span>

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full  bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide a valid email'
                                    }
                                })}
                            />

                        </div>
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                        </label>
                    </div>


                    <div className='mb-6'>
                        <div className="flex items-center text-lg ">
                            <span className=' absolute ml-3'><i class="uil uil-key-skeleton"></i></span>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'password must be greater than 6 character '
                                    }

                                })}
                            />
                        </div>
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                        </label>
                    </div>
                    <input

                        className='btn w-full max-w-xs text-white font-medium p-2 md:p-4 uppercase  rounded-2xl mb-6 border-none  bg-[#79A206] hover:bg-[#56720b] hover:text-black' type="submit"
                        value='SIGNUP' />




                    <p className='flex justify-between items-center'>
                        <small>Already have an account?
                        </small>
                        <Link to='/login'
                            className='text-[#89B849] hover:underline'
                        >Please LogIn</Link>
                    </p>


                </form>
                <div className="divider">OR</div>
                {signInError}
                {/* <Sociallogin></Sociallogin> */}
            </div>
        </div>
    );
};

export default Signup;