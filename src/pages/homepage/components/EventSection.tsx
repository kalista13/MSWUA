import '../styles/EventSection.css';
import EventBoxes from '../../../assets/images/event-boxes.png';
import { motion } from "framer-motion";
import { fadeBlurUp, fadeUp } from '../../../animations/animations';

export function EventSection() {
  return (
    <>
      <section id="events">
        <h1>E V E N T S</h1>
        <div className="event-box-section">
          <motion.div {...fadeBlurUp} className="event-boxes">
            <h1 className="header">Fall Clubs Fair ‘25</h1>
            <p className= "date">SEPT 1-5</p>
            <p className="event-description">Stop by the Mission SpaceWalker table at the Clubs Fair! Meet our members, learn about the cool projects we’re working on and find out how you can get involved. We’ve got a place for you!</p>
            <a href="https://www.instagram.com/p/DN63-bDj2YC/" target="_blank" rel="noreferrer noopener"><button className="info-button">i n f o</button></a>
            <img src={EventBoxes} alt="event box" draggable="false" />
          </motion.div>
          <motion.div {...fadeUp} className="event-boxes">
            <h1 className="header">AGM '25</h1>
            <p className= "date">SEPT 27</p>
            <p className="event-description">Join us for our biggest meeting of the year! We’ll be recapping the year, announcing exciting plans, and opening the floor for new members to join or take on responsibilities. If you've ever wanted to be more involved, this is the time!</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFngJP9f9xXPBy2yOw5_cGnOaIvemSZ39k2S_oF6PB1Kywpw/viewform" target="_blank" rel="noreferrer noopener"><button className="rvsp-button">r v s p</button></a>
            <img src={EventBoxes} alt="event box" draggable="false" />
          </motion.div>
          <motion.div {...fadeBlurUp} className="event-boxes">
            <h1 className="header">CAN-RGX VIII 25’</h1>
            <p className= "date">NOVEMBER</p>
            <p className="event-description">Join us for our can rgx! We’ll be recapping the year, announcing exciting plans, and opening the floor for new members to join or take on responsibilities. If you've ever wanted to be more involved, this is the time!</p>
            <a href="https://www.seds.ca/can-rgx/" target="_blank" rel="noreferrer noopener"><button className="rvsp-button">l e a r n &nbsp; m o r e </button></a>
            <img src={EventBoxes} alt="event box" draggable="false" />
          </motion.div>
        </div>
      </section>
    </>
  )
}