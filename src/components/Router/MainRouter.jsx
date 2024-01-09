import App from "../../App";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
//      { path: '/about', element: <AboutPage /> },
//      { path: '/menu', element: <MenuPage /> },
//      { path: 'contact', element: <ContactPage /> }
    ]
  }
])

export default function MainRouter() {
  return <RouterProvider router={router} />;
}