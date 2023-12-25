import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails/CoffeeDetails";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorMessage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('http://localhost:6200/coffee')
            },
            {
                path:'/addCoffee',
                element: <AddCoffee/>
            },
            {
                path: '/coffeeDetails/:id',
                element: <CoffeeDetails/>,
                loader: ({params})=> fetch(`http://localhost:6200/coffee/${params.id}`)
            },
            {
                path:'/updateCoffee/:id',
                element: <UpdateCoffee/>,
                loader: ({params}) => fetch(`http://localhost:6200/coffee/${params.id}`)

            },
        ]
    }
])

export default Routes;