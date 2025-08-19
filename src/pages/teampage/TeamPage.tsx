import "./TeamPage.css";
import TeamPhoto from "../../assets/images/photos/team-photo.png";

export function TeamPage() {
  return (
    <>
      <section id="team-section">
        <img src={TeamPhoto} alt="team image photo" />
        <div className="date-section">
          <p>2024-2025</p>
        </div>

        <div className="team-header">
          <div className="team-line"></div>
          <h1 className="team-text">The Team</h1>
          <div className="team-line"></div>
        </div>

        <div className="team-info">
          <div className="team-info-box">
            
          </div>

          <div className="team-info-box">
          </div>

          <div className="team-info-box">
          </div>

          <div className="team-info-box">
          </div>

          <div className="team-info-box">
          </div>
          
          <div className="team-info-box">
          </div>
        </div>
      </section>
    </>
  )
}