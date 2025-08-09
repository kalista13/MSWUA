import './Header.css';
import '../Theme.css';
import { Link } from 'react-router-dom';
import LogoImage from "../assets/images/mswua-logo.svg";

export function Header() {
  return (
    <>
      <header>
        <nav>
          <ul className="header-text">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#current-project">Current Project</a></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="#outreach">Outreach</a></li>
          </ul>
        </nav>
        <img src={LogoImage} alt="logo image" className="logo" />
      </header>
    </>
  )
}