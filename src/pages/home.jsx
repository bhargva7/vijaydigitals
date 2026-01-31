import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css';
import Header from '../components/header';
import Main from '../components/maincar';
import ServicesCarousel from '../components/ServicesCarousel';
import Footer from '../components/footer';
import ClientsSection from '../components/ClientsSection';

const Home = () => {
  useEffect(() => {
    // Initialize WOW.js to activate animations on scroll
    new WOW.WOW({
      live: false,  // Disables the "live" feature for dynamically added content
    }).init();
  }, []);

  return (
    <div>
      <Header />
      <Main />
      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
              <div className="inner-column">
                <div className="sec-title">
                  <h4>We offer topnotch services from web designing to development and marketing.</h4>
                  <div className="text" align="justify">
                    Viraj Technologies is a well-known web development company that has served various organizations from various industries in India and abroad for the past seven years. Viraj offers a wide range of services with a single goal in mind: to help your business flourish. We take satisfaction in being able to provide the most intuitive, robust, feature-rich, and innovative digital solutions for both B2B and B2C organizations of all sizes. We do everything from logo design to complicated website and software development, as well as entire digital marketing, to help you beat the competition and create an effect in the market.
                  </div>
                </div>
                <div className="btn-box">
                  <a href= '/about' className="theme-btn btn-style-one">
                    <span className="btn-title">Explore now</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1 overlay-anim wow fadeInUp">
                  <img src="images/resource/about-1.jpg" alt="" />
                </figure>
                <figure className="image-2 overlay-anim wow fadeInRight">
                  <img src="images/resource/about-2.jpg" alt="" />
                </figure>
                <div className="experience bounce-y">
                  <div className="inner">
                    <i className="icon flaticon-discuss" />
                    <div className="text">
                      <strong>07+</strong> Years of <br />
                      experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fun-fact-section pt-0">
        <div className="auto-container">
          <div className="fact-counter">
            <div className="row">
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner">
                  <i className="icon flaticon-campaign" />
                  <div className="count-box counted">
                    <span className="count-text" data-speed={3000} data-stop={100}>260</span>
                  </div>
                  <h6 className="counter-title">Projects completed</h6>
                </div>
              </div>
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                <div className="inner">
                  <i className="icon flaticon-reputation" />
                  <div className="count-box counted">
                    <span className="count-text" data-speed={3000} data-stop={100}>12</span>
                  </div>
                  <h6 className="counter-title">Active clients</h6>
                </div>
              </div>
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                <div className="inner">
                  <i className="icon flaticon-coffee" />
                  <div className="count-box counted">
                    <span className="count-text" data-speed={3000} data-stop={125}>125</span>
                  </div>
                  <h6 className="counter-title">Cups of coffee</h6>
                </div>
              </div>
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                <div className="inner">
                  <i className="icon flaticon-social-campaign" />
                  <div className="count-box counted">
                    <span className="count-text" data-speed={3000} data-stop={100}>150</span>
                  </div>
                  <h6 className="counter-title">Satisfied customers</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesCarousel />
      <section className="about-section-four pt-70">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight">
              <div className="inner-column">
                <div className="sec-title">
                  <span className>Why Choose Us?</span>
                  <h2>Change your business look with us</h2>
                  <div className="text">
                    The regular improvement over seven years has helped us build the foundation for excellence in our services.
                  </div>
                  <div className="text">
                    Here are some reasons why we  often referred to as the best in what we do!
                  </div>
                </div>
                <ul>
                  <li className="title1 mb-10">
                    <i className="fa fa-arrow-right pr-15" /> Experienced Team of Experts
                  </li>
                  <li className="title1 mb-10">
                    <i className="fa fa-arrow-right pr-15" /> On-Time Delivery
                  </li>
                  <li className="title1 mb-10">
                    <i className="fa fa-arrow-right pr-15" /> Customer-Centric Approach
                  </li>
                  <li className="title1 mb-10">
                    <i className="fa fa-arrow-right pr-15" /> Transparency
                  </li>
                  <li className="title1 mb-10">
                    <i className="fa fa-arrow-right pr-15" /> Hassle-Free Support
                  </li>
                </ul>
                <div className="text">Building Satisfied Customer Base is Our Ultimate Business Strategy</div>
              </div>
            </div>
            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="image-box">
                  <span className="bg-shape" />
                  <figure className="image-1 overlay-anim wow fadeInUp">
                    <img src="images/resource/about-6.jpg" alt="" />
                  </figure>
                  <figure className="image-2 overlay-anim wow fadeInRight">
                    <img src="images/resource/about-7.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="">Work Process</span>
            <h2>Work Process That Leads Businesses to Success</h2>
          </div>
          <div className="row text-center">
            <div className="process-block col-lg-2 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="count">01</span> <i className="icon flaticon-concept"></i>
                </div>
                <h5 className="title">Requirement Gathering</h5>
              </div>
            </div>
            <div className="process-block col-lg-2 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="count">02</span> <i className="icon flaticon-programmer"></i>
                </div>
                <h5 className="title">Planning</h5>
              </div>
            </div>
            <div className="process-block col-lg-2 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="count">03</span> <i className="icon flaticon-access"></i>
                </div>
                <h5 className="title">Design</h5>
              </div>
            </div>
            <div className="process-block col-lg-2 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="count">04</span> <i className="icon flaticon-access"></i>
                </div>
                <h5 className="title">Develop</h5>
              </div>
            </div>
            <div className="process-block col-lg-2 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1600ms">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="count">05</span> <i className="icon flaticon-access"></i>
                </div>
                <h5 className="title">Testing</h5>
              </div>
            </div>
             <div className="process-block col-lg-2 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1600ms">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="count">06</span> <i className="icon flaticon-access"></i>
                </div>
                <h5 className="title">Launch and Support</h5>
              </div>
            </div>
        </div>
        </div>
      </section>
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Home;
