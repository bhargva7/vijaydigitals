import React, { useState } from 'react';
import Header from './header'
import Carousel from 'react-bootstrap/Carousel';

const Main = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Header />
      <section className="main-slider">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {/* First Slide */}
          <Carousel.Item>
            <img src="images/main-slider/1.jpg" alt="First slide" className="d-block w-100" />
            <Carousel.Caption>
              <h1>
                Website Design <br />
                <span className="style-font color2">&amp;</span> Development
              </h1>
              <a href="static-web-design.php" className="theme-btn btn-style-one bg-theme-color2">
                <span className="btn-title">Explore now</span>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item>
            <img src="images/main-slider/2.jpg" alt="Second slide" className="d-block w-100" />
            <Carousel.Caption>
              <h1>
                Mobile <br /> Applications <br /> Development
              </h1>
              <a href="hybrid-app-development.php" className="theme-btn btn-style-one bg-theme-color2">
                <span className="btn-title">Explore now</span>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Third Slide */}
          <Carousel.Item>
            <img src="images/main-slider/3.jpg" alt="Third slide" className="d-block w-100" />
            <Carousel.Caption>
              <h1>
                Digital <br /> Marketing <br /> Solutions
              </h1>
              <a href="seo-services.php" className="theme-btn btn-style-one bg-theme-color2">
                <span className="btn-title">Explore now</span>
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Fourth Slide */}
          <Carousel.Item>
            <img src="images/main-slider/4.jpg" alt="Fourth slide" className="d-block w-100" />
            <Carousel.Caption>
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
