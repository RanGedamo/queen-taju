import "./Gallery.css";
import React, { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Gallery({ carouselState }) {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popupImage, setPopupImage] = useState(null);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const customButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1000,
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "50%",
    cursor: "pointer",
  };

  async function fetchMedia(maxPages = 10) {
    let allMedia = [];
    let url = `https://graph.instagram.com/me/media?fields=id,media_url,media_type&access_token=${window._env_.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`;
    let pageCount = 0;

    while (url && pageCount < maxPages) {
      try {
        const response = await fetch(url);
        const data = await response.json();

        // הוסף את הנתונים שהתקבלו
        allMedia = [...allMedia, ...(data.data || [])];

        // עדכון ה-URL לעמוד הבא אם קיים
        url = data.paging?.next || null;

        // הגבל את מספר הדפים
        pageCount++;
      } catch (error) {
        console.error("Error fetching media:", error);
        break;
      }
    }

    return allMedia;
  }

  useEffect(() => {
    async function loadMedia() {
      const allMedia = await fetchMedia();
      const filteredImages = allMedia.filter(
        (item) => item.media_type === "IMAGE"
      );
      const filteredVideos = allMedia.filter(
        (item) => item.media_type === "VIDEO"
      );

      setImages(filteredImages);
      setVideos(filteredVideos);
      setLoading(false);
    }

    loadMedia();
  }, []);

  const handleImageClick = (imageUrl) => {
    setPopupImage(imageUrl); // הגדר את התמונה שנלחצה
  };

  const closePopup = () => {
    setPopupImage(null); // סגור את ה-popup
  };

  return (
    <div className="gallery">
      <div style={{ width: "80%", margin: "0 auto", padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>תמונות</h2>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/046/853/016/non_2x/instagram-logo-icon-transparent-background-free-png.png"
              style={{ width: "100px" }}
              alt=""
            />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" style={{ width: "100px",textAlign: "center", alignItems: "center" }}/>

          </div>
        ) : (
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={4500}
            arrows={true}
            containerClass="carousel-container"
            customLeftArrow={
              <button style={{ ...customButtonStyle, left: "10px" }}>
                {"<"}
              </button>
            }
            customRightArrow={
              <button style={{ ...customButtonStyle, right: "10px" }}>
                {">"}
              </button>
            }
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => handleImageClick(image.media_url)}
              >
                <LazyLoadImage
                  src={image.media_url}
                  alt={`Image ${index + 1}`}
                  effect="blur"
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
            ))}
          </Carousel>
        )}

        {/* Popup */}
        {popupImage && (
          <div className="popup" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={popupImage}
                alt="Popup"
                style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                  objectFit: "contain",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                }}
              />
            </div>
          </div>
        )}

        <h2 style={{ textAlign: "center" }}>סרטונים</h2>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/046/853/016/non_2x/instagram-logo-icon-transparent-background-free-png.png"
              style={{ width: "100px" }}
              alt=""
            />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" style={{ width: "100px",textAlign: "center", alignItems: "center" }}/>

          </div>
        ) : videos.length === 0 ? (
          <p style={{ textAlign: "center" }}>No videos available.</p>
        ) : (
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={4500}
            arrows={true}
            containerClass="carousel-container"
            customLeftArrow={
              <button style={{ ...customButtonStyle, left: "10px" }}>
                {"<"}
              </button>
            }
            customRightArrow={
              <button style={{ ...customButtonStyle, right: "10px" }}>
                {">"}
              </button>
            }
          >
            {videos.map((video, index) => (
              <div key={index} style={{ padding: "10px" }}>
                <video
                  controls
                  preload="metadata"
                  src={video.media_url}
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default Gallery;
