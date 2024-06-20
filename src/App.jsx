import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Router/Home';
import ProductCard from './components/Product/ProductCard';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout/Checkout';
import Order from './components/Order/Order';
import OrderDetails from './components/Order/OrderDetails';
import CategoryProducts from './components/Category/CategoryProducts';
import ScrollToTop from './components/ScrollTop/ScrollToTop';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import { useDispatch, useSelector } from 'react-redux';
import Admin from './components/Admin/Admin';
import { getUser } from './State/Auth/Action';
const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
};
const App = () => {
  const {auth}=useSelector(store=>store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);
  return (
    <Router>
      <ScrollToTop/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Home />} /> 
          <Route path="/register" element={<Home />} /> 
          <Route path="/products" element={<Product />} /> 
          <Route path="/products/category/:category" element={<CategoryProducts/>} /> 
          <Route path="/product/:productId" element={<ProductDetails />} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/account/order" element={<Order />} /> 
          <Route path="/account/order/:orderId" element={<OrderDetails />} />
          <Route path="/payment/:orderId" element={<PaymentSuccess/>} /> 
          {auth.user?.role==="ROLE_ADMIN" && <Route path="/admin/*" element={<Admin />} />}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;