import React from 'react';

const WorkflowSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] p-20 lg:px-50 lg:py-30 text-white text-center '>
            <div className='container mx-auto'>
                <h2 className='text-3xl lg:text-5xl font-bold mb-2 lg:mb-4'>Ready to Transform Your Workflow?</h2>
                <p className='text-md lg:text-lg mb-4'>Join thousands of professionals who are already using Digitools to work smarter. <br />
                Start your free trial today.
                    </p>
                    <div>
                        <button className='btn bg-white rounded-full'><span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-transparent bg-clip-text'>Explore Products</span></button>
                        <button className='btn btn-outline rounded-full ml-2'><span>View Pricing</span></button>
                    </div>
                    <p className='mt-4'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default WorkflowSection;