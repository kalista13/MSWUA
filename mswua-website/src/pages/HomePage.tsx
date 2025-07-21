import './HomePage.css';
import quoteText from '../assets/images/quote-text.svg';
import LogoImage from '../assets/images/mswua-logo.svg';

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
    </>
  )
}