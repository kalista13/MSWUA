import "./Header.css";

export function Header() {
  return (
    <>
      <header>
        <div className="logo"></div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#current-project">Current Project</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#outreach">Outreach</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}