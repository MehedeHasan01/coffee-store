import { Link } from 'react-router-dom';

const BackToHomeBtn = () => {
    return (
        <>
            <Link to={'/'} className="Rancho-Font text-[#374151] text-2xl p-2 rounded-xl duration-500 hover:bg-[#D2B48C] font-extrabold">Back to home</Link>
        </>
    );
};

export default BackToHomeBtn;