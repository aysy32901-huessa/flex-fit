import React from "react";
import "./FooterSection.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* وصف الشركة */}
        <div className="footer-about">
          <h3>FlexFit</h3>
          <p>
            FlexFit علامة تجارية متخصصة في الملابس الرياضية العصرية
            التي تجمع بين الراحة، الجودة، والأداء العالي.
          </p>
        </div>

        {/* لينكات */}
        <div className="footer-links">
          <h4>روابط سريعة</h4>
          <ul>
            <li><a href="#hero">الرئيسية</a></li>
            <li><a href="#products">المنتجات</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
          </ul>
        </div>

        {/* سوشيال */}
        <div className="footer-social">
          <h4>تابعنا</h4>
          <div className="social-icons">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 FlexFit. جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};

export default Footer;
