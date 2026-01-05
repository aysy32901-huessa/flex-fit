import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./ProductsSection.css";

const productsData = [
{
  id: 1,
  name: "تيشيرت رياضي",
  price: 499,
  rating: 4,
  description: "تيشيرت رياضي مريح ومناسب لكل التمارين",
  image: "https://images.pexels.com/photos/1564459/pexels-photo-1564459.jpeg",
  badge: "NEW"
},


 {
  id: 2,
  name: "شورت رياضي أزرق",
  price: 180,
  rating: 5,
  description: "مثالي للتمارين الصباحية والجيم",
  image: "https://images.pexels.com/photos/8980809/pexels-photo-8980809.jpeg",
  badge: "NEW"
},


  {
    id: 3,
    name: "سويت شيرت رياضي رمادي",
    price: 350,
    rating: 4,
    description: "خفيف ودافئ في نفس الوقت",
    image: "https://images.pexels.com/photos/6539433/pexels-photo-6539433.jpeg",
    badge: "NEW"
  },
  {
    id: 4,
    name: "بنطال رياضي أسود",
    price: 300,
    rating: 5,
    description: "مرن ومريح لجميع الحركات",
    image: "https://images.pexels.com/photos/5588326/pexels-photo-5588326.jpeg",
    badge: "NEW"
  },
  {
    id: 5,
    name: "جاكيت رياضي أخضر",
    price: 450,
    rating: 4,
    description: "يحافظ على دفئك أثناء التدريب الخارجي",
    image: "https://images.pexels.com/photos/6292762/pexels-photo-6292762.jpeg",
    badge: "NEW"
  },
  {
    id: 6,
    name: "حذاء رياضي أبيض",
    price: 600,
    rating: 5,
    description: "خفيف ومرن للأداء العالي",
    image: "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg",
    badge: "NEW"
  },
  {
    id: 7,
    name: "قميص رياضي أحمر",
    price: 270,
    rating: 4,
    description: "مثالي للجري والتمارين اليومية",
    image: "https://images.pexels.com/photos/7406845/pexels-photo-7406845.jpeg",
    badge: "NEW"
  },
  {
    id: 8,
    name: "سويت شيرت رياضي أزرق",
    price: 340,
    rating: 5,
    description: "راحة وأناقة في نفس الوقت",
    image: "https://images.pexels.com/photos/8454949/pexels-photo-8454949.jpeg",
    badge: "NEW"
  },
  {
    id: 9,
    name: "بنطال رياضي رمادي",
    price: 320,
    rating: 4,
    description: "مرن ومريح لجميع الحركات",
    image: "https://images.pexels.com/photos/8455648/pexels-photo-8455648.jpeg",
    badge: "NEW"
  },
  {
    id: 10,
    name: "حذاء رياضي أسود",
    price: 580,
    rating: 5,
    description: "خفيف ويدعم الأداء الرياضي العالي",
    image: "https://images.pexels.com/photos/7432/pexels-photo.jpg",
    badge: "NEW"
  },
  {
    id: 11,
    name: "جاكيت رياضي أسود",
    price: 470,
    rating: 4,
    description: "يحافظ على دفئك أثناء التدريبات الخارجية",
    image: "https://images.pexels.com/photos/11298969/pexels-photo-11298969.jpeg",
    badge: "NEW"
  },
  {
    id: 12,
    name: "تيشيرت رياضي أصفر",
    price: 260,
    rating: 4,
    description: "خفيف ومريح أثناء التمارين اليومية",
    image: "https://images.pexels.com/photos/6455620/pexels-photo-6455620.jpeg",
    badge: "NEW"
  },
  {
    id: 13,
    name: "شورت رياضي أخضر",
    price: 190,
    rating: 5,
    description: "مثالي للجيم والجري",
    image: "https://images.pexels.com/photos/7880208/pexels-photo-7880208.jpeg",
    badge: "NEW"
  },
  {
    id: 14,
    name: "قميص رياضي أبيض",
    price: 280,
    rating: 4,
    description: "مريح وأنيق لجميع التمارين",
    image: "https://images.pexels.com/photos/7879943/pexels-photo-7879943.jpeg",
    badge: "NEW"
  },
  {
    id: 15,
    name: "حذاء رياضي أزرق",
    price: 590,
    rating: 5,
    description: "خفيف ومرن، أداء عالي للجري",
    image: "https://images.pexels.com/photos/35528445/pexels-photo-35528445.jpeg",
    badge: "NEW"
  },
];

const ProductsSection = ({ addToCart }) => {
  return (
    <section className="products-section" id="products">
      <h2 className="section-title">منتجاتنا</h2>
      <div className="products-grid">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
