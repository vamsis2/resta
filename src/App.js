import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./Cart"
import Order from "./Order";
//import Order2 from "./Order2";
import "./Order.css"
import Phonepay from "./Phonepay";
import Pizz from "./pizz"
import Phonpay from "./Phonpay";
import { CartProvider } from "react-use-cart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";


function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
           <Route path="/cart" element={<Cart/>}/>
          <Route path="/menu" element={<Menu/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/phonepay" element={<Phonepay/>} />
          <Route path="/phonpay" element={<Phonpay/>} />
          <Route path="/pizz" element={<Pizz/>} />
        </Routes>
      </Router>
      </CartProvider>
    </div>  
  );
}
export default App;





