import AddBox from "../atoms/AddBox";
import Button from "../atoms/Button";
import PriceBox from "../atoms/PriceBox";

const RightContent = () => {
  return (
    <div className="flex flex-col w-1/2 gap-7">
      <span className="text-[#FF7E1B] font-bold uppercase tracking-[2px]">
        Sneaker Company
      </span>
      <h1 className="text-[#1D2026] text-[44px] font-bold leading-[48px]">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-[#69707D] leading-[26px]">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <PriceBox />
        <div className="gap-4 flex justify-between">
            <AddBox  num='3'/>
            <Button/>
        </div>
    </div>
  );
};

export default RightContent;
