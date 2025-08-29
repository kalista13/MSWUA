import '../styles/LandingSection.css';
import spaceVideo from '../../../assets/videos/mainvideo.mp4';
import sideimage from '../../../assets/images/sideimage.png';
import { Link } from 'react-router-dom';
import { container, landingFade } from '../../../animations/animations';
import { motion } from 'framer-motion';


export function LandingSection() {
  return (
    <section id="home">

      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={spaceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay" />

      <div className="bg-overlay">
        <motion.div
          className="info"
          variants={container}
          initial="hidden"
          animate="visible">
          <motion.div className="mainline" variants={landingFade}>
            <p>The sky isn’t</p>
            <p>our limit.</p>
          </motion.div>
          <motion.div className="subline" variants={landingFade}>
            <p>A University of Alberta Space Exploration & Research Team</p>
          </motion.div>
          <motion.div className="buttons" variants={landingFade}>
            <button
              className="join-button"
              onClick={() => window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfFngJP9f9xXPBy2yOw5_cGnOaIvemSZ39k2S_oF6PB1Kywpw/viewform?pli=1",
                "_blank",
                "noopener,noreferrer"
              )}
            >
              Join Us
            </button>
            <Link to="/about"><button className="about-button">Our Mission</button></Link>
          </motion.div>
        </motion.div>
        <img src={sideimage} alt="Spacecraft" className="side-image" />
      </div>
    </section>
  );
}