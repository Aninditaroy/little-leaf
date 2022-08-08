import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    return (
        <>
            <div className='flex items-center justify-center mt-2'>
                <div className='border border-gray-100 m-3 mt-2 w-24 '></div>
                <span className='text text- text-slate-600 '>OR</span>
                <div className='border border-gray-100 m-3 mt-2 w-24 '></div>
            </div>
            <div className='flex flex-col items-center justify-center mt-5'>
                <button onClick={() => signInWithGoogle()} className='flex items-center py-2.5 px-5 mr-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-200'>
                    <img style={{ width: "30px", height: "30px" }} src='https://i.ibb.co/41VW8Cp/google.png' alt="" />
                    <span className='pl-2 text-md'>Continue with google</span>
                </button>
            </div>
        </>
    );
};

export default SocialLogin;