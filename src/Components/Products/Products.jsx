import React, { use } from 'react';
import SelectedProducts from './SelectedProducts/SelectedProducts';

const Products = ({cardPromise}) => {
    const cardsData = use(cardPromise); 
    return (
        <div className='container mx-auto text-center '>
            <h2 className='mb-4 font-bold text-5xl'>Premium Digital Tools</h2>
            <p className='text-[16px] mb-4 border-none text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <button className='btn rounded-l-full text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>Products</button>
            <button className='btn rounded-r-full border-none btn-active'>Cart(0)</button>
            <SelectedProducts cardsData={cardsData}></SelectedProducts>
        </div>
    );
};

export default Products;