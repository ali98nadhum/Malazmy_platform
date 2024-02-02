import React, { useState } from "react";
import "./Lectures.css";
import { Lecture } from "../../dataV3";
import Header from "../Hedear/Header";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import image from "../../assets/calendar.png";

const Lectures = () => {
  const [weekSchedule] = useState(Lecture[0].weekSchedule);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(weekSchedule[day]);
  };

  return (
    <div className="lectures">
      <Header />
      <Container>
        <h1 className="title_Lecture">جدول محاضرات الأسبوع</h1>
        <hr className="title_line" />
        <div className="calendar">
          <img src={image} alt="" />
          <p>
            هنا مجرد تختار اليوم المطلوب رح يطلع عندك المحاضرات الخاصه باليوم
            نفسه ولكل الشعب
          </p>
        </div>
        <div className="flex_Lecture">
          {Object.keys(weekSchedule).map((day, index) => (
            <button
              key={index}
              onClick={() => handleDayClick(day)}
              className="btn_day"
            >
              {weekSchedule[day].day}
            </button>
          ))}
        </div>

        {selectedDay && (
          <div className="table">
            <h2>محاضرات يوم {selectedDay.day}</h2>
            <ul className="parint_table">
              {Object.keys(selectedDay.groups).map((group, index) => (
                <li key={index}>
                  <h3>جدول شعبه {group}</h3>
                  <div className="big_table">
                    <div className="info_lectures">
                      {Object.keys(selectedDay.groups[group].lectures).map(
                        (lecture, lectureIndex) => (
                          <div className="flex_info">
                            <p key={lectureIndex}> {lecture} </p>
                            <p key={lectureIndex}>
                              {selectedDay.groups[group].lectures[lecture].time}
                            </p>
                            <p key={lectureIndex}>
                              {
                                selectedDay.groups[group].lectures[lecture]
                                  .classroom
                              }
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Lectures;
