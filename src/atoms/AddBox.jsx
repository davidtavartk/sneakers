import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";

const AddBox = ({ num, onDecrement, onIncrement }) => {
  return (
    <div className="py-3 bg-[#F6F8FD] rounded-lg flex justify-evenly w-[35%] items-center">
      <img src={minus} alt="" onClick={onDecrement} className="p-2"/>
      <span>{num}</span>
      <img src={plus} alt="" onClick={onIncrement} className="p-2"/>
    </div>
  );
};

export default AddBox;
