import './ProjectPage.css';
import checkpoint from '../../assets/images/icons/checkpoint-icon.png';
export function ProjectPage () {
  return (
    <>
      <div id="projects">
        <h1>Built By Us</h1>
        <p>Completed Projects</p>
        <div className="line-section">
          <div className="h-line line-1"></div>
          <img className="checkpoint-1" src={checkpoint} alt="check point icon" />
          <div className="h-line line-2"></div>
          <img className="checkpoint-2" src={checkpoint} alt="check point icon" />
          <div className="h-line line-3"></div>
          <img className="checkpoint-3" src={checkpoint} alt="check point icon" />
          <div className="h-line line-4"></div>
        </div>
      </div>
    </>
  )
}