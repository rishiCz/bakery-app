import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
