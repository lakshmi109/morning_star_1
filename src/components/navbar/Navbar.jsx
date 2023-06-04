import React, {useState} from 'react'
import { FaTimes, FaBars } from 'react-icons/fa';
import './navbar.css'

const Menu = () => (
  <>
    <p><a href="/">Home</a></p>
    <p><a href="/course">Courses</a></p>
    <p><a href="/contact">About</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-logo'>
          <img src="" alt="logo" />
        </div>
        <div className='navbar-links-container'>
          <Menu />
        </div>
      </div>
      <button type='button' className='navbar-button' id='login-btn'>Login</button>
      <button type='button' className='navbar-button'>Sign up</button>
      <div className='navbar-menu'>
        {toggleMenu ? 
          <FaTimes size={27} onClick={() => setToggleMenu(false)} />
          : <FaBars size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='navbar-menu-container'>
              <div className='navbar-menu-container-links'>
                <Menu />
                <p>Login</p>
                <button type='button' className='navbar-menu-button'>Sign up</button>
              </div>
            </div>
          )
          }
      </div>
    </div>
  )
}

export default Navbar