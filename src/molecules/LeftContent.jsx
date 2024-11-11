import ImageBox from "../atoms/ImageBox";


const LeftContent = ({image}) => {
    return (
        <div className="w-1/2">
            <img src={image} alt="" />
            <ImageBox />
        </div>
    );
};

export default LeftContent;