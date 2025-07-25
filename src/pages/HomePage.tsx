import './HomePage.css';
import sponsor1 from '../assets/images/sponsors/sponsor-engineer.svg';
import sponsor2 from '../assets/images/sponsors/sponsor-sed-eeds.svg';
import sponsor3 from '../assets/images/sponsors/sponsor-ap!rg.svg';
import sponsor4 from '../assets/images/sponsors/sponsor-rockaboo.svg';
import aboutUsVid from '../assets/videos/about-us.mp4';
import EventBoxes from '../assets/images/event-boxes.png';
import ExploreBoxes from '../assets/images/explore-boxes.svg';
import EmailIcon from '../assets/images/icons/email-icon.svg';
import InstagramIcon from '../assets/images/icons/ig-icon.svg';
import TiktokIcon from '../assets/images/icons/tiktok-icon.svg';
import VscoIcon from '../assets/images/icons/vsco-icon.svg';

export function HomePage () {
  return (
    <>
      <section id="home">
        
        <div className="bg-overlay">
          <div className="info">
            <p>A University of Alberta Space Exploration & <br/> <span className="left-text">Research Team</span></p>
            <div className="buttons">
              <button className="join-button">join us</button>
              <button className="about-button">our mission</button>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us">
        <div className="about-section">
          <div className="text-holder">
            <h1 className="about-header">About Us</h1>
            <p className="about-text">Mission SpaceWalker (MSW) was established as a student club in 2022 and participated as the first all-women group in the Canadian Reduced Gravity Experiment (CAN-RGX). Whether they are floating in microgravity, experimenting on stratospheric balloons, or on their glacial analog mission,  the team works hard to propel Canadian space research and diversify the space industry.</p>
          </div>
          <div className="image-holder">
            <video src={aboutUsVid} muted autoPlay loop playsInline></video>
          </div>
        </div>

        <div className="sponsor-section">
          <div className="sponsor-bg">
            <img className="engineer-sponsor" src={sponsor1} alt="sponsor 1" />
            <img className="seds-sponsor" src={sponsor2} alt="sponsor 2" />
            <img className="aprg-sponsor" src={sponsor3} alt="sponsor 3" />
            <img className="rockaboo-sponsor" src={sponsor4} alt="sponsor 4" />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section id="events">
        <h1>E V E N T S</h1>
        <div className="event-box-section">
          <div className="event-boxes">
            <h1>Fall Clubs Fair ‘25</h1>
            <p>TBA</p>
            <p className="event-description">Stop by the Mission SpaceWalker table at the Clubs Fair! Meet our members, learn about the cool projects we’re working on and find out how you can get involved. We’ve got a place for you!</p>
            <button className="info-button">i n f o</button>
            <img src={EventBoxes} alt="event box" draggable="false"/>
          </div>
          <div className="event-boxes">
            <h1>AGM '25</h1>
            <p>TBA</p>
            <p className="event-description">Join us for our biggest meeting of the year! We’ll be recapping the year, announcing exciting plans, and opening the floor for new members to join or take on responsibilities. If you've ever wanted to be more involved, this is the time!</p>
            <button className="rvsp-button">r v s p</button>
            <img src={EventBoxes} alt="event box" draggable="false"/>
          </div>
        </div>
      </section>

      <section id="explore">
        <div className="team-section">
          <img src={ExploreBoxes} alt="explore boxes" className="explore-box" />
          <button className="team-button">meet the team</button>
        </div>

        <div className="project-section">
           <img src={ExploreBoxes} alt="explore boxes" className="explore-box"/>
           <button className="explore-button">explore projects</button>
        </div>

        <div className="involve-section">
          <img src={ExploreBoxes} alt="explore boxes" className="explore-box" />
          <button className="involve-button">get involved</button>
        </div>
      </section>

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