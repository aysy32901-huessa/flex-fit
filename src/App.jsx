import React, { useState } from "react";

/* Components */
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

/* Sections */
import HeroSection from "./sections/HeroSection";
import ProductsSection from "./sections/ProductsSection";
import OffersSection from "./sections/OffersSection";
import AboutSection from "./sections/AboutSection";
import BlogSection from "./sections/BlogSection";
import ContactSection from "./sections/ContactSection";
import FAQSection from "./sections/FAQSection";
import FooterSection from "./sections/FooterSection";
import GallerySection from "./sections/GallerySection";
import TestimonialsSection from "./sections/TestimonialsSection";

/* CSS */
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <HeroSection />
      <ProductsSection addToCart={addToCart} />
      <OffersSection addToCart={addToCart} />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
