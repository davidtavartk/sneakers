const CartBox = ({ cartItems, showCart }) => {
  return (
    <>
      {showCart && (
        <div className="absolute rounded-md px-2 top-2 left-3 py-0  bg-[#FF7E1B] text-white font-bold text-[10px]">
          {cartItems}
        </div>
      )}
    </>
  );
};

export default CartBox;
