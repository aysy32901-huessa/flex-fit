import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-card">
        <div className="about-text">
          <h2>عن FlexFit</h2>
          <p>
            FlexFit هي شركة متخصصة في الملابس الرياضية التي تجمع بين
            الأناقة والراحة والأداء العالي. نعمل على توفير أفضل المنتجات
            لتلبية احتياجات الرياضيين والهواة على حد سواء، مع التركيز على
            الجودة والتصميم العصري.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
            alt="FlexFit" 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
