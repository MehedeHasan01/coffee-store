import PropTypes from 'prop-types';


import { Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({coffee}) => {
    const navigate = useNavigate()
    const {_id,name, chef, category, photo,} = coffee;

    const handleDeleteCoffee =()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:6200/coffee/${_id}`, {
                method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        });
                        navigate('/')
                    }
                })
            }
          });




    }

    return (
        <div>
            <div className='bg-[#F5F4F1] rounded-xl flex  justify-between  items-center p-7  '>

                <div>
                <img  src={photo} className='h-[12rem] '  alt="" />
                </div>

                <div className='text-[#331A15] text-xl Raleway-Font font-semibold'>
                    <h1>Name:   <span className='text-[#5C5B5B] text-lg font-medium'> {name}</span></h1>
                    <h1>Chef:   <span className='text-[#5C5B5B] text-lg font-medium'> {chef}</span></h1>
                    <h1>Price:  <span className='text-[#5C5B5B] text-lg font-medium'> {category} Dollar</span></h1>
                </div>

                <div className='space-y-3 flex flex-col text-center text-sm '>

                    <Link to={`coffeeDetails/${_id}`}  className='text- px-2 py-2 bg-[#D2B48C] text-[#331A15]  Rancho-Font rounded-lg ' > Details </Link>

                    <Link to={`/updateCoffee/${_id}`} className=' p-2 bg-[#3C393B] text-[#fff]  Rancho-Font rounded-lg ' >Update</Link>

                    <Link onClick={handleDeleteCoffee} className=' p-2 bg-[#EA4744] text-[#fff]  Rancho-Font rounded-lg  ' > Delete </Link>

                </div>
            </div>

        </div>
    );
};

Coffee.propTypes = {
    coffee: PropTypes.object
};

export default Coffee;