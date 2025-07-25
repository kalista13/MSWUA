import './LandingSection.css';

export function LandingSection() {
  return (
    <section id="home">
      <div className="bg-overlay">
        <div className="info">
          <p>A University of Alberta Space Exploration & <br /> <span className="left-text">Research Team</span></p>
          <div className="buttons">
            <button className="join-button">join us</button>
            <button className="about-button">our mission</button>
          </div>
        </div>
      </div>
    </section>
  )
}