import React from "react";
import "./BlogSection.css";

const blogPosts = [
  {
    id: 1,
    title: "أفضل تمارين رياضية للمنزل",
    summary: "اكتشف أهم التمارين اللي ممكن تعملها بسهولة في البيت...",
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  {
    id: 2,
    title: "نصائح لتغذية صحية قبل التمرين",
    summary: "تعرف على الأطعمة اللي تمنحك طاقة قبل الجيم...",
    image: "https://images.pexels.com/photos/3757953/pexels-photo-3757953.jpeg?auto=compress&cs=tinysrgb&w=500"
  },
  
 {
    id: 2,
    title: "نصائح لتغذية صحية قبل التمرين",
    summary: "تعرف على الأطعمة اللي تمنحك طاقة قبل الجيم...",
    image: "https://images.pexels.com/photos/3757953/pexels-photo-3757953.jpeg?auto=compress&cs=tinysrgb&w=500"
  },

 {
    id: 2,
    title: "نصائح لتغذية صحية قبل التمرين",
    summary: "تعرف على الأطعمة اللي تمنحك طاقة قبل الجيم...",
    image: "https://images.pexels.com/photos/3757953/pexels-photo-3757953.jpeg?auto=compress&cs=tinysrgb&w=500"
  },

   {
    id: 2,
    title: "نصائح لتغذية صحية قبل التمرين",
    summary: "تعرف على الأطعمة اللي تمنحك طاقة قبل الجيم...",
    image: "https://images.pexels.com/photos/3757953/pexels-photo-3757953.jpeg?auto=compress&cs=tinysrgb&w=500"
  },

 {
    id: 2,
    title: "نصائح لتغذية صحية قبل التمرين",
    summary: "تعرف على الأطعمة اللي تمنحك طاقة قبل الجيم...",
    image: "https://images.pexels.com/photos/3757953/pexels-photo-3757953.jpeg?auto=compress&cs=tinysrgb&w=500"
  },


];

const BlogSection = () => {
  return (
    <section className="blog-section" id="blog">
      <h2 className="section-title">نصائح ومقالات</h2>
      <div className="blog-container">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <button className="read-more-btn" onClick={() => alert(`فتح المقال: ${post.title}`)}>
              اقرأ المزيد
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
