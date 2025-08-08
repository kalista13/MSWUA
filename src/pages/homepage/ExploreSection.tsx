import './ExploreSection.css';
import TeamPicture from '../../assets/images/photos/team-image.png';
import ProjectPicture from '../../assets/images/photos/project-image.png';
import OutreachPicture from '../../assets/images/photos/outreach-image.png';

export function ExploreSection() {
  return (
    <>
      <section id="explore">
        <h1>Explore More</h1>
        <div className="team-section">
          <img src={TeamPicture} alt="team picture" />
          <button className="team-button">meet the team</button>
        </div>

        <div className="project-section">
          <img src={ProjectPicture} alt="team picture" />
          <button className="explore-button">explore projects</button>
        </div>

        <div className="involve-section">
          <img src={OutreachPicture} alt="team picture" />
          <button className="involve-button">get involved</button>
        </div>
      </section>
    </>
  )
}