
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import "./App.css"
import ProductsHomePage from "./pages/productsHomePage/ProductsHomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./components/auth/login/login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/projectReact" element={<Home />} />
        <Route path="/productsHomePage" element={<ProductsHomePage />} />
        {/* <Route path="/detail/:id" element={<ProductDetail />} /> */}
        {/* <Route path="/ShowCats" element={<ShowCats />} /> */}
        {/* <Route path="/*" element={<NotFound />} /> */}
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
