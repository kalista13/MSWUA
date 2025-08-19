import '../styles/ProjectPage.css';
import checkpoint from '../../../assets/images/icons/checkpoint-icon.png';
import { motion } from "framer-motion";
import canRgxImage from "../../../assets/images/photos/projects/can-rgx.png";
import canArxImage from "../../../assets/images/photos/projects/can-arx.png";
import canSbxImage from "../../../assets/images/photos/projects/can-sbx.png";
import FadeTextDiv from '../../../animations/fade-text-div.tsx';
import { fade, fadeBlurUp, lineMovement } from "../../../animations/animations.tsx";
import { Link } from 'react-router-dom';

export function ProjectPage () {

  return (
    <>
      <div id="projects">
        <h1>Built By Us</h1>
        <p>Completed Projects</p>

        <div className="projects-grid">

          <motion.img {...fadeBlurUp} src={canRgxImage} alt="can-rgx image" />
          <FadeTextDiv className="can-text">
            <motion.h3 variants={fade}>2021-22</motion.h3>
            <motion.h2 variants={fade}className="project-title">CAN-RGX V</motion.h2>
            <motion.p variants={fade} className="project-text">The beginning of our journey</motion.p>

            <Link to="/projects/can-rgx-v"><motion.button variants={fade}>learn more</motion.button></Link>
          </FadeTextDiv>

          <FadeTextDiv className="can-text">
            <motion.h3 variants={fade}>2023-24</motion.h3>
            <motion.h2 variants={fade} className="project-title">CAN-ARX I</motion.h2>
            <motion.p variants={fade} className="project-text"> The second milestone</motion.p>
            <Link to="/projects/can-arx-i"><motion.button variants={fade}>learn more</motion.button></Link>
          </FadeTextDiv>

          <motion.img {...fadeBlurUp}  src={canArxImage} alt="can-rgx image" />

          <motion.img {...fadeBlurUp}  src={canSbxImage} alt="can-rgx image" />
          <FadeTextDiv className="can-text">
            <motion.h3 variants={fade}>2023-24</motion.h3>
            <motion.h2 variants={fade}>CAN-SBX VI</motion.h2>
            <motion.p variants={fade} className="project-text">A New Frontier</motion.p>
            <Link to="/projects/can-sbx-vi"><motion.button variants={fade}>learn more</motion.button></Link>
          </FadeTextDiv>

          <FadeTextDiv className="can-text">
            <motion.h3 variants={fade}>2024-Present</motion.h3>
            <motion.h2 variants={fade}className="project-title">CAN-RGX VIII</motion.h2>
            <motion.p variants={fade} className="project-text">Current Project</motion.p>
            <Link to="/projects/can-rgx-viii"><motion.button variants={fade}>learn more</motion.button></Link>
          </FadeTextDiv>
        </div>

        <div className="line-section">
          <motion.div {...lineMovement} className="h-line line-1"></motion.div>

          <img className="checkpoint-1" src={checkpoint} alt="check point icon" />

          <motion.div {...lineMovement}  
            transition={{ ...lineMovement.transition, delay: 0.8 }}
            className="h-line line-2">
          </motion.div>

          <img className="checkpoint-2" src={checkpoint} alt="check point icon" />

          <motion.div {...lineMovement}  
            transition={{ ...lineMovement.transition, delay: 0.8 }}
            className="h-line line-3">
          </motion.div>

          <img className="checkpoint-3" src={checkpoint} alt="check point icon" />
          
          <motion.div {...lineMovement}  
            transition={{ ...lineMovement.transition, delay: 1 }}
            className="h-line line-4">
          </motion.div>

          <img className="checkpoint-4" src={checkpoint} alt="check point icon" />
        </div>
      </div>
    </>
  )
}