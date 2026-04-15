import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/homePage";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";
import NoFound from "../pages/noFoundPage";

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
                path: "about",
                Component: AboutPage
            },
            {
                path: "contact",
                Component: ContactPage
            },
            {
                path: "*",
                Component: NoFound
            }
        ],
    },
]);