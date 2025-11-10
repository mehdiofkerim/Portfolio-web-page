// import React from "react";
import './Navbar.css'

const Navbar = ({title = 'Portfoliolio', navLinks, subscribeText = 'Subscribe'}) => {
    const [highLightStart, highLightEnd] = title.split('lio');
  return (
    <header className='header'>
        <div className='logo'>
            {highLightStart}
            <span className='highlight'>lio</span>
            {highLightEnd}
        </div>
        <nav className='nav'>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <button className='subscribe-btn'>{subscribeText}</button>
    </header>
  )
}

export default Navbar