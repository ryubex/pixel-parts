import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import CartProvider from './context/Cart.Context.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: "shop",
        element: <Shop />
      },

      {
        path: "cart",
        element: <Cart />
      },

      {
        path: "login",
        element: <Login />
      },
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
)