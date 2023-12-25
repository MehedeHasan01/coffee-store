
import PropTypes from 'prop-types';

const ServiesCard = ({img, title, details }) => {

    return (
        <div className='border border-gray-300 rounded-md p-3 md:border-none md:p-0'>
            <div><img src={img} alt="" className='size-[70px]' /></div>
            <h1 className='mt-4 mb-2 text-[#331A15] text-3xl Rancho-Font font-normal'>{title}</h1>
            <p className='text-[#1B1A1A] Raleway-Font font-normal'>{details}</p>
        </div>
    );
};

ServiesCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.string
};

export default ServiesCard;