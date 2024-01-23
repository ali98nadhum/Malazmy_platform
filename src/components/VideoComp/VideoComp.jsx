import React, { useState } from "react";
import "./VideoComp.css";
import image from "../../assets/vidio.png";
import Header from "../../components/Hedear/Header";
import Container from "../Container/Container";
import Footer from "../../components/Footer/Footer";
import { IoLogoYoutube } from "react-icons/io";
import Button from "@mui/material/Button";
import { ProgramingVideo, mexVideo } from "../../dataV2";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const VideoComp = () => {
  const [dataProgramingVideo] = useState(ProgramingVideo);
  const [datamexVideo] = useState(mexVideo);
  return (
    <div>
      <Header />
      <Container>
        {/* ==== Start header page */}
        <div className="header_video">
          <div className="image_header">
            <img src={image} alt="" />
          </div>
          <div className="des_header">
            <p>
              بهذا القسم رح تلكه الفديوات الفديوات المتوفره لشرح قسم من المواد
            </p>
          </div>
        </div>
        {/* ===== Start content page */}
        <div className="video_content">
          <div className="title_video_content">
            <h1>مقاطع شرح ماده البرمجه</h1>
          </div>
          <Zoom left cascade>
            <div className="grid2">
              {dataProgramingVideo.map((item) => {
                return (
                  <div class="card">
                    <div class="bg">
                      <div className="logo_video">
                        <IoLogoYoutube className="youtube_icon" />
                      </div>
                      <div className="title_video">
                        <p> {item.title} </p>
                      </div>
                      <div className="btn_video">
                        <Link to={item.link}>
                          <Button className="btn" variant="contained">
                            مشاهده
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div class="blob"></div>
                  </div>
                );
              })}
            </div>
          </Zoom>
        </div>
        <div className="video_content">
          <div className="title_video_content">
            <h1>شروحات منوعه</h1>
          </div>
          <Zoom left cascade>
            <div className="grid2">
              {datamexVideo.map((item) => {
                return (
                  <div class="card">
                    <div class="bg">
                      <div className="logo_video">
                        <IoLogoYoutube className="youtube_icon" />
                      </div>
                      <div className="title_video">
                        <p> {item.title} </p>
                      </div>
                      <div className="btn_video">
                        <Link to={item.link}>
                          <Button className="btn" variant="contained">
                            مشاهده
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div class="blob"></div>
                  </div>
                );
              })}
            </div>
          </Zoom>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default VideoComp;
