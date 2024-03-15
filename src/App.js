import './App.css';
import {Routes,Route} from 'react-router-dom'
import Products from './Components/Products';
import Singleproduct from './Components/Singleproduct';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Nav from './Components/Nav';
import './Components/base.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       <Nav />
    <Routes>
      <Route path='/' element={<Products />}/>
      <Route path='/singleproduct/:id' element={<Singleproduct />}/>
      <Route path='/cart/:id' element={<Cart />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </div>
  );
}


export default App;
