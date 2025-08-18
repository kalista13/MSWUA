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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
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