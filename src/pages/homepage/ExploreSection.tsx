import './ExploreSection.css';
import TeamPicture from '../../assets/images/photos/team-image.png';
import ProjectPicture from '../../assets/images/photos/project-image.png';
import OutreachPicture from '../../assets/images/photos/outreach-image.png';
import { motion } from "framer-motion";

export function ExploreSection() {

  const fadeUp = {
    initial: { opacity: 0, y: 100},
    whileInView: {opacity: 1, y: 0},
    transition: { duration: 0.8},
    viewport: {once: true, amount: 0.6},
  }

  return (
    <>
      <section id="explore">
        <h1> Explore More </h1>
        <motion.div {...fadeUp} className="team-section">
          <img src={TeamPicture} alt="team picture" />
          <button className="team-button">meet the team</button>
        </motion.div>

        <motion.div {...fadeUp} className="project-section">
          <img src={ProjectPicture} alt="team picture" />
          <button className="explore-button">explore projects</button>
        </motion.div>

        <motion.div {...fadeUp} className="involve-section">
          <img src={OutreachPicture} alt="team picture" />
          <button className="involve-button">get involved</button>
        </motion.div>
      </section>
    </>
  )
}