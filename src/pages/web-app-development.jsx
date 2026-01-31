import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const WebAppDevelopment = () => {
  // Initialize state with the first accordion item (index 0) as active
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    // If clicked item is already open, close it, else open the new one
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Whether animation should happen only once
      easing: 'ease-out', // Easing function for animations
    });
  }, []);

  return (
    <div>
      <Header />
      {/* Page Title Section */}
      <section className="page-title" style={{ backgroundImage: 'url(images/background/web-app.jpg)' }} data-aos="fade-in">
        <div className="auto-container">
          <div className="title-outer">
            <h1 className="title">Web App Development</h1>
            <ul className="page-breadcrumb">
              <li><Link to="/home" style={{ textDecoration: 'none' }}>Home</Link></li>
              <li>Services</li>
              <li>Web App Development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Web App Introduction Section */}
      <section className="testimonial-section-two" data-aos="fade-up">
        <div className="bg bg-pattern-11" />
        <div className="auto-container">
          <div className="row">
            <div className="image-column col-lg-6 col-md-12">
              <div className="inner-column">
                <div className="image-box">
                  <div className="bg-shape" />
                  <figure className="image image-4"><img src="images/resource/thumb-4.jpg" alt="Web Application" /></figure>
                  <figure className="image image-3"><img src="images/resource/thumb-3.jpg" alt="Web Application" /></figure>
                  <figure className="image image-2"><img src="images/resource/thumb-2.jpg" alt="Web Application" /></figure>
                  <figure className="image image-1"><img src="images/resource/thumb-11.jpg" alt="Web Application" /></figure>
                </div>
              </div>
            </div>
            <div className="testimonial-column col-lg-6 col-md-12" data-aos="fade-right">
              <div className="inner-column wow fadeInRight">
                <div className="sec-title">
                  <h2>We Develop Business-Focused Web Applications</h2>
                </div>
                <div className="testimonial-block-two">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="text" align="justify">
                        As a leading provider in the field of Web Application Development, Viraj Technologies is your ideal partner for scalable and robust web app solutions. Our expert team leverages the latest technologies and open-source platforms to create secure, high-performance web applications tailored to your unique business needs. Whether you're looking to improve internal workflows with enterprise applications, launch an interactive customer-facing platform, or build a full-fledged web application from scratch, we provide end-to-end solutions that optimize your business operations and deliver real results.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Web Apps Section with Accordion */}
      <section data-aos="fade-up">
        <div className="container pt-0 mt-5">
          <div className="row">
            <div className="col-md-8">
              <div className="col">
                <div className="sec-title">
                  <h2>Why Web Applications are a Necessity for Your Business?</h2>
                </div>
                <ul className="accordion-box wow fadeInRight animated">
                  {/* Accordion Item 1 */}
                  <li className="accordion block">
                    <div
                      className={`acc-btn ${activeIndex === 0 ? 'active' : ''}`}
                      onClick={() => toggleAccordion(0)}
                      data-aos="fade-up"
                    >
                      Better Efficiency
                      <div className={`icon fa ${activeIndex === 0 ? 'fa-minus' : 'fa-plus'}`} />
                    </div>
                    <div className={`acc-content ${activeIndex === 0 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text" align="justify">
                          Managing business operations using manual processes or local desktop software can create bottlenecks. Web applications ensure streamlined workflows, reduce redundancy, and allow employees to focus on core business activities.
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Accordion Item 2 */}
                  <li className="accordion block">
                    <div
                      className={`acc-btn ${activeIndex === 1 ? 'active' : ''}`}
                      onClick={() => toggleAccordion(1)}
                      data-aos="fade-up"
                    >
                      24x7 Accessibility
                      <div className={`icon fa ${activeIndex === 1 ? 'fa-minus' : 'fa-plus'}`} />
                    </div>
                    <div className={`acc-content ${activeIndex === 1 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text" align="justify">
                          Web applications provide round-the-clock access to data from any device with an internet connection, allowing businesses to operate smoothly, regardless of location or time.
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Accordion Item 3 */}
                  <li className="accordion block">
                    <div
                      className={`acc-btn ${activeIndex === 2 ? 'active' : ''}`}
                      onClick={() => toggleAccordion(2)}
                      data-aos="fade-up"
                    >
                      Top-Notch Security
                      <div className={`icon fa ${activeIndex === 2 ? 'fa-minus' : 'fa-plus'}`} />
                    </div>
                    <div className={`acc-content ${activeIndex === 2 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text" align="justify">
                          Web applications use cloud-based storage, ensuring your data is stored securely and backed up regularly, minimizing the risk of data loss or breach.
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Accordion Item 4 */}
                  <li className="accordion block">
                    <div
                      className={`acc-btn ${activeIndex === 3 ? 'active' : ''}`}
                      onClick={() => toggleAccordion(3)}
                      data-aos="fade-up"
                    >
                      Scalability and Customizability
                      <div className={`icon fa ${activeIndex === 3 ? 'fa-minus' : 'fa-plus'}`} />
                    </div>
                    <div className={`acc-content ${activeIndex === 3 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text" align="justify">
                          Unlike traditional software, web applications can scale as your business grows, providing greater flexibility and customizability without the need for frequent updates or replacements.
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Accordion Item 5 */}
                  <li className="accordion block">
                    <div
                      className={`acc-btn ${activeIndex === 4 ? 'active' : ''}`}
                      onClick={() => toggleAccordion(4)}
                      data-aos="fade-up"
                    >
                      Easy to Install and Maintain
                      <div className={`icon fa ${activeIndex === 4 ? 'fa-minus' : 'fa-plus'}`} />
                    </div>
                    <div className={`acc-content ${activeIndex === 4 ? 'current' : ''}`}>
                      <div className="content">
                        <div className="text" align="justify">
                          Web applications eliminate the need for multiple installations and updates on every individual device. Updates can be deployed remotely, ensuring that your system is always up-to-date and secure.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left">
              <img src="images/web.jpg" alt="Web Application" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebAppDevelopment;
