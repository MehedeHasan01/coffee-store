import logo1 from '../../assets/images/more/logo1.png'

const Navbar = () => {
    return (
        <div>
            <div className="navImg ">
                <div className=" flex justify-center items-center h-fit">
                <div>
                    <img className='w-[90px]' src={logo1} alt="" />
                </div>
                <h1 className="Rancho-Font text-3xl md:text-5xl font-normal text-white">Espresso Emporium</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;