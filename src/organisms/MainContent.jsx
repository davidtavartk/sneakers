import LeftContent from '../molecules/LeftContent';
import RightContent from '../molecules/RightContent';
import image from "../assets/mainPhoto.svg"

const MainContent = ({cartItems, onDecrement, onIncrement, showCart}) => {
    return (
        <div className='flex flex-between gap-32 mt-20 mb-10'>
            <LeftContent image={image}/>
            <RightContent cartItems={cartItems} onDecrement={onDecrement} onIncrement={onIncrement} showCart={showCart}/>
        </div>
    );
};

export default MainContent;