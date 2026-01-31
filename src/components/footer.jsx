import React from 'react';
import ScrollToTop  from '../components/scrollToTop'
const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="bg bg-pattern-9" />
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              {/* About Us Section */}
              <div className="footer-column col-xl-3 col-lg-12 col-md-12">
                <div className="footer-widget about-widget">
                  <div className="logo"><a href="/"><img src="images/logo.png" alt="" /></a></div>
                  <ul className="social-icon-two">
                  <li><a href="https://www.instagram.com/viraj_technologies/"><i className="fab fa-instagram" /></a></li>
              <li>
                <a href="https://www.linkedin.com/company/viraj-technologies-ap" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-linkedin"></span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61564610203592" target="_blank" rel="noopener noreferrer">
                  <span className="fab fa-facebook-square"></span>
                </a>
              </li>
                  </ul>
                </div>
              </div>

              {/* Explore Section */}
              <div className="footer-column col-xl-3 col-lg-4 col-md-4">
                <div className="footer-widget links-widget">
                  <h4 className="widget-title">Explore</h4>
                  <ul className="user-links">
                    <li><a href='/about'>About Company</a></li>
                    <li><a href='/digital-,marketing'>Services</a></li>
                    <li><a href='/portfolio'>Portfolio</a></li>
                    <li><a href='/enquiry'>Enquiry</a></li>
                    <li><a href='/contact'>Contact</a></li>
                  </ul>
                </div>
              </div>

              {/* Services Section */}
              <div className="footer-column col-xl-3 col-lg-4 col-md-4 col-sm-8">
                <div className="footer-widget gallery-widget">
                  <h4 className="widget-title">Services</h4>
                  <div className="widget-content">
                    <div className="outer clearfix">
                      <ul className="user-links">
                        <li><a href='/web-app-development'>Web Designing</a></li>
                        <li><a href='/hybrid-app-development'>Web Development</a></li>
                        <li><a href='/android-app-devlopment'>Mobile App Development</a></li>
                        <li><a href='/digital-marketing'>Digital Marketing</a></li>
                        <li><a href='/branding'>Branding</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="footer-column col-xl-3 col-lg-4 col-md-4">
                <div className="footer-widget contacts-widget">
                  <h4 className="widget-title">Contact</h4>
                  <div className="text">#33, Indraprastha Apartments, Near Tenali Flyover, Mangalagiri.</div>
                  <ul className="contact-info">
                    <li>info@virajtechnologies.com<br /></li>
                    <li><i className="fa fa-phone-square" /> <a href="tel:+917799878777" style={{ textDecoration: 'none' }}>+91 7799878777</a><br /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="copyright-text">©2025 All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
      <div class="scroll-to-top scroll-to-target" data-target="html">
  <span class="fa fa-angle-up"></span>
</div>

    </div>
  );
};

export default Footer;
