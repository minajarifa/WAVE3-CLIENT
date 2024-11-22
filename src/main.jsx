import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayoutes from './layoutes/MainLayoutes';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider.';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DashboardLayout from './layoutes/DashboardLayout';
import SellerRoute from './PrivateRoute/SellerRoute';
import AddNewProduct from './Pages/Dashboard/SellerDashboard/AddNewProduct/AddNewProduct';
import MyProducts from './Pages/Dashboard/SellerDashboard/MyProducts/MyProducts';
import ActionProducts from './Pages/Dashboard/SellerDashboard/ActionProduucts/ActionProducts';
import Overview from './Pages/Overview/Overview';
import ErrorPage from './Components/ErrorPage';
// import AuthProvider from './AuthProvider/AuthProvider.';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Products",
        element: <PrivateRoute>

          <Products />
        </PrivateRoute>
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Contact-us",
        element: <Contact />
      },
      {
        path: "/Register",
        element: <Register />
      },
      {
        path: "/Login",
        element: <Login />
      },
    ]
  },
  {
    path: "/dashboard",
    element: (<PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>),
    children: [
      {
        path: "/dashboard/Overview",
        element: <PrivateRoute>

          <Overview />
        </PrivateRoute>
      },
      // seller route start
      {
        path: "/dashboard/add-products",
        element: <SellerRoute>

          <AddNewProduct />
        </SellerRoute>
      },
      {
        path: "/dashboard/my-products",
        element: <SellerRoute>

          <MyProducts />
        </SellerRoute>
      },
      {
        path: "/dashboard/action-products",
        element: <SellerRoute>

          <ActionProducts />
        </SellerRoute>
      },
        // seller route end
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

      <RouterProvider router={router} future={{ v7_skipActionErrorRevalidation: true }} />
    </AuthProvider>

  </StrictMode>
);
