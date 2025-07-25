import './AboutSection.css';
import sponsor1 from '../../assets/images/sponsors/sponsor-engineer.svg';
import sponsor2 from '../../assets/images/sponsors/sponsor-sed-eeds.svg';
import sponsor3 from '../../assets/images/sponsors/sponsor-ap!rg.svg';
import sponsor4 from '../../assets/images/sponsors/sponsor-rockaboo.svg';
import aboutUsVid from '../../assets/videos/about-us.mp4';

export function AboutSection() {
  return (
    <>
      <section id="about-us">
        <div className="about-section">
          <div className="text-holder">
            <h1 className="about-header">About Us</h1>
            <p className="about-text">Mission SpaceWalker (MSW) was established as a student club in 2022 and participated as the first all-women group in the Canadian Reduced Gravity Experiment (CAN-RGX). Whether they are floating in microgravity, experimenting on stratospheric balloons, or on their glacial analog mission,  the team works hard to propel Canadian space research and diversify the space industry.</p>
          </div>
          <div className="image-holder">
            <video src={aboutUsVid} muted autoPlay loop playsInline></video>
          </div>
        </div>

        <div className="sponsor-section">
          <div className="sponsor-bg">
            <img className="engineer-sponsor" src={sponsor1} alt="sponsor 1" />
            <img className="seds-sponsor" src={sponsor2} alt="sponsor 2" />
            <img className="aprg-sponsor" src={sponsor3} alt="sponsor 3" />
            <img className="rockaboo-sponsor" src={sponsor4} alt="sponsor 4" />
          </div>
        </div>
      </section>
    </>
  )

}