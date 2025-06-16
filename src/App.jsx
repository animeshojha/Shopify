import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer"
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop></Shop>} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product></Product>} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/login" element={<LoginSignup></LoginSignup>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
