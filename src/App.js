import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./components/home";
import Cart from "./components/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;