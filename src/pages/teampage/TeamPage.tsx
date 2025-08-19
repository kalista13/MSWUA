import "./TeamPage.css";
import TeamPhoto from "../../assets/images/photos/team-photo.png";
import { teamMembers } from "../../data/team/2024-2025/teamInfoData";
import type { TeamMember } from "../../data/team/2024-2025/teamInfoData";
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
          {teamMembers.map((member: TeamMember, i: number) => (
            <div className="team-info-box">
              <img key={i} src={member.image} alt={`team member ${i + 1}`}></img>
              <p className="member-name">{member.name}</p>
              <div className="member-line"></div>
              <p>{member.role}</p>
            </div>
          ))}

        </div>
      </section>
    </>
  )
}