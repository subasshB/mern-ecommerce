import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Description from './screens/Description';
import Login from './screens/Login';
import Cart from './screens/Cart';
import Register from './screens/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homescreen/>} exact/>
          <Route path='/product/:id' element={<Description/>} exact/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
