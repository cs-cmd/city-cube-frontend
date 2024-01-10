import App from "../../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
//      { path: '/menu', element: <MenuPage /> },
//      { path: 'contact', element: <ContactPage /> }
    ]
  }
])

export default function MainRouter() {
  return <RouterProvider router={router} />;
}