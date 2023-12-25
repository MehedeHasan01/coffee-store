import { useLoaderData } from "react-router-dom";
import BackToHomeBtn from "../../Components/BackToHomeBtn/BackToHomeBtn";
import { Helmet } from "react-helmet";


const CoffeeDetails = () => {
    const coffeeDetails = useLoaderData();
    const { name, chef, supplier, taste, category, details, photo} = coffeeDetails

    return (
        <>
         <Helmet>
                <title>Coffee Store | Coffee Details</title>
            </Helmet>
             <div className="max-w-5xl mx-auto px-8 md:px-0 md:mt-12 md:mb-28 my-12">
            <BackToHomeBtn/>

                <div className="md:py-[72px] md:px-24 p-6 bg-[#F4F3F0] rounded-md mt-12">

                <div className='bg-[#F5F4F1] rounded-xl md:flex gap-28  items-center p-7  '>
                <div>
                <img  src={photo} className='h-[20rem] w-fit '  alt="" />
                </div>

                <div className='text-[#331A15] text-xl Raleway-Font font-semibold py-6 px-3 md:px-0 md:py-0 flex-1 h-fit'>

                <h1 className="text-[#331A15] Rancho-Font text-3xl mb-8 font-bold ">Niceties</h1>

                    <h1>Name:   <span className='text-[#5C5B5B] text-lg font-medium'> {name}</span></h1>
                    <h1>Chef:   <span className='text-[#5C5B5B] text-lg font-medium'> {chef}</span></h1>

                    <h1>Supplier:   <span className='text-[#5C5B5B] text-lg font-medium'> {supplier}</span></h1>

                    <h1>Taste:   <span className='text-[#5C5B5B] text-lg font-medium'> {taste}</span></h1>

                    <h1>Category:   <span className='text-[#5C5B5B] text-lg font-medium'> {category}</span></h1>

                    <h1>Price:  <span className='text-[#5C5B5B] text-lg font-medium'> {category} Dollar</span></h1>

                    <h1>Details:  <span className='text-[#5C5B5B] text-lg font-medium'> {details}</span></h1>
                </div>
            </div>


                </div>
            </div>
        </>
    );
};

export default CoffeeDetails;