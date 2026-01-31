import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';


const Main = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
     
      <section className="main-slider">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {/* First Slide */}
          <Carousel.Item>
            <img src="images/main-slider/1.jpg" alt="First slide" className="d-block w-100" />
            <Carousel.Caption className="text-left"> {/* Align text to the left */}
              <h1>
                Website Design <br />
                <span className="style-font color2">&amp;</span> Development
              </h1>
              <a href=" /staticweb" className="theme-btn btn-style-one bg-theme-color2">
                <span className="btn-title">Explore now</span>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item>
            <img src="images/main-slider/2.jpg" alt="Second slide" className="d-block w-100" />
            <Carousel.Caption className="text-left">
              <h1>
                Mobile <br /> Applications <br /> Development
              </h1>
              <a href= '/hybrid-app-development' className="theme-btn btn-style-one bg-theme-color2">
                <span className="btn-title">Explore now</span>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Third Slide */}
          <Carousel.Item>
            <img src="images/main-slider/3.jpg" alt="Third slide" className="d-block w-100" />
            <Carousel.Caption className="text-left">
              <h1>
                Digital <br /> Marketing <br /> Solutions
              </h1>
              <a href= '/digital-marketing' className="theme-btn btn-style-one bg-theme-color2">
                <span className="btn-title">Explore now</span>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Fourth Slide */}
          <Carousel.Item>
            <img src="images/main-slider/4.jpg" alt="Fourth slide" className="d-block w-100" />
            <Carousel.Caption className="text-left">
              <h1>Business Branding <br /> Services</h1>
              <a href="logo-design.php" className="theme-btn btn-style-one bg-theme-color2">
                <span className="btn-title">Explore now</span>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>






  );
};

export default Main;
