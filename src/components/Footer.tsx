import './Footer.css';
import EmailIcon from '../assets/images/icons/email-icon.svg';
import InstagramIcon from '../assets/images/icons/ig-icon.svg';
import TiktokIcon from '../assets/images/icons/tiktok-icon.svg';
import VscoIcon from '../assets/images/icons/vsco-icon.svg';

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-info">
          <div className="location-section">
            <p>Our Location: <span>ETLC @UofA</span></p>
            <p>Address: <span>9120 116 St NW, Edmonton</span></p>
          </div>
          <div className="follow-section">
            <p>Follow Us</p>
            <div className="social-media-icons">
            <img src={EmailIcon} alt="email icon" />
            <img src={InstagramIcon} alt="instagram icon" />
            <img src={TiktokIcon} alt="tiktok icon" />
            <img src={VscoIcon} alt="vsco icon" />
            </div>
          </div>
        </div>
        <div className="separator"></div>
        <p>&copy; Copyright 2025 MSWUA</p>
      </footer>
    </>
  )
}