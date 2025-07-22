import './HomePage.css';
import quoteText from '../assets/images/quote-text.svg';
import LogoImage from '../assets/images/mswua-logo.svg';
import planetImage from '../assets/images/planet-icon.svg';

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
      </section>
    </>
  )
}