import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import App from "../App";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage
            }
        ]
    }
])