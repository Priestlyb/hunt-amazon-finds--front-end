import React from "react"
import { Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import Products from "./components/page/products/Products";
import About from "./components/page/About";
import BookDetail from "./components/page/products/ProductsDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/para32satalaya" element={<AddProduct />} exact />
          <Route path="/products" element={<Products />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
