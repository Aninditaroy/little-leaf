import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from './../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import Loading from './../../Shared/Loading/Loading';
import useToken from './../../../Hooks/useToken';
import { signOut } from 'firebase/auth';
import { async } from '@firebase/util';

const Login = () => {

    const [email, setEmail] = useState('');
    const [userState, setUserState] = useState(false);
    const [verify, setVerify] = useState(false)
    const [verifyError, setVerifyError] = useState('')
    const [user1] = useAuthState(auth)
    console.log('user 1 from login', user1);




    const { register, formState: { errors }, handleSubmit, reset, watch } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    console.log('user from login', user);
    // console.log('hello user first', user)
    // console.log('hello user', user?.user?.emailVerified)
    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);


    useEffect(() => {

        if (error) {
            localStorage.setItem('login', false)
            if (error?.code === 'auth/invalid-email') {
                toast.error("Invalid email provided, please provide a valid email");
            }
            else if (error?.code === 'auth/user-not-found') {
                toast.error("User Not Found");
            }
            else if (error?.code === 'auth/wrong-password') {
                toast.error("Wrong password.");
            }
            else {
                toast.error("Something went wrong");
            }

        }

        else {
            localStorage.setItem('login', true)
            setVerify(true)
        }

    }, [error])


    useEffect(() => {

        if (user) {
            if ((!user?.user?.emailVerified)) {
                toast("please  verify your email first")
            }
            if (loading) {
                return <Loading />
            }

        }


    }, [user])
    useEffect(() => {
        if (user1) {
            if (!user1.emailVerified) {
                setVerifyError('Please verify your email first')
            }
            if (user1.emailVerified) {
                navigate('/')
            }
            setUserState(true)
            // navigate('/')

        }
    }, [user1])


    const [token] = useToken(user)

    useEffect(() => {
        if (token && user?.user?.emailVerified) {
            navigate(from, { replace: true });
            // toast("please verify your email first")
        }
    }, [token, from, navigate])



    // if (user) {
    //     navigate(from, { replace: true });
    // }


    if (loading) {
        return <Loading />
    }








    const onSubmit = async data => {
        // if (!user?.emailVerified) {
        //     updateProfile({ emailVerified: true });
        //     await signInWithEmailAndPassword(data.email, data.password)

        // }

        // else {
        //     await signInWithEmailAndPassword(data.email, data.password)
        // }
        watch()
        await signInWithEmailAndPassword(data.email, data.password)

        reset()

        // .then((userCredential) => {
        //     console.log(userCredential)
        //     // Signed in 
        //     const user = userCredential.user;
        //     // ...
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        // });


        reset();
    };

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.error("Sent Email")
        }
        else {
            toast("Please enter your email")
        }

    }


    return (
        <>
            {/* {
                !user?.emailVerified ? <p>Your Email is not verified yet!</p>
                    : */}
            <div className=" h-screen overflow-hidden flex items-center justify-center">

                <div className="bg-white lg:w-96 md:w-5/12	 w-10/12 shadow-3xl shadow-2xl shadow-2xl border-l-4 border-solid border-[#79A206] rounded-2xl mb-10 pb-10">



                    <div className="bg-[#79A206]  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-4 mb-40">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFF">
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                        </svg>


                    </div>

                    {
                        <p>{verifyError}</p>
                    }

                    <form onSubmit={handleSubmit(onSubmit)} className="p-6  pt-16 pb-0">
                        <div className='mb-6 '>
                            <div className="flex items-center text-lg ">
                                <span className=' absolute ml-3'><i class="uil uil-envelope-edit"></i></span>
                                <input

                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full  bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                    {...register("email",

                                        {
                                            required: {
                                                value: true,
                                                message: "Email is required"
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Please provide a valid email'
                                            },
                                            onChange: (e) => { setEmail(e.target.value) }

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


                        <div className="mt-6  flex items-center justify-between block text-gray-700 text-sm font-bold mb-6">
                            <p><input className='mr-2' type="checkbox" />Remember me</p>
                            <Link to='/login' onClick={resetPassword} className="font-bold text-sm  text-[#79A206]">Forget password?</Link>

                        </div>


                        {
                            ((!user1?.emailVerified) && (userState)) && <a href="/login" className='btn w-full max-w-xs  font-medium p-2 md:p-4 text-white uppercase w-full rounded-2xl mb-6 
                            border-none bg-[#79A206] hover:bg-[#56720b] ' type="submit">Login</a>
                        }

                        {
                            ((!userState) && (!user1)) &&
                            <>
                                <input onclick="location.href='/'" className='btn w-full max-w-xs  font-medium p-2 md:p-4 text-white uppercase w-full rounded-2xl mb-6 
border-none bg-[#79A206] hover:bg-[#56720b] ' type="submit"
                                    value='Login'></input>
                            </>
                        }

                        {/* <input onclick="location.href='/'" className='btn w-full max-w-xs  font-medium p-2 md:p-4 text-white uppercase w-full rounded-2xl mb-6 
border-none bg-[#79A206] hover:bg-[#56720b] ' type="submit"
                            value='Login'>

                        </input> */}

                        {/* <a href="/" className='btn w-full max-w-xs  font-medium p-2 md:p-4 text-white uppercase w-full rounded-2xl mb-6 
border-none bg-[#79A206] hover:bg-[#56720b] ' type="submit">Login</a> */}

                        {/* <input onclick="location.href='/'" className='btn w-full max-w-xs  font-medium p-2 md:p-4 text-white uppercase w-full rounded-2xl mb-6 
border-none bg-[#79A206] hover:bg-[#56720b] ' type="submit"
                            value='Login'>

                        </input> */}



                        <p className='flex justify-between'>
                            <span className='text-[#79A206] text-sm font-bold '>New to Little Leaf?</span>
                            <Link to='/signup'
                                className='text-[#79A206] font-medium hover:underline'
                            >Create new account</Link>
                        </p>


                    </form>
                    <div className="divider">OR</div>

                    {/* <Sociallogin></Sociallogin> */}
                </div>
            </div>
            {/* } */}
        </>


    );
};

export default Login;