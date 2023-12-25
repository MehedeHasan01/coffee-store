
const Banner = () => {
    return (
        <>
        <div className="bannerImg h-[83vh] flex justify-center items-center  px-8 md:px-0">
            <div className="w-md:[53%] mx-auto md:mx-0 md:ml-[29rem] px-">
                <div>
                <h1 className="font-normal text-white Rancho-Font text-4xl">Would you like a Cup of Delicious Coffee?</h1>
                <p className="my-4 text-white font-normal Raleway-Font">{`It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.`}</p>

                <button className="bg-[#E3B577] hover:bg-transparent text-[#331A15] border-[#331A15] hover:border-white   text-xl Rancho-Font font-normal border-2 rounded-lg px-4 py-2 hover:text-white duration-500">Learn More</button>

                </div>
            </div>
        </div>
        </>
    );
};

export default Banner;