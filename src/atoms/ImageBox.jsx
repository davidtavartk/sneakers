import smallImage from "../assets/smallImage.svg";

const ImageBox = () => {
    return (
        <div className="flex gap-8 mt-8">
           <img src={smallImage} alt="" /> 
           <img src={smallImage} alt="" /> 
           <img src={smallImage} alt="" /> 
           <img src={smallImage} alt="" /> 
        </div>
    );
};

export default ImageBox;