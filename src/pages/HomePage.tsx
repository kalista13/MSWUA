import './HomePage.css';
import quoteText from '../assets/images/quote-text.svg';
import LogoImage from '../assets/images/mswua-logo.svg';
import planetImage from '../assets/images/planet-icon.svg';
import sponsor1 from '../assets/images/sponsors/sponsor-engineer.svg';
import sponsor2 from '../assets/images/sponsors/sponsor-sed-eeds.svg';
import sponsor3 from '../assets/images/sponsors/sponsor-ap!rg.svg';
import sponsor4 from '../assets/images/sponsors/sponsor-rockaboo.svg';

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
            <img src={planetImage} alt="planet icon" />
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
    </>
  )
}