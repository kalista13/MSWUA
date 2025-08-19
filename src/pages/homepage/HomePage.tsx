import './HomePage.css';
import { LandingSection } from './LandingSection';
import { AboutSection } from './AboutSection';
import { EventSection } from './EventSection';
import { ExploreSection } from './ExploreSection';
import { SponsorSection } from './SponsorSection';

export function HomePage () {
  return (
    <>
      <LandingSection/>
      <AboutSection/>
      <SponsorSection/>
      <EventSection/>
      <ExploreSection/>
    </>
  )
}