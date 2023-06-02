import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ServerError from "../components/errors/ServerError";
import NotFound from "../components/errors/NotFound";
import ShoppingCart from "../pages/ShoppingCart";
import Checkout from "../pages/Checkout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "catalog", element: <Catalog /> },
            { path: "catalog/:id", element: <ProductDetails /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "server-error", element: <ServerError /> },
            { path: "not-found", element: <NotFound /> },
            { path: "shopping-cart", element: <ShoppingCart /> },
            { path: "checkout", element: <Checkout /> },
            { path: "*", element: <Navigate replace to="/not-found" /> },
        ]
    }
])