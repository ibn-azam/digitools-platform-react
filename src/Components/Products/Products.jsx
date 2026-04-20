import React, { use, useState } from 'react';
import SelectedProducts from './SelectedProducts/SelectedProducts';
import Carts from '../Carts/Carts';

const Products = ({cardPromise,setCartCount}) => {
    const cardsData = use(cardPromise); 
    const[selectedType,setSelectedType]=useState('Products');
    const [selectedProducts,setSelectedProducts]=useState([]);

    const handleSelectedProducts=(cardsData)=>{
        const newSelectedProducts = [...selectedProducts,cardsData];
        setSelectedProducts(newSelectedProducts);
    }
    return (
        <div className='container mx-auto text-center '>
            <h2 className='mb-4 font-bold text-[40px] lg:text-5xl'>Premium Digital Tools</h2>
            <p className='text-sm sm:text-base mb-5 text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div>
                <button onClick={()=>setSelectedType('Products')} className={`btn ${selectedType === 'Products' ? "rounded-l-full text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa]" : "rounded-l-full border-none btn-active"}`}>Products</button>
                
                <button onClick={()=>setSelectedType('Cart')} 
                className={`relative btn ${selectedType === 'Cart' ? "rounded-r-full text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa]" : "rounded-r-full border-none btn-active"}`}>
                    Cart

                    <span className='absolute left-10 -top-1.5 bg-black text-white size-5 rounded-full text-xs'>{selectedProducts.length}</span>
                </button>
            </div>

            {selectedType === 'Products' ? <SelectedProducts cardsData={cardsData} handleSelectedProducts={handleSelectedProducts} setCartCount={setCartCount}></SelectedProducts> : <Carts cardsData={selectedProducts} setSelectedProducts={setSelectedProducts} ></Carts>}

            
            
        </div>
    );
};

export default Products;