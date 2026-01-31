import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientsSection = () => {
  const settings = {
    dots: false,  // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="clients-section style-two">
      <div className="auto-container">
        <div className="sponsors-outer">
          <Slider {...settings}>
            <div className="slide-item">
              <a href="/">
                <img src="images/c1.jpg" alt="Client 1" />
              </a>
            </div>
            <div className="slide-item">
              <a href="/">
                <img src="images/c2.jpg" alt="Client 2" />
              </a>
            </div>
            <div className="slide-item">
              <a href="/">
                <img src="images/c3.jpg" alt="Client 3" />
              </a>
            </div>
            <div className="slide-item">
              <a href="/">
                <img src="images/c4.jpg" alt="Client 4" />
              </a>
            </div>
            <div className="slide-item">
              <a href="/">
                <img src="images/c5.jpg" alt="Client 5" />
              </a>
            </div>
            <div className="slide-item">
              <a href="/">
                <img src="images/c6.jpg" alt="Client 6" />
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
