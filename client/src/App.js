import React from 'react';
import {
    createBrowserRouter, Outlet,
    RouterProvider,
} from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Product from "./pages/product/product";
import './app.scss'
const Layout = () => {
    return (
        <div className={'app'}>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/products/:id',
                element: <Products/>
            },
            {
                path:'/product/:id',
                element: <Product/>
            },
        ]
    }
])

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;