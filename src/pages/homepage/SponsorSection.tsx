import sponsor1 from '../../assets/images/sponsors/sponsor-engineer.svg';
import sponsor2 from '../../assets/images/sponsors/sponsor-sed-eeds.svg';
import sponsor3 from '../../assets/images/sponsors/sponsor-ap!rg.svg';
import sponsor4 from '../../assets/images/sponsors/sponsor-rockaboo.svg';

export function SponsorSection() {
  return (
    <>
      <div className="sponsor-section">
        <div className="sponsor-text">
          <p>Sponsors</p>
          <div className="line"></div>
        </div>
        <div className="sponsors">
          <img className="engineer-sponsor" src={sponsor1} alt="sponsor 1" />
          <img className="seds-sponsor" src={sponsor2} alt="sponsor 2" />
          <img className="aprg-sponsor" src={sponsor3} alt="sponsor 3" />
          <img className="rockaboo-sponsor" src={sponsor4} alt="sponsor 4" />
        </div>
      </div>
    </>
  )
}