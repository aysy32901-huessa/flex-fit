import React from "react";
import "./TestimonialsSection.css";

const testimonialsData = [
  {
    id: 1,
    name: "محمد علي",
    role: "عميل سعيد",
    text: "الملابس الرياضية من FlexFit ممتازة ومريحة جداً أثناء التمرين!",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 2,
    name: "سارة حسن",
    role: "عميلة وفية",
    text: "التصميم عصري والجودة ممتازة، أنا راضية جداً عن مشترياتي.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 3,
    name: "أحمد سمير",
    role: "رياضياتي المفضل",
    text: "أفضل ملابس رياضية استخدمتها، الخدمة سريعة والمنتجات أصلية.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">آراء العملاء</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <p className="text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
