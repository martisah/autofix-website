import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/whiteLogo.png'
import { Link } from 'react-scroll'
import { useNavigate, useLocation } from 'react-router-dom'
import menu_icon from '../../assets/red_menubar.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 620 ? setSticky(true) : setSticky(false);
    })
  },[]);
  
  const [mobilemenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=> {
    mobilemenu? setMobileMenu(false) : setMobileMenu (true)
  }

  const handleHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
      <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="navbar-logo" onClick={handleHome} style={{cursor: 'pointer'}} />
      <ul className={mobilemenu?'':'hide-mobile-menu'}>
        <li><button onClick={handleHome} style={{background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit'}}>Home</button></li>
        <li><Link to='services' smooth={true} offset={10} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-220} duration={500}>About Us</Link></li>
        {location.pathname === '/' ? (
            <Link to='contact' smooth={true} offset={-140} duration={500} className='btn'>Contact Us</Link>
          ) : (
            <button className='btn' onClick={() => { navigate('/#contact'); }}> Contact Us </button>
          )}
      </ul>
        <img src={menu_icon} alt="" className='red_menubar' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
