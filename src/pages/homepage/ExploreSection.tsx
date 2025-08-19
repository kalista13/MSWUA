import './ExploreSection.css';
import TeamPicture from '../../assets/images/photos/explore/team-image.png';
import ProjectPicture from '../../assets/images/photos/explore/project-image.png';
import OutreachPicture from '../../assets/images/photos/explore/outreach-image.png';
import { motion } from "framer-motion";
import { fadeUp } from '../../animations/animations';
import { Link } from 'react-router-dom';

export function ExploreSection() {

  return (
    <>
      <section id="explore">
        <h1> E X P L O R E &nbsp; &nbsp; M O R E </h1>
        <motion.div {...fadeUp} className="team-section">
          <img src={TeamPicture} alt="team picture" />
          <Link to="team"><button className="team-button">meet the team</button></Link>
        </motion.div>

        <motion.div {...fadeUp} className="project-section">
          <img src={ProjectPicture} alt="team picture" />
          <Link to="projects"><button className="explore-button">explore projects</button></Link>
        </motion.div>

        <motion.div {...fadeUp} className="involve-section">
          <img src={OutreachPicture} alt="team picture" />
          <Link to="wip"><button className="involve-button">get involved</button></Link>
        </motion.div>
      </section>
    </>
  )
}