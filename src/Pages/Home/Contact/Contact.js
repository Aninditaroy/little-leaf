
import React from 'react';
// import { emailjs } from 'emailjs-com';


// http://themes.g5plus.net/spring/wp-content/uploads/2018/01/background-02.jpg
//http://themes.g5plus.net/spring/wp-content/uploads/revslider/slider05/slider-15.jpg
const Contact = () => {
    // function sendEmail(e) {
    //     e.preventDefault();
    //     emailjs.sendForm.sendForm('little-leaf', 'template_ttumyuu', e.target, '-HU5bzWa7BXhyDuKZ')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     e.target.reset()
    // }
    return (
        <div className='my-10' style={{ backgroundImage: 'url(http://themes.g5plus.net/spring/wp-content/uploads/2018/01/background-02.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <section className="py-20 ">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x  bg-[#00000064] py-20">
                    <div className=' flex items-center'>
                        <div className="py-6 md:py-0 md:px-6 text-white">
                            <h1 className="text-5xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Sylhet City, 3100 Bangladesh</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>+88012548963</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span>littleleaf@web.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1 text-white text-lg">Full name</span>
                            <input type="text" name='name' placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm   dark:bg-gray-800 border-slate-300 border-2 p-2.5 outline-none focus:border-[#3C7116] focus:border-2 focus:px-4" />
                        </label>
                        <label className="block">
                            <span className="mb-1 text-white text-lg">Email address</span>
                            <input type="email" name='email' placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm  dark:bg-gray-800 border-slate-300 border-2 p-2.5 outline-none focus:border-[#3C7116] focus:border-2 focus:px-4" />
                        </label>
                        <label className="block">
                            <span className="mb-1 text-white text-lg">Message</span>
                            <textarea rows="3" name='message' className="block w-full rounded-md dark:bg-gray-800 border-slate-300 border-2 p-2.5 outline-none focus:border-[#3C7116] focus:border-2 focus:px-4" placeholder='Write a message'></textarea>
                        </label>
                        <div class="mt-3 rounded-lg sm:mt-0">
                            <button type="submit" class="items-center block px-10 py-3.5 text-base font-medium text-center text- hover:bg-[#3c7116a0] hover:text-white hover:border-0  hover:duration-500 hover:ease-in-out  shadow-2xl bg-white border-white  rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Submit</button>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Contact;