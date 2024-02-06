import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";
import Doctos from "../Containar/Doctos/Doctos";
import Services from "../Containar/Services/Services";
import Blogs from "../Containar/Blogs/Blogs";
import Contact from "../Containar/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: "/Home",
                element:<Home></Home>,
            },
            {

                path: "/Doctos",
                element:<Doctos></Doctos>,
            },
            {
                path: "/Services",
                element:<Services></Services>,
            },
            {
                path: "/Blogs",
                element:<Blogs></Blogs>,
            },
            {
                path: "/Contact",
                element:<Contact></Contact>,
            }
        ]
    },
]);