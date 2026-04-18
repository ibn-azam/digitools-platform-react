import Features from "./Features";


const Card = ({cardData}) => {
    const cardFeatures = cardData.features;
    return (
        <div className='container mx-auto'>
            <div className='px-6 py-3 min-w-[380px] min-h-80 bg-[#ffffff] border-2 border-[#f2f2f2] rounded-2xl shadow-md hover:translate-1'>
                <div className="flex justify-between ">
                    <span>icon</span>
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
                       cardFeatures.map(feature =><Features feature={feature}></Features>) 
                    }
                </div>
                <button className='btn w-full my-2 rounded-full text-white font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>Buy Now</button>
            </div>
        </div>
    );
};

export default Card;