
import logo from '../../assets/images/more/logo1.png'

const Footer = () => {
    return (
        <>


        <div className="FooterImg">

        <div className="max-w-5xl mx-auto pb-12 pt-10 md:pt-20 px-8 md:px-0">
        <footer className="">
            <div>
                <img className='h-[90px] w-[75px] mb-4' src={logo} alt="" />
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-12 md:gap-40'>
                <div className='flex-1'>

                    <h1 className='text-[#331A15] text-4xl Rancho-Font font-bold '>Espresso Emporium</h1>
                    <p className='text-[#1B1A1A] Raleway-Font font-semibold my-8'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>

                    <h1 className='text-[#331A15] text-2xl Rancho-Font font-extrabold '>Get in Touch</h1>

                    <ul className='text-[#1B1A1A] Raleway-Font font-semibold space-y-3 mt-8'>
                        <li className=''> <p>+88 01533 333 333</p></li>

                        <li className=''> <p>there@gmail.com</p></li>


                        <li className=''> <p>72, Wall street, King Road, Dhaka</p></li>
                    </ul>

                </div>
                <div className=' flex-1 h-fit'>
                <h1 className='text-[#331A15] text-4xl Rancho-Font font-bold '>Connect with Us</h1>

                <form className='mt-8 space-y-4'>
                    <input type="text" className='input w-full input-bordered text-[#1B1A1A] Raleway-Font font-medium ' placeholder='Name' />

                    <input type="text" className='input w-full input-bordered text-[#1B1A1A] Raleway-Font font-medium ' placeholder='Email' />

                    <textarea className='textarea textarea-bordered h-24 w-full text-[#1B1A1A] Raleway-Font font-medium ' placeholder='Name' />

                    <input type="submit" className='border-2 border-[#331A15] text-[#331A15] text-lg Rancho-Font font-semibold px-5 py-2  rounded-3xl' value={'Send Message'} />
                </form>

                </div>
            </div>
       </footer>
            </div>

        </div>

        <div className="navImg ">
                <div className=" text-center py-3">

                <h1 className="text-[#fff] text-base Rancho-Font font-normal ">Copyright Espresso Emporium ! All Rights Reserved</h1>
                </div>
            </div>

        </>
    );
};

export default Footer;