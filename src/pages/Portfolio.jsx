import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';



import WOW from 'wowjs';

const Portfolio = () => {
  // Initialize WOW.js for scroll-based animations
  useEffect(() => {
    new WOW.WOW({
      live: false,  // This prevents WOW from initializing on dynamically added content
    }).init();
  }, []);

  return (
    <div>
      <Header />
      <div className="page-wrapper">
        <section className="page-title" style={{ backgroundImage: 'url(images/background/portfolio.jpg)' }}>
          <div className="auto-container">
            <div className="title-outer">
              <h1 className="title">Portfolio</h1>
              <ul className="page-breadcrumb">
                <li><Link to="/home" style={{ textDecoration: 'none' }}>Home</Link></li>
                <li>Portfolio</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="team-section pt-50">
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">Our Portfolio</span>
              <h2>We have worked on over 260 projects,</h2>
              <h3>spanning from corporations to modest solutions for start-ups.</h3>
            </div>

            <div className="row mt-4">
              {/* Portfolio items with WOW.js animation */}
              {[
                { link: "https://eswarcollegeofengg.org", imgSrc: "images/1.jpg", title: "Eswar College of Engg" },
                { link: "https://kumarpumps.co.in/", imgSrc: "images/2.jpg", title: "Kumar Pumps & Motors" },
                { link: "https://adapainteriors.com/", imgSrc: "images/3.jpg", title: "Adapa Interiors" },
                { link: "https://jesvidcryo.com/", imgSrc: "images/20.jpg", title: "Jesvid Cryo" },
                { link: "https://quadtreetech.com/", imgSrc: "images/21.jpg", title: "Quad Tree Tech" },
                { link: "https://godwin.co.in/", imgSrc: "images/14.jpg", title: "Godwin Groups" },
                { link: "https://ealabsipl.com/", imgSrc: "images/13.jpg", title: "EA Labs" },
                { link: "https://elabsinfotech.com/", imgSrc: "images/12.jpg", title: "E-Labs Infotech" },
                { link: "https://www.chcsservices.com.au/", imgSrc: "images/11.jpg", title: "CHCS Services" },
                { link: "https://activealliedhealth.com/", imgSrc: "images/19.jpg", title: "Allied Health Care" },
                { link: "https://sscompanies.in/", imgSrc: "images/18.jpg", title: "SS Companies" },
                { link: "https://easytaxsupport.com/", imgSrc: "images/4.jpg", title: "Easy Tax" },
                { link: "https://ashaap.com/", imgSrc: "images/5.jpg", title: "ASHA Association" },
                { link: "https://slnsfaciliitys.in/", imgSrc: "images/7.jpg", title: "SLNS Facilities" },
                { link: "https://medivalleyhospitals.com/", imgSrc: "images/8.jpg", title: "Medivalley Multispeciality" },
                { link: "https://a1eventdecors.com/", imgSrc: "images/6.jpg", title: "A1 Event Decors" },
                { link: "http://www.alkasur.com/", imgSrc: "images/17.jpg", title: "Alkasur" },
                { link: "https://healthhospitals.in/", imgSrc: "images/16.jpg", title: "Ora Apps" },
                { link: "https://healthhospitals.in/", imgSrc: "images/15.jpg", title: "Health Hospitals" },
                { link: "https://sundeeptraders.com/", imgSrc: "images/10.jpg", title: "Sundeep Traders" },
                { link: "https://smart-liv.in/public/", imgSrc: "images/9.jpg", title: "Smart Liv" }
              ].map((project, index) => (
                <div key={index} className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated">
                  <div className="inner-box">
                    <div className="image-box">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <figure className="image">
                          <img src={project.imgSrc} alt={project.title} />
                        </figure>
                        <span className="share-icon fa fa-arrow-right" />
                      </a>
                    </div>
                    <div className="info-box">
                      <h4 className="name">
                        <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                          {project.title}
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
