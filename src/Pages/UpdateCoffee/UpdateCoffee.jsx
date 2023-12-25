import { useLoaderData, useNavigate } from "react-router-dom";
import BackToHomeBtn from "../../Components/BackToHomeBtn/BackToHomeBtn";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const AddCoffee = () => {
    const navigate = useNavigate()
    const Coffee = useLoaderData()
    const {_id,name, chef, supplier, taste, category, details, photo}= Coffee

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target
        const name = form.Name.value
        const chef = form.Chef.value
        const supplier = form.Supplier.value
        const taste = form.Taste.value
        const category = form.Category.value
        const details = form.Details.value
        const photo = form.Photo.value
        const updateCoffee ={ name, chef, supplier, taste, category, details, photo}
        fetch(`http://localhost:6200/coffee/${_id}`,{
            method: "PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(() => {

                Swal.fire({
                    title: "Congratulation!!",
                    text: "Coffee Update Successfully",
                    icon: "success"
                });
                navigate('/')

        })

    }
    return (
        <div className="max-w-5xl mx-auto px-8 md:px-0 md:mt-12 md:mb-28 my-12">
             <Helmet>
                <title>Coffee Store | Update Coffee</title>
            </Helmet>

            <BackToHomeBtn/>

            <div className="md:py-[70px] md:px-24 p-6 bg-[#F4F3F0] rounded-md mt-12">
                <div className="text-center mb-8">
                <h1 className="text-[#374151] Rancho-Font text-3xl mb-6 font-bold">Update Existing Coffee Details</h1>
                <p className="text-[#1B1A1AB2] Raleway-Font leading-7 text-lg md:px-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>

                <form  className="space-y-6" onSubmit={handleUpdateCoffee}>
                    {/* Add coffee items 1 */}
                    <div className="md:flex gap-6">
                        <div className="form-control flex-1 ">
                        <label className="label"  htmlFor="name">
                            <span className="label-text font-semibold text-xl text-[#1B1A1ACC]">Name</span>
                        </label>
                        <input type="text" name="Name" id="name" defaultValue={name}  className="input input-bordered text-base font-normal text-[#1B1A1A99]" required />
                        </div>

                        <div className="form-control flex-1 ">
                        <label className="label"  htmlFor="Chef">
                            <span className="label-text font-semibold text-xl text-[#1B1A1ACC]">Chef</span>
                        </label>
                        <input type="text" name="Chef" id="Chef" defaultValue={chef}  className="input input-bordered text-base font-normal text-[#1B1A1A99]" required />
                        </div>


                    </div>
                    {/* Add coffee items 2 */}
                    <div className="md:flex gap-6">
                        <div className="form-control flex-1 ">
                        <label className="label"  htmlFor="Supplier">
                            <span className="label-text font-semibold text-xl text-[#1B1A1ACC]">Supplier</span>
                        </label>
                        <input type="text" name="Supplier" id="Supplier" defaultValue={supplier}   className="input input-bordered text-base font-normal text-[#1B1A1A99]" required />
                        </div>

                        <div className="form-control flex-1 ">
                        <label className="label"  htmlFor="Taste">
                            <span className="label-text font-semibold text-xl text-[#1B1A1ACC]">Taste</span>
                        </label>
                        <input type="text" name="Taste" id="Taste" defaultValue={taste}   className="input input-bordered text-base font-normal text-[#1B1A1A99]" required />
                        </div>


                    </div>
                    {/* Add coffee items 3 */}
                    <div className="md:flex gap-6">
                        <div className="form-control flex-1 ">
                        <label className="label"  htmlFor="Category">
                            <span className="label-text font-semibold text-xl text-[#1B1A1ACC]">Prices</span>
                        </label>
                        <input type="text" name="Category" id="Category" defaultValue={category}  className="input input-bordered text-base font-normal text-[#1B1A1A99]" required />
                        </div>

                        <div className="form-control flex-1 ">
                        <label className="label"  htmlFor="Details">
                            <span className="label-text font-semibold text-xl text-[#1B1A1ACC]">Details</span>
                        </label>
                        <textarea name="Details" id="Details" defaultValue={details}  className="input input-bordered text-base font-normal text-[#1B1A1A99]" ></textarea>
                        </div>


                    </div>


                    <div className="form-control">
                        <label className="label"  htmlFor="Photo">
                            <span className="label-text font-semibold text-xl text-[#1B1A1ACC]">Photo</span>
                        </label>
                        <input type="text" name="Photo" id="Photo" defaultValue={photo}  className="input input-bordered text-base font-normal text-[#1B1A1A99]" required />
                    </div>

                    <button className="text-[#331A15] Rancho-Font bg-[#D2B48C] w-full mx-auto font-extrabold text-xl input border-2 border-[#331A15]" type="submit">Update Coffee Details</button>



                </form>


            </div>
        </div>
    );
};

export default AddCoffee;