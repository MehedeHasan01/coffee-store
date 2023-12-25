
import crup1 from '../../assets/images/cups/Rectangle 9.png'
import crup2 from '../../assets/images/cups/Rectangle 10.png'
import crup3 from '../../assets/images/cups/Rectangle 11.png'
import crup4 from '../../assets/images/cups/Rectangle 12.png'
import crup5 from '../../assets/images/cups/Rectangle 13.png'
import crup6 from '../../assets/images/cups/Rectangle 14.png'
import crup7 from '../../assets/images/cups/Rectangle 15.png'
import crup8 from '../../assets/images/cups/Rectangle 16.png'


const FollowUs = () => {
    return (
        <div className="max-w-5xl mx-auto my-28 px-8 md:px-0" >
            <div className="text-center">
                <p className="text-[#1B1A1A] Raleway-Font font-normal">Follow Us Now</p>
                <h1 className='mt-1 mb-12 text-[#331A15] text-4xl Rancho-Font font-bold'>Follow on Instagram</h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    <img src={crup1} alt="" />
                    <img src={crup2} alt="" />
                    <img src={crup3} alt="" />
                    <img src={crup4} alt="" />
                    <img src={crup5} alt="" />
                    <img src={crup6} alt="" />
                    <img src={crup7} alt="" />
                    <img src={crup8} alt="" />

                </div>

            </div>

        </div>


    );
};

export default FollowUs;