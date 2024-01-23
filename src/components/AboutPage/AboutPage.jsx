import React from "react";
import "./AboutPage.css";
import Header from "../Hedear/Header";
import Container from "../Container/Container";
import image1 from "../../assets/about.png";
import image2 from "../../assets/about_image.jpg";
import image3 from "../../assets/info_image.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
// import icon
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="about">
          <h1 className="title">مطورين المنصه</h1>
          <hr />
          {/* ===== Top section ===== */}
          <div className="top">
            <div className="about_card">
              <div className="avatar">
                <img src={image2} alt="" />
              </div>
              <div className="name">
                <h3>علي ناظم</h3>
              </div>

              <div className="des">
                <p>Computer engineering student and full stack web developer</p>
              </div>

              <div className="social_media">
                <Link to={'https://www.instagram.com/alinadhum_?igsh=MWE4YW1mam1xejMweQ=='}>
                  <FaInstagram className="icon" />
                </Link>
                <Link to={'https://m.facebook.com/da321qxp'}>
                  <FaFacebook className="icon" />
                </Link>
                <Link>
                  <FaLinkedin className="icon" />
                </Link>
                <Link to={'https://t.me/Alinadhum98'}>
                  <FaTelegram className="icon" />
                </Link>
                <Link to={'https://github.com/ali98nadhum'}>
                  <FaGithub className="icon" />
                </Link>
              </div>
            </div>
            <div className="about_card">
              <div className="avatar">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/242/494/original/vector-female-developer.jpg"
                  alt=""
                />
              </div>
              <div className="name">
                <h3>فاطمه محمد</h3>
              </div>

              <div className="des">
                <p>
                  Software engineer , full stack web developer programmer in a
                  startup company
                </p>
              </div>

              <div className="social_media">
                <Link>
                  <FaInstagram className="icon" />
                </Link>
                <Link>
                  <FaFacebook className="icon" />
                </Link>
                <Link>
                  <FaLinkedin className="icon" />
                </Link>
                <Link>
                  <FaTelegram className="icon" />
                </Link>
                <Link>
                  <FaGithub className="icon" />
                </Link>
              </div>
            </div>
          </div>
          {/* ===== Buttom section ===== */}
          <div className="bottom">
            <div className="left">
              <div className="image_left">
                <img src={image3} alt="" />
              </div>
              <Link to={'https://t.me/+2wHU4Q-4dV1jNjYy'}>
                <div className="sec1">
                  <FaTelegram className="telegram" />
                  <p>كروب التليكرام الرسمي </p>
                </div>
              </Link>
              <Link to={'https://t.me/+sGW22UmGT1UyOTU6'}>
                <div className="sec2">
                  <FaTelegram className="telegram" />
                  <p>قناه الملازم على التليكرام </p>
                </div>
              </Link>
            </div>
            <div className="right">
              <div className="image_right">
                <img src={image1} alt="" />
              </div>

              <h1>اهداف المنصه :</h1>

              <ul>
                <li>تسهيل الوصول الى الملازم الخاصه بالمواد</li>
                <li>تسهيل الوصول الى الفديوات الشرحيه الخاصه بالمواد</li>
                <li>توفير جميع المعلومات الخاصه بالدفعه</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutPage;
