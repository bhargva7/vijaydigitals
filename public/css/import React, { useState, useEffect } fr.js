import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState(new Set());

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'visible' : 'hidden'; // Lock/Unlock body scroll
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'visible';
  };

  const toggleDropdown = (index) => {
    setOpenDropdowns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Navigation items
  const navigationItems = [
    { text: 'Home', link: '/', current: true },
    { text: 'About Us', link: '/about' },
    {
      text: 'Services',
      link: '#',
      dropdown: [
        {
          text: 'Web Design & Development',
          link: '#',
          submenu: [
            { text: 'Static Web Design', link: '/staticweb' },
            { text: 'Dynamic Web Design', link: '/dynamic-web-desgin' },
            { text: 'Ecommerce Web Design', link: '/ecommerce' },
            { text: 'Web App Development', link: '/web-app-development' },
          ]
        },
        {
          text: 'Web Application Development',
          link: '#',
          submenu: [
            { text: 'Android App Development', link: '/android-app-development' },
            { text: 'Hybrid App Development', link: '/hybrid-app-development' },
          ]
        },
        { text: 'Digital Marketing', link: '/digital-marketing' },
        { text: 'Branding', link: '/branding' }
      ]
    },
    { text: 'Portfolio', link: '/portfolio' },
    { text: 'Enquiry', link: '/enquiry' },
    { text: 'Contact Us', link: '/contact' }
  ];

  // Render mobile navigation items with dropdowns
  const renderMobileNavItems = (items) => {
    return items.map((item, index) => {
      const isDropdownOpen = openDropdowns.has(index);

      if (item.dropdown) {
        return (
          <li key={index} className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
            <span className="dropdown-btn" onClick={() => toggleDropdown(index)}>
              {item.text}
              <i className={`fa fa-angle-${isDropdownOpen ? 'up' : 'down'}`}></i>
            </span>
            <ul style={{ display: isDropdownOpen ? 'block' : 'none' }}>
              {item.dropdown.map((subItem, subIndex) => {
                const subDropdownId = `${index}-${subIndex}`;
                const isSubDropdownOpen = openDropdowns.has(subDropdownId);

                if (subItem.submenu) {
                  return (
                    <li key={subDropdownId} className={`dropdown ${isSubDropdownOpen ? 'active' : ''}`}>
                      <span className="dropdown-btn" onClick={() => toggleDropdown(subDropdownId)}>
                        {subItem.text}
                        <i className={`fa fa-angle-${isSubDropdownOpen ? 'up' : 'down'}`}></i>
                      </span>
                      <ul style={{ display: isSubDropdownOpen ? 'block' : 'none' }}>
                        {subItem.submenu.map((subSubItem, subSubIndex) => (
                          <li key={`${subDropdownId}-${subSubIndex}`}>
                            <Link to={subSubItem.link}>{subSubItem.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={subDropdownId}>
                    <Link to={subItem.link}>{subItem.text}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      }
      return (
        <li key={index} className={item.current ? 'current' : ''}>
          <Link to={item.link}>{item.text}</Link>
        </li>
      );
    });
  };

  // Render desktop navigation items
  const renderNavItems = (items) => {
    return items.map((item, index) => {
      if (item.dropdown) {
        return (
          <li key={index} className="dropdown">
            <Link to={item.link}>{item.text}</Link>
            <ul>
              {item.dropdown.map((subItem, subIndex) => (
                <li key={`${index}-${subIndex}`} className={subItem.submenu ? 'dropdown' : ''}>
                  <Link to={subItem.link}>{subItem.text}</Link>
                  {subItem.submenu && (
                    <ul>
                      {subItem.submenu.map((subSubItem, subSubIndex) => (
                        <li key={`${index}-${subIndex}-${subSubIndex}`}>
                          <Link to={subSubItem.link}>{subSubItem.text}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        );
      }
      return (
        <li key={index} className={item.current ? 'current' : ''}>
          <Link to={item.link}>{item.text}</Link>
        </li>
      );
    });
  };

  return (
    <header className={`main-header header-style-one ${isScrolled ? 'scrolled' : ''}`}>
      {/* Header Top */}
      <div className="header-top">
        <div className="inner-container">
          <div className="top-left">
            <ul className="list-style-one">
              <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:info@virajtechnologies.com" style={{ textDecoration: 'none' }}>
                  info@virajtechnologies.com
                </a>
              </li>
              <li><i className="fa fa-map-marker"></i> Mangalagiri, Andhra Pradesh.</li>
            </ul>
          </div>
          <div className="top-right">
            <ul className="social-icon-one">
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
      </div>

      {/* Main Header */}
      <div className={`header-lower ${isScrolled ? 'hidden' : ''}`} style={{ marginTop: '-22px' }}>
        <div className="container-fluid">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <Link to="/"><img src="images/logo.png" alt="Viraj Technologies" /></Link>
              </div>
            </div>
            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation">{renderNavItems(navigationItems)}</ul>
              </nav>
            </div>
            <div className="outer-box">
              <a href="tel:+917799878777" className="info-btn">
                <i className="icon fa fa-phone"></i>
                <small>Contact Us</small> +91 7799878777
              </a>
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <span className="icon fa fa-bars"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-visible' : ''}`}>
        <div className="menu-backdrop" onClick={closeMobileMenu}></div>
        <nav className="menu-box">
          <div className="upper-box">
            <div className="nav-logo">
              <Link to="/"><img src="images/logo.png" alt="Viraj Technologies" /></Link>
            </div>
            <div className="close-btn" onClick={closeMobileMenu}>
              <i className="icon fa fa-times"></i>
            </div>
          </div>
          <ul className="navigation clearfix">
            {renderMobileNavItems(navigationItems)}
          </ul>
        </nav>
      </div>

      {/* Sticky Header */}
      <div className={`sticky-header ${isScrolled ? 'visible' : ''}`}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo">
              <Link to="/"><img src="images/logo-2.png" alt="Viraj Technologies" /></Link>
            </div>
            <div className="nav-outer">
              <nav className="main-menu">
                <ul className="navigation clearfix">
                  {renderNavItems(navigationItems)}
                </ul>
              </nav>
            </div>
            {/* Mobile Menu Toggle for Sticky Navbar */}
            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
              <span className="icon fa fa-bars"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
