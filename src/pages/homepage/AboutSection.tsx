import './AboutSection.css';
import aboutUsVid from '../../assets/videos/about-us.mp4';
import { SponsorSection } from './SponsorSection';

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

        <SponsorSection/>
      </section>
    </>
  )

}