import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css"
function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path="/" index element={<Home />}></Route>
          {/* <Route path="/detail/:id" element={<ProductDetail />}></Route> */}
          {/* <Route path="/ShowCart" element={<ShowCart />}></Route>
<Route path="/ShowCats" element={<ShowCats />}></Route> */}
          {/* <Route path="/*" element={<NotFound />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
