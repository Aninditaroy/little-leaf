
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import 'tw-elements';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

      </Routes>

    </div>
  );
}

export default App;
