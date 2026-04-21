import React from 'react';
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#101727] lg:px-50 lg:pt-30 lg:pb-8'>
            <div className='container mx-auto'>
                <footer className="footer sm:footer-horizontal  text-white p-10  ">
                <div className='w-87.5'>
                    <h2 className='text-3xl font-bold'>DigiTools</h2>
                    <p className='text-md'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
  <nav>
    <h6 className="footer-title">Product</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Templates</a>
    <a className="link link-hover">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">Documentation</a>
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Community</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <TbBrandInstagramFilled className='w-6 h-6 cursor-pointer'/>
      </a>
      <a>
        <FaFacebookSquare className='w-6 h-6 cursor-pointer'/>
      </a>
      <a>
        <FaXTwitter className='w-6 h-6 cursor-pointer'/>
      </a>
    </div>
  </nav>
</footer>
            </div>
<div className=' text-[#fafafa52] p-5 lg:py-5 '>
    <hr />
    <div className='flex justify-between mt-2 '>
        <p className='text-sm lg:text-lg'>© 2026 Digitools. All rights reserved.</p>
       <div className='flex gap-3'>
         <p className='text-sm lg:text-lg'>Privacy Policy</p>
         <p className='text-sm lg:text-lg'>  Terms of Service</p>
         <p className='text-sm lg:text-lg'>Cookies</p>
       </div>
    </div>
</div>
        </div>
    );
};

export default Footer;