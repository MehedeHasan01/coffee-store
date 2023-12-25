import ServiesCard from "./ServiesCard";

import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'

const Service = () => {
    return (
        <div className="bg-[#ECEAE3]">

        <div className="max-w-5xl  py-10 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-8 md:px-0 ">
            <ServiesCard img={icon1} title={'Awesome Aroma'} details={'You will definitely be a fan of the design & aroma of your coffee'} />
            <ServiesCard img={icon2} title={'High Quality'} details={'We served the coffee to you maintaining the best quality'} />
            <ServiesCard img={icon3} title={'Pure Grades'} details={'The coffee is made of the green coffee beans which you will love'} />
            <ServiesCard img={icon4} title={'Proper Roasting'} details={'Your coffee is brewed by first roasting the green coffee beans'} />
        </div>
        </div>
    );
};

export default Service;