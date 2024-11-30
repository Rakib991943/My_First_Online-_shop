import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Components/Navbar/Home/Home';
import Setiesfies from './Components/Navbar/Satisfiests/Setiesfies';
import SingleCard from './Components/SingleCard/SingleCard';
import Products from './Components/Products/Products';
import AllProducts from './Components/AllProducts/AllProducts';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../Categories.json'),
        children: [
          {
            path: '/',
            loader: () => fetch('../Products.json'),
            element: <Products></Products>,
          },
          {
            path: '/category/:category',
            loader: () => fetch('../Products.json'),
            element: <Products></Products>,
          },
        ],
      },
      {

        path: '/product/:product_id',
        element: <SingleCard></SingleCard>,
        loader: () => fetch('/Products.json'),

      },
      {
        path: '/AllProducts',
        element: <AllProducts></AllProducts>,
        loader: () => fetch('/Products.json'),
      },
      {
        path: '/setisfied',
        element: <Setiesfies></Setiesfies>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
