import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/whiteLogo.png';
import { Link } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import menu_icon from '../../assets/red_menubar.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobilemenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 620 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobilemenu);
  };

  const handleHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      scroller.scrollTo('contact', {
        smooth: true,
        offset: -140,
        duration: 500,
      });
    } else {
      navigate('/', { state: { scrollToContact: true } });
    }

    setMobileMenu(false);
  };
  const handleServiceClick = () => {
    if (location.pathname === '/') {
      scroller.scrollTo('service', {
        smooth: true,
        offset: 10,
        duration: 500,
      });
    } else {
      navigate('/', { state: { scrollToContact: true } });
    }

    setMobileMenu(false);
  };

  useEffect(() => {
    if (location.state?.scrollToContact) {
      scroller.scrollTo('contact', {
        smooth: true,
        offset: -140,
        duration: 500,
      });
    }
  }, [location.state]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img
        src={logo}
        alt="Logo"
        className="navbar-logo"
        onClick={handleHome}
        style={{ cursor: 'pointer' }}
      />
      <ul className={mobilemenu ? '' : 'hide-mobile-menu'}>
        <li>
          <button
            onClick={handleHome}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              fontSize: 'inherit',
              fontFamily: 'inherit',
            }}
          >
            Home
          </button>
        </li>
        <li>
          <Link to="services" smooth={true} offset={10} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-220} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <button className="btn" onClick={handleContactClick}>
            Contact Us
          </button>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="red_menubar"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;