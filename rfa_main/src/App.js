import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet,
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Products from "./Components/Products";
import ProductBuy from "./Components/ProductBuy";
import Login from "./Components/Login";
import { useState } from "react";
import Profile from "./Components/Profile";
import Add_product from "./Components/Add_product";
import Win_product from "./Components/Win_product";
import F_header from "./Components/F_header";
import F_product from "./Components/F_product";

const Layout = () => {
  return (
    <>
      <Header></Header>
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
              <Route path="/About" element={<About />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              {/* <Route path="/Add_buyers/:id" element={<Add_buyers />} /> */}
              <Route path="/Product" element={<Products />} />
              <Route path="/ProductBuy" element={<ProductBuy />} />
              <Route path="/ProductBuy/:id" element={<ProductBuy />} />
              <Route path="/Profile/:id" element={<Profile />} />
              <Route path="/Add_product" element={<Add_product />} />
              <Route path="/Win_product" element={<Win_product />} />

              {/* <Route path="/Add_product" element={<Add_product />} />
              <Route path="/Add_product/:id" element={<Add_product />} />
              <Route path="/Profile" element={<Profile />} /> */}
              {/* <Route path="/Profile" element={<Profile />} /> */}
            </Routes>
            <Footer></Footer>
          </>
        ) : (
          <>
            <F_header />
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/Home
              "
                element={<Home />}
              />

              <Route path="/About" element={<About />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              {/* <Route path="/Add_buyers/:id" element={<Add_buyers />} /> */}
              <Route path="/F_product" element={<F_product />} />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </>
  );
}
export default App;
