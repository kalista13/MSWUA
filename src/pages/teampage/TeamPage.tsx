import "./TeamPage.css";
import TeamPhoto from "../../assets/images/photos/team-photo.png";
import LinkedinIcon from "../../assets/images/icons/linkedin-icon.png";
import WebLinkIcon from "../../assets/images/icons/web-link-icon.png";
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
            <div className="team-info-box" key={i}>
              <img src={member.image} alt={`team member ${i + 1}`}></img>
              <p className="member-name">{member.name}</p>
              <div className="member-line"></div>
              <p>{member.role}</p>
              <div className="team-link-icons">
                {member.linkedin ? (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src={LinkedinIcon} alt="Linkedin icon" />
                  </a>
                ) : (
                  <span>
                    <img src={LinkedinIcon} alt="Linkedin icon (unavailable)" />
                  </span>
                )}
                {member.website ? (
                  <a href={member.website} target="_blank" rel="noopener noreferrer">
                    <img src={WebLinkIcon} alt="Website Link icon" />
                  </a>
                ) : (
                  <span>
                    <img src={WebLinkIcon} alt="Website Link icon (unavailable)" />
                  </span>
                )}
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  )
}