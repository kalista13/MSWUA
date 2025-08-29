import './Header.css';
import '../Theme.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import LogoImage from "../assets/images/mswua-logo.svg";
import { motion } from 'framer-motion';
import { headerContainer, fadeDown } from '../animations/animations';

export function Header() {

  const [opaque, setOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // change 50 to how far you want before it becomes opaque
        setOpaque(true);
      } else {
        setOpaque(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        className={opaque ? "opaque" : ""}
        variants={headerContainer}
        initial="hidden"
        animate="visible">
        <motion.img variants={fadeDown} src={LogoImage} alt="logo image" className="logo" />
        <nav>
          <motion.ul className="header-text">
            <motion.li variants={fadeDown}><NavLink 
              to="/" 
              className={({ isActive  }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </motion.li>
            <motion.li variants={fadeDown}><NavLink 
              to="/about" 
              className={({ isActive  }) => isActive ? "active" : ""}>
                About
              </NavLink>
            </motion.li>
            <motion.li variants={fadeDown}><NavLink 
              to="/team" 
              className={({ isActive  }) => isActive ? "active" : ""}>
                Team
              </NavLink>
            </motion.li>
            <motion.li variants={fadeDown}><NavLink 
              to="/current-project/can-rgx-viii"
              className={({ isActive  }) => isActive ? "active" : ""}
              >Current Project
              </NavLink>
            </motion.li>
            <motion.li variants={fadeDown}><NavLink 
              to="/projects"
              className={({ isActive  }) => isActive ? "active" : ""}
              >Projects
              </NavLink>
            </motion.li>
            <motion.li variants={fadeDown}><NavLink 
              to="/wip"
              className={({ isActive  }) => isActive ? "active" : ""}
              >Outreach
              </NavLink>
            </motion.li>
          </motion.ul>
        </nav>
      </motion.header>
    </>
  )
}