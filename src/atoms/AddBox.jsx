import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";

const AddBox = ({ num }) => {
  return (
    <div className="py-3 bg-[#F6F8FD] rounded-lg flex justify-evenly w-[40%] items-center">
      <img src={minus} alt="" />
      <span>{num}</span>
      <img src={plus} alt="" />
    </div>
  );
};

export default AddBox;
