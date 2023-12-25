import { Helmet } from "react-helmet";
import BackToHomeBtn from "../../Components/BackToHomeBtn/BackToHomeBtn";
import erroeImg from '../../assets/images/404/404.gif'
const ErrorMessage = () => {
    return (
        <div className="max-w-5xl mx-auto px-8 md:px-0 py-12">
            <Helmet>
                <title>Coffee Store |Not Found 404</title>
            </Helmet>
            <BackToHomeBtn/>
            <div>
                <img src={erroeImg} className="h-[70vh] w-full" alt="No Found" />
            </div>
        </div>
    );
};

export default ErrorMessage;