
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import "./App.css"
import ProductsHomePage from "./pages/productsHomePage/ProductsHomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./components/auth/login/login"
import Register from './components/auth/register/register';
import CartPage from './pages/CartPage/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectReact" element={<Home />} />
        <Route path="/projectReact/productsHomePage" element={<ProductsHomePage />} />
        {/* <Route path="/detail/:id" element={<ProductDetail />} /> */}
        {/* <Route path="/ShowCats" element={<ShowCats />} /> */}
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="/projectReact/signIn" element={<Login />}></Route>
        <Route path="/projectReact/signUp" element={<Register />}></Route>
        <Route path="/projectReact/cartPage" element={<CartPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
