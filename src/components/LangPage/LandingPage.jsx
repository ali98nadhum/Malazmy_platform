import React from "react";
import "./LandingPage.css";
import Container from "../Container/Container";
import Header from "../Hedear/Header";
import Footer from "../Footer/Footer";
import image from '../../assets/lang-image4.jpg';
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Container>
        <div className="land_page">
          <div className="right_sec">
            <img src={image} alt="" />
          </div>
          <div className="left_sec">
            <div className="text">
              <p>
                {" "}
                منصه مخصصه لطلاب جامعه التراث قسم هندسه تقنيات الحاسوب (المرحله الثانيه) عباره عن
                مكتبه سحابيه لنشر الملازم الخاصه بالمحاضرات وشرح المواد{" "}
              </p>
            </div>
            <div className="btn_class">
            <Link to={'/category'}>
              <button class="btn">
                <i class="animation"></i> تصفح الملازم <i class="animation"></i>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  );
};

export default LandingPage;
