import "./Home.css";
import React from "react";
import flower from "./Home-Img/flower.svg"; // מסלול לקובץ
import ballwhite1 from "./Home-Img/ball-white-1.svg";
import ballwhite2 from "./Home-Img/ball-white-2.svg";
import makeupImgHome from "./Home-Img/makeup-image-home.svg";
import goldSphere from "./Home-Img/gold-sphere.svg";
import goldenFrame from "./Home-Img/golden-round-frame.svg";
import Ellipse from "./Home-Img/Ellipse.svg";
import tajuHome from "./Home-Img/taju-home.svg";

function Home() {
  return (
    <div className="home">
      {/* <nav class="navbar">
        <div class="navbar-logo">Beautify</div>
        <ul class="navbar-links">
            <li><a href="#home">המלצות לקוחות</a></li>
            <li><a href="#about">עבודות</a></li>
            <li><a href="#services">יצירת קשר</a></li>

        </ul>
    </nav> */}

      <div className="textHome d-flex">
        <p>
          {" "}
          כל מה שאת צריכה זה קצת <br /> טגו{" "}
        </p>
      </div>

      <div className="flowerText">
        <img src={flower} alt="Flower" />
      </div>

      <div className="ballwhite1">
        <img src={ballwhite1} alt="Ball White 1" />
      </div>
      {/* <div className="ballwhite2">
        <img src={ballwhite2} alt="Ball White 2" />
      </div> */}

      <div className="makeupImgHome">
        <img src={makeupImgHome} alt="makeup Img Home" />
      </div>

      <div className="goldSphere">
        <img src={goldSphere} alt="makeup Img Home" />
      </div>

      <div className="d-flex container-img">

      <div className="Ellipse">
        <img src={Ellipse} alt="makeup Img Home" />
      </div>
      <div className="tajuHome">
        <img src={tajuHome} alt="makeup Img Home" />
      </div>

      </div>


    </div>
  );
}

export default Home;
