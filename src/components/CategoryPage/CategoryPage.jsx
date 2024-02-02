import React from "react";
import "./CategoryPage.css";
import Header from "../Hedear/Header";
import image from "../../assets/categoty1.png";
import CardItem from "../CardItem/CardItem";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";

const CategoryPage = ({ dataProps }) => {
  return (
    <div>
      <Header />
      <div className="header_category">
        <div className="image_category">
          <img src={image} alt="" />
        </div>
        <div className="des_category">
          <p>بهذ القسم رح تلكه كل الملازم المتوفره الخاصه بالمواد</p>
        </div>
        <hr />
      </div>
      <Container>
        <div className="grid">
          {dataProps.map((item) => {
            return (
              <CardItem
                imageCagegory={item.img}
                title={item.title}
                id={item.id}
              />
            );
          })}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CategoryPage;
