import React from 'react';
import logo from '../assets/logo-footer.svg';

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <img src={logo} alt='' />
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served
            with a modern twist.
          </p>
        </div>
        <div>
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/menu'>Menu</a>
            </li>
            <li>
              <a href='/reservations'>Reservations</a>
            </li>
            <li>
              <a href='/order-online'>Order Online</a>
            </li>
            <li>
              <a href='/login'>Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br /> 123 Main St, Anytown, USA
            </li>
            <li>
              Phone: <br /> (123) 456-7890
            </li>
            <li>
              Email: <br /> little@lemon.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul className='social-media'>
            <li>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                Facebook
              </a>
            </li>
            <li>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                Instagram
              </a>
            </li>
            <li>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </section>
      <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
