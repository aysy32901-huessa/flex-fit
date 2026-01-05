import React from "react";
import "./OffersSection.css";

const offersData = [
  {
    id: 1,
    title: "خصم 20% على جميع التيشيرتات",
    description: "احصل على الراحة والأناقة أثناء التمرين بأفضل سعر",
    image: "https://images.pexels.com/photos/4803664/pexels-photo-4803664.jpeg"
  },
  {
    id: 2,
    title: "شورتات رياضية مجاناً عند شراء تيشيرتين",
    description: "عروض حصرية لفترة محدودة",
    image: "https://images.pexels.com/photos/8336882/pexels-photo-8336882.jpeg"
  },
  {
    id: 3,
    title: "اشترِ سترة رياضية واحصل على قبعة مجانية",
    description: "ترتديها أثناء الجري أو الصالات الرياضية",
    image: "https://images.pexels.com/photos/6669063/pexels-photo-6669063.jpeg"
  },
  {
    id: 4,
    title: "كوبونات خصم على أحذية الجيم",
    description: "وفر حتى 15% على مجموعتك الرياضية",
    image: "https://images.pexels.com/photos/415261/pexels-photo-415261.jpeg"
  },
  {
    id: 5,
    title: "مجموعة ملابس رياضية كاملة بسعر مميز",
    description: "راحة وأناقة في كل تمرين",
    image: "https://images.pexels.com/photos/5803608/pexels-photo-5803608.jpeg"
  },
  {
    id: 6,
    title: "قبعات وملحقات رياضية مجانية",
    description: "مع كل عملية شراء محددة",
    image: "https://images.pexels.com/photos/9366552/pexels-photo-9366552.jpeg"
  }
];

const OffersSection = () => {
  const handleAdd = (title) => {
    alert(`تم إضافة ${title} للسلة 🛒`);
  };

  return (
    <section className="offers-section" id="offers">
      <h2 className="section-title">العروض الخاصة</h2>
      <div className="offers-container">
        {offersData.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <button
              className="offer-btn"
              onClick={() => handleAdd(offer.title)}
            >
              استعد الآن
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
