

import Card from '../Card/Card';


const SelectedProducts = ({cardsData,handleSelectedProducts}) => {
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-10'>
            {
                cardsData.map(cardData=><Card key={cardData.id} cardData={cardData} handleSelectedProducts={handleSelectedProducts}
                ></Card>)
            }
        </div>
    );
};

export default SelectedProducts;