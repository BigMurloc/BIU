import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Products from "./components/products/Products";
import Navbar from "./components/navbar/Navbar";
import Checkout from "./components/checkout/Checkout";
import ProductDetails from "./components/product_details/ProductDetails";

function App() {

    /**
     * TODO 1. LOGIC AND VIEW OF CERTAIN ITEM
     * TODO 2. CHECKOUT LOGIC AND VIEW (LIST OF ITEMS, SUMMARY)
     */

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Products/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/product/:id" element={<ProductDetails/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
