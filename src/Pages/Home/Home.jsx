import { Link, useLoaderData } from "react-router-dom";
import FollowUs from "../../Components/FollowUs/FollowUs";
import Banner from "../../Components/Header/Banner";
import Service from "../../Components/Servies/service";
import Coffee from "./Coffee";
import { Helmet } from "react-helmet";


const Home = () => {
    const coffees = useLoaderData()
    return (
        <>
        <Helmet>
            <title>Coffee Store | Home</title>
        </Helmet>
        <Banner/>
        <Service/>
            <div className="my-28 CoffeeBackgroundImg">
                <div className="text-center">
                <p className="text-[#1B1A1A] Raleway-Font font-normal ">--- Sip & Savor ---</p>
                <h1 className='mb-6 text-[#331A15] text-4xl Rancho-Font font-bold'>Our Popular Products</h1>
                <Link to={'/addCoffee'}>
                <button className="bg-[#E3B577] hover:bg-transparent hover:text-[#331A15] border-[#331A15]  text-xl Rancho-Font font-bold border-2 rounded-lg px-4 py-1 text-white duration-500">Add Coffee</button>
                </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-8 md:px-0 py-12">
                    {
                        coffees?.map(coffee => <Coffee key={coffee?._id} coffee={coffee} />)
                    }
                </div>
            </div>
        <FollowUs/>
        </>
    );
};

export default Home;