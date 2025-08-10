import './ProjectPage.css';
import checkpoint from '../../assets/images/icons/checkpoint-icon.png';
import { motion } from "framer-motion";

export function ProjectPage () {

  const lineMovement = {
    initial: {scaleY: 0},
    whileInView: {scaleY: 1},
    transition: { duration: 0.8},
    viewport: { once: true, amount: 0.6, margin: "-10% 0px -10% 0px"},
  }

  return (
    <>
      <div id="projects">
        <h1>Built By Us</h1>
        <p>Completed Projects</p>

        <div className="projects-grid">
          <div className="can-text">
            <h3>2021-22</h3>
            <h2 className="project-title">CAN-RGX V</h2>
            <p className="project-text">The beginning of our journey</p>
            <button>learn more</button>
          </div>
          <div className="can-text">
            <h3>2021-22</h3>
            <h2 className="project-title">CAN-RGX V</h2>
            <p className="project-text">The beginning of our journey</p>
            <button>learn more</button>
          </div>
          <div className="can-text">
            <h3>2021-22</h3>
            <h2 className="project-title">CAN-ARX I</h2>
            <p> className="project-text"The second milestone</p>
            <button>learn more</button>
          </div>
          <div className="can-text">
            <h3>2021-22</h3>
            <h2 className="project-title">CAN-RGX V</h2>
            <p className="project-text">The beginning of our journey</p>
            <button>learn more</button>
          </div>
          <div className="can-text">
            <h3>2021-22</h3>
            <h2 className="project-title">CAN-RGX V</h2>
            <p className="project-text">The beginning of our journey</p>
            <button>learn more</button>
          </div>
          <div className="can-text">
            <h3>2021-22</h3>
            <h2>CAN-SBX</h2>
            <p className="project-text">Another chapter</p>
            <button>learn more</button>
          </div>

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
            transition={{ ...lineMovement.transition, delay: 0.5 }}
            className="h-line line-4">
          </motion.div>
        </div>
      </div>
    </>
  )
}