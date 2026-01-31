import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState(new Set());
  const location = useLocation();  // This hook provides access to the current route

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
    setIsMobileMenuOpen((prevState) => {
      const newState = !prevState;
      document.body.style.overflow = newState ? 'hidden' : 'visible'; // Lock/Unlock body scroll
      return newState;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'visible';
  };

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => {
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
    { text: 'Home', link: '/' },
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
        <li key={index} className={location.pathname === item.link ? 'current' : ''}>
          <Link to={item.link}>{item.text}</Link>
        </li>
      );
    });
  };

  // Render desktop navigation items with active class based on location.pathname
  const renderNavItems = (items) => {
    return items.map((item, index) => {
      const isActive = location.pathname === item.link;

      if (item.dropdown) {
        return (
          <li key={index} className={`dropdown ${isActive ? 'active' : ''}`}>
            <Link to={item.link}>{item.text}</Link>
            <ul>
              {item.dropdown.map((subItem, subIndex) => {
                const isSubActive = location.pathname === subItem.link;
                return (
                  <li key={`${index}-${subIndex}`} className={subItem.submenu ? 'dropdown' : ''}>
                    <Link to={subItem.link} className={isSubActive ? 'active' : ''}>
                      {subItem.text}
                    </Link>
                    {subItem.submenu && (
                      <ul>
                        {subItem.submenu.map((subSubItem, subSubIndex) => {
                          const isSubSubActive = location.pathname === subSubItem.link;
                          return (
                            <li key={`${index}-${subIndex}-${subSubIndex}`} className={isSubSubActive ? 'active' : ''}>
                              <Link to={subSubItem.link}>{subSubItem.text}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        );
      }
      return (
        <li key={index} className={isActive ? 'current' : ''}>
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
             
              <div className={`mobile-nav-toggler mt-4 ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <span className="icon fa fa-bars "></span>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Mobile Menu */}
<div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-visible' : ''}`}>
  <div className="menu-backdrop" onClick={closeMobileMenu}></div>
  <div className={`slider ${isMobileMenuOpen ? 'open' : ''}`}>
    {/* Mobile Navigation Links */}
    <div className="upper-box">
      <div className="nav-logo">
        <Link to="/"><img src="images/logo.png" alt="Viraj Technologies" /></Link>
      </div>
      <div className="close-btn" onClick={closeMobileMenu}>
        <i className="icon fa fa-times"></i>
      </div>
    </div>

    <nav className="menu-box" style={{ marginLeft: '-230px' }}>
  <ul className="navigation clearfix">
    {navigationItems.map((item, index) => (
      <li key={index} className={location.pathname === item.link ? 'current' : ''}>
        {item.dropdown ? (
          <>
            {/* Main Services dropdown */}
            <span
              className={`dropdown-btn ${openDropdowns.has(index) ? 'active' : ''}`}
              onClick={() => toggleDropdown(index)}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {item.text}
              {/* Add down arrow icon for dropdown */}
              <i
                className={`fa fa-angle-down ${openDropdowns.has(index) ? 'up' : ''}`}
                style={{
                  marginRight: '130px', // Adjust spacing as needed
                  color: '#fff',  // Ensure the arrow is white
                }}
              ></i>
            </span>

            {/* First level dropdown menu */}
            <ul className="submenu" style={{ display: openDropdowns.has(index) ? 'block' : 'none' }}>
              {item.dropdown.map((subItem, subIndex) => {
                const subDropdownId = `${index}-${subIndex}`;
                return (
                  <li key={subIndex}>
                    {subItem.submenu ? (
                      <>
                        {/* Second level dropdown button */}
                        <span
                          className={`dropdown-btn ${openDropdowns.has(subDropdownId) ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(subDropdownId);
                          }}
                        >
                          {subItem.text}
                          <i
                            className={`fa fa-angle-${openDropdowns.has(subDropdownId) ? 'up' : 'down'}`}
                            style={{
                              marginRight: '72px',
                              color: '#fff',  // Ensure the arrow is white
                            }}
                          ></i>
                        </span>
                        {/* Second level dropdown menu */}
                        <ul
                          className="submenu"
                          style={{
                            display: openDropdowns.has(subDropdownId) ? 'block' : 'none',
                            paddingLeft: '15px',
                          }}
                        >
                          {subItem.submenu.map((subSubItem, subSubIndex) => (
                            <li key={subSubIndex}>
                              <Link
                                to={subSubItem.link}
                                onClick={closeMobileMenu}
                                style={{ fontSize: '14px', paddingLeft: '10px' }}
                              >
                                {subSubItem.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link to={subItem.link} onClick={closeMobileMenu}>
                        {subItem.text}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <Link to={item.link} onClick={closeMobileMenu}>{item.text}</Link>
        )}
      </li>
    ))}
  </ul>
</nav>


    {/* Additional Mobile Icons (Call Me and Send Mail) */}
    <div className="mobile-icons" style={{ flexDirection: 'column', alignItems: 'center', marginTop: '20px',marginLeft:'-8px' }}>
      {/* Call Me Section */}
      <div style={{ flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
        <p>  
          <a href="tel:+1234567890" className="call-me-text" style={{
            color: '#fff', textDecoration: 'none', fontSize: '16px', marginBottom: '5px', paddingLeft: '10px'
          }}>
            Call Me
          </a>
        </p>
        <p>    
          <a href="tel:+1234567890" className="phone-number" style={{
            alignItems: 'center', backgroundColor: 'transparent', color: '#fff', borderRadius: '30px',
            textDecoration: 'none', fontSize: '16px'
          }}>
            <span className="icon-text" style={{ marginLeft: '10px', color: '#fff' }}>
              <i className="fas fa-phone-alt" style={{ fontSize: '20px', color: '#ff6600' }}></i> +91 779987877
            </span>
          </a>
        </p>
      </div>

      {/* Send Mail Section */}
      <div style={{ flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
        <p>
          <a href="mailto:info@virajtech.com" className="send-mail-text" style={{
            color: '#fff', textDecoration: 'none', fontSize: '16px', marginBottom: '5px', paddingLeft: '10px'
          }}>
            Send Mail
          </a>
        </p>
        <p>     
          <a href="mailto:info@virajtech.com" className="email-address" style={{
            alignItems: 'center', backgroundColor: 'transparent', color: '#fff', borderRadius: '30px',
            textDecoration: 'none', fontSize: '16px'
          }}>
            <span className="icon-text" style={{ marginLeft: '10px', color: '#fff' }}>
              <i className="fas fa-envelope" style={{ fontSize: '20px', color: '#ff6600' }}></i> info@virajtechnologies.com
            </span>
          </a>
        </p>
      </div>
    </div>

     {/* Social Media Links (Twitter Left, Facebook Center, Instagram Right) */}
<div className="social-media-links" style={{
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%', 
  marginTop: '20px',
  paddingLeft: '33px' ,
  marginLeft:'-31px'

}}>
  {/* Twitter (Left) */}
  <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
    <a href="https://www.linkedin.com/company/viraj-technologies-ap" target="_blank" rel="noopener noreferrer" style={{
      color: '#fff', fontSize: '24px', textDecoration: 'none'
    }}>
      <i className="fab fa-linkedin"></i>
    </a>
  </div>
  
  {/* Facebook (Center) */}
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
    <a href="https://www.facebook.com/profile.php?id=61564610203592" target="_blank" rel="noopener noreferrer" style={{
      color: '#fff', fontSize: '24px', textDecoration: 'none'
    }}>
      <i className="fab fa-facebook-f"></i>
    </a>
  </div>
  
  {/* Instagram (Right) */}
  <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
    <a href="https://www.instagram.com/viraj_technologies/" target="_blank" rel="noopener noreferrer" style={{
      color: '#fff', fontSize: '24px', textDecoration: 'none'
    }}>
      <i className="fab fa-instagram"></i>
    </a>
  </div>
</div>



    </div>
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
