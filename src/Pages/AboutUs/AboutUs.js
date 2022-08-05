import React from 'react';

const AboutUs = () => {
    return (
        <div>

            <div class="container flex justify-center mx-auto pt-16">
                <div className='text-center sm:w-4/6  lg:w-1/2 xl:w-2/5 mx-auto'>
                    <p class="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3 text-primary"> TEAM</p>
                    <h1 class="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6  lg:mx-auto xl:mx-auto md:mx-auto  mx-7 ">The People Behind the Scenes of  <span className='text-primary'> Little Leaf</span></h1>
                </div>
            </div>
            <div style={{ backgroundImage: "url(https://landing.engotheme.com/html/hamadryad/demo/images/homepage2/bg-aboutus.png)", backgroundRepeat: 'repeat', backgroundBlendMode: 'overlay', backgroundSize: 'contain' }} class="w-full  px-10 pt-10 ">
                <div class="container mx-auto">
                    <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-around  flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                <div class="absolute -mt-20 w-full flex justify-center">
                                    <div class="h-32 w-32">
                                        <img src="https://i.ibb.co/c2x9ynJ/anindita-linked-in.png" alt="Display Picture of Andres Berlin" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div class="px-6 mt-16">
                                    <h1 class="font-bold dark:text-white text-3xl text-center mb-1">Anindita Roy</h1>
                                    <p class="text-gray-800 dark:text-white text-sm text-center">Web Developer</p>
                                    {/* <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p> */}
                                    <div class="w-full flex justify-center pt-5 pb-5">
                                        <a href="https://github.com/Aninditaroy/" class="mx-5" target="_blank" rel="noreferrer" >
                                            <div aria-label="Github" role="img">
                                                <i class="uil uil-github text-2xl"></i>
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/in/anindita-roy-6b1b84157/" class="mx-5" target="_blank" rel="noreferrer" >
                                            <div aria-label="Twitter" role="img">
                                                <i class="uil uil-linkedin text-2xl"></i>
                                            </div>
                                        </a>
                                        <a href="https://www.facebook.com/aninditaroy027/" class="mx-5" target="_blank" rel="noreferrer" >
                                            <div aria-label="Instagram" role="img">
                                                <i class="uil uil-facebook text-2xl"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" class="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                                <div class="absolute -mt-20 w-full flex justify-center">
                                    <div class="h-32 w-32">
                                        <img src="https://i.ibb.co/JpZg266/sajeda-linked-in.png" alt="Display Picture of Silene Tokyo" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div class="px-6 mt-16">
                                    <h1 class="font-bold dark:text-white text-3xl text-center mb-1">Sajeda Akhter</h1>
                                    <p class="text-gray-800 dark:text-white text-sm text-center">Web Developer</p>
                                    {/* <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p> */}
                                    <div class="w-full flex justify-center pt-5 pb-5">
                                        <a href="https://github.com/sajedasaju" class="mx-5" target="_blank" rel="noreferrer" >
                                            <div aria-label="Github" role="img">
                                                <i class="uil uil-github text-2xl"></i>
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/in/sajeda-akhter-9965a71a3/" class="mx-5" target="_blank" rel="noreferrer" >
                                            <div aria-label="Twitter" role="img">
                                                <i class="uil uil-linkedin text-2xl"></i>
                                            </div>
                                        </a>
                                        <a href="https://www.facebook.com/profile.php?id=100010466556130" class="mx-5" target="_blank" rel="noreferrer" >
                                            <div aria-label="Instagram" role="img">
                                                <i class="uil uil-facebook text-2xl"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;