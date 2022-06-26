
import './App.css';

import 'tw-elements';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Products from './Pages/Products/Products';
import ScrollToTop from 'react-scroll-to-top';
import CartScreen from './Pages/CartScreen/CartScreen';
function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop smooth component={<p style={{ color: "blue", backgroundColor: 'none' }}><i class="uil uil-arrow-up text-white bg-[#73ab24] p-3 rounded text-2xl"></i></p>} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<CartScreen />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

      </Routes>
      <ToastContainer />
      <Footer />

    </div>
  );
}

export default App;
