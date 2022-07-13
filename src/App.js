
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
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAdmin from './Pages/Required/RequireAdmin';
import Users from './Pages/Dashboard/Users';
import RequireAuth from './Pages/Required/RequireAuth';
import Wrapper from './Pages/Wrapper/Wrapper';
import AddProducts from './Pages/Dashboard/AddProducts';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Payment from './Pages/Payment/Payment';
import { createContext } from 'react';
export const InputContext = createContext(0);
function App() {
  return (
    <div>
      <Wrapper>
        <Navbar />
        <ScrollToTop smooth component={<p style={{ color: "blue", backgroundColor: 'none' }}><i class="uil uil-arrow-up text-white bg-[#73ab24] p-3 rounded text-2xl"></i></p>} />
        <InputContext.Provider value={0}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/product/:productId' element={
              <RequireAuth>
                <ProductDetails />
              </RequireAuth>
            }></Route>
            <Route path='/cart' element={
              <RequireAuth>
                <CartScreen></CartScreen>
              </RequireAuth>
            }></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/payment' element={<Payment />}></Route>

            <Route path='/dashboard' element={
              <RequireAuth>
                <RequireAdmin>
                  <Dashboard></Dashboard>
                </RequireAdmin>
              </RequireAuth>

            }>
              <Route index element={<Users></Users>}></Route>
              <Route path='/dashboard/addProducts' element={<AddProducts></AddProducts>}></Route>
              <Route path='/dashboard/manageProducts' element={<ManageProducts></ManageProducts>}></Route>
            </Route>

          </Routes>
        </InputContext.Provider>
        <ToastContainer />
        <Footer />
      </Wrapper>

    </div>
  );
}

export default App;
