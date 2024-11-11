

const PriceBox = ({price, discount}) => {
    const newPrice = price * discount;
    const discountPercentage = discount * 100;

    return (
        <div className='w-1/3'>
            <div className="flex gap-4">
                <h2 className="font-bold text-3xl ">${newPrice}.00</h2>
                <span className="flex items-center justify-center bg-[#FFEEE2] text-[#FF7E1B] font-bold rounded-md px-2">{discountPercentage}%</span>
            </div>
            <div className="text-[#B6BCC8] font-bold line-through">
                ${price}.00
            </div>
        </div>
    );
};

export default PriceBox;