import "./TeamPage.css";
import TeamPhoto from "../../assets/images/team/team-photo.png";
import LinkedinIcon from "../../assets/images/icons/linkedin-icon.png";
import WebLinkIcon from "../../assets/images/icons/web-link-icon.png";
import { teamMembers } from "../../data/team/2024-2025/teamInfoData";
import type { TeamMember } from "../../data/team/2024-2025/teamInfoData";
import FadeTextDiv from '../../animations/fade-text-div';
import { motion } from "framer-motion";
import { fade } from "../../animations/animations.tsx";

const groupByRole = (members: TeamMember[]) => {
  const groups: Record<string, TeamMember[]> = {};
  members.forEach(member => {
    const role = member.group || "Other";
    if (!groups[role]) groups[role] = [];
    groups[role].push(member);
  });
  return groups;
};

export function TeamPage() {
  const groupedMembers = groupByRole(teamMembers);
  const roleOrder = ["Execs", "Mechanical", "Electrical", "Software", "Science", "Admin", "Outreach"];

  return (
    <>
      <section id="team-section">
        <img src={TeamPhoto} alt="team image photo" />
        <div className="date-section">
          <p>2024-2025</p>
        </div>

        {roleOrder.map(role => (
        groupedMembers[role] && (
          <div key={role} className="team-section-block">
            <div className="team-header">
                  <div className="team-line"></div>
                  <h1 className="team-text">{role}</h1>
                  <div className="team-line"></div>
            </div>
      
            <div className="team-info">
              {groupedMembers[role].map((member, i) => (
                <FadeTextDiv className="team-info-box" key={`${role}-${i}`}>
                  <motion.img variants={fade} src={member.image} alt={`team member ${i + 1}`} />
                  <motion.p variants={fade} className="member-name">{member.name}</motion.p>
                  <motion.div variants={fade} className="member-line"></motion.div>
                  <motion.p variants={fade} className="member-role">{member.role}</motion.p>
                  <motion.div variants={fade} className="team-link-icons">
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
                  </motion.div>
                </FadeTextDiv>
              ))}
            </div>
          </div>
        )
      ))}
    </section>
    </>
  );
}
  
