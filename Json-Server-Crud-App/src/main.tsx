import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AboutPage from './pages/aboutPage.tsx';
import HomePage from './pages/homePage.tsx';

const router = createBrowserRouter([
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
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
