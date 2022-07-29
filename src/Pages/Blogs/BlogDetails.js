import React from 'react';

const BlogDetails = () => {
    return (
        <div class="bg-[#F6F7FB]">
            <div className='pt-5'>

                <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                    style={{ height: '24em' }} >
                    <div class="absolute left-0 bottom-0 w-full h-full z-10"
                        style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}
                    ></div>
                    <img src="https://cleverbloom.com/wp-content/uploads/2021/01/IMG_6540-1024x683.png" class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                    <div class="p-4 absolute bottom-0 left-0 z-20">
                        <a href="#"
                            class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Nutrition</a>
                        <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                            How To Get Rid Of Mealy Bugs
                        </h2>
                        <div class="flex mt-3">
                            <img src="https://randomuser.me/api/portraits/men/97.jpg"
                                class="h-10 w-10 rounded-full mr-2 object-cover" />
                            <div>
                                <p class="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                                <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    <p class="pb-6">Are you noticing a fuzzy, white, cotton like residue on your houseplants? You probably have mealy bugs. Mealy bugs are a white, fleshy colored, soft bodied scale insect. They feed on the foliage (and sometimes roots) of plants. The continual feeding can cause leaves to yellow, brown, wilt, and even cause death to plants.

                        Mealy bugs may be hard to detect right away. They are very small and may be mistaken for dust particles or other debris. As they start to multiply or lay eggs, you will notice a cotton-like substance forming in clumps, often times where the leaves intersect with the stem. This is when most people start to notice the infestation.

                        At the first sign of mealy bugs, quarantine the plant to an area of the home where it does not come into contact with other plants.</p>





                    <div class="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                        <span className='text-xl font-bold'> How To Get Rid Of Mealy Bugs</span> <br />
                        There are two main steps to my process of getting rid of mealy bugs. The first step is physically removing the mealy bugs and their eggs. There are two options that I have found to work well. The first option is using Dr. Bronner’s Castile Soap and the second option is to use isopropyl alcohol. Both ways have worked well for me. The second step is adding a systemic insect control to the soil which will help to prevent future pests.
                    </div>



                    <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">Monitor Your Plants</h2>

                    <p class="pb-6">Monitor your plants over the next few weeks, checking for the return of mealy bugs. You will most likely need to repeat step one a few times before they’re all gone for good. Once you are certain there are no bugs, it is safe to move it back to its place in your home.

                        Don’t forget to continue the Bonide systemic insect control granules! It is key to keeping your plants pest free!</p>


                </div>
            </div>
        </div>
    );
};

export default BlogDetails;