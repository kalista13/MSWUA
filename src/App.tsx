import './App.css';
import './Theme.css';
import { Header } from './components/Header.tsx';
import { HomePage } from './pages/homepage/HomePage.tsx';
import { Footer } from './components/Footer.tsx';
import LogoImage from './assets/images/mswua-logo.svg';

function App() {

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={LogoImage} />
      <Header/>
      <HomePage/>
      <Footer/>
    </>
  )
}

export default App
