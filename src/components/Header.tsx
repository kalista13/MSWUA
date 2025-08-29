import './Header.css';
import '../Theme.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import LogoImage from "../assets/images/mswua-logo.svg";

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
      <header className={opaque ? "opaque" : ""}>
        <img src={LogoImage} alt="logo image" className="logo" />
        <nav>
          <ul className="header-text">
            <li><NavLink 
              to="/" 
              className={({ isActive  }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>
            <li><NavLink 
              to="/about" 
              className={({ isActive  }) => isActive ? "active" : ""}>
                About
              </NavLink>
            </li>
            <li><NavLink 
              to="/team" 
              className={({ isActive  }) => isActive ? "active" : ""}>
                Team
              </NavLink>
            </li>
            <li><NavLink 
              to="/current-project/can-rgx-viii"
              className={({ isActive  }) => isActive ? "active" : ""}
              >Current Project
              </NavLink>
            </li>
            <li><NavLink 
              to="/projects"
              className={({ isActive  }) => isActive ? "active" : ""}
              >Projects
              </NavLink>
            </li>
            <li><NavLink 
              to="/wip"
              className={({ isActive  }) => isActive ? "active" : ""}
              >Outreach
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}