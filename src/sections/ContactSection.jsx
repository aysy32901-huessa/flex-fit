import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`شكرًا ${formData.name}، تم إرسال رسالتك!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">تواصل معنا</h2>
      <p className="contact-intro">لديك أي استفسار؟ ارسل لنا رسالة وسنعود إليك في أسرع وقت.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="اسمك الكامل"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="بريدك الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="رسالتك..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-btn">إرسال الرسالة</button>
      </form>
    </section>
  );
};

export default ContactSection;
