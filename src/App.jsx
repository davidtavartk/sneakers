import MainContent from "./organisms/MainContent";
import Navbar from "./organisms/Navbar";


const App = () => {
    return (
        <div className="w-4/5 m-auto">
            <Navbar />
            <MainContent />
        </div>
    );
};

export default App;