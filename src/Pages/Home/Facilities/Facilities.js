import React from 'react';

const Facilities = () => {
    return (
        <div className='bg-[#E8F2EB] mb-10 py-20'>
            <div className="w-4/6 mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 justify-items-center'>
                    <div className='flex flex-col flex-wrap items-center gap-y-5'>
                        <img src="https://i.ibb.co/Jz1scWy/customer-service.png" className=' w-20 py-2' alt="" />
                        <p className='text-xl font-semibold'>Top-notch support</p>
                    </div>
                    <div className='flex flex-col flex-wrap items-center gap-y-5'>
                        <img src="https://i.ibb.co/D5FRr2X/delivery-man.png" className='w-24' alt="" />
                        <p className='text-xl font-semibold'>Free delivery</p>
                    </div>
                    <div className='flex flex-col flex-wrap items-center gap-y-5'>
                        <img src="https://i.ibb.co/VW16rq9/money.png" className='w-20 py-2' alt="" />
                        <p className='text-xl font-semibold'>Secure payments</p>
                    </div>
                    <div className='flex flex-col flex-wrap items-center gap-y-5'>
                        <img src="https://i.ibb.co/RBQc9M2/return-box.png" className=' w-20 py-2' alt="" />
                        <p className='text-xl font-semibold'>180 Days Return</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;