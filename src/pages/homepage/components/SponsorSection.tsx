import '../styles/SponsorSection.css';
import sponsor1 from '../../../assets/images/sponsors/sponsor-engineer.svg';
import sponsor2 from '../../../assets/images/sponsors/sponsor-sed-eeds.svg';
import sponsor3 from '../../../assets/images/sponsors/sponsor-ap!rg.svg';
import sponsor4 from '../../../assets/images/sponsors/sponsor-rockaboo.svg';
import sponsor5 from '../../../assets/images/sponsors/sponsor-nat.svg';
import sponsor6 from '../../../assets/images/sponsors/sponsor-wisest.svg';
import sponsor7 from '../../../assets/images/sponsors/sponsor-solid-works.svg';
import sponsor8 from '../../../assets/images/sponsors/sponsor-telus.svg';
import sponsor9 from '../../../assets/images/sponsors/sponsors-uofa.svg';

export function SponsorSection() {
  return (
    <>
      <div className="sponsor-section">
        <div className="sponsor-text">
          <p>Sponsors</p>
          <div className="line"></div>
        </div>
        <div aria-hidden="true" className="sponsors">
          <div className="sponsor-track">
            <img className="engineer-sponsor" src={sponsor1} alt="sponsor 1" />
            <img className="seds-sponsor" src={sponsor2} alt="sponsor 2" />
            <img className="aprg-sponsor" src={sponsor3} alt="sponsor 3" />
            <img className="rockaboo-sponsor" src={sponsor4} alt="sponsor 4" />
            <img className="nat-sponsor" src={sponsor5} alt="sponsor 5" />
            <img className="wisest-sponsor" src={sponsor6} alt="sponsor 6" />
            <img className="solid-work-sponsor" src={sponsor7} alt="sponsor 7" />
            <img className="telus-sponsor" src={sponsor8} alt="sponsor 8" />
            <img className="uofa-sponsor" src={sponsor9} alt="sponsor 9" />
            <img className="engineer-sponsor" src={sponsor1} alt="sponsor 1" />
            <img className="seds-sponsor" src={sponsor2} alt="sponsor 2" />
            <img className="aprg-sponsor" src={sponsor3} alt="sponsor 3" />
            <img className="rockaboo-sponsor" src={sponsor4} alt="sponsor 4" />
            <img className="nat-sponsor" src={sponsor5} alt="sponsor 5" />
            <img className="wisest-sponsor" src={sponsor6} alt="sponsor 6" />
            <img className="solid-work-sponsor" src={sponsor7} alt="sponsor 7" />
            <img className="telus-sponsor" src={sponsor8} alt="sponsor 8" />
            <img className="uofa-sponsor" src={sponsor9} alt="sponsor 9" />
          </div>
        </div>
      </div>
    </>
  )
}