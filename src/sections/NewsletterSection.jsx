import React, { useState } from "react";
import "./NewsletterSection.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("من فضلك أدخل بريدك الإلكتروني!");
    alert(`شكراً! تم تسجيل ${email} للاشتراك بالنشرة الإخبارية.`);
    setEmail("");
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <h2 className="section-title">اشترك في نشرتنا الإخبارية</h2>
      <p>كن أول من يعرف عن العروض والمنتجات الجديدة!</p>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">اشترك الآن</button>
      </form>
    </section>
  );
};

export default NewsletterSection;
