import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/navbar/Navbar";
import Checkout from "./components/checkout/Checkout";

function App() {
    return (
        <>
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Products/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
