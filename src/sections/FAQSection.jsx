import React, { useState } from "react";
import "./FAQSection.css";

const faqData = [
  {
    question: "ما هي سياسة الإرجاع الخاصة بكم؟",
    answer: "يمكنك إرجاع أي منتج خلال 14 يومًا من تاريخ الشراء مع الفاتورة الأصلية."
  },
  {
    question: "هل يوجد شحن دولي؟",
    answer: "نعم، نقوم بالشحن لجميع دول العالم مع تتبع الشحنة."
  },
  {
    question: "كيف يمكنني تتبع طلبي؟",
    answer: "بعد الشراء، سترسل لك رسالة بريد إلكتروني تحتوي على رابط تتبع الطلب."
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "يمكنك الدفع عن طريق بطاقة الائتمان، باي بال، أو الدفع عند الاستلام."
  },
  {
    question: "هل تقدمون خصومات على الطلبات الكبيرة؟",
    answer: "نعم، يرجى التواصل معنا للحصول على عرض خاص للطلبات الكبيرة."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="section-title">الأسئلة الشائعة</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleAnswer(index)}
          >
            <h3>{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
