import './App.css';
import './Theme.css';
import { Header } from './components/Header.tsx';
import { HomePage } from './pages/HomePage.tsx';
import LogoImage from './assets/images/mswua-logo.svg';

function App() {

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={LogoImage} />
      <Header/>
      <HomePage/>
    </>
  )
}

export default App
