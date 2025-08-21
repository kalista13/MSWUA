import './Header.css';
import '../Theme.css';
import { Link } from 'react-router-dom';
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/current-project/can-rgx-viii">Current Project</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/wip">Outreach</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}