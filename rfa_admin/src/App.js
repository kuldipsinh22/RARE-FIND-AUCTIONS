// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// function App() {
//   const Layout = () => {
//     return (
//       <>
//         <Header></Header>
//         <Sidebar />
//         <Outlet></Outlet>
//         <Footer></Footer>
//       </>
//     );
//   };
//   const router1 = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout></Layout>,
//       children: [
//         {
//           path: "/Home",
//           element: <Home></Home>,
//         },
//         {
//           path: "/Buyers",
//           element: <Buyers></Buyers>,
//         },
//         {
//           path: "/Add_buyers",
//           element: <Add_buyers></Add_buyers>,
//         },
//         {
//           path: "/Add_buyers/:id",
//           element: <Add_buyers></Add_buyers>,
//         },
//         {
//           path: "/Sellers",
//           element: <Sellers></Sellers>,
//         },
//         {
//           path: "/Add_sellers",
//           element: <Add_seller></Add_seller>,
//         },
//         {
//           path: "/Add_sellers/:id",
//           element: <Add_seller></Add_seller>,
//         },
//         {
//           path: "/Product",
//           element: <Product></Product>,
//         },
//         {
//           path: "/Add_product",
//           element: <Add_product></Add_product>,
//         },
//         {
//           path: "/Add_product/:id",
//           element: <Add_product></Add_product>,
//         },
//       ],
//     },
//   ]);
//   return (
//     <>
//       <RouterProvider router={router1}></RouterProvider>
//     </>
//   );
// }

// export default App;

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Add_product from "./Components/Add_product";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Users from "./Components/Users";
import Add_users from "./Components/Add_users";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </>
  );
};

function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  return (
    <>
      <BrowserRouter>
        {auth ? (
          <>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Product" element={<Product />} />
              <Route path="/Add_product" element={<Add_product />} />
              <Route path="/Add_product/:id" element={<Add_product />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/Add_users" element={<Add_users />} />
              <Route path="/Add_users/:id" element={<Add_users />} />

              {/* <Route path="/Profile" element={<Profile />} /> */}
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
}
export default App;
