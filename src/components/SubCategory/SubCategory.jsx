import React from "react";
import "./SubCategory.css";
import Header from "../Hedear/Header";
import Container from "../Container/Container";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import image from "../../assets/subcategory.png";
import { Zoom } from "react-awesome-reveal";

const SubCategory = ({ dataProps }) => {
  const { id } = useParams();
  const selectedItemId = parseFloat(id);
  const selectedItem = dataProps.find((item) => item.id === selectedItemId);
  if (!selectedItem) {
    return <div>لم يتم العثور على العنصر</div>;
  }

  const { subTitle, cover, link } = selectedItem.subCategory.item1;
  const subTitleKeys = Object.keys(subTitle);
  const coverKeys = Object.keys(cover);
  const linkKeys = Object.keys(link);

  const { subTitletow, covertow, linktow } = selectedItem.subCategory2.item1;
  const subTitletowKeys = Object.keys(subTitletow);
  const covertowKeys = Object.keys(covertow);
  const linktowKeys = Object.keys(linktow);

  return (
    <div>
      <Header />
      <Container>
        <div className="subcategory_card">
          <div className="subcategory_header">
            <img src={image} alt="" />
            <p>هنا رح تشوف الملازم مرقمه حسب الاقدميه</p>
          </div>
          {subTitleKeys.map((key, index) => (
            <Zoom key={index}>
              <div className="flix">
                <div className="subcategory_card_right">
                  <img src={cover[coverKeys[index]]} alt="" />
                  <h1>{subTitle[key]}</h1>
                </div>
                <div className="subcategory_card_left">
                  <Link to={link[linkKeys[index]]} target="_blank">
                    <button className="connectBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 640 512"
                        fill="white"
                      >
                        <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
                      </svg>
                      معاينة
                    </button>
                  </Link>
                </div>
              </div>
            </Zoom>
          ))}
        </div>

            <div className="lecture_tow_title">
              <h2>محاضرات الفصل الثاني</h2>
            </div>

            <div className="subcategory_card">

        {subTitletowKeys.map((key, index) => (
            <Zoom key={index}>
              <div className="flix">
                <div className="subcategory_card_right">
                  <img src={covertow[covertowKeys[index]]} alt="" />
                  <h1>{subTitletow[key]}</h1>
                </div>
                <div className="subcategory_card_left">
                  <Link to={linktow[linktowKeys[index]]} target="_blank">
                    <button className="connectBtn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 640 512"
                        fill="white"
                      >
                        <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
                      </svg>
                      معاينة
                    </button>
                  </Link>
                </div>
              </div>
            </Zoom>
          ))}
          </div>
      </Container>
      <Footer />
    </div>
  );
};

export default SubCategory;
