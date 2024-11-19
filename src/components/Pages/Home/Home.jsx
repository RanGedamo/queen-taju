import "./Home.css";

import flower from "./Home-Img/flower.svg"; // מסלול לקובץ
import ballwhite1 from "./Home-Img/ball-white-1.svg";
import ballwhite2 from "./Home-Img/ball-white-2.svg";
import makeupImgHome from "./Home-Img/makeup-image-home.svg";
import goldSphere from "./Home-Img/gold-sphere.svg";
import goldenFrame from "./Home-Img/golden-round-frame.svg";
import Ellipse from "./Home-Img/Ellipse.svg";
import tajuHome from "./Home-Img/taju-home.svg";


function Home({ carouselState }) {

  





  return (
    <div className="home">
       <div className="textHome">
        <p>כל מה שאת צריכה זה קצת <br /> טגו</p>
      </div>

      <div className="flowerText">
        <img src={flower} alt="Flower" />
      </div>

      <div className="makeupImgHome">
        <img src={makeupImgHome} alt="makeup Img Home" />
      </div>

      <div className="goldSphere">
        <img src={goldSphere} alt="Gold Sphere" />
      </div>

      <div className="container-img">
        <div className="Ellipse">
          <img src={Ellipse} alt="Ellipse" />
        </div>
        <div className="tajuHome">
          <img src={tajuHome} alt="Taju Home" />
        </div>
      </div> 


    </div>
  );
}

export default Home;
