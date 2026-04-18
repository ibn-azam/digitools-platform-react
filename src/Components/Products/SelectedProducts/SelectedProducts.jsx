
import Card from '../Card/Card';


const SelectedProducts = ({cardsData}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-10'>
            {
                cardsData.map(cardData=><Card cardData={cardData}></Card>)
            }
        </div>
    );
};

export default SelectedProducts;