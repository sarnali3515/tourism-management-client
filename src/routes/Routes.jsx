import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddSpots from "../pages/AddSpots/AddSpots";
import SpotsDetails from "../pages/SpotsDetails/SpotsDetails";
import AllTouristSpots from "../pages/AllTouristSpots/AllTouristSpots";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import MyList from "../pages/MyList/MyList";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/spots')

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addSpots',
                element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>
            },
            {
                path: '/allSpots',
                element: <AllTouristSpots></AllTouristSpots>,
                loader: () => fetch('http://localhost:5000/spots')
            },
            {
                path: '/spots/:id',
                element: <PrivateRoute><SpotsDetails></SpotsDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/spots/${params.id}`)
            },
            {
                path: '/myList/:email',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/spots/email/${params.email}`)
            },


        ]
    }
]);

export default router;