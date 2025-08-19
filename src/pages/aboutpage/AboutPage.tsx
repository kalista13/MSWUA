import './AboutPage.css';
import Logo from '../../assets/images/mswua-logo.svg';
import CanRgxVImage from '../../assets/images/photos/can-rgx-v/can-rgx-v-img-3.png';
import example1 from '../../assets/images/photos/can-rgx-viii/about-img.png';
import FadeTextDiv from '../../animations/fade-text-div';
import { motion } from "framer-motion";
import { fade, fadeUp } from "../../animations/animations.tsx";

export function AboutPage() {
  return (
    <>
      <section id="about-section">
        <h1>Our Purpose</h1>
        <h2 className ="about-h2">Who we are and why it matters</h2>

        <div className="about-boxes-section">
          <div className="about-box">
            <FadeTextDiv className="about-box-text">
              <motion.h2 variants={fade}>Who we are</motion.h2>
              <motion.h3 variants={fade}>
                Mission SpaceWalker is an interdisciplinary team of young women dedicated to advancing space research and increasing diversity in the aerospace and STEM industries, at the University of Alberta. Our projects blend engineering, science, and environmental research with a commitment to equity and innovation.
              </motion.h3>
            </FadeTextDiv>
          </div>
          <img src={Logo} alt="logo" />
          <img src={CanRgxVImage} alt="Can RGX V Image" />
          <div className="about-box">
            <FadeTextDiv className="about-box-text">
              <motion.h2 variants={fade}>What we've done</motion.h2>
              <motion.h3 variants={fade}>
                Past initiatives include the development of an electroadhesive climbing robot for the Canadian Reduced Gravity Experiment Design Challenge (CAN-RGX V), and our Glacial Analog Project, where we conduct fieldwork on the Athabasca Glacier to collect water samples and simulate extraterrestrial environments. We’re also collaborating with Rockaboo Mountain Adventures and Parks Canada to design a net-zero mobile research lab that supports sustainable field science.
              </motion.h3>
            </FadeTextDiv>
          </div>
          <div className="about-box">
            <FadeTextDiv className="about-box-text">
              <motion.h2 variants={fade}>What we're working on</motion.h2>
              <motion.h3 variants={fade}>
                Our latest project focuses on building a custom bioreactor to study how cyanobacteria behaves in microgravity, as part of the CAN-RGX VIII challenge. By investigating its growth and survival in space-like conditions, we aim to contribute to future life-support systems and closed-loop habitats for long-duration missions.
              </motion.h3>
            </FadeTextDiv>
          </div>
          <img src={example1} alt="Can RGX V Image" />
        </div>

        <h1 className="matters-text">Why it matters</h1>
        <motion.p {...fadeUp}>
          Through our work, MissionSpaceWalker strives not only to contribute to meaningful scientific discovery, but also to inspire the next generation of women in STEM, proving that space exploration is for everyone.
        </motion.p>
      </section>
    
    </>
  )
}