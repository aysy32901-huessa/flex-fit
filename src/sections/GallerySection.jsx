import React from "react";
import "./GallerySection.css";

const galleryImages = [
  "https://images.pexels.com/photos/5037317/pexels-photo-5037317.jpeg",
  "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/5039659/pexels-photo-5039659.jpeg",
  "https://images.pexels.com/photos/5588326/pexels-photo-5588326.jpeg",
  "https://images.pexels.com/photos/3757950/pexels-photo-3757950.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=500"
];

const GallerySection = () => {
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-title">معرض الصور</h2>
      <div className="gallery-container">
        {galleryImages.map((img, index) => (
          <div key={index} className="gallery-card">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
