import NavMenu from "../molecules/NavMenu";
import CircleImage from "../atoms/CircleImage";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";

const Navbar = () => {
  const menu = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="flex items-center h-28 w-full border-b border-[#E4E9F2]">
      <img src={logo} alt="" />
      <div className="flex justify-between w-full">
        <NavMenu menu={menu} />
        <div className="flex gap-12 items-center relative">
          <img src={cart} alt="" />
          <CircleImage />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
