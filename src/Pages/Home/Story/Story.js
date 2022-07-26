import React from 'react';

const Story = () => {
    return (
        <div style={{ backgroundImage: "url(https://landing.engotheme.com/html/hamadryad/demo/images/homepage2/bg-aboutus.png)", backgroundRepeat: 'no-repeat', backgroundBlendMode: 'overlay' }}>
            <div className='w-3/6 mx-auto my-10 p-16'>
                <h4 className=' text-md text-center'>A little story about us</h4>
                <h4 className='text-5xl text-center mt-5 text-[#89B849]'>Little Leaf</h4>
                <p className='text-9xl font-bold quotes text-center text-[#224229] mt-2'>“</p>
                <p className='text-center text-2xl italic -mt-10' >A <span className='text-[#89B849]'>Little Leaf</span> is a place where plants are grown for transplanting, budding, and graft stock or for sale.Our earth is filled with plants. Look around you! Flowers, grass, and trees are all plants. Humans could not survive without plants.</p>
                <p className='mt-10 text-center text-2xl italic' >It’s true when we say plants make people happy. We hope you’ll make any one of these plants an addition to your home or office.</p>
            </div>
        </div>
    );
};

export default Story;