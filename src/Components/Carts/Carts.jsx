import React from "react";
import { toast } from "react-toastify";

const Carts = ({ cardsData, setSelectedProducts }) => {
  const handleRemoveBtn = (data) => {
    const filteredSelectedProducts = cardsData.filter(
      (filteredProduct) => filteredProduct.name !== data.name,
    );
    setSelectedProducts(filteredSelectedProducts);
  };

  const handleProceedBtn = () => {
    setSelectedProducts([]);
    toast.success("Successfully Checked Out!", {
      position: "top-center",
    });
  };

  // SUM THE PRICE OF THE PRODUCT
  let totalPrice = 0;
  cardsData.forEach((element) => {
    totalPrice += element.price;
  });

  return (
    <div>
      {cardsData.length === 0 ? (
        <div className="border-2 h-50 border-[#f2f2f2] p-10 rounded-2xl flex flex-col my-5 mx-10">
          <h2 className="text-center font-bold text-[#101727] text-[24px]  mb-2 mt-4">
            No Card Selected Yet
          </h2>
          <p className="text-xl text-[#627382]">
            Go To Products Tab To Purchase Products
          </p>
        </div>
      ) : (
        <div className="border-2 border-[#f2f2f2] p-10 rounded-2xl flex flex-col my-5 mx-10">
          <h2 className="text-left text-[#101727] text-[24px] font-medium mb-2">
            Your Cart
          </h2>
          {cardsData.map((data, index) => {
            return (
              <div key={index}>
                <div className="flex justify-between items-center bg-[#f2f2f2] px-6 py-3 rounded-lg mb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-50 p-2 rounded-full w-10">
                      <img src={data.icon} alt="" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-[20px] text-[#101727] font-medium">
                        {data.name}
                      </h2>
                      <p className="text-[16px] text-[#627382] font-medium">
                        ${data.price}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-red-400 cursor-pointer"
                    onClick={() => handleRemoveBtn(data)}
                  >
                    remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between my-3">
            <h4 className="text-[20px] text-[#627382] font-medium">Total:</h4>
            <h4 className="text-[20px] text-[#101727] font-medium">
              {totalPrice ?? 0}
            </h4>
          </div>
          <button
            onClick={() => handleProceedBtn()}
            className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold rounded-full "
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Carts;
