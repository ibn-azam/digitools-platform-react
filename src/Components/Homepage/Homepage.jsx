import { Play } from 'lucide-react';
import React from 'react';
 

const Homepage = () => {
    return (
        <header className='my-21 flex p-20  items-center justify-center gap-10'>
            <div className=''>
                <div className='mb-1'>
                    <span className='bg-[#e1e7ff] flex  gap-1 items-center justify-center rounded-full p-1 max-w-70'><img className='animate-ping  duration-100 ' src="../../../src/assets/group-5.png" alt="" /><p className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text'>New: AI-Powered Tools Available</p></span>
                </div>
                <h2 className='text-[72px] text-[#101727] font-bold'>Supercharge Your <br /> Digital Workflow</h2>
                <p className='mb-4 text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today. <br /> Explore Products</p>
                <button className='btn mr-2 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold rounded-full'>Explore Products</button>
                <button className='btn border-2  rounded-full  bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-transparent  bg-clip-text'>
                 <img src="../../../src/assets/Play.png" alt="" />Watch Demo</button>
                
            </div>
            <div className='image'>
                <img src="../../../src/assets/banner.png" alt="" />
            </div>
        </header>
    );
};

export default Homepage;