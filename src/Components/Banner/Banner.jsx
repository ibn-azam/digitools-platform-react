import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex justify-center items-center p-10 gap-10 mb-[85px]'>
                <div className='text-center'>
                    <h2 className='text-[60px] font-bold text-white'>50k+</h2>
                    <p className='text-[#FFFFFF]'>Active Users</p>
                </div>
                <hr className='border rotate-90 w-12 border-amber-50'/>
                <div className='text-center'>
                    <h2 className='text-[60px] font-bold text-white'>200+</h2>
                    <p className='text-[#FFFFFF]'>Premium Tools</p>
                </div>
                 <hr className='border rotate-90 w-12 border-amber-50'/>
                <div className='text-center'>
                    <h2 className='text-[60px] font-bold text-white'>4.9</h2>
                    <p className='text-[#FFFFFF]'>Rating</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;