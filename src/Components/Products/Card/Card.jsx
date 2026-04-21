import { useState } from "react";
import Features from "./Features";
import { toast } from "react-toastify";


const Card = ({cardData ,handleSelectedProducts}) => {
    const cardFeatures = cardData.features;
    const [isSelected,setIsSelected]=useState(false);

    const handleBuynowBtn=()=>{
        setIsSelected(isSelected ? false : true);
        handleSelectedProducts(cardData);
        toast(`${cardData.name} Added To The Cart`,{
            position: "top-center",
        });
        
    }
    return (
        <div className='container mx-auto'>
            <div className='px-6 py-3 min-w-95 min-h-80 bg-[#ffffff] border-2 border-[#f2f2f2] rounded-2xl shadow-md hover:translate-y-1'>
                <div className="flex items-center justify-between ">
                    <span className="border-2 border-[#f2f2f2] p-2.5 rounded-full"><img className="w-8 h-8" src={cardData.icon} alt="" /></span>
                    <span className={cardData.tag === "Best Seller" ? `bg-[#fef3c6] text-[#bb4d00] px-2
                        py-1 rounded-full `:cardData.tag === "Popular" ? `bg-[#e1e7ff] text-[#4f39f6] px-2
                        py-1 rounded-full` : `bg-[#dbfce7] text-[#0a883e] px-2
                        py-1 rounded-full`}>{cardData.tag}</span>
                </div>
                <div className="text-justify mt-5">
                    <h2 className="text-[24px] font-bold mb-2 text-[#101727]">{cardData.name}</h2>
                    <p className="text-[16px] text-[#627382] mb-2">{cardData.description}</p>
                    <h2><span className="text-[24px] font-bold text-[#101727]">${cardData.price}</span><span className="text-[#627382] text-[16px]">/{cardData.period}</span></h2>
                     {
                       cardFeatures.map((feature,index) =><Features feature={feature} key={index}></Features>) 
                    }
                </div>
                <button onClick={handleBuynowBtn} className={`btn ${isSelected === true ? "w-full my-2 rounded-full text-white font-bold bg-green-600" : "w-full my-2 rounded-full text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa]"}`}>Buy Now</button>
            </div>
        </div>
    );
};

export default Card;