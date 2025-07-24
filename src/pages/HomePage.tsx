import './HomePage.css';
import quoteText from '../assets/images/quote-text.svg';
import LogoImage from '../assets/images/mswua-logo.svg';
import planetImage from '../assets/images/planet-icon.svg';
import sponsor1 from '../assets/images/sponsors/sponsor-engineer.svg';
import sponsor2 from '../assets/images/sponsors/sponsor-sed-eeds.svg';
import sponsor3 from '../assets/images/sponsors/sponsor-ap!rg.svg';
import sponsor4 from '../assets/images/sponsors/sponsor-rockaboo.svg';
import aboutUsVid from '../assets/videos/about-us.mp4';

export function HomePage () {
  return (
    <>
      <section id="home">
        <div className="bg-overlay">
          <div className="info">
            <img className="inspo-quote" draggable="false" src={quoteText} alt="quote text" />
            <p>A University of Alberta Space Exploration & <br/> <span className="left-text">Research Team</span></p>
            <div className="buttons">
              <button className="join-button">join us</button>
              <button className="about-button">our mission</button>
            </div>
          </div>
          <img src={LogoImage} alt="logo image" className="home-logo" />
        </div>
      </section>

      <div className="separator"></div>

      <section id="about-us">
        <div className="about-section">
          <div className="text-holder">
            <h1 className="about-header">About Us</h1>
            <p className="about-text">Mission SpaceWalker (MSW) was established as a student club in 2022 and participated as the first all-women group in the Canadian Reduced Gravity Experiment (CAN-RGX). Whether they are floating in microgravity, experimenting on stratospheric balloons, or on their glacial analog mission,  the team works hard to propel Canadian space research and diversify the space industry.</p>
          </div>
          <div className="image-holder">
            <video src={aboutUsVid} muted autoPlay loop playsInline></video>
            <img src={planetImage} alt="planet icon" />
          </div>
        </div>

        <div className="sponsor-tab">
          <h1>Sponsors</h1></div>

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
            <button className="info-button">info</button>
          </div>
          <div className="event-boxes">
            <h1>AGM '25</h1>
            <p>TBA</p>
            <p className="event-description">Join us for our biggest meeting of the year! We’ll be recapping the year, announcing exciting plans, and opening the floor for new members to join or take on responsibilities. If you've ever wanted to be more involved, this is the time!</p>
            <button className="rvsp-button">rvsp</button>
          </div>
        </div>
      </section>
    </>
  )
}