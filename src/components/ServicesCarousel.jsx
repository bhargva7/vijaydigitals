import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesCarousel = () => {
  const sliderRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Web Designing",
      description: "Our excellent web design solutions are also one of the reasons why Viraj has become...",
      count: "01",
      image: "./images/ls1.png", 
      link: '/staticweb',
    },
    {
      id: 2,
      title: "Web Development",
      description: "Our excellent web development solutions are also one of the reasons why Viraj has become...",
      count: "02",
      image: "./images/ls2.png",
      link: '/dynamic-web-desgin',
    },
    {
      id: 3,
      title: "App Development",
      description: "Viraj Technologies provides different businesses with topnotch mobile app solutions...",
      count: "03",
      image: "./images/ls3.png",
      link: '/hybrid-app-development',
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "For more than seven years, we have been developing the most futuristic software for...",
      count: "04",
      image: "./images/ls45.png", 
     link: '/digital-marketing'
    },
    {
      id: 5,
      title: "Branding Services",
      description: "Branding is similarly necessary for digital business, just like a conventional business to survive...",
      count: "05",
      image: "./images/ls45.png", 
      link: '/branding',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
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
    <section className="services-section-two">
      <div className="auto-container">
        <div className="upper-box row">
          <div className="left-column col-lg-12 col-md-12">
            <div className="sec-title light">
              <span>What We’re Offering</span>
              <h2>Services We’re Offering to Customers to Grow Business</h2>
            </div>
          </div>
        </div>
        <div className="outer-box">
          <Slider ref={sliderRef} {...settings}>
            {services.map((service) => (
              <div key={service.id} className="service-block-two">
                <div className="inner-box">
                  <span className="count">{service.count}</span>
                  <div className="icon-box">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <h5 className="title">
                    <a href={service.link}>{service.title}</a>
                  </h5>
                  <div className="text">{service.description}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
       
      </div>
    </section>
  );
};

export default ServicesCarousel;
