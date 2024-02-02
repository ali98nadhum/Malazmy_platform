import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import Container from "../Container/Container";
import Header from "../../components/Hedear/Header";
import Footer from "../../components/Footer/Footer";
import image from "../../assets/lang-image4.png";
import { Link } from "react-router-dom";
import LogoComp from "../LogoComp/LogoComp";

const LandingPage = ({ toggleTheme, theme }) => {
  const [showLogoComp, setShowLogoComp] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogoComp(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLogoComp && <LogoComp />}
      {!showLogoComp && (
        <>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Container>
            <div className="land_page">
              <div className="right_sec">
                <img src={image} alt="صورة" />
              </div>
              <div className="left_sec">
                <div className="text">
                  <p>
                    منصة مخصصة لطلاب جامعة التراث قسم هندسة تقنيات الحاسوب
                    (المرحلة الثانية) عبارة عن مكتبة سحابية لنشر الملازم الخاصة
                    بالمحاضرات وشرح المواد.
                  </p>
                </div>
                <div className="btn_class">
                  <Link to="/category">
                    <button className="btn">
                      <i className="animation"></i> تصفح الملازم{" "}
                      <i className="animation"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
          <Footer />
        </>
      )}
    </div>
  );
};

export default LandingPage;
