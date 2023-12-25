import { Helmet } from "react-helmet";
import BackToHomeBtn from "../../Components/BackToHomeBtn/BackToHomeBtn";
import erroeImg from '../../assets/images/404/404.gif'
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
const ErrorMessage = () => {
    return (
        <div>
            <Navbar/>
         <div className="max-w-5xl mx-auto px-8 md:px-0 py-12">
            <Helmet>
                <title>Coffee Store |Not Found 404</title>
            </Helmet>
            <BackToHomeBtn/>
            <div>
                <img src={erroeImg} className="h-[70vh] w-full" alt="No Found" />
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default ErrorMessage;