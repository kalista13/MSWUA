import './AboutSection.css';
import { useState, useEffect } from "react";
import {motion} from "framer-motion";
import {fadeUp} from '../../animations/animations';
import img1 from "../../assets/images/aboutus/photo1.png";
import img2 from "../../assets/images/aboutus/photo2.png";
import img3 from "../../assets/images/aboutus/photo3.png";
import img4 from "../../assets/images/aboutus/photo4.png";


export function AboutSection() {
  // Array of images for the slideshow
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about-section">
      <div className="content-wrapper">
        <div className="text-holder">
          <h2 className="about-header">About Us</h2>
          <motion.p {...fadeUp} className="about-text">
            Mission SpaceWalker (MSW) was established as a student club in 2022 and participated as the first all-women group in the Canadian Reduced Gravity Experiment (CAN-RGX). Whether they are floating in microgravity, experimenting on stratospheric balloons, or on their glacial analog mission,  the team works hard to propel Canadian space research and diversify the space industry.
          </motion.p>
        </div>

        <div className="image-holder">

          <div className="slideshow-content">
            <img
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className="slideshow-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
 