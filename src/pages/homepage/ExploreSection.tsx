import './ExploreSection.css';
import TeamPicture from '../../assets/images/photos/team-image.png';
import ProjectPicture from '../../assets/images/photos/project-image.png';
import OutreachPicture from '../../assets/images/photos/outreach-image.png';
import { motion } from "framer-motion";
import { fadeUp } from '../../animations/animations';

export function ExploreSection() {

  return (
    <>
      <section id="explore">
        <h1> E X P L O R E &nbsp; &nbsp; M O R E </h1>
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