import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from './About';
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const theme = {
    colors: {
      heading: "",
      text: "rgba(29, 29, 29, .8)",
      white: "#fff",
      black: "212529",
      helper: "#8490ff",
      bg: "#000"
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Router>
    {/* <GlobalStyle> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About /> } />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
    {/* </GlobalStyle> */}
    </Router>
    </ThemeProvider>
  );
};

export default App;
