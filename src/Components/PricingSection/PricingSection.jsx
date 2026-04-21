import { Check } from 'lucide-react';
import React from 'react';

const PricingSection = () => {
    return (
        <div className='my-30 container mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl text-[#101727] font-bold mb-3'>Simple, Transparent Pricing</h2>
                <p className='text-lg text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-10'>
               <div className='px-6 py-3 min-w-95 min-h-100 bg-[#f9fafc] border-2 border-[#f2f2f2] rounded-2xl shadow-md'>
                
                    <h2 className="text-[24px] font-bold  text-[#101727]">Starter</h2>
                    <p className="text-[16px] text-[#627382] mb-2">Perfect for getting started</p>
                    <h2><span className="text-[24px] font-bold text-[#101727]">$0</span><span className="text-[#627382] text-[16px]">/Month</span></h2>
                
                <div className="my-6">
                    <ul>
                        <li className="flex items-center gap-1"><Check size={20} color="#30b868" ></Check><span className="text-[#627382] text-[16px]"></span>Access to 10 free tools</li>
                        <li className="flex items-center gap-1"><Check size={20} color="#30b868" ></Check><span className="text-[#627382] text-[16px]"></span>Basic templates</li>
                        <li className="flex items-center gap-1"><Check size={20} color="#30b868" ></Check><span className="text-[#627382] text-[16px]"></span>Community support</li>
                        <li className="flex items-center gap-1"><Check size={20} color="#30b868" ></Check><span className="text-[#627382] text-[16px]"></span>1 project per month</li>
                    </ul>
                </div>
                <button  className= " btn w-full mt-15 rounded-full text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa]">Buy Now</button>
                </div>
               <div className='px-6 py-3 min-w-95 min-h-100 bg-linear-to-r from-[#4f39f6] to-[#9514fa]  text-white border-2 border-[#f2f2f2] rounded-2xl shadow-md'>
            
                    <h2 className="text-[24px] font-bold ">Pro</h2>
                    <p className="text-[16px] mb-2">Best for professionals</p>
                    <h2><span className="text-[24px] font-bold">$29</span><span className="text-[16px]">/Month</span></h2>
                
                <div className="my-6">
                    <ul>
                        <li className="flex items-center gap-1"><Check size={20} ></Check><span className="text-[#627382] text-[16px]"></span>Access to all premium tools</li>
                        <li className="flex items-center gap-1"><Check size={20} ></Check><span className="text-[#627382] text-[16px]"></span>Unlimited templates</li>
                        <li className="flex items-center gap-1"><Check size={20} ></Check><span className="text-[#627382] text-[16px]"></span>Priority support</li>
                        <li className="flex items-center gap-1"><Check size={20} ></Check><span className="text-[#627382] text-[16px]"></span>Unlimited projects</li>
                        <li className="flex items-center gap-1"><Check size={20} ></Check><span className="text-[#627382] text-[16px]"></span>Cloud sync</li>
                        <li className="flex items-center gap-1"><Check size={20} ></Check><span className="text-[#627382] text-[16px]"></span>Advanced analytics</li>
                    </ul>
                </div>
                <button  className= " btn w-full mt-4 rounded-full border-none font-bold  bg-white"><span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>Start Pro Trial</span></button>
                </div>
               <div className='px-6  py-3 min-w-95 max-h-100 bg-[#f9fafc] border-2 border-[#f2f2f2] rounded-2xl shadow-md'>
                
                    <h2 className="text-[24px] font-bold  text-[#101727]">Enterprise</h2>
                    <p className="text-[16px] text-[#627382] mb-2">For teams and businesses</p>
                    <h2><span className="text-[24px] font-bold text-[#101727]">$99</span><span className="text-[#627382] text-[16px]">/Month</span></h2>
                
                <div className="my-6">
                    <ul>
                        <li className="flex items-center gap-1"><Check size={20} color="#30b868" ></Check><span className="text-[#627382] text-[16px]"></span>Everything in Pro</li>
                        <li className="flex items-center gap-1"><Check size={20} color="#30b868" ></Check><span className="text-[#627382] text-[16px]"></span>Team collaboration</li>
                        <li className="flex items-center gap-1"><Check size={20} color="#30b868" ></Check><span className="text-[#627382] text-[16px]"></span>Custom integrations</li>
                        <li className="flex items-center gap-1"><Check size={20} color="#30b868" ></Check><span className="text-[#627382] text-[16px]"></span>Dedicated support</li>
                        <li className="flex items-center gap-1"><Check size={20} color="#30b868" ></Check><span className="text-[#627382] text-[16px]"></span>SLA guarantee</li>
                        <li className="flex items-center gap-1"><Check size={20} color="#30b868" ></Check><span className="text-[#627382] text-[16px]"></span>Custom branding</li>
                    </ul>
                </div>
                <button  className= " btn w-full mt-4 rounded-full text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa]">Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;