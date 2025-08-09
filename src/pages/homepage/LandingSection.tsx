import './LandingSection.css';
import spaceVideo from '../../assets/videos/mainvideo.mp4';
import sideimage from '../../assets/images/sideimage.png';


export function LandingSection() {
  return (
    <section id="home">

      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={spaceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* um what */}
      <div className="video-overlay" />

      <div className="bg-overlay">
        <div className="info">
          <div className="mainline">
            <p>The sky isn’t</p>
            <p>our limit.</p>
          </div>
          <div className="subline">
            <p>A University of Alberta Space Exploration & Research Team</p>
          </div>
          <div className="buttons">
            <button className="join-button">Join Us</button>
            <button className="about-button">Our Mission</button>
          </div>
        </div>
        <img src={sideimage} alt="Spacecraft" className="side-image" /> 
      </div>
    </section>
  );
}