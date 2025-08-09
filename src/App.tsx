import './App.css';
import './Theme.css';
import { Header } from './components/Header.tsx';
import { HomePage } from './pages/homepage/HomePage.tsx';
import { ProjectPage } from './pages/projectpage/ProjectPage.tsx';
import { Footer } from './components/Footer.tsx';
import { Routes, Route } from 'react-router';
import LogoImage from './assets/images/mswua-logo.svg';

function App() {

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={LogoImage} />
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
