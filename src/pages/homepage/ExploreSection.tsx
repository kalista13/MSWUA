import './ExploreSection.css';
import ExploreBoxes from '../../assets/images/explore-boxes.svg';

export function ExploreSection() {
  return (
    <>
      <section id="explore">
        <div className="team-section">
          <img src={ExploreBoxes} alt="explore boxes" className="explore-box" />
          <button className="team-button">meet the team</button>
        </div>

        <div className="project-section">
          <img src={ExploreBoxes} alt="explore boxes" className="explore-box" />
          <button className="explore-button">explore projects</button>
        </div>

        <div className="involve-section">
          <img src={ExploreBoxes} alt="explore boxes" className="explore-box" />
          <button className="involve-button">get involved</button>
        </div>
      </section>
    </>
  )
}