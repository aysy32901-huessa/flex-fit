import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const handleClick = () => {
    alert("تم الضغط على زرار تسوق الآن! 🛒"); // الرسالة تظهر عند الضغط
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h1>مرحبًا بك في FlexFit</h1>
        <p>أفضل ملابس رياضية تجمع بين الأناقة والراحة لأدائك اليومي</p>
        <button className="cta-btn" onClick={handleClick}>
          تسوق الآن
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
