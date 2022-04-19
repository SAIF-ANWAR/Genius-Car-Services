
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import NotFound from './pages/Shared/NotFOund/NotFound';
import Register from './pages/Login/Register';
import CheckOut from './pages/CheckOut/CheckOut';
import RequireAuth from './pages/Login/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}> </Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }> </Route>

        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/register' element={<Register></Register>}> </Route>
        <Route path='/*' element={<NotFound></NotFound>}> </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
