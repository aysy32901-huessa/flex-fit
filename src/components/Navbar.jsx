import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
      alert("تم الضغط على زرار تسوق الآن! 🛒");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">FlexFit</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#hero">الرئيسية</a></li>
        <li><a href="#products">منتجاتنا</a></li>
        <li><a href="#offers">العروض</a></li>
      </ul>

      <div className="nav-icons">
       

        <div className="cart">
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>


        {/* أيقونة المنيو */}
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

<button className="shop-btn" onClick={scrollToProducts}>
          تسوق الآن
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
