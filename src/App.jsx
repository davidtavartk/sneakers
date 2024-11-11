import { useState } from "react";
import MainContent from "./organisms/MainContent";
import Navbar from "./organisms/Navbar";


const App = () => {
    const [cartItems, setCartItems] = useState(0);
    const [showCart, setShowCart] = useState(false);



    const handleIncrement = () => {
        setCartItems((prevCartItems) => prevCartItems + 1);
    };
    const handleDecrement = () => {
        if(cartItems > 0) {
            setCartItems((prevCartItems) => prevCartItems - 1);
        }
    };

    const handleShowCart = () => {
        setShowCart(!showCart)
    }

    return (
        <div className="w-4/5 m-auto">
            <Navbar cartItems={cartItems} showCart={showCart}/>
            <MainContent cartItems={cartItems} onDecrement={handleDecrement} onIncrement={handleIncrement} showCart={handleShowCart}/>
        </div>
    );
};

export default App;