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
        <div className="can-rgx-v">
          <p>2021-22</p>
          <h1>CAN-RGX V</h1>
          <p>The beginning of our journey</p>
          <button>learn more</button>
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