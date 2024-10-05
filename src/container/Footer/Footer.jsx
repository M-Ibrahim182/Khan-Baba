import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Chauburji, Chowk, Sanda, Lahore, Punjab 54000</p>
        <p className="p__opensans">+09-00-786-01</p>
        <p className="p__opensans">+92-300-4326100</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.main_logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Ye Khana Kuch Khas Hai.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt='spoon' />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Khan Baba. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;