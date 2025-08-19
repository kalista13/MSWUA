import './App.css';
import './Theme.css';
import { Header } from './components/Header.tsx';
import { HomePage } from './pages/homepage/components/HomePage.tsx';
import { ProjectPage } from './pages/projectpage/components/ProjectPage.tsx';
import { Footer } from './components/Footer.tsx';
import { Routes, Route } from 'react-router';
import LogoImage from './assets/images/mswua-logo.svg';
import {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { ProjectAbout } from './pages/projectpage/components/ProjectAbout.tsx';
import { AboutPage } from './pages/aboutpage/AboutPage.tsx';
import { WipPage } from './pages/wippage/WipPage.tsx';
import { TeamPage } from './pages/teampage/TeamPage.tsx';

function App() {
  const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant"})
    }, [pathname]);

    return null;
  };
  return (
    <>
      <ScrollToTop />
      <link rel="icon" type="image/svg+xml" href={LogoImage} />
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/projects/:slug" element={<ProjectAbout/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/wip" element={<WipPage/>}/>
        <Route path="/team" element={<TeamPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
