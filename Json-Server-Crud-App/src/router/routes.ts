import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/homePage";
import NoFound from "../pages/noFoundPage";
import AddProductPage from "../pages/addProductPage";
import ProductPage from "../pages/ProductPage";
import AddToCart from "../pages/AddToCart";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "addProduct",
                Component: AddProductPage
            },
            {
                path: "product",
                Component: ProductPage
            },
            {
                path: "cart",
                Component: AddToCart,
            },
            {
                path: "*",
                Component: NoFound
            }
        ],
    },
]);