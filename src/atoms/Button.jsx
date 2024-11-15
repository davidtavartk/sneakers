import whiteCart from "../assets/whiteCart.svg"

const Button = ({showCart}) => {
    return (
        <button className="flex items-center bg-[#FFAB6A] rounded-lg py-3 px-20 gap-4" onClick={showCart}>
            <img src={whiteCart} alt="" />
            <span className="text-white font-bold">Add to cart</span>
        </button>
    );
};

export default Button;