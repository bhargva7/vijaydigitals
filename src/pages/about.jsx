import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css'; // Import default styles for CircularProgressbar
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { WOW } from 'wowjs';  // Import WOW.js for scroll-based animations
import DynamicGraphSection from '../components/DynamicGraphSection'

const About = () => {
  // Set the default active index to 0 (first section should be open)
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    // Initialize WOW.js for triggering animations when elements are in the viewport
    new WOW().init();
  }, []);

  const handleAccordionToggle = (index) => {
    // If the clicked section is already active, we close it by setting activeIndex to null
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      // Otherwise, set the clicked section as the active one
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <Header />

      {/* Page Title Section */}
      <section className="page-title wow fadeIn" style={{ backgroundImage: 'url(images/background/page-title.jpg)' }}>
        <div className="auto-container">
          <div className="title-outer">
            <h1 className="title">About Us</h1>
            <ul className="page-breadcrumb">
              <li><Link to="/home" style={{ textDecoration: 'none' }}>Home</Link></li>
              <li>About Company</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section pb-0 wow fadeInUp">
        <div className="auto-container">
          <div className="row">
            {/* Content Section */}
            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title">
                  <span>About Us</span>
                  <h4>Who we are?</h4>
                  <div className="text" align="justify">
                  Our approach lies in taking challenges and overcoming them. Projects that include Innovation, Brainstorming and Challenges excite us. Moreover, we love those clients who have an imagination for the project and have expectations from us. Our Technical strength and years of Industry Experience have helped us understand the nook and cranny of the Web Design and Development world. We work hard to meet the customer satisfaction.
                  </div>
                  <div className="text" align="justify">
                  At Viraj Technologies we aim at providing the finest Web Design, Development and Marketing solutions to our clients that would help them experience a profitable growth online as well as help us increase our happy client list further. We eye on improving a number of business aspects that include Quality of Work, Customer Services, Technology Implementation, Dynamic Innovation and keeping commitment to name a few.
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about-5.jpg" alt="Viraj Technologies" /></figure>
                <figure className="image-2 overlay-anim wow fadeInRight"><img src="images/resource/about-8.jpg" alt="Viraj Technologies" /></figure>
                <div className="experience bounce-y">
                  <div className="inner">
                    <i className="icon flaticon-discuss" />
                    <div className="text"><strong>07+</strong> Years of <br />experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section-four p-0 mb-5 wow fadeIn">
  <div className="auto-container">
    <div className="row g-0">

      {/* Our Approach */}
      <div className="feature-block-five col-lg-6 col-md-12 col-sm-12 d-flex wow fadeInLeft animated">
        <div className="inner-box d-flex flex-column">
          <div className="content flex-grow-1">
            <h5 className="title">Our Approach</h5>
            <div className="text" align="justify">
              Our approach lies in taking challenges and overcoming them. Projects that include Innovation, Brainstorming, and Challenges excite us. Moreover, we love those clients who have an imagination for the project and have expectations from us. Our technical strength and years of Industry experience have helped us understand the nook and cranny of the Web Design and Development world. We work hard to meet customer satisfaction.
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="feature-block-five col-lg-6 col-md-12 col-sm-12 d-flex wow fadeInLeft animated">
        <div className="inner-box d-flex flex-column">
          <div className="content flex-grow-1">
            <h5 className="title">Our Vision</h5>
            <div className="text" align="justify">
              At Viraj Technologies, we aim at providing the finest Web Design, Development, and Marketing solutions to our clients that would help them experience profitable growth online as well as help us increase our happy client list further. We focus on improving various business aspects including Quality of Work, Customer Service, Technology Implementation, and Dynamic Innovation.
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* What We Do Section */}
      <section className="faqs-section">
        <div className="bg bg-pattern-4" />
        <div className="auto-container">
          <div className="sec-title text-center wow fadeIn">
            <span>What We Do?</span>
            <h2>What Do We Develop?</h2>
          </div>
          <div className="row">
            {/* Accordion */}
            <div className="faq-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <ul className="accordion-box">
                  {/* Web Application Development */}
                  <li className="accordion block wow fadeInUp">
                    <div className={`acc-btn ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleAccordionToggle(0)}>
                      Web Application Development
                      <div className={`icon ${activeIndex === 0 ? 'fa fa-angle-up' : 'fa fa-angle-down'}`} />
                    </div>
                    <div className={`acc-content ${activeIndex === 0 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text" align="justify">
                          We at Viraj Technologies, develop advanced B2B and B2C compatible Web applications that will meet business challenges and simplify operations. Our experts offer 24x7 support in Web Application Development.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Website Designing */}
                  <li className="accordion block wow fadeInUp">
                    <div className={`acc-btn ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleAccordionToggle(1)}>
                      Website Designing
                      <div className={`icon ${activeIndex === 1 ? 'fa fa-angle-up' : 'fa fa-angle-down'}`} />
                    </div>
                    <div className={`acc-content ${activeIndex === 1 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text" align="justify">
                          We offer attractive website designs that can convert visitors into customers. We create custom website layouts from scratch that are trendy and focused on user experience.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Ecommerce Development */}
                  <li className="accordion block wow fadeInUp">
                    <div className={`acc-btn ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleAccordionToggle(2)}>
                      Ecommerce Development
                      <div className={`icon ${activeIndex === 2 ? 'fa fa-angle-up' : 'fa fa-angle-down'}`} />
                    </div>
                    <div className={`acc-content ${activeIndex === 2 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text" align="justify">
                          We build the finest Ecommerce solutions for B2B and B2C businesses. Our online stores are designed to boost sales with easy navigation and a user-friendly interface.
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Mobile App Development */}
                  <li className="accordion block wow fadeInUp">
                    <div className={`acc-btn ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleAccordionToggle(3)}>
                      Mobile App Development
                      <div className={`icon ${activeIndex === 3 ? 'fa fa-angle-up' : 'fa fa-angle-down'}`} />
                    </div>
                    <div className={`acc-content ${activeIndex === 3 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text" align="justify">
                          We build feature-rich mobile applications for Android and iOS platforms. Our native and hybrid apps are designed to enhance user engagement and boost your business.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Graph and Image Section */}
 <DynamicGraphSection />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
