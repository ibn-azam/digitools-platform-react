import React from 'react';

const AccountCreation = () => {
    return (
        <div className='bg-[#f9fafc] mt-30 py-30'>
            <div className='container mx-auto text-center  '>
            <div className='text-center '>
                <h2 className='text-5xl text-[#101727] font-bold mb-4'>Get Started in 3 Steps</h2>
                <p className='text-lg text-[#627382] '>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-10'>
                <div className='bg-[#ffffff] border-2 border-[#f1f1f1] rounded-xl p-6 w-95 h-95 shadow-md'>
                    <div className='flex justify-end '>
                        <span className='w-10 h-10 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex items-center justify-center text-white font-semibold'>01</span>
                    </div>
                     <div className='flex flex-col justify-center items-center'>
                        <span className='bg-linear-to-r from-[#4f39f636] to-[#9614fa36] p-2.5 rounded-full mb-4 mt-8'><img src="../../../src/assets/user.png" alt="" /></span>
                        <h4 className='text-2xl text-[#101727] font-bold mb-4'>Create Account</h4>
                        <p className='text-lg text-center text-[#627382] '>Sign up for free in seconds. No credit card required to get started.</p>
                     </div>
                </div>
                <div className='bg-[#ffffff] border-2 border-[#f1f1f1] rounded-xl p-6 w-95 h-95 shadow-md'>
                    <div className='flex justify-end '>
                        <span className='w-10 h-10 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex items-center justify-center text-white font-semibold'>02</span>
                    </div>
                     <div className='flex flex-col justify-center items-center'>
                        <span className='bg-linear-to-r from-[#4f39f636] to-[#9614fa36] p-2.5 rounded-full mb-4 mt-8'><img src="../../../src/assets/package.png" alt="" /></span>
                        <h4 className='text-2xl text-[#101727] font-bold mb-4'>Choose Products</h4>
                        <p className='text-lg text-center text-[#627382] '>Browse our catalog and select the tools
                        that fit your needs.
                        </p>
                     </div>
                </div>
                <div className='bg-[#ffffff] border-2 border-[#f1f1f1] rounded-xl p-6 w-95 h-95 shadow-md'>
                    <div className='flex justify-end '>
                        <span className='w-10 h-10 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex items-center justify-center text-white font-semibold'>03</span>
                    </div>
                     <div className='flex flex-col justify-center items-center'>
                        <span className='bg-linear-to-r from-[#4f39f636] to-[#9614fa36] p-2.5 rounded-full mb-4 mt-8'><img src="../../../src/assets/rocket.png" alt="" /></span>
                        <h4 className='text-2xl text-[#101727] font-bold mb-4'>Start Creating</h4>
                        <p className='text-lg text-center text-[#627382] '>Download and start using your premium 
                        tools immediately.
                        </p>
                     </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AccountCreation;