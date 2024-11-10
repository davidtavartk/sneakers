import LeftContent from '../molecules/LeftContent';
import RightContent from '../molecules/RightContent';
import image from "../assets/mainPhoto.svg"

const MainContent = () => {
    return (
        <div className='flex flex-between gap-32 mt-20'>
            <LeftContent image={image}/>
            <RightContent />
        </div>
    );
};

export default MainContent;