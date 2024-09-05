import HomePage from "./landingPage/home/HomePage";
import SignUp from "./landingPage/signup/Signup.jsx";
import AboutPage from "./landingPage/about/AboutPage.jsx";
import ProductPage from "./landingPage/products/ProductPage.jsx";
import PricingPage from "./landingPage/pricing/PricingPage.jsx";
import SupportPage from "./landingPage/support/SupportPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./landingPage/Navbar.jsx";
import Footer from "./landingPage/Footer.jsx";
import NotFound from "./landingPage/NotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
