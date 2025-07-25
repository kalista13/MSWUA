import './HomePage.css';
import { LandingSection } from './LandingSection';
import { AboutSection } from './AboutSection';
import { EventSection } from './EventSection';
import { ExploreSection } from './ExploreSection';

export function HomePage () {
  return (
    <>
      <LandingSection/>
      <AboutSection/>
      <EventSection/>
      <ExploreSection/>
    </>
  )
}